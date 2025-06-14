import { Prisma } from "generated/prisma";
import { BaseSpec } from "@Specs/Specification";
import type { Circle as Model } from "generated/prisma";

export namespace Circle {
  export type Entity = Model;
  export type Nullable = Model | null;

  export type CreateParams = Prisma.CircleCreateInput;
  export type UpdateParams = Prisma.CircleUpdateInput;

  export type IncludeParams = Prisma.CircleInclude;
  export type WhereParams = Prisma.CircleWhereInput;
  export type UniqueParams = Prisma.CircleWhereUniqueInput;

  export class Spec extends BaseSpec<WhereParams, IncludeParams, UniqueParams> {};

  export type WithMembers = Prisma.CircleGetPayload<{
    include: { members: { include: { user: true } } }
  }>;
};