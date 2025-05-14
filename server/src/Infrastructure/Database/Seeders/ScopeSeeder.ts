import { Seeder } from "./Seeder";
import { PrismaClient } from "generated/prisma";
import type { Scope as Model } from "@Models/Scope";
import { Scopes } from "@Database/Common/Data/Scopes";

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
        where: { name: scope.name },
        update: { description: scope.description },
        create: { name: scope.name, description: scope.description },
      });
    };
  };

  private async remove(scopes: Model.CreateParams[]): Promise<void> {
    const names = scopes.map(scope => scope.name);
    await this.context.scope.deleteMany({
      where: { name: { notIn: names } }
    });
  };
};