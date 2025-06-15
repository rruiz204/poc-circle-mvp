import { Seeder } from "./Seeder";
import { Scope } from "@Models/Scope";
import { PrismaClient } from "generated/prisma";

export class ScopeSeeder extends Seeder {
  constructor(prisma: PrismaClient) {
    super(prisma);
  };

  public async seed(): Promise<void> {
    await this.upsert(Scopes);
    await this.remove(Scopes);
  };

  private async upsert(scopes: Scope.CreateParams[]): Promise<void> {
    for (const scope of scopes) {
      await this.prisma.scope.upsert({
        where: { name: scope.name },
        update: { description: scope.description },
        create: { name: scope.name, description: scope.description },
      });
    };
  };

  private async remove(scopes: Scope.CreateParams[]): Promise<void> {
    const names = scopes.map(scope => scope.name);
    await this.prisma.scope.deleteMany({
      where: { name: { notIn: names } }
    });
  };
};

const Scopes: Scope.CreateParams[] = [];