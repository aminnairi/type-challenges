import type { Equal, Expect } from "@type-challenges/utils"

export type TupleToObject<Tuple extends ReadonlyArray<any>> = {
  [Key in Tuple[number]]: Key
}

export const tuple = ["tesla", "model 3", "model X", "model Y"] as const
export const tupleNumber = [1, 2, 3, 4] as const
export const tupleMix = [1, "2", 3, "4"] as const

export type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: "tesla"; "model 3": "model 3"; "model X": "model X"; "model Y": "model Y" }>>,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<Equal<TupleToObject<typeof tupleMix>, { 1: 1; "2": "2"; 3: 3; "4": "4" }>>,
]

export type error = TupleToObject<[[1, 2], {}]>
