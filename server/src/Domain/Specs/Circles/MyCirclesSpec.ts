import type { Circle } from "@Models/Circle";

interface Arguments {
  userId: number;
};

export class MyCirclesSpec implements Circle.Spec {
  constructor(private readonly args: Arguments) {};

  public toWhere(): Circle.WhereParams {
    return {
      members: {
        every: {
          userId: this.args.userId
        },
      },
    };
  };
};