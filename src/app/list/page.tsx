import { fetchTodoList } from "../../fetcher/TodoFetcher";

export default async function ListPage() {
  const todos = await fetchTodoList({ key : 'RaupOJIJ7xLQ5AypaVvx' });

  return (
    <div>
      <div>一覧</div>
      <div>
        {todos?.map((todo : any) => (
          <>
            <>{todo.name}</>
          </>
        ))}
      </div>
    </div>
  );
}
