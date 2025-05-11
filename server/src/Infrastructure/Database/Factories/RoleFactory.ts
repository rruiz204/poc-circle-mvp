import { faker } from "@faker-js/faker";
import type { Role } from "@Models/Role";

export class RoleFactory {
  public static async buidl(role: Role.Optional): Promise<Role.Entity> {
    return {
      id: role.id || faker.number.int({ min: 1, max: 100 }),
      name: role.name || faker.helpers.arrayElement(["admin", "member", "owner", "guest"]),
      description: role.description || faker.lorem.lines({ min: 1, max: 2 }),
      createdAt: role.createdAt || faker.date.anytime(),
      updatedAt: role.updatedAt || faker.date.anytime(),
    };
  };
};