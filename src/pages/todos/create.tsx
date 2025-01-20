import TodoForm from '../../components/TodoForm';
import { useRouter } from 'next/router';

const CreateTodo = () => {
  const router = useRouter();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Todo</h1>
      <TodoForm onSuccess={() => router.push('/')} />
    </div>
  );
};

export default CreateTodo;
