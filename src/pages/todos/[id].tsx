import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { fetchTodoById } from '../../services/todosService';
import TodoForm from '../../components/TodoForm';
import { Todo } from '@/types/todos';

const TodoDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: todo, isLoading, error } = useQuery<Todo>(
    ['todo', id],
    (): Promise<Todo> => fetchTodoById(Number(id)),
    {
      enabled: !!id,
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading todo details!</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Todo</h1>
      <TodoForm todo={todo} onSuccess={() => router.push('/')} />
    </div>
  );
};

export default TodoDetails;
