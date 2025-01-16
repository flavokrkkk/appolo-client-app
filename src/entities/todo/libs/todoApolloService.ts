import { gql } from "@apollo/client";

class TodoApolloService {
  public getAllTodo() {
    return gql`
      query AllTodos {
        todos: allTasks {
          id
          title
          isDone
          userId
        }
      }
    `;
  }
}

export const { getAllTodo } = new TodoApolloService();
