import { useState } from 'react';

import { Task } from './types';
import { TaskCrateInput } from './TaskCreate';
import { TaskList } from './TaskList';
import { TaskListItem } from './TaskListItem';
import { TaskListHeader } from './TaskListHeader';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onCreateTask = (taskName: string) => {
    setTasks([
      ...tasks,
      { id: Date.now(), title: taskName, isCompleted: false },
    ]);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <TaskCrateInput onCreateTask={onCreateTask} />
      <TaskList header={<TaskListHeader count={tasks.length} />}>
        {tasks.map((task) => (
          <TaskListItem key={task.id}>{task.title}</TaskListItem>
        ))}
      </TaskList>
    </div>
  );
}

export default App;
