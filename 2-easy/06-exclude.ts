import type { Equal, Expect } from "@type-challenges/utils"

export type MyExclude<Type, ExcludedType> =
  Type extends ExcludedType
    ? never
    : Type

export type cases = [
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]
