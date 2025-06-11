import { Prisma } from "generated/prisma";
import type { Circle as Model } from "generated/prisma";
import type { Specification } from "@Specs/Specification";

export namespace Circle {
  export type Entity = Model;
  export type Records = Model[];
  export type Nullable = Model | null;
  export type Optional = Partial<Model>;

  export type WhereParams = Prisma.CircleWhereInput;
  export type CreateParams = Prisma.CircleCreateInput;
  export type UpdateParams = Prisma.CircleUpdateInput;

  export type IncludeParams = Prisma.CircleInclude;
  export type Spec = Specification<WhereParams, IncludeParams>;
};