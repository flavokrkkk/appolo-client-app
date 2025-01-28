import { useMutation } from "@apollo/client";
import { deleteTodo } from "../../../entities/todo/libs/todoApolloService";

export const useDeleteTodo = () => {
  const [mutation, { loading, error }] = useMutation(deleteTodo(), {
    update: (caches, { data: { removeTask } }) => {
      caches.modify({
        fields: {
          allTasks(currentTodos: readonly { __ref: string }[]) {
            return currentTodos.filter(
              (todo) => todo.__ref !== `Task:${removeTask.id}`
            ) as { __ref: string }[];
          },
        },
      });
    },
  });

  const handleDeleteTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!event.currentTarget.value) throw new Error("Is  not valid value!");

    mutation({
      variables: { id: event.currentTarget.value },
    });
  };

  return {
    error,
    loading,
    handleDeleteTodo,
  };
};
