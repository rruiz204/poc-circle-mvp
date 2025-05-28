FROM oven/bun:1.2-alpine

RUN apk add --no-cache openssl

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "bun run prisma:deploy && bun run prisma:generate && bun run prisma:seed && bun run prod"]