import type { Role } from "./RoleEnum";

export class Message {
  role: Role;
  content: string;
  id: string;

  constructor(role: Role, content: string) {
    this.role = role;
    this.content = content;
    this.id = self.crypto.randomUUID();
  }
}
