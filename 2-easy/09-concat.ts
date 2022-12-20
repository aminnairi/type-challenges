import type { Equal, Expect } from "@type-challenges/utils"

type Concat<First extends Array<unknown>, Second extends Array<unknown>> =
  [...First, ...Second]

export type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<["1", 2, "3"], [false, boolean, "4"]>, ["1", 2, "3", false, boolean, "4"]>>,
]
