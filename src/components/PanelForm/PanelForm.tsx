import { useState, type Dispatch, type SetStateAction } from "react";
import styles from "./PanelForm.module.css";
import { Message } from "../../models/Message";
import { Role } from "../../models/RoleEnum";

export const PanelForm = ({
  setMessageTuple,
}: {
  setMessageTuple: Dispatch<SetStateAction<Message[]>>;
}) => {
  const [text, setText] = useState<string>("");

  return (
    <form method="dialog" className={styles.row}>
      <input
        className={styles.textInput}
        onChange={(v) => setText(v.target.value)}
        value={text}
      />
      <button
        className={styles.submitButton}
        onClick={(e) => {
          e.preventDefault();
          setMessageTuple((c) => c.concat([new Message(Role.Human, text)]));
        }}
      >
        Enviar
      </button>
    </form>
  );
};
