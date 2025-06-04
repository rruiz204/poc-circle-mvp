#!/bin/sh
set -e

# Running database migrations...
bun run prisma:migrate:deploy

# Generating Prisma client..
bun run prisma:generate

# Seeding database...
bun run prisma:seed

# Running commands...
#bun run command:sync:rbac

# Starting application...
exec bun run prod