import { injectable } from "inversify";
import { PrismaClient } from "generated/prisma";

import { UserRepository } from "@Repositories/UserRepository";
import { RoleRepository } from "@Repositories/RoleRepository";
import { ScopeRepository } from "@Repositories/ScopeRepository";
import { CircleRepository } from "@Repositories/CircleRepository";

@injectable()
export class UnitOfWork {
  public user: UserRepository;
  public role: RoleRepository;
  public scope: ScopeRepository;
  public circle: CircleRepository;

  constructor(context: PrismaClient) {
    this.user = new UserRepository(context);
    this.role = new RoleRepository(context);
    this.scope = new ScopeRepository(context);
    this.circle = new CircleRepository(context);
  };
};