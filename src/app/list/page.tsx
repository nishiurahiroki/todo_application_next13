import { Suspense } from 'react';
import { TodoList } from '../../components/TodoList';

type ListPageProps = {
  searchParams: { searchTitle?: string };
};

export default async function ListPage(props: ListPageProps) {
  return (
    <div>
      <Suspense fallback={<>loading...</>}>
        {/* @ts-expect-error Server Component */}
        <TodoList todoTitle={props.searchParams.searchTitle} />
      </Suspense>
    </div>
  );
}
