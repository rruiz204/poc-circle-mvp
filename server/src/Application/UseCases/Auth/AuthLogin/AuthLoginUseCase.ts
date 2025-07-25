import type { AuthDTO } from "@DTOs/AuthDTO";
import type { UseCase } from "@UseCases/UseCase";
import type { AuthLoginCommand } from "./AuthLoginCommand";

import { inject, injectable } from "inversify";
import { PrismaClient } from "generated/prisma";

import { AuthLoginSchema } from "./AuthLoginSchema";
import { TokenService } from "@Services/Token/TokenService";
import { LogicException } from "@Exceptions/LogicException";
import { BcryptService } from "@Services/Bcrypt/BcryptService";

@injectable()
export class AuthLoginUseCase implements UseCase<AuthLoginCommand, AuthDTO> {
  constructor(@inject(PrismaClient) private readonly prisma: PrismaClient) {};
  
  public async execute(command: AuthLoginCommand): Promise<AuthDTO> {
    const validated = await AuthLoginSchema.validate(command);

    const existing = await this.prisma.user.findFirst({ where: { email: validated.email } });
    if (!existing) throw new LogicException.NotFound("User not found");

    const verified = await BcryptService.compare(validated.password, existing.password);
    if (!verified) throw new LogicException.BadCredentials("Invalid credentials");

    const token = await TokenService.sign({ user: existing.id, expi: "30m" });
    return { type: "Bearer", token };
  };
};