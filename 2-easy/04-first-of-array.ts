import type { Equal, Expect } from "@type-challenges/utils"

export type First<Items extends Array<unknown>> =
  Items extends [infer FirstItem, ...infer _]
    ? FirstItem
    : never

export type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

export type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>,
]
