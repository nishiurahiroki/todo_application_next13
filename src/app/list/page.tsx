import { TodoList } from "../../components/TodoList";
import { fetchTodoList } from "../../fetcher/TodoFetcher";

export default async function ListPage() {
  const todos = await fetchTodoList({ key : 'RaupOJIJ7xLQ5AypaVvx' });

  return (
    <div>
      <div>一覧</div>
      <div>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}
