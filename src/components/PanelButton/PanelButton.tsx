import { useSetAtom } from "jotai";
import { panelOpenAtom } from "../../state/atoms";
import styles from "./PanelButton.module.css";

export function PanelButton() {
  const setPanelOpen = useSetAtom(panelOpenAtom);
  return (
    <button className={styles.container} onClick={() => setPanelOpen(true)}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2.5l1.9 5.1 5.1 1.9-5.1 1.9L12 16.5l-1.9-5.1L5 9.5l5.1-1.9L12 2.5z" />
        <path d="M18.5 14l.9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9.9-2.4z" />
      </svg>
      <span>Abrir IA</span>
    </button>
  );
}
