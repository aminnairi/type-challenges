import type { Equal, Expect } from "@type-challenges/utils"

type MyParameters<Callback> =
  Callback extends (...parameters: infer Params) => any
    ? Params
    : never

export type Result = MyParameters<(a: boolean, b: string) => void>

const foo = (_arg1: string, _arg2: number): void => {}
const bar = (_arg1: boolean, _arg2: { a: "A" }): void => {}
const baz = (): void => {}

export type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]
