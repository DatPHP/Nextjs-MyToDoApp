import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "@services/todosService";

export const useTodosQuery = () =>
  useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
