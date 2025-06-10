import { Seeder } from "./Seeder";
import { Role } from "@Models/Role";
import { PrismaClient } from "generated/prisma";

export class RoleSeeder extends Seeder {
  constructor(context: PrismaClient) {
    super(context);
  };

  public async seed(): Promise<void> {
    await this.upsert(Roles);
    await this.remove(Roles);
  };

  private async upsert(roles: Role.CreateParams[]): Promise<void> {
    for (const role of roles) {
      await this.context.role.upsert({
        where: { name: role.name },
        update: { description: role.description },
        create: { name: role.name, description: role.description },
      });
    };
  };

  private async remove(roles: Role.CreateParams[]): Promise<void> {
    const names = roles.map(role => role.name);
    await this.context.role.deleteMany({
      where: { name: { notIn: names } }
    });
  };
};

const Roles: Role.CreateParams[] = [
  {
    name: Role.Enum.OWNER,
    description: "User with full control over the circle, can manage members and settings."
  },
  {
    name: Role.Enum.MODER,
    description: "User with permissions to moderate and manage members, but without full control."
  },
  {
    name: Role.Enum.MEMBER,
    description: "Regular user, can participate in the circle but with limited permissions."
  },
];