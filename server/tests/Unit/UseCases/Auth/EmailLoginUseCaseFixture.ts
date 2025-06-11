import { UserFactory } from "@Database/Factories/UserFactory";

import type { EmailLoginCommand } from "@UseCases/Auth/EmailLogin/EmailLoginCommand";

const user1 = await UserFactory.build({ id: 1 });

const command: EmailLoginCommand = {
  email: user1.email,
  password: user1.password,
};

export const EmailLoginUseCaseFixture = { user1, command };