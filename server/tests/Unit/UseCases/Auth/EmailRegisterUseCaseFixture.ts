import { UserFactory } from "@Database/Factories/UserFactory";

import type { EmailRegisterCommand } from "@UseCases/Auth/EmailRegister/EmailRegisterCommand";

const user1 = await UserFactory.build({ id: 1 });

const command: EmailRegisterCommand = {
  name: user1.name,
  email: user1.email,
  active: user1.active,
  password: user1.password,
};

export const EmailRegisterUseCaseFixture = { user1, command };