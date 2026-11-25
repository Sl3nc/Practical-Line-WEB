import {
  useState,
  type Dispatch,
  type FormEvent,
  type RefObject,
  type SetStateAction,
} from "react";
import styles from "./PanelForm.module.css";
import { Message } from "../../models/Message";
import { Role } from "../../models/RoleEnum";
import { useAtom } from "jotai";
import { lodingInferenceAtom } from "../../state/atoms";

export const PanelForm = ({
  setMessageTuple,
  inputRef,
}: {
  setMessageTuple: Dispatch<SetStateAction<Message[]>>;
  inputRef: RefObject<HTMLInputElement | null>;
}) => {
  const [text, setText] = useState<string>("");
  const [loadingInferece, setLoadingInferece] = useAtom(lodingInferenceAtom);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = text.trim();
    if (!content || loadingInferece) return;

    setMessageTuple((c) => c.concat([new Message(Role.Human, content)]));
    setText("");
    setLoadingInferece(true);
    inputRef.current?.focus();
  };

  return (
    <form className={styles.row} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className={styles.textInput}
        onChange={(v) => setText(v.target.value)}
        value={text}
        placeholder="Escreva sua dúvida..."
        aria-label="Mensagem para o assistente"
      />
      <button
        type="submit"
        className={styles.submitButton}
        disabled={loadingInferece || text.trim() === ""}
      >
        Enviar
      </button>
    </form>
  );
};
