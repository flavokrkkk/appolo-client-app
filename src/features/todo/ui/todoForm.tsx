import { memo } from "react";
import { useCreateTodo } from "../hooks/useCreateTodo";

const TaskForm = memo(() => {
  const { handleSubmit } = useCreateTodo();

  return (
    <section>
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Введите название.."
          className="outline-none p-3 px-5 border border-rose-600 rounded-lg"
        />
        <button
          type="submit"
          className="p-2 flex justify-center px-5 border bg-rose-400 border-rose-600 rounded-lg"
        >
          Add
        </button>
      </form>
    </section>
  );
});
export default TaskForm;
