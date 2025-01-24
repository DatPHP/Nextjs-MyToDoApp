import DateHeader from '@components/DateHeader';
import TodoList from '../components/TodoList';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="bg-white p-4 mx-auto mt-4">
      <div className="bg-gray-100 w-[800px] mx-auto p-4 mt-4 border border-gray-200 rounded-md">
        <div className="flex flex-col">
        <div><DateHeader /></div>
          <h1 className="text-2xl font-bold mb-4">Todo List</h1>
          <div>
            <Link href="/todos/create">
              <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                Create New Todo
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          
          <TodoList />
        </div>
      </div>
    </div>
  );
}
