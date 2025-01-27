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

  public createTodo() {
    return gql`
      mutation AddTask(
        $title: String!
        $userId: String!
        $isDone: Boolean!
        $createdAt: Int!
      ) {
        createTask(
          title: $title
          userId: $userId
          isDone: $isDone
          createdAt: $createdAt
        ) {
          id
          title
          isDone
          userId
        }
      }
    `;
  }
}

export const { getAllTodo, createTodo } = new TodoApolloService();
