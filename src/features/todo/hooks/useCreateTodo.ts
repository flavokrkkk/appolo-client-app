import { useMutation } from "@apollo/client";
import {
  createTodo,
  getAllTodo,
} from "../../../entities/todo/libs/todoApolloService";
import { FormEvent } from "react";
import { AllTodosQuery } from "../../../shared/libs/types/graphql/generated";

export const useCreateTodo = () => {
  const [createTask, { loading, error }] = useMutation(createTodo(), {
    update: (cache, { data: { createTask } }) => {
      const result = cache.readQuery<{
        todos: Array<AllTodosQuery> | null;
      }>({ query: getAllTodo() });

      if (result && result.todos) {
        const todos = result.todos;

        cache.writeQuery({
          query: getAllTodo(),
          data: {
            todos: [createTask, ...todos],
          },
        });
      } else {
        console.log("No todos found");
      }
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = formData.get("title")?.toString() ?? "";

    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      userId: "a8709eaa-1eee-4a06-b34c-5be1a0f049a2",
      isDone: false,
      createdAt: Math.floor(new Date().getTime() / 1000),
    };

    createTask({
      variables: newTask,
    });
  };

  return {
    error,
    loading,
    handleSubmit,
  };
};
