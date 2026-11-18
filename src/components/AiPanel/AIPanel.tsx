import { useAtom } from "jotai";
import { panelOpenAtom } from "../../state/atoms";
import styles from "./AiPanel.module.css";
import { useEffect, useRef, useState } from "react";
import { MessageArea } from "../MessageArea/MessageArea";
import { PanelForm } from "../PanelForm/PanelForm";

export function IAPanel() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [messagesTuple, setMessageTuple] = useState<string[]>([]);

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

  return (
    <dialog
      className={styles.container}
      ref={dialogRef}
      onClose={() => setPanelOpen(false)}
    >
      <div className={styles.content}>
      <MessageArea messages={messagesTuple} />
        <PanelForm setMessageTuple={setMessageTuple} />
      </div>
    </dialog>
  );
}
