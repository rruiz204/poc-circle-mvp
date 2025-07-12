import { Container } from "inversify";
import { PrismaClient } from "generated/prisma";
import { UnitOfWork } from "@Database/UnitOfWork";

import { AuthRegisterUseCase } from "@UseCases/Auth/AuthRegister/AuthRegisterUseCase";

export const Inversify = new Container();

Inversify.bind(AuthRegisterUseCase).toSelf();

Inversify.bind(UnitOfWork).toSelf();
Inversify.bind(PrismaClient).toConstantValue(new PrismaClient());
