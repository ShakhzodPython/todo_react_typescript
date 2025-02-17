import { useState } from 'react';

import { Task } from './types';
import { TaskCrateInput } from './TaskCreate';
import { TaskList } from './TaskList';

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
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
