import { PrismaClient } from "generated/prisma";
import { Inversify } from "@Containers/Inversify";
import { Seeder } from "@Database/Seeders/Seeder";

import { RoleSeeder } from "@Database/Seeders/RoleSeeder";
import { AdminSeeder } from "@Database/Seeders/AdminSeeder";
import { ScopeSeeder } from "@Database/Seeders/ScopeSeeder";

const prisma = Inversify.get(PrismaClient);

const roleSeeder = new RoleSeeder(prisma);
const adminSeeder = new AdminSeeder(prisma);
const scopeSeeder = new ScopeSeeder(prisma);

const SeedRunner = async (seeders: Seeder[]) => {
  for (const seeder of seeders) {
    await seeder.seed();
  };
};

await SeedRunner([
  adminSeeder, roleSeeder,
]);