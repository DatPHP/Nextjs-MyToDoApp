import { useQuery } from "@tanstack/react-query";
import { fetchTodos, fetchTodosByUser } from "@services/todosService";

export const useTodosQuery = () =>
  useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodosByUser, //user is hardcoded to 1
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
