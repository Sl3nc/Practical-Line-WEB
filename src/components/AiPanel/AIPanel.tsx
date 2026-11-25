import { useAtom } from "jotai";
import { lodingInferenceAtom, panelOpenAtom } from "../../state/atoms";
import styles from "./AiPanel.module.css";
import { useEffect, useRef, useState } from "react";
import { MessageArea } from "../MessageArea/MessageArea";
import { PanelForm } from "../PanelForm/PanelForm";
import { Message } from "../../models/Message";
import { Role } from "../../models/RoleEnum";

const ROLE_BY_SENDER: Record<Role, "user" | "assistant"> = {
  [Role.Human]: "user",
  [Role.AI]: "assistant",
};

class ChatRequestError extends Error {}

export function IAPanel() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [messagesTuple, setMessageTuple] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loadingInferece, setLoadingInferece] = useAtom(lodingInferenceAtom);

  const [panelOpen, setPanelOpen] = useAtom(panelOpenAtom);

  useEffect(() => {
    if (dialogRef.current != null) {
      if (panelOpen) {
        dialogRef.current.showModal();
        inputRef.current?.focus();
      } else {
        dialogRef.current.close();
      }
    }
  }, [panelOpen]);

  useEffect(() => {
    if (!loadingInferece) return;

    const controller = new AbortController();
    setError(null);

    const requestReply = async () => {
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: messagesTuple.map((message) => ({
              role: ROLE_BY_SENDER[message.role],
              content: message.content,
            })),
          }),
          signal: controller.signal,
        });

        const data: { content?: string; error?: string } = await response
          .json()
          .catch(() => ({}));

        if (!response.ok || typeof data.content !== "string") {
          throw new ChatRequestError(
            data.error ?? "O assistente não conseguiu responder.",
          );
        }

        const content = data.content;

        setMessageTuple((current) =>
          current.concat([new Message(Role.AI, content)]),
        );
      } catch (requestError) {
        if (controller.signal.aborted) return;
        setError(
          requestError instanceof ChatRequestError
            ? requestError.message
            : "Não foi possível obter resposta do assistente.",
        );
      } finally {
        if (!controller.signal.aborted) setLoadingInferece(false);
      }
    };

    requestReply();

    return () => controller.abort();
  }, [loadingInferece]);

  return (
    <dialog
      className={styles.container}
      ref={dialogRef}
      onClose={() => setPanelOpen(false)}
    >
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Assistente IA</h2>
            <p className={styles.subtitle}>Tire dúvidas sobre os exercícios</p>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setPanelOpen(false)}
            aria-label="Fechar painel"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <MessageArea messages={messagesTuple} />
        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}
        <PanelForm setMessageTuple={setMessageTuple} inputRef={inputRef} />
      </div>
    </dialog>
  );
}
