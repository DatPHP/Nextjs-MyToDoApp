"use client";

import React, { useState, useRef } from "react";
import { TextField, Button,IconButton, Checkbox, FormControlLabel } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo, updateTodo } from "@services/todosService";
import { Todo } from "../types/todos";
import { toast } from "react-toastify";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/navigation";

interface ITodoForm {
  todo?: Todo; // For edit mode
  onSuccess?: () => void;
}

const TodoForm: React.FC<ITodoForm> = ({ todo, onSuccess }) => {
  const router = useRouter();
  const [title, setTitle] = useState(todo?.todo || "");
  const [completed, setCompleted] = useState(todo?.completed || false);
  const queryClient = useQueryClient();
  const formRef = useRef<HTMLFormElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      // Update existing todo
      updateMutation.mutate({
        id: todo.id,
        updates: { todo: title, completed },
      });
    } else {
      // Create a new todo
      createMutation.mutate({ todo: title, completed, userId: 1 });
    }
  };

  const handleCancel = () => {
    router.push("/")
  };

  return (
    <>
     <form onSubmit={handleSubmit} className="space-y-6">
    <div className="flex justify-between items-center mb-4">

          <Button variant="text" className="text-gray-900" onClick={handleCancel}>
            Cancel
          </Button>
          <Button 
              variant="text"
               className="text-gray-900"
               type="submit">
            {todo ? 'Update task' : 'Add task'}
          </Button>
            </div>
 
    <TextField
      variant="standard"
      placeholder="Write your task"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      InputProps={{ disableUnderline: true }}
      fullWidth
      className="text-gray-400 text-2xl"
    />

    <FormControlLabel
      control={
        <Checkbox
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      }
      label="Completed"
    />

    {/* Options */}
    <div className="divide-y divide-gray-200">
      <div className="flex justify-between items-center py-4">
        <span className="text-gray-500 text-sm font-semibold">Alarm</span>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">None</span>
          <IconButton size="small">
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className="flex justify-between items-center py-4">
        <span className="text-gray-500 text-sm font-semibold">Reminder</span>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">10:00 am</span>
          <IconButton size="small">
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className="flex justify-between items-center py-4">
        <span className="text-gray-500 text-sm font-semibold">Priority</span>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">Low</span>
          <IconButton size="small">
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    </div>
    </form>
    </>
  );
};

export default TodoForm;
