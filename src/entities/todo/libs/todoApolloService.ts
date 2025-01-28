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

  public deleteTodo() {
    return gql`
      mutation RemoveTask($id: ID!) {
        removeTask(id: $id) {
          id
        }
      }
    `;
  }

  public updateTodo() {
    return gql`
      mutation UpdateTask($id: ID!, $isDone: Boolean) {
        updateTask(id: $id, isDone: $isDone) {
          id
          title
          isDone
          userId
        }
      }
    `;
  }
}

export const { getAllTodo, createTodo, deleteTodo, updateTodo } =
  new TodoApolloService();
