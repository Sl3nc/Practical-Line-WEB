import type { Message } from "../../models/Message";
import { Role } from "../../models/RoleEnum";
import styles from "./MessageWrapper.module.css";

export const MessageWrapper = ({ message }: { message: Message }) => {
  const isHuman = message.role === Role.Human;
  return (
    <div className={isHuman ? `${styles.message} ${styles.human}` : `${styles.message} ${styles.ai}`}>
      {message.content}
    </div>
  );
};
