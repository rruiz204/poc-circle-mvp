import { describe, expect, it, vi } from "vitest";

import { PrismaClient } from "generated/prisma";
import { Inversify } from "@Containers/Inversify";
import { LogicException } from "@Exceptions/LogicException";

import { CreateCircleUseCaseFixture as Fixture } from "./CreateCircleUseCaseFixture";
import { CreateCircleUseCase } from "@UseCases/Circles/CreateCircle/CreateCircleUseCase";

describe("create circle use case", () => {
  const prisma = Inversify.get(PrismaClient);
  const useCase = Inversify.get(CreateCircleUseCase);

  it("should create a new circle", async () => {
    vi.spyOn(prisma.circle, "findUnique").mockResolvedValue(null);
    vi.spyOn(prisma.role, "findUnique").mockResolvedValue(Fixture.role1);
    vi.spyOn(prisma.circle, "create").mockResolvedValue(Fixture.circle1);

    const response = await useCase.execute(Fixture.command);
    expect(response.name).toEqual(Fixture.circle1.name);
  });

  it("should throw Redundancy error", async () => {
    vi.spyOn(prisma.circle, "findUnique").mockResolvedValue(Fixture.circle1);
    await expect(useCase.execute(Fixture.command)).rejects.toThrowError(LogicException.Redundancy);
  })
  
  it("should throw Not Found error", async () => {
    vi.spyOn(prisma.circle, "findUnique").mockResolvedValue(null);
    vi.spyOn(prisma.role, "findUnique").mockResolvedValue(null);
    await expect(useCase.execute(Fixture.command)).rejects.toThrowError(LogicException.NotFound);
  });
});