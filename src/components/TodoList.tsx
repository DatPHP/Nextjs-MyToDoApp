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
    <div style={{ height: "auto", width: "auto" }}>
      {todoList?.map((task: any, index: number) => (
        <div
          key={index}
          className="flex justify-between bg-gray-50 p-4 border-b-2 border-gray-100"
        >
          <div className="flex items-center">
            <Checkbox
              size="large"
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={
                <svg
                  fill="orange"
                  height="36"
                  width="36"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m10 17-5-5 1.41-1.42 3.59 3.59 7.59-7.59 1.41 1.42m-7-6a10 10 0 0 0 -10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0 -10-10z" />
                </svg>
              }
              checked={task.completed}
            />
            <div>
              <Typography
                variant="body1"
                className={task.completed ? " text-gray-400" : ""}
              >
                <span
                  className="text-medium font-extrabold"
                  style={{ fontSize: "18px" }}
                >
                  {task.label}
                </span>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <span
                  className={`text-sm ${task.completed ? "text-gray-400" : ""}`}
                  style={{ fontSize: "11px" }}
                >
                  {task.details}
                </span>
              </Typography>
            </div>
          </div>
          <div className="flex space-x-4">
            {task?.hasNotification && (
              <p className="text-black">
                <Notifications fontSize="small" style={{ fontSize: "13px" }} />
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

            <Link href={`/todos/${task.id}`} className="text-black text-sm">
              <Button className="text-black text-sm normal-case">Edit</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
