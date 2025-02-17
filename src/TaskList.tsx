import { TaskListItem } from './TaskListItem';
import { Task } from './types';

type TypeListProps = {
  tasks: Task[];
};

export function TaskList({ tasks }: TypeListProps) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <TaskListItem key={task.id}>{task.title}</TaskListItem>
        ))}
      </ul>
    </div>
  );
}
