import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { createTodo, updateTodo } from '../services/todosService';
import { Todo } from '../types/todos';

interface TodoFormProps {
  todo?: Todo; // For edit mode
  onSuccess?: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ todo, onSuccess }) => {
  const [title, setTitle] = useState(todo?.todo || '');
  const [completed, setCompleted] = useState(todo?.completed || false);
  const queryClient = useQueryClient();

  const mutation = useMutation(todo ? updateTodo : createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      onSuccess?.();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      mutation.mutate({ id: todo?.id, updates: { todo: title, completed } });
    } else {
      mutation.mutate({ todo: title, completed, userId: 1 }); // Assume userId is 1
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
      <Button type="submit" variant="contained" color="primary">
        {todo ? 'Update Todo' : 'Create Todo'}
      </Button>
    </form>
  );
};

export default TodoForm;
