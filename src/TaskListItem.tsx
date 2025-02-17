import { PropsWithChildren } from 'react';

// We can define props with a type, but using PropsWithChildren allows passing child elements
export function TaskListItem({ children }: PropsWithChildren) {
  return (
    <div>
      <li>{children}</li>
    </div>
  );
}
