import { Prisma } from "generated/prisma";
import type { Role as Model } from "generated/prisma";

export namespace Role {
  export type Entity = Model;
  export type Records = Model[];
  export type Nullable = Model | null;
  export type Optional = Partial<Model>;

  export type WhereParams = Prisma.RoleWhereInput;
  export type CreateParams = Prisma.RoleCreateInput;
  export type UpdateParams = Prisma.RoleUpdateInput;

  export enum Enum {
    OWNER = "owner",
    MODER = "moder",
    MEMBER = "member",
  };
};