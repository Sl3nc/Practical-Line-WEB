import { useAtomValue } from "jotai";
import { panelOpenAtom } from "../../state/atoms";
import styles from "./AiPanel.module.css";

export function IAPanel() {
  const panelOpen = useAtomValue(panelOpenAtom);
  return <aside className={styles.container} data-open={panelOpen} >Oi</aside>;
}
