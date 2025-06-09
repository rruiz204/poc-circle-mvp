import { describe, expect, it, vi, beforeEach } from "vitest";

import type { Role } from "@Models/Role";
import type { Circle } from "@Models/Circle";

import { Inversify } from "@Containers/Inversify";
import { UnitOfWork } from "@Database/Common/UnitOfWork";
import { LogicException } from "@Exceptions/LogicException";
import { RoleFactory } from "@Database/Factories/RoleFactory";
import { CircleFactory } from "@Database/Factories/CircleFactory";

import { CreateCircleUseCase } from "@UseCases/Circles/CreateCircle/CreateCircleUseCase";
import type { CreateCircleCommand } from "@UseCases/Circles/CreateCircle/CreateCircleCommand";

describe("create circle use case", () => {
  let role1: Role.Entity;
  let circle1: Circle.Entity;
  let command: CreateCircleCommand;

  const uow = Inversify.get(UnitOfWork);
  const useCase = Inversify.get(CreateCircleUseCase);

  beforeEach(async () => {
    role1 = await RoleFactory.buidl({ id: 1 });
    circle1 = await CircleFactory.build({ id: 1 });

    command = {
      onwer: 1,
      name: circle1.name,
      description: circle1.description,
    };
  });

  it("should create a new circle", async () => {
    vi.spyOn(uow.circle, "findByName").mockResolvedValue(null);
    vi.spyOn(uow.role, "findByName").mockResolvedValue(role1);
    vi.spyOn(uow.circle, "create").mockResolvedValue(circle1);

    const response = await useCase.execute(command);
    expect(response.name).toEqual(circle1.name);
  });

  it("should throw Redundancy error", async () => {
    vi.spyOn(uow.circle, "findByName").mockResolvedValue(circle1);
    await expect(useCase.execute(command)).rejects.toThrowError(LogicException.Redundancy);
  })
  
  it("should throw Not Found error", async () => {
    vi.spyOn(uow.circle, "findByName").mockResolvedValue(null);
    vi.spyOn(uow.role, "findByName").mockResolvedValue(null);
    await expect(useCase.execute(command)).rejects.toThrowError(LogicException.NotFound);
  });
});