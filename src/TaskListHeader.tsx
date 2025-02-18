type TypeTaskListHeaderProps = {
  count: number;
};

export function TaskListHeader({ count }: TypeTaskListHeaderProps) {
  return (
    <div>
      <h2>Total Tasks: ({count}) </h2>
    </div>
  );
}
