import { faker } from "@faker-js/faker";
import type { Permission } from "@Models/Permission";

export class PermissionFactory {
  public static async build(permission: Permission.Optional): Promise<Permission.Entity> {
    return {
      id: permission.id || faker.number.int({ min: 1, max: 100 }),
      name: permission.name || faker.helpers.arrayElement(["project:create", "project:view"]),
      description: permission.description || faker.lorem.lines({ min: 1, max: 2 }),
      createdAt: permission.createdAt || faker.date.anytime(),
      updatedAt: permission.updatedAt || faker.date.anytime(),
    };
  };
};