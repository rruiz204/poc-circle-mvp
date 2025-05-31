import { Prisma } from "generated/prisma";
import type { Shape as Model } from "generated/prisma";

export namespace Shape {
  export type Entity = Model;
  export type Records = Model[];
  export type Nullable = Model | null;
  export type Optional = Partial<Model>;

  export type CreateParams = Prisma.ShapeCreateInput;
  export type UpdateParams = Prisma.ShapeUpdateInput;

  export type WhereParams = Prisma.ShapeWhereInput;
  export type OrderParams = Prisma.ShapeOrderByWithRelationInput;
};