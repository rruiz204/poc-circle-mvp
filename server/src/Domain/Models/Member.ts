import { Prisma } from "generated/prisma";
import type { User } from "./User";
import type { Role } from "./Role";
import type { Member as Model } from "generated/prisma";

export namespace Member {
  export type Entity = Model;
  export type Records = Model[];
  export type Nullable = Model | null;
  export type Optional = Partial<Model>;

  export type WithUser = Entity & { user: User.Entity };
  export type WithRole = Entity & { role: Role.Entity };

  export type WhereParams = Prisma.MemberWhereInput;
  export type CreateParams = Prisma.MemberCreateInput;
  export type UpdateParams = Prisma.MemberUpdateInput;

  export type UncheckedParams = Prisma.MemberUncheckedCreateInput;
  export type DeleteParams = Prisma.MemberUserIdCircleIdCompoundUniqueInput;
};