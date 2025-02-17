import { FormEvent, useState } from 'react';

type TaskCreateProps = {
  onCreateTask: (taskName: string) => void;
};

export function TaskCrateInput({ onCreateTask }: TaskCreateProps) {
  const [taskName, setTaskName] = useState('');

  const handleCreateTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTaskName = taskName.trim(); // Prohibits to send empty string in the input

    if (!trimmedTaskName) return;

    onCreateTask(trimmedTaskName);
    setTaskName('');
  };

  return (
    <form onSubmit={handleCreateTask}>
      <label htmlFor='task-input'>Create Task:</label>
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        id='task-input'
        type='text'      
        />
      <button>Create</button>
    </form>
  );
}
