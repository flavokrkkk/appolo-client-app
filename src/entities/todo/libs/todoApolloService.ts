import { gql } from "@apollo/client";
export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      title
    }
  }
`;
// class TodoApolloService {
//   public getAllTodo() {
//     return gql`
//       query AllTodos {
//         todos: allTasks {
//           id
//           title
//           isDone
//           userId
//         }
//       }
//     `;
//   }
// }

// export const { getAllTodo } = new TodoApolloService();
