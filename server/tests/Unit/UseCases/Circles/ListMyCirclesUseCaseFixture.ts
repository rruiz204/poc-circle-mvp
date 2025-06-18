import { UserFactory } from "@Database/Factories/UserFactory";
import { RoleFactory } from "@Database/Factories/RoleFactory";
import { CircleFactory } from "@Database/Factories/CircleFactory";

const user1 = await UserFactory.build({ id: 1 });
const role1 = await RoleFactory.build({ id: 1 });
const circle1 = await CircleFactory.build({ id: 1 });

const response = [
  {
    id: circle1.id,
    name: circle1.name,
    updatedAt: circle1.updatedAt,
    createdAt: circle1.createdAt,
    description: circle1.description,
    members: [
      {
        user: {
          id: user1.id,
          name: user1.name,
          email: user1.email,
        },
      },
    ],
  },
];

export const ListMyCirclesUseCaseFixture = { user1, role1, circle1, response };