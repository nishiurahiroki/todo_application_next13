'use client'

import { Todo } from "@prisma/client";
import { ChangeEvent, useState } from "react";

type Props = {
  todos : Todo[];
}

export const TodoList = (props : Props) => {
  const [searchWord, setSearchWord] = useState('')

  const handleInput = (e : ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  } 

  return (
    <div>
      <div>Search : <input type="text" value={searchWord} onChange={handleInput} /></div>
      <div>
        {props.todos.map((todo : Todo, index) => (
          <div key={index}>
            <p>{todo.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}