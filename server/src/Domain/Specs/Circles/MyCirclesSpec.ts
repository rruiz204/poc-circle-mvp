import type { Circle } from "@Models/Circle";
import type { Member } from "@Models/Member";

interface Arguments {
  userId: number;
};

export namespace MyCirclesSpec {
  export class Object implements Circle.Spec {
    constructor(private readonly args: Arguments) {};

    public toQuery(): Circle.WhereParams {
      return {
        members: {
          some: {
            userId: {
              equals: this.args.userId
            },
          },
        },
      };
    };

    public toInclude(): Circle.IncludeParams {
      return {
        members: {
          include: {
            user: true,
          },
        },
      };
    };
  };

  export interface Record extends Circle.Entity {
    members: Member.WithUser[];
  };
};