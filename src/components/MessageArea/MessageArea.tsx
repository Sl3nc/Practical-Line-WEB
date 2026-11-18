import styles from "./MessageArea.module.css";

export const MessageArea = ({ messages }: { messages: string[] }) => {
  return (
    <div className={styles.container}>
      {messages.map((user, ai) => (
        <>
          <div>{user}</div>
          {ai && <div>{ai}</div>}
        </>
      ))}
    </div>
  );
};
