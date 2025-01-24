"use client";

import { DataGrid } from '@mui/x-data-grid';
import { useTodosQuery } from '@hooks/useTodosQuery';
import { Button } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo } from '@services/todosService';
import Link from 'next/link';

const TodoList = () => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({ mutationFn: deleteTodo, 
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };
  const { data: todos, isLoading, error } = useTodosQuery();

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'todo',
      headerName: 'Title',
      width: 250,
      renderCell: (params: any) => (
        <Link href={`/todos/${params.row.id}`} className="text-blue-500 underline">
          {params.value}
        </Link>
      ),
    },
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
    <div style={{ height: 400, width: '800px' }}>
      <DataGrid 
      rows={todos || []}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
    
    </div>
  );
};

export default TodoList;
