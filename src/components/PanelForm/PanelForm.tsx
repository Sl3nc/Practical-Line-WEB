import type { Dispatch, SetStateAction } from "react";
import styles from "./PanelForm.module.css";

export const PanelForm = ({
  setMessageTuple,
}: {
  setMessageTuple: Dispatch<SetStateAction<string[]>>;
}) => {
  return (
    <form method="dialog" className={styles.row}>
      <input className={styles.textInput} />
      <button
        className={styles.submitButton}
        onClick={(e) => {
          e.preventDefault();
          setMessageTuple((c) => c.concat(["oi"]));
        }}
      >
        Enviar
      </button>
    </form>
  );
};
