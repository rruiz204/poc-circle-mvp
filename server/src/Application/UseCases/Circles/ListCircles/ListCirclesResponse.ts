import type { UserDTO } from "@DTOs/UserDTO";
import type { CircleDTO } from "@DTOs/CircleDTO";

export interface ListCirclesResponse extends CircleDTO {
  members: UserDTO[];
};