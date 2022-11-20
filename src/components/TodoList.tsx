import { Todo } from "@prisma/client";

type Props = {
  todos: Todo[];
}

export const TodoList = (props: Props) => {
  return (
    <div>
      {props.todos.map((todo: Todo, index) => (
        <div key={index}>
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  )
}