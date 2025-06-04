import { RBAC } from "@Security/RBAC";
import type { Command } from "./Command";
import { Context } from "@Database/Common/Context";
import { Inversify } from "@Containers/Inversify";
import { UnitOfWork } from "@Database/Common/UnitOfWork";

export class SyncScopes implements Command {
  constructor(private uow: UnitOfWork) {};

  public async run(): Promise<void> {
    await Context.roleScope.deleteMany();

    for (const role in RBAC) {
      const existRole = await this.uow.role.findByName(role);
      if (!existRole) return;

      const scopes = RBAC[role];
      
      /* for (const scope of scopes) {
        const existScope = await this.uow.scope.findByName(scope);
        if (!existScope) return;

        await Context.roleScope.create({
          data: {
            roleId: existRole.id,
            scopeId: existScope.id,
          },
        });
      }; */
    };

    console.log("=== scopes synchronized ===");
  };
};

const command = new SyncScopes(Inversify.get(UnitOfWork));
await command.run();