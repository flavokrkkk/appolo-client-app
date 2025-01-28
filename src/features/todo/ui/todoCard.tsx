import { FC, useCallback } from "react";
import { useDeleteTodo } from "../hooks/useDeleteTodo";
import { useUpdateTodos } from "../hooks/useUpdateTodo";

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
  const { handleUpdateTask } = useUpdateTodos();

  const handleUpdateFieldTask = useCallback(() => {
    if (!task) throw new Error(`Invalid task!`);
    handleUpdateTask({ id: task?.id, isDone: task?.isDone });
  }, [handleUpdateTask, task]);

  return (
    <div className="p-5 flex justify-between items-center cursor-pointer border bg-rose-100 border-rose-600 rounded-lg">
      <h4>{task?.title}</h4>
      <form>
        <input
          type="checkbox"
          checked={task?.isDone}
          onChange={handleUpdateFieldTask}
        />
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
