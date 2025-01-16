import { Suspense } from "react";
import TaskForm from "../../../features/todo/ui/todoForm";
import TaskList from "../../../features/todo/ui/todoList";
import { useTodos } from "../../../features/todo/hooks/useTodos";

const TaskPage = () => {
  const { data } = useTodos();
  return (
    <div className="space-y-6 p-10">
      <TaskForm />

      <Suspense
        fallback={
          <div className="border rounded-full border-dashed w-5 h-5 border-white animate-spin" />
        }
      >
        <TaskList tasksPromise={data} />
      </Suspense>
    </div>
  );
};

export default TaskPage;
