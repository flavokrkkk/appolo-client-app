import { useMutation } from "@apollo/client";
import { deleteTodo } from "../../../entities/todo/libs/todoApolloService";
import { useTodos } from "./useTodos";

export const useDeleteTodo = () => {
  const { refetch } = useTodos();
  const [mutation, { loading, error }] = useMutation(deleteTodo(), {
    onCompleted: () => {
      refetch();
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
