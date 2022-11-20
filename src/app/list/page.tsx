import { TodoList } from "../../components/TodoList";
import { fetchTodoList } from "../../fetcher/TodoFetcher";

type ListPageProps = {
  searchParams: { searchTitle?: string }
}

export default async function ListPage(props: ListPageProps) {
  const todos = await fetchTodoList({ searchWord: props.searchParams?.searchTitle });

  return (
    <div>
      <div>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}
