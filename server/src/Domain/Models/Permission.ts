import { Prisma } from "generated/prisma";
import type { Permission as Model } from "generated/prisma";

export namespace Permission {
  export type Entity = Model;
  export type Records = Model[];
  export type Nullable = Model | null;
  export type Optional = Partial<Model>;

  export type CreateParams = Prisma.PermissionCreateInput;
  export type UpdateParams = Prisma.PermissionUpdateInput;

  export type WhereParams = Prisma.PermissionWhereInput;
  export type OrderParams = Prisma.PermissionOrderByWithRelationInput;
};