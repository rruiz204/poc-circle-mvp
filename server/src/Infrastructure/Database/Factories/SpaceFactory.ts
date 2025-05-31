import { faker } from "@faker-js/faker";
import type { Space } from "@Models/Space";

export class SpaceFactory {
  public static async build(space: Space.Optional): Promise<Space.Entity> {
    return {
      id: space.id || faker.number.int({ min: 1, max: 100 }),
      name: space.name || faker.lorem.words({ min: 1, max: 3 }),
      shapeId: space.shapeId || faker.number.int({ min: 1, max: 100 }),
      createdAt: space.createdAt || faker.date.anytime(),
      updatedAt: space.updatedAt || faker.date.anytime(),
    };
  }
}