import { Checkbox, Card, CardContent, Typography } from '@mui/material';

type TodoCardProps = {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number, completed: boolean) => void;
};

const TodoCard: React.FC<TodoCardProps> = ({ id, title, completed, onToggle }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Checkbox
          checked={completed}
          onChange={() => onToggle(id, !completed)}
        />
      </CardContent>
    </Card>
  );
};

export default TodoCard;
