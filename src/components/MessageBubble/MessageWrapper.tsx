import type { Message } from "../../models/Message";
import { Role } from "../../models/RoleEnum";

export const MessageWrapper = ({ message }: { message: Message }) => {
  return (
    <>
      {message.role == Role.Human && <div>Human: {message.content}</div>}{" "}
      {message.role == Role.AI && <div>IA: {message.content}</div>}
    </>
  );
};
