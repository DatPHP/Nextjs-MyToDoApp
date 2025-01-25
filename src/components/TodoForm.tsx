"use client";

import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo, updateTodo } from "@services/todosService";
import { Todo } from "../types/todos";

interface ITodoForm {
  todo?: Todo; // For edit mode
  onSuccess?: () => void;
}

const TodoForm: React.FC<ITodoForm> = ({ todo, onSuccess }) => {
  const [title, setTitle] = useState(todo?.todo || "");
  const [completed, setCompleted] = useState(todo?.completed || false);
  const queryClient = useQueryClient();

  // Mutation for creating a todo
  const createMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
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
      <Button
        type="submit"
        variant="contained"
        color="primary"
        //disabled={createMutation?.isLoading || updateMutation?.isLoading}
      >
        {todo ? "Update Todo" : "Create Todo"}
      </Button>
    </form>
  );
};

export default TodoForm;
