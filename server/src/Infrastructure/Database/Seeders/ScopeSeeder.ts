import { Seeder } from "./Seeder";
import { Scope } from "@Models/Scope";
import { PrismaClient } from "generated/prisma";

export class ScopeSeeder extends Seeder {
  constructor(context: PrismaClient) {
    super("scope-seeder", context);
  };

  public async seed(): Promise<void> {
    await this.upsert(Scopes);
    await this.remove(Scopes);
  };

  private async upsert(scopes: Scope.CreateParams[]): Promise<void> {
    for (const scope of scopes) {
      await this.context.scope.upsert({
        where: { name: scope.name },
        update: { description: scope.description },
        create: { name: scope.name, description: scope.description },
      });
    };
  };

  private async remove(scopes: Scope.CreateParams[]): Promise<void> {
    const names = scopes.map(scope => scope.name);
    await this.context.scope.deleteMany({
      where: { name: { notIn: names } }
    });
  };
};

const Scopes: Scope.CreateParams[] = [
  {
    name: Scope.Enum.ALL_TASKS,
    description: "Grants full access to all task-related actions",
  },
  {
    name: Scope.Enum.EDIT_TASKS,
    description: "Allows the user to edit existing tasks information",
  },
  {
    name: Scope.Enum.STATUS_TASKS,
    description: "Allows the user to change the status of tasks",
  },
  {
    name: Scope.Enum.ASSING_TASKS,
    description: "Allows the user to assign tasks to team members",
  },
  {
    name: Scope.Enum.CREATE_TASKS,
    description: "Allows the user to create new tasks within projects",
  },
  {
    name: Scope.Enum.DELETE_TASKS,
    description: "Allows the user to delete existing tasks",
  },
  {
    name: Scope.Enum.COMMENT_TASKS,
    description: "Allows the user to comment on tasks",
  },
  {
    name: Scope.Enum.VIEW_TASKS,
    description: "Allows the user to view all tasks within projects",
  },
];