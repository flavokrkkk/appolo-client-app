import { Suspense } from "react";
import TaskForm from "../../../features/todo/ui/todoForm";
import TaskList from "../../../features/todo/ui/todoList";

const TaskPage = () => {
  return (
    <div className="space-y-6 p-10">
      <TaskForm />

      <Suspense
        fallback={
          <div className="border rounded-full border-dashed w-5 h-5 border-white animate-spin" />
        }
      >
        <TaskList
          tasksPromise={[
            {
              id: "b251811d-5c7e-4dbc-8c48-cd76e19b93cf",
              isDone: false,
              title: "dwdwwd",
              createdAt: 1736433324396,
              userId: "fa70d4b1-be0d-4438-b9a9-b3f48c3e5876",
            },
            {
              id: "d8d4f832-9850-4b6a-925e-c8f28d523148",
              isDone: false,
              title: "dwdwdw",
              createdAt: 1736447661387,
              userId: "fa70d4b1-be0d-4438-b9a9-b3f48c3e5876",
            },
            {
              id: "25cc9cea-4e75-4b96-88d6-71e8aa28ba0a",
              isDone: false,
              title: "dwwwwwww",
              createdAt: 1736447663263,
              userId: "fa70d4b1-be0d-4438-b9a9-b3f48c3e5876",
            },
            {
              id: "b3fccf23-a391-4e6d-a0ee-0e434fb11e72",
              isDone: false,
              title: "dw",
              createdAt: 1736447664349,
              userId: "fa70d4b1-be0d-4438-b9a9-b3f48c3e5876",
            },
          ]}
        />
      </Suspense>
    </div>
  );
};

export default TaskPage;
