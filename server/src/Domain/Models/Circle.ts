import { Prisma } from "generated/prisma";
import type { Circle as Model } from "generated/prisma";

export namespace Circle {
  export type Entity = Model;
  export type Records = Model[];
  export type Nullable = Model | null;
  export type Optional = Partial<Model>;

  export type CreateParams = Prisma.CircleCreateInput;
  export type UpdateParams = Prisma.CircleUpdateInput;

  export type WhereParams = Prisma.CircleWhereInput;
  export type OrderParams = Prisma.CircleOrderByWithRelationInput;
};