import { useMutation } from "@apollo/client";
import {
  deleteTodo,
  getAllTodo,
} from "../../../entities/todo/libs/todoApolloService";

export const useDeleteTodo = () => {
  const [mutation, { loading, error }] = useMutation(deleteTodo(), {
    refetchQueries: [{ query: getAllTodo() }],
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
