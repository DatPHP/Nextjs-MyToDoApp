import { DataGrid } from '@mui/x-data-grid';
import { useTodosQuery } from '../hooks/useTodosQuery';
import { Button } from '@mui/material';
import { useMutation, useQueryClient } from 'react-query';
import { deleteTodo } from '../services/todosService';

const TodoList = () => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries('todos'),
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };
  const { data: todos, isLoading, error } = useTodosQuery();

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'todo', headerName: 'Title', width: 250 },
    {
      field: 'completed',
      headerName: 'Completed',
      width: 150,
      renderCell: (params: any) => (params.value ? 'Yes' : 'No'),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      renderCell: (params: any) => (
        <Button
          variant="outlined"
          color="error"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading todos!</p>;

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={todos} columns={columns} pagination pageSizeOptions={[5]} />
    </div>
  );
};

export default TodoList;
