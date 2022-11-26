import { Suspense } from 'react';
import { TodoList } from '../../components/TodoList';

type ListPageProps = {
  searchParams: { searchWord?: string };
};

export default async function ListPage(props: ListPageProps) {
  const searchCondition = {
    searchWord: props.searchParams.searchWord,
  };

  return (
    <div>
      <Suspense fallback={<>loading...</>}>
        {/* @ts-expect-error Server Component */}
        <TodoList searchCondition={searchCondition} />
      </Suspense>
    </div>
  );
}
