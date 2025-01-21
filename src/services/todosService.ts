import axios from 'axios';
const API_URL = 'https://dummyjson.com/todos';

// const API_URL = process.env.NEXT_PUBLIC_API_URL;
interface TodosResponse {
  todos: { id: number; todo: string; completed: boolean }[];
}

export const fetchTodos = async () => {
  const { data } = await axios.get<TodosResponse>(`${API_URL}`);
  return data?.todos;
};

export const createTodo = async (todo: { todo: string; completed: boolean; userId: number }) => {
  const { data } = await axios.post(`${API_URL}/add`, todo);
  return data;
};

// Fetch a single todo by ID
export const fetchTodoById = async (id: number) => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

// Update an existing todo
export const updateTodo = async (id: number, updates: { todo?: string; completed?: boolean }) => {
  const { data } = await axios.put(`${API_URL}/${id}`, updates);
  return data;
};

// Delete a todo
export const deleteTodo = async (id: number) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};



