'use client'

import { useRouter } from 'next/navigation';

import { Todo } from "@prisma/client";
import { ChangeEvent, useState } from "react";

type Props = {
  todos : Todo[];
}

export const TodoList = (props : Props) => {
  const router = useRouter()

  const [searchTitle, setSearchTitle] = useState('')

  const handleInput = (e : ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value)
  }

  const handleClickSearch = () => {
    router.push(`/list?searchTitle=${searchTitle}`)
  }

  return (
    <div>
      <div>
        Search : <input type="text" value={searchTitle} onChange={handleInput} />
        <button onClick={handleClickSearch}>search</button>
      </div>
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