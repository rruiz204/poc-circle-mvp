import { faker } from "@faker-js/faker";
import type { Shape } from "@Models/Shape";

export class ShapeFactory {
  public static async build(shape: Shape.Optional): Promise<Shape.Entity> {
    return {
      id: shape.id || faker.number.int({ min: 1, max: 100 }),
      name: shape.name || faker.helpers.arrayElement(["circle", "looop", "vandal"]),
      ownerId: shape.ownerId || faker.number.int({ min: 1, max: 100 }),
      createdAt: shape.createdAt || faker.date.anytime(),
      updatedAt: shape.updatedAt || faker.date.anytime(),
    };
  };
};