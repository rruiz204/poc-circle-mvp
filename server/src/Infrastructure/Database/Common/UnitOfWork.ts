import { injectable } from "inversify";
import { PrismaClient } from "generated/prisma";

import { UserRepository } from "@Repositories/UserRepository";
import { RoleRepository } from "@Repositories/RoleRepository";
import { ScopeRepository } from "@Repositories/ScopeRepository";

import type { IUserRepository } from "@Repositories/IUserRepository";
import type { IRoleRepository } from "@Repositories/IRoleRepository";
import type { IScopeRepository } from "@Repositories/IScopeRepository";

@injectable()
export class UnitOfWork {
  public user:IUserRepository;
  public role: IRoleRepository;
  public scope: IScopeRepository;

  constructor(context: PrismaClient) {
    this.user = new UserRepository(context);
    this.role = new RoleRepository(context);
    this.scope = new ScopeRepository(context);
  };
};