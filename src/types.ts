export type Priority = 'unnecessary' | 'necessary' | 'crucial';

export type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  priority?: Priority;
};
