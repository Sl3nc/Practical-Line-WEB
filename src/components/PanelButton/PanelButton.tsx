import { useSetAtom } from "jotai";
import { panelOpenAtom } from "../../state/atoms";
import styles from "./PanelButton.module.css";

export function PanelButton() {
  const setPanelOpen = useSetAtom(panelOpenAtom);
  return (
    <button className={styles.container} onClick={() => setPanelOpen(true)}>
      Abrir IA
    </button>
  );
}
