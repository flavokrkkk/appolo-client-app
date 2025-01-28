import { useMutation } from "@apollo/client";
import {
  getAllTodo,
  updateTodo,
} from "../../../entities/todo/libs/todoApolloService";
import {
  AllTodosQuery,
  Task,
} from "../../../shared/libs/types/graphql/generated";

export const useUpdateTodos = () => {
  const [updateTask, { loading, error }] = useMutation(updateTodo(), {
    update: (cache, { data: { updateTask } }) => {
      const result = cache.readQuery<{
        todos: AllTodosQuery["todos"] | null;
      }>({ query: getAllTodo() });

      if (result && result.todos) {
        const todos = result.todos;

        cache.writeQuery({
          query: getAllTodo(),
          data: {
            todos: [
              ...todos.map((el) =>
                el?.id === updateTask.id ? { ...updateTask } : el
              ),
            ],
          },
        });
      } else {
        throw new Error("Not found Todos");
      }
    },
  });

  const handleUpdateTask = ({
    id,
    isDone,
  }: {
    id: Task["id"];
    isDone: boolean;
  }) => {
    updateTask({ variables: { isDone: !isDone, id: id } });
  };

  return {
    error,
    loading,
    handleUpdateTask,
  };
};
