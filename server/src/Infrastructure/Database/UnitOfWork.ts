import { injectable, inject } from "inversify";
import { PrismaClient } from "generated/prisma";
import { UserRepository } from "@Repositories/UserRepository";

@injectable()
export class UnitOfWork {
  public readonly user: UserRepository;

  constructor(@inject(PrismaClient) prisma: PrismaClient) {
    this.user = new UserRepository(prisma);
  };
};
