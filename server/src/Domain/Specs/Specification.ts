export interface Specification<TWhere, TInclude> {
  toQuery?(): TWhere;
  toInclude?(): TInclude;
};