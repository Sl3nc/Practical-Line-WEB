import { useAtom } from "jotai";
import { panelOpenAtom } from "../../state/atoms";
import styles from "./AiPanel.module.css";
import { useEffect, useRef } from "react";

export function IAPanel() {
  const dialogRef = useRef<HTMLDialogElement>(null);
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
      <form method="dialog">
        <input />
      </form>
    </dialog>
  );
}
