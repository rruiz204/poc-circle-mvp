import { Circle } from "@Models/Circle";

interface Arguments {
  user: number;
};

export class MyCirclesSpec extends Circle.Spec {
  constructor(private readonly args: Arguments) { super() };

  public toWhere(): Circle.WhereParams {
    return {
      members: {
        some: {
          userId: {
            equals: this.args.user
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