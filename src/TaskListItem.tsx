import { PropsWithChildren } from 'react';

export function TaskListItem({ children }: PropsWithChildren) {
  return (
    <div>
      <li>{children}</li>
    </div>
  );
}
