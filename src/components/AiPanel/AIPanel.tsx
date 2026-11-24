import { useAtom } from "jotai";
import { lodingInferenceAtom, panelOpenAtom } from "../../state/atoms";
import styles from "./AiPanel.module.css";
import { useEffect, useRef, useState } from "react";
import { MessageArea } from "../MessageArea/MessageArea";
import { PanelForm } from "../PanelForm/PanelForm";
import { Message } from "../../models/Message";
import { Role } from "../../models/RoleEnum";

export function IAPanel() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [messagesTuple, setMessageTuple] = useState<Message[]>([]);
  const [loadingInferece, setLoadingInferece] = useAtom(lodingInferenceAtom);

  const [panelOpen, setPanelOpen] = useAtom(panelOpenAtom);

  useEffect(() => {
    if (dialogRef.current != null) {
      if (panelOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [panelOpen]);

  useEffect(() => {
    if (loadingInferece) {
      // const result = await fetch(input);
      // messagesTuple[messagesTuple.length - 1]; // Ultima mensagem

      setMessageTuple((c) => c.concat([new Message(Role.AI, 'teste')]));
      setLoadingInferece(false)
    }
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
        <PanelForm setMessageTuple={setMessageTuple} />
      </div>
    </dialog>
  );
}
