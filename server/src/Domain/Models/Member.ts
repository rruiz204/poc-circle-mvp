import { Prisma } from "generated/prisma";
import type { Member as Model } from "generated/prisma";

export namespace Member {
  export type Entity = Model;
  export type Records = Model[];
  export type Nullable = Model | null;
  export type Optional = Partial<Model>;

  export type CreateParams = Prisma.MemberCreateInput;
  export type UpdateParams = Prisma.MemberUpdateInput;
  export type WhereParams = Prisma.MemberWhereInput;

  export type UncheckedParams = Prisma.MemberUncheckedCreateInput;
  export type DeleteParams = Prisma.MemberUserIdCircleIdCompoundUniqueInput;
};