'server only'

import { PrismaClient, Todo } from '@prisma/client'
const prisma = new PrismaClient()

type FetchTodoProps = {
  searchWord? : string;
}

export const fetchTodoList = async (props? : FetchTodoProps) => {
  const searchCondition = props?.searchWord ? {
    where : {
      title : {
        contains : props?.searchWord
      }
    }
  } : undefined

  const todos : Todo[] = await prisma.todo.findMany(searchCondition)
  return todos
};
