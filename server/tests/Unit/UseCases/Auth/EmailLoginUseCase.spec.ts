import { describe, expect, it, vi } from "vitest";

import { PrismaClient } from "generated/prisma";
import { Inversify } from "@Containers/Inversify";

import { JwtService } from "@Services/Tokens/JwtService";
import { LogicException } from "@Exceptions/LogicException";
import { BcryptService } from "@Services/Password/BcryptService";

import { EmailLoginUseCaseFixture as Fixture } from "./EmailLoginUseCaseFixture";
import { EmailLoginUseCase } from "@UseCases/Auth/EmailLogin/EmailLoginUseCase";

describe("email login use case", () => {
  const prisma = Inversify.get(PrismaClient);
  const useCase = Inversify.get(EmailLoginUseCase);

  it("should login a user with email and password", async () => {
    vi.spyOn(BcryptService, "verify").mockResolvedValue(true);
    vi.spyOn(JwtService, "sign").mockResolvedValue("fake token");
    vi.spyOn(prisma.user, "findUnique").mockResolvedValue(Fixture.user1);

    const auth = await useCase.execute(Fixture.command);
    expect(auth.token).toEqual("fake token");
    expect(BcryptService.verify).toHaveBeenCalledWith(Fixture.command.password, Fixture.user1.password);
  });

  it("should throw NotFound", async () => {
    vi.spyOn(prisma.user, "findUnique").mockResolvedValue(null);
    await expect(useCase.execute(Fixture.command)).rejects.toThrowError(LogicException.NotFound);
  });

  it("should throw BadCredentials", async () => {
    vi.spyOn(BcryptService, "verify").mockResolvedValue(false);
    vi.spyOn(prisma.user, "findUnique").mockResolvedValue(Fixture.user1);
    await expect(useCase.execute(Fixture.command)).rejects.toThrowError(LogicException.BadCredentials);
  });
});