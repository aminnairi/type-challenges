import type { Equal, Expect } from "@type-challenges/utils"

export type Unshift<Items extends ReadonlyArray<unknown>, Item> = [Item, ...Items]

export type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<["1", 2, "3"], boolean>, [boolean, "1", 2, "3"]>>,
]
