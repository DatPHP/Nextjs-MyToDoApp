"use client";

import { useTodosQuery } from "@hooks/useTodosQuery";
import { Checkbox, IconButton, Button, Typography } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "@services/todosService";
import Link from "next/link";
import {
  Notifications,
  CircleNotificationsOutlined,
} from "@mui/icons-material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const TodoList = () => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };
  const { data: todos, isLoading, error } = useTodosQuery();

  // map initial sample data to match the TodoCardProps
  const todoList: any = todos?.map((task) => ({
    id: task.id,
    label: task.todo,
    details: task.todo,
    completed: task.completed,
    hasNotification: true,
    hasAlert: false,
  }));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading todos!</p>;

  return (
    <div style={{ height: "auto", width: "auto" }}>
      {todoList?.map((task: any, index: number) => (
        <div
          key={index}
          className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
        >
          <div className="flex items-center">
            <Checkbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<svg fill="orange" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17-5-5 1.41-1.42 3.59 3.59 7.59-7.59 1.41 1.42m-7-6a10 10 0 0 0 -10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0 -10-10z"/></svg>}
              checked={task.completed}
            />
            <div>
              <Typography
                variant="body1"
                className={task.completed ? " text-gray-400" : ""}
              >
                {task.label}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {task.details}
              </Typography>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {task?.hasNotification && (
              <IconButton className="text-gray-500">
                <Notifications />
              </IconButton>
            )}
            {task?.hasAlert && (
              <IconButton className="text-yellow-500">
                <CircleNotificationsOutlined />
              </IconButton>
            )}

            <Link
              href={`/todos/${task.id}`}
              className="text-gray-500 text-sm no-underline"
            >
              <Button className="text-gray-500 text-sm">Edit
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
