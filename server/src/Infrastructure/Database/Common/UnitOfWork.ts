import { injectable } from "inversify";
import { PrismaClient } from "generated/prisma";

import { UserRepository } from "@Repositories/UserRepository";
import { RoleRepository } from "@Repositories/RoleRepository";
import { ScopeRepository } from "@Repositories/ScopeRepository";
import { CircleRepository } from "@Repositories/CircleRepository";

import type { IUserRepository } from "@Repositories/IUserRepository";
import type { IRoleRepository } from "@Repositories/IRoleRepository";
import type { IScopeRepository } from "@Repositories/IScopeRepository";
import type { ICircleRepository } from "@Repositories/ICircleRepository";

@injectable()
export class UnitOfWork {
  public user:IUserRepository;
  public role: IRoleRepository;
  public scope: IScopeRepository;
  public circle: ICircleRepository;

  constructor(context: PrismaClient) {
    this.user = new UserRepository(context);
    this.role = new RoleRepository(context);
    this.scope = new ScopeRepository(context);
    this.circle = new CircleRepository(context);
  };
};