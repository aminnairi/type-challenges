import type { Equal, Expect } from "@type-challenges/utils"

export type MyPick<Input extends object, WantedKey extends keyof Input> = {
  [Key in WantedKey]: Input[Key]
}

export type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
]

export interface Todo {
  title: string
  description: string
  completed: boolean
}

export interface Expected1 {
  title: string
}

export interface Expected2 {
  title: string
  completed: boolean
}
