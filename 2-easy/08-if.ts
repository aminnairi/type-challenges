import type { Equal, Expect } from "@type-challenges/utils"

type If<Condition, True, False> =
  Condition extends true
    ? True
    : False

export type cases = [
  Expect<Equal<If<true, "a", "b">, "a">>,
  Expect<Equal<If<false, "a", 2>, 2>>,
]

// @ts-expect-error
type error = If<null, "a", "b">
