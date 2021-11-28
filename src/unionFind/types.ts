export abstract class AbstractQuickFindClass {
  abstract union(p: number, q: number): void;
  abstract connected(p: number, q: number): boolean;
}

export type AbstractQuickFind = new (n: number) => AbstractQuickFindClass;
