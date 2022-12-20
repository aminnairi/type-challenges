import type { Equal, Expect } from "@type-challenges/utils"

export type Length<Tuple extends ReadonlyArray<unknown>> =
  Tuple["length"]

export const tesla = ["tesla", "model 3", "model X", "model Y"] as const
const spaceX = ["FALCON 9", "FALCON HEAVY", "DRAGON", "STARSHIP", "HUMAN SPACEFLIGHT"] as const

export type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">,
]
