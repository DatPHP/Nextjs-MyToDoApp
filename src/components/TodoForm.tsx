"use client";

import React from "react";
import {
  TextField,
  Button,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo, updateTodo } from "@services/todosService";
import { Todo } from "../types/todos";
import { toast } from "react-toastify";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema } from "@utils/zodSchemas";
import "@styles/main.css";

interface ITodoForm {
  todo?: Todo; // For edit mode
  onSuccess?: () => void;
}

type TodoFormData = z.infer<typeof todoSchema>;
const TodoForm: React.FC<ITodoForm> = ({ todo, onSuccess }) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TodoFormData>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: todo?.todo || "",
      completed: todo?.completed || false,
    },
  });

  // Mutation for creating a todo
  const createMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Todo created successfully!");
      onSuccess?.();
    },
  });

  // Mutation for updating a todo
  const updateMutation = useMutation({
    mutationFn: (updates: {
      id: number;
      updates: { todo?: string; completed?: boolean };
    }) => updateTodo(updates.id, updates.updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      toast.success("Todo updated successfully!");
      onSuccess?.();
    },
  });

  const onSubmit = (data: TodoFormData) => {
    if (todo) {
      updateMutation.mutate({
        id: todo.id,
        updates: { todo: data.title, completed: data.completed },
      });
    } else {
      createMutation.mutate({
        todo: data.title,
        completed: data?.completed || false,
        userId: 1,
      });
    }
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex justify-between items-center mb-4 px-6">
          <Button
            variant="text"
            className="cancelBtn !font-bold !capitalize"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            variant="text"
            className="!text-gray-900 !font-bold !capitalize"
            type="submit"
          >
            {todo ? "Update task" : "Add task"}
          </Button>
        </div>
        <TextField
          variant="standard"
          placeholder="Write your task"
          fullWidth
          multiline
          minRows={1}
          className="todoInput text-2xl"
          {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
            InputProps={{
            disableUnderline: true,
            sx: { fontSize: "26px", px: 6 },
            }}
          />

          <Controller
            name="completed"
            control={control}
            render={({ field }) => (
            <FormControlLabel
              className="!hidden"
              control={<Checkbox {...field} checked={field.value} />}
              label="Completed"
            />
            )}
          />

        {/* Options */}
        <div className="divide-y divide-gray-200">
          <div className="flex justify-between items-center py-4 px-6">
            <span className="titleOption text-sm font-semibold">Alarm</span>
            <div className="flex items-center">
              <span className="todoOption">None</span>
              <IconButton size="small">
                <ArrowForwardIosIcon fontSize="small" className="todoOption" />
              </IconButton>
            </div>
          </div>

          <div className="flex justify-between items-center py-4 px-6">
            <span className="titleOption text-sm font-semibold">Reminder</span>
            <div className="flex items-center">
              <span className="todoOption">10:00 am</span>
              <IconButton size="small">
                <ArrowForwardIosIcon fontSize="small" className="todoOption" />
              </IconButton>
            </div>
          </div>

          <div className="flex justify-between items-center py-4 px-6">
            <span className="titleOption text-sm font-semibold">Priority</span>
            <div className="flex items-center">
              <span className="todoOption">Low</span>
              <IconButton size="small">
                <ArrowForwardIosIcon fontSize="small" className="todoOption" />
              </IconButton>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
