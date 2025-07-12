import { PrismaClient } from "generated/prisma";

export class UserRepository {
  constructor(private readonly prisma: PrismaClient) {};

  public async list() {
    return this.prisma.user.findMany();
  };

  public async findById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  };

  public async findByName(name: string) {
    return this.prisma.user.findUnique({ where: { name } });
  };

  public async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  };
};