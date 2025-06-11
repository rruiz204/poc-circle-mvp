import { UserFactory } from "@Database/Factories/UserFactory";
import { RoleFactory } from "@Database/Factories/RoleFactory";
import { CircleFactory } from "@Database/Factories/CircleFactory";

import type { CreateCircleCommand } from "@UseCases/Circles/CreateCircle/CreateCircleCommand";

const user1 = await UserFactory.build({ id: 1 });
const role1 = await RoleFactory.build({ id: 1 });
const circle1 = await CircleFactory.build({ id: 1 });

const command: CreateCircleCommand = {
  onwer: user1.id,
  name: circle1.name,
  description: circle1.description,
};

export const CreateCircleUseCaseFixture = { user1, role1, circle1, command };