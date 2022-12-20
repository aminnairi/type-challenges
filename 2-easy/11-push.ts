import type { Equal, Expect } from "@type-challenges/utils"

type Push<Items extends ReadonlyArray<unknown>, Item> = [...Items, Item]

export type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], "3">, [1, 2, "3"]>>,
  Expect<Equal<Push<["1", 2, "3"], boolean>, ["1", 2, "3", boolean]>>,
]
