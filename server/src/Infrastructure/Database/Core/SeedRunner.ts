import { Context } from "@Database/Core/Context";
import { Seeder } from "@Database/Seeders/Seeder";

import { UserSeeder } from "@Database/Seeders/UserSeeder";
import { RoleSeeder } from "@Database/Seeders/RoleSeeder";
import { AdminSeeder } from "@Database/Seeders/AdminSeeder";

const userSeeder = new UserSeeder(Context);
const roleSeeder = new RoleSeeder(Context);
const adminSeeder = new AdminSeeder(Context);

const SeedRunner = async (seeders: Seeder[]) => {
  for (const seeder of seeders) {
    const name = seeder.getName();
    await seeder.seed();
    console.log(`Seeder executed ${name}`);
  };
};

await SeedRunner([
  adminSeeder, roleSeeder,
]);