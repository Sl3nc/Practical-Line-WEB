import { useAtom } from "jotai";
import { panelOpenAtom } from "../../state/atoms";
import styles from "./PanelButton.module.css";

export function PanelButton() {
  const [panelOpen, setPanelOpen] = useAtom(panelOpenAtom);
  return (
    <button className={styles.container} onClick={() => setPanelOpen(!panelOpen)}>
      Abrir IA
    </button>
  );
}
