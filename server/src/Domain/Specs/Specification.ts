export interface Specification<TWhere, TInclude, TUnique> {
  toWhere(): TWhere;
  toUnique(): TUnique;
  toInclude(): TInclude;
};

export abstract class BaseSpec<TWhere, TInclude, TUnique> implements Specification<TWhere, TInclude, TUnique> {
  public toWhere(): TWhere {
    return {} as TWhere;
  };

  public toUnique(): TUnique {
    return {} as TUnique;
  };

  public toInclude(): TInclude {
    return {} as TInclude;
  };
};