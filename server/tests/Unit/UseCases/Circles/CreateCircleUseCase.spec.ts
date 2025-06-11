import { describe, expect, it, vi } from "vitest";

import { Inversify } from "@Containers/Inversify";
import { UnitOfWork } from "@Database/Common/UnitOfWork";
import { LogicException } from "@Exceptions/LogicException";

import { CreateCircleUseCaseFixture as Fixture } from "./CreateCircleUseCaseFixture";
import { CreateCircleUseCase } from "@UseCases/Circles/CreateCircle/CreateCircleUseCase";

describe("create circle use case", () => {
  const uow = Inversify.get(UnitOfWork);
  const useCase = Inversify.get(CreateCircleUseCase);

  it("should create a new circle", async () => {
    vi.spyOn(uow.circle, "findByName").mockResolvedValue(null);
    vi.spyOn(uow.role, "findByName").mockResolvedValue(Fixture.role1);
    vi.spyOn(uow.circle, "create").mockResolvedValue(Fixture.circle1);

    const response = await useCase.execute(Fixture.command);
    expect(response.name).toEqual(Fixture.circle1.name);
  });

  it("should throw Redundancy error", async () => {
    vi.spyOn(uow.circle, "findByName").mockResolvedValue(Fixture.circle1);
    await expect(useCase.execute(Fixture.command)).rejects.toThrowError(LogicException.Redundancy);
  })
  
  it("should throw Not Found error", async () => {
    vi.spyOn(uow.circle, "findByName").mockResolvedValue(null);
    vi.spyOn(uow.role, "findByName").mockResolvedValue(null);
    await expect(useCase.execute(Fixture.command)).rejects.toThrowError(LogicException.NotFound);
  });
});