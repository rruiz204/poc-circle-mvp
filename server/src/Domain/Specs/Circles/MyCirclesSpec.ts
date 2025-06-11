import type { Circle } from "@Models/Circle";

interface Arguments {
  userId: number;
};

export class MyCirclesSpec implements Circle.Spec {
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
          user: true
        },
      },
    };
  };
};