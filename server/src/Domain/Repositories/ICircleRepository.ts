import type { Circle } from "@Models/Circle";

export interface ICircleRepository {
  list(): Promise<Circle.Records>;
  findById(id: number): Promise<Circle.Nullable>;
  findByName(name: string): Promise<Circle.Nullable>;
};