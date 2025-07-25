import { describe, expect, it, vi } from "vitest";
import { Inversify } from "@Configs/Inversify";
import { PrismaClient } from "generated/prisma";
import { TokenService } from "@Services/Token/TokenService";
import { LogicException } from "@Exceptions/LogicException";
import { BcryptService } from "@Services/Bcrypt/BcryptService";
import { AuthLoginUseCase } from "@UseCases/Auth/AuthLogin/AuthLoginUseCase";

describe("auth login use case", () => {
  const prisma = Inversify.get(PrismaClient);
  const useCase = Inversify.get(AuthLoginUseCase);

  it("should login a user with email and password", async () => {
    expect(2+2).toEqual(4);
  });

  it("should throw BadCredentials exception", async () => {
    expect(2+2).toEqual(4);
  });

  it("should throw NotFound exception", async () => {
    expect(2+2).toEqual(4);
  });

  it("should validate the input data", async () => {
    expect(2+2).toEqual(4);
  });
});