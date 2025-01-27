import { FC } from "react";
import TaskCard from "./todoCard";

interface ITaskList {
  tasks:
    | ({
        __typename?: "Task";
        id: string;
        title: string;
        isDone: boolean;
        userId: string;
      } | null)[]
    | null
    | undefined;
}

const TaskList: FC<ITaskList> = ({ tasks }) => {
  return (
    <section className="flex flex-col space-y-2">
      {tasks?.map((task) => (
        <TaskCard key={task?.id} task={task} />
      ))}
    </section>
  );
};

export default TaskList;
