import type { Circle } from "@Models/Circle";

export interface ICircleRepository {
  list(): Promise<Circle.Records>;
  delete(id: number): Promise<Circle.Entity>;
  create(params: Circle.CreateParams): Promise<Circle.Entity>;
  update(id: number, params: Circle.UpdateParams): Promise<Circle.Entity>;
  findById(id: number): Promise<Circle.Nullable>;
  findByName(name: string): Promise<Circle.Nullable>;
  addMember(userId: number, roleId: number, circleId: number): Promise<void>;
  removeMember(userId: number, circleId: number): Promise<void>;
};