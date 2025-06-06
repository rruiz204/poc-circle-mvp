import { Context } from "@Database/Common/Context";
import { Seeder } from "@Database/Seeders/Seeder";

import { RoleSeeder } from "@Database/Seeders/RoleSeeder";
import { AdminSeeder } from "@Database/Seeders/AdminSeeder";
import { ScopeSeeder } from "@Database/Seeders/ScopeSeeder";

const roleSeeder = new RoleSeeder(Context);
const adminSeeder = new AdminSeeder(Context);
const scopeSeeder = new ScopeSeeder(Context);

const SeedRunner = async (seeders: Seeder[]) => {
  for (const seeder of seeders) {
    const name = seeder.getName();
    await seeder.seed();
    console.log(`Seeder executed ${name}`);
  };
};

await SeedRunner([
  adminSeeder,
]);