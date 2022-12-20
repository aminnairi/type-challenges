import type { Equal, Expect } from "@type-challenges/utils"

export type MyReadonly<Input extends object> = {
  readonly [Key in keyof Input]: Input[Key]
}

export type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

export interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}
