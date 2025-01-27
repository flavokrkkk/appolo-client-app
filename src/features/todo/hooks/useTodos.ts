import { useQuery } from "@apollo/client";
import { getAllTodo } from "../../../entities/todo/libs/todoApolloService";
import { AllTodosQuery } from "../../../shared/libs/types/graphql/generated";

export const useTodos = () => {
  const { loading, data, error, refetch } = useQuery<AllTodosQuery>(
    getAllTodo()
  );

  return {
    refetch,
    loading,
    data: data?.todos,
    error,
  };
};
