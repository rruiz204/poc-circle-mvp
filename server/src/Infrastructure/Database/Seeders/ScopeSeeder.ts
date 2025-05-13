import { Seeder } from "./Seeder";
import { Scopes } from "@Database/Data/Scopes";
import { PrismaClient } from "generated/prisma";
import type { Scope as Model } from "@Models/Scope";

export class ScopeSeeder extends Seeder {
  constructor(context: PrismaClient) {
    super("scope-seeder", context);
  };

  public async seed(): Promise<void> {
    await this.upsert(Scopes);
    await this.remove(Scopes);
  };

  private async upsert(scopes: Model.CreateParams[]): Promise<void> {
    for (const scope of scopes) {
      await this.context.scope.upsert({
        update: {
          description: scope.description
        },
        where: {
          name: scope.name
        },
        create: {
          name: scope.name,
          description: scope.description,
        },
      });
    };
  };

  private async remove(scopes: Model.CreateParams[]): Promise<void> {
    const existings = await this.context.scope.findMany();
    const names = scopes.map(scope => scope.name);

    for (const existing of existings) {
      if (!names.includes(existing.name)) {
        await this.context.scope.delete({
          where: { name: existing.name }
        });
      };
    };
  };
};