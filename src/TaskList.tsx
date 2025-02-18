import { PropsWithChildren, ReactNode, useEffect, useState } from 'react';

type TypeTaskListProps = {
  header: ReactNode;
};

// We can define props with a type, but using PropsWithChildren allows passing child elements
export function TaskList({
  header,
  children,
}: PropsWithChildren<TypeTaskListProps>) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {header}
      <p>Seconds passed: {seconds}</p>
      <ul>{children}</ul>
    </div>
  );
}
