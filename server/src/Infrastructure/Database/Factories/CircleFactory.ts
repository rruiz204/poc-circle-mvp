import { faker } from "@faker-js/faker";
import type { Circle } from "@Models/Circle";

export class CircleFactory {
  public static async build(circle: Circle.Optional): Promise<Circle.Entity> {
    return {
      id: circle.id || faker.number.int({ min: 1, max: 100 }),
      name: circle.name || faker.lorem.words({ min: 1, max: 3 }),
      description: circle.description || faker.lorem.lines({ min: 1, max: 2 }),
      createdAt: circle.createdAt || faker.date.anytime(),
      updatedAt: circle.updatedAt || faker.date.anytime(),
    };
  };
};