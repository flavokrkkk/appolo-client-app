import { FC } from "react";
import { ITask } from "../../../entities/todo/types/types";
import TaskCard from "./todoCard";

interface ITaskList {
  tasksPromise: Array<ITask>;
}

const TaskList: FC<ITaskList> = ({ tasksPromise }) => {
  const tasks = tasksPromise;
  return (
    <section className="flex flex-col space-y-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </section>
  );
};

export default TaskList;
