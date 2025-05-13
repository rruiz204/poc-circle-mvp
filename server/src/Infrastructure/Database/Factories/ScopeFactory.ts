import { faker } from "@faker-js/faker";
import type { Scope } from "@Models/Scope";

export class ScopeFactory {
  public static async build(scope: Scope.Optional): Promise<Scope.Entity> {
    return {
      id: scope.id || faker.number.int({ min: 1, max: 100 }),
      name: scope.name || faker.helpers.arrayElement(["project:create", "project:view"]),
      description: scope.description || faker.lorem.lines({ min: 1, max: 2 }),
      createdAt: scope.createdAt || faker.date.anytime(),
      updatedAt: scope.updatedAt || faker.date.anytime(),
    };
  };
};