import { FC } from "react";
import { useDeleteTodo } from "../hooks/useDeleteTodo";

interface ITaskCard {
  task:
    | ({
        __typename?: "Task";
        id: string;
        title: string;
        isDone: boolean;
        userId: string;
      } | null)
    | null
    | undefined;
}

const TaskCard: FC<ITaskCard> = ({ task }) => {
  const { handleDeleteTodo } = useDeleteTodo();
  return (
    <div className="p-5 flex justify-between items-center cursor-pointer border bg-rose-100 border-rose-600 rounded-lg">
      <h4>{task?.title}</h4>
      <form>
        <input type="hidden" name="taskId" value={task?.id} />
        <button
          type="submit"
          value={task?.id}
          onClick={handleDeleteTodo}
          className="p-2 flex justify-center px-5 border bg-rose-400 border-rose-600 rounded-lg"
        >
          Удалить
        </button>
      </form>
    </div>
  );
};

export default TaskCard;
