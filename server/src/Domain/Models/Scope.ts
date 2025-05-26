import { Prisma } from "generated/prisma";
import type { Scope as Model } from "generated/prisma";

export namespace Scope {
  export type Entity = Model;
  export type Records = Model[];
  export type Nullable = Model | null;
  export type Optional = Partial<Model>;

  export type CreateParams = Prisma.ScopeCreateInput;
  export type UpdateParams = Prisma.ScopeUpdateInput;

  export type WhereParams = Prisma.ScopeWhereInput;
  export type OrderParams = Prisma.ScopeOrderByWithRelationInput;

  export enum Enum {
    ALL_TASKS = "tasks:*",
    EDIT_TASKS = "tasks:edit",
    STATUS_TASKS = "tasks:status",

    ASSING_TASKS = "tasks:assing",
    CREATE_TASKS = "tasks:create",
    DELETE_TASKS = "tasks:delete",

    COMMENT_TASKS = "tasks:comment",
    VIEW_TASKS = "tasks:view:all",
  };
};