import { PrismaClient, Todo } from '@prisma/client'
const prisma = new PrismaClient()

type FetchTodoProps = {
  key : string;
  searchWord? : string;
}

export const fetchTodoList = async (props : FetchTodoProps) => {
  const todos : Todo[] = await prisma.todo.findMany()
  return todos
};
