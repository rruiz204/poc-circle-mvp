import type { UserDTO } from "./UserDTO";

export interface CircleDTO {
  id: number;
  name: string;
  description: string;
  members: UserDTO[];
};