import { useMutation } from "@apollo/client";
import { createTodo } from "../../../entities/todo/libs/todoApolloService";
import { FormEvent } from "react";
import { useTodos } from "./useTodos";

export const useCreateTodo = () => {
  const { refetch } = useTodos();
  const [createTask, { loading, error }] = useMutation(createTodo(), {
    onCompleted: () => {
      refetch();
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
