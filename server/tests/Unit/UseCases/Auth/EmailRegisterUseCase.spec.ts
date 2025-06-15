import { describe, expect, it, vi } from "vitest";

import { PrismaClient } from "generated/prisma";
import { Inversify } from "@Containers/Inversify";

import { JwtService } from "@Services/Tokens/JwtService";
import { LogicException } from "@Exceptions/LogicException";
import { BcryptService } from "@Services/Password/BcryptService";

import { EmailRegisterUseCaseFixture as Fixture } from "./EmailRegisterUseCaseFixture";
import { EmailRegisterUseCase } from "@UseCases/Auth/EmailRegister/EmailRegisterUseCase";

describe("simple register use case", () => {
  const prisma = Inversify.get(PrismaClient);
  const useCase = Inversify.get(EmailRegisterUseCase);

  it("should register a new user", async () => {
    vi.spyOn(BcryptService, "hash").mockResolvedValue("fake hash");
    vi.spyOn(JwtService, "sign").mockResolvedValue("fake token");

    vi.spyOn(prisma.user, "findUnique").mockResolvedValue(null);
    vi.spyOn(prisma.user, "create").mockResolvedValue(Fixture.user1);

    const auth = await useCase.execute(Fixture.command);
    expect(auth.token).toEqual("fake token");
    expect(BcryptService.hash).toHaveBeenCalledWith(Fixture.command.password);
  });

  it("should throw Redundancy", async () => {
    vi.spyOn(prisma.user, "findUnique").mockResolvedValue(Fixture.user1);
    await expect(useCase.execute(Fixture.command)).rejects.toThrowError(LogicException.Redundancy);
  });
});