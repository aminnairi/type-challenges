import type { Equal, Expect } from "@type-challenges/utils"

export type MyAwaited<Type> =
  Type extends PromiseLike<infer Value>
    ? MyAwaited<Value>
    : Type

export type X = Promise<string>
export type Y = Promise<{ field: number }>
export type Z = Promise<Promise<string | number>>
export type Z1 = Promise<Promise<Promise<string | boolean>>>
export type T = { then: (onfulfilled: (arg: number) => any) => any }

export type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error
type error = MyAwaited<number>
