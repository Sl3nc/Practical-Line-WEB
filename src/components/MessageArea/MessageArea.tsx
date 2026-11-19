import type { Message } from "../../models/Message";
import { MessageWrapper } from "../MessageBubble/MessageWrapper";
import styles from "./MessageArea.module.css";

export const MessageArea = ({ messages }: { messages: Message[] }) => {
  return (
    <div className={styles.container}>
      {messages.map((message) => (
        <MessageWrapper message={message} key={message.id} />
      ))}
      ...
    </div>
  );
};
