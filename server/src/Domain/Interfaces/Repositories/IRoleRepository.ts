import type { Role } from "@Models/Role";

export interface IRoleRepository {
  list(): Promise<Role.Records>;
  findById(id: number): Promise<Role.Nullable>;
  findByName(name: string): Promise<Role.Nullable>;
};