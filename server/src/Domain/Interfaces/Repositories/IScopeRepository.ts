import type { Scope } from "@Models/Scope";

export interface IScopeRepository {
  list(): Promise<Scope.Records>;
  findById(id: number): Promise<Scope.Nullable>;
  findByName(name: string): Promise<Scope.Nullable>;
};