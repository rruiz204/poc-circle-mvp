import type { Space } from "@Models/Space";

export interface ISpaceRepository {
  list(): Promise<Space.Records>;
  findById(id: number): Promise<Space.Nullable>;
};