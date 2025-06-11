import { Prisma } from "generated/prisma";
import type { Scope as Model } from "generated/prisma";

export namespace Scope {
  export type Entity = Model;
  export type Records = Model[];
  export type Nullable = Model | null;
  export type Optional = Partial<Model>;

  export type WhereParams = Prisma.ScopeWhereInput;
  export type CreateParams = Prisma.ScopeCreateInput;
  export type UpdateParams = Prisma.ScopeUpdateInput;

  export enum Enum {};
};