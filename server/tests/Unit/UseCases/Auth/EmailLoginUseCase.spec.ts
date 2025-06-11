import { describe, expect, it, vi } from "vitest";

import { Inversify } from "@Containers/Inversify";
import { UnitOfWork } from "@Database/Common/UnitOfWork";
import { JwtService } from "@Services/Tokens/JwtService";
import { LogicException } from "@Exceptions/LogicException";
import { BcryptService } from "@Services/Password/BcryptService";

import { EmailLoginUseCaseFixture as Fixture } from "./EmailLoginUseCaseFixture";
import { EmailLoginUseCase } from "@UseCases/Auth/EmailLogin/EmailLoginUseCase";

describe("email login use case", () => {
  const uow = Inversify.get(UnitOfWork);
  const useCase = Inversify.get(EmailLoginUseCase);

  it("should login a user with email and password", async () => {
    vi.spyOn(JwtService, "sign").mockResolvedValue("fake token");
    vi.spyOn(uow.user, "findByEmail").mockResolvedValue(Fixture.user1);
    vi.spyOn(BcryptService, "verify").mockResolvedValue(true);

    const auth = await useCase.execute(Fixture.command);
    expect(auth.token).toEqual("fake token");
    expect(BcryptService.verify).toHaveBeenCalledWith(Fixture.command.password, Fixture.user1.password);
  });

  it("should throw NotFound", async () => {
    vi.spyOn(uow.user, "findByEmail").mockResolvedValue(null);
    await expect(useCase.execute(Fixture.command)).rejects.toThrowError(LogicException.NotFound);
  });

  it("should throw BadCredentials", async () => {
    vi.spyOn(uow.user, "findByEmail").mockResolvedValue(Fixture.user1);
    vi.spyOn(BcryptService, "verify").mockResolvedValue(false);
    await expect(useCase.execute(Fixture.command)).rejects.toThrowError(LogicException.BadCredentials);
  });
});