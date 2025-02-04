"use client";

import { useTodosQuery } from "@hooks/useTodosQuery";
import { Checkbox, Button, Typography } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "@services/todosService";
import Link from "next/link";
import {
  Notifications,
  CircleNotificationsOutlined,
} from "@mui/icons-material";
import "@styles/main.css";
import { roboto } from "@fonts/fonts";

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

  const todoList = todos?.map((task) => ({
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
    <div className="h-auto w-auto">
      {todoList?.map((task: any, index: number) => (
        <div
          key={index}
          className="flex justify-between px-2 py-4 border-b-2 border-gray-100"
        >
          <div className={`flex items-center ${roboto.className}`}>
            <Checkbox
              size="large"
              icon={
                <svg
                  className="svg-icon"
                  fill="#c3c4c1"
                  height="32"
                  width="32"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M511.5 966.9c-61.6 0-121.4-12.1-177.7-35.9-54.4-23-103.2-55.9-145.1-97.8-41.9-41.9-74.9-90.8-97.8-145.1-24-56.3-36.1-116.1-36.1-177.8s12.1-121.4 35.9-177.7c23-54.4 55.9-103.2 97.8-145.1s90.8-74.9 145.1-97.8c56.4-23.9 116.2-36 177.9-36s121.4 12.1 177.7 35.9c54.4 23 103.2 55.9 145.1 97.8 41.9 41.9 74.9 90.8 97.8 145.1 23.8 56.3 35.9 116.1 35.9 177.7s-12 121.6-35.8 177.9c-23 54.4-55.9 103.2-97.8 145.1-41.9 41.9-90.8 74.9-145.1 97.8-56.4 23.9-116.2 35.9-177.8 35.9z m0-893.2c-240.7 0-436.6 195.9-436.6 436.6 0 240.7 195.9 436.6 436.6 436.6 240.7 0 436.6-195.9 436.6-436.6 0-240.7-195.9-436.6-436.6-436.6z" />
                </svg>
              }
              checkedIcon={
                <svg
                  fill="#f4d239"
                  height="32"
                  width="32"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10 17-5-5 1.41-1.42 3.59 3.59 7.59-7.59 1.41 1.42m-7-6a10 10 0 0 0 -10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0 -10-10z" />
                </svg>
              }
              checked={task.completed}
            />
            <div className="ml-2 md:ml-4">
              <Typography
                variant="body1"
                className={`todooRow ${task.completed ? "todoActiveTile" : ""}`}
              >
                <span className="text-medium todoTitle">
                  {task.label}
                </span>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <span
                  className={`text-sm todoDetails ${task.completed ? "text-gray-400" : ""}`}
                >
                  {task.details}
                </span>
              </Typography>
            </div>
          </div>
          <div className="flex mr-2 md:mr-3 gap-2 md:gap-5">
            <div>
              {task?.hasNotification && (
                <p className="text-black">
                  <Notifications fontSize="small" style={{ fontSize: 13 }} />
                </p>
              )}
              {task?.hasAlert && (
                <p className="text-yellow-500">
                  <CircleNotificationsOutlined
                    fontSize="small"
                    style={{ fontSize: "13px" }}
                  />
                </p>
              )}
            </div>
            <Link
              href={`/todos/${task.id}`}
              className="!text-black !text-sm !ml-6"
            >
              <Button className="todo-edit-btn !text-black">Edit</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
