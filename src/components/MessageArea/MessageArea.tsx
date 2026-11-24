import { useEffect, useRef } from "react";
import { useAtomValue } from "jotai";
import type { Message } from "../../models/Message";
import { MessageWrapper } from "../MessageBubble/MessageWrapper";
import styles from "./MessageArea.module.css";
import { lodingInferenceAtom } from "../../state/atoms";

const STICK_THRESHOLD = 80;

export const MessageArea = ({ messages }: { messages: Message[] }) => {
  const loadingInferece = useAtomValue(lodingInferenceAtom);
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const stickToBottomRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const distance =
        container.scrollHeight - container.scrollTop - container.clientHeight;
      stickToBottomRef.current = distance <= STICK_THRESHOLD;
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!stickToBottomRef.current) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length, loadingInferece]);

  return (
    <div className={styles.container} ref={containerRef}>
      {messages.length === 0 && !loadingInferece && (
        <p className={styles.emptyState}>
          Envie uma mensagem para começar a conversar com o assistente.
        </p>
      )}
      {messages.map((message) => (
        <MessageWrapper message={message} key={message.id} />
      ))}
      {loadingInferece && (
        <div className={styles.typing} role="status" aria-label="Assistente digitando">
          <span />
          <span />
          <span />
        </div>
      )}
      <div ref={bottomRef} className={styles.bottomSpacer} />
    </div>
  );
};
