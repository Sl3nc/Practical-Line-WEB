import { useState, type Dispatch, type SetStateAction } from "react";
import styles from "./PanelForm.module.css";

export const PanelForm = ({
  setMessageTuple,
}: {
  setMessageTuple: Dispatch<SetStateAction<string[]>>;
  }) => {

  const [text, setText] = useState<string>('')
  
  return (
    <form method="dialog" className={styles.row}>
      <input className={styles.textInput} onChange={(v)=> setText(v.target.value)}/>
      <button
        className={styles.submitButton}
        onClick={(e) => {
          e.preventDefault();
          setMessageTuple((c) => c.concat([text]));
        }}
      >
        Enviar
      </button>
    </form>
  );
};
