import { useQuery } from 'react-query';
import { fetchTodos } from '../services/todosService';

export const useTodosQuery = () =>
  useQuery('todos', fetchTodos, {
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
