import { describe, expect, it, vi } from "vitest";

import { PrismaClient } from "generated/prisma";
import { Inversify } from "@Containers/Inversify";

import { ListMyCirclesUseCaseFixture as Fixture } from "./ListMyCirclesUseCaseFixture";
import { ListMyCirclesUseCase } from "@UseCases/Circles/ListMyCircles/ListMyCirclesUseCase";

describe("list my circles use case", () => {
  const prisma = Inversify.get(PrismaClient);
  const useCase = Inversify.get(ListMyCirclesUseCase);

  it("should display the circles of a user", async () => {
    vi.spyOn(prisma.circle, "findMany").mockResolvedValue(Fixture.response);
    const response = await useCase.execute({ userId: 1 });

    expect(response).toHaveLength(1);
    expect(response[0].members).toHaveLength(1);
  });
});