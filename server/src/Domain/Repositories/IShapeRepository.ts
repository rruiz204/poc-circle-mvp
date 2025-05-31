import type { Shape } from "@Models/Shape";

export interface IShapeRepository {
  list(): Promise<Shape.Records>;
  findById(id: number): Promise<Shape.Nullable>;
  findByName(name: string): Promise<Shape.Nullable>;
};