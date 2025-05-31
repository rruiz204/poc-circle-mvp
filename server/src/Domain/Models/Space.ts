import { Prisma } from "generated/prisma";
import type { Space as Model } from "generated/prisma";

export namespace Space {
  export type Entity = Model;
  export type Records = Model[];
  export type Nullable = Model | null;
  export type Optional = Partial<Model>;

  export type CreateParams = Prisma.SpaceCreateInput;
  export type UpdateParams = Prisma.SpaceUpdateInput;

  export type WhereParams = Prisma.SpaceWhereInput;
  export type OrderParams = Prisma.SpaceOrderByWithRelationInput;
};