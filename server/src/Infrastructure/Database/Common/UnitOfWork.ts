import { PrismaClient } from "generated/prisma";
import { injectable } from "inversify";

import { UserRepository } from "@Repositories/UserRepository";
import { RoleRepository } from "@Repositories/RoleRepository";
import { ScopeRepository } from "@Repositories/ScopeRepository";

@injectable()
export class UnitOfWork {
  public user: UserRepository;
  public role: RoleRepository;
  public scope: ScopeRepository;

  constructor(context: PrismaClient) {
    this.user = new UserRepository(context);
    this.role = new RoleRepository(context);
    this.scope = new ScopeRepository(context);
  };
};