export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type ListMetadata = {
  __typename?: "ListMetadata";
  count?: Maybe<Scalars["Int"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createManyTask?: Maybe<Array<Maybe<Task>>>;
  createManyUser?: Maybe<Array<Maybe<User>>>;
  createTask?: Maybe<Task>;
  createUser?: Maybe<User>;
  removeTask?: Maybe<Task>;
  removeUser?: Maybe<User>;
  updateTask?: Maybe<Task>;
  updateUser?: Maybe<User>;
};

export type MutationCreateManyTaskArgs = {
  data?: InputMaybe<Array<InputMaybe<TaskInput>>>;
};

export type MutationCreateManyUserArgs = {
  data?: InputMaybe<Array<InputMaybe<UserInput>>>;
};

export type MutationCreateTaskArgs = {
  createdAt: Scalars["Int"]["input"];
  isDone: Scalars["Boolean"]["input"];
  title: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

export type MutationCreateUserArgs = {
  email: Scalars["String"]["input"];
};

export type MutationRemoveTaskArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationRemoveUserArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateTaskArgs = {
  createdAt?: InputMaybe<Scalars["Int"]["input"]>;
  id: Scalars["ID"]["input"];
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
};

export type Query = {
  __typename?: "Query";
  Task?: Maybe<Task>;
  User?: Maybe<User>;
  _allTasksMeta?: Maybe<ListMetadata>;
  _allUsersMeta?: Maybe<ListMetadata>;
  allTasks?: Maybe<Array<Maybe<Task>>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
};

export type QueryTaskArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type Query_AllTasksMetaArgs = {
  filter?: InputMaybe<TaskFilter>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Query_AllUsersMetaArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryAllTasksArgs = {
  filter?: InputMaybe<TaskFilter>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sortField?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryAllUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  perPage?: InputMaybe<Scalars["Int"]["input"]>;
  sortField?: InputMaybe<Scalars["String"]["input"]>;
  sortOrder?: InputMaybe<Scalars["String"]["input"]>;
};

export type Task = {
  __typename?: "Task";
  createdAt: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  isDone: Scalars["Boolean"]["output"];
  title: Scalars["String"]["output"];
  userId: Scalars["String"]["output"];
};

export type TaskFilter = {
  createdAt?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt_lt?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["Int"]["input"]>;
  createdAt_neq?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_neq?: InputMaybe<Scalars["ID"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  isDone?: InputMaybe<Scalars["Boolean"]["input"]>;
  q?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  title_gt?: InputMaybe<Scalars["String"]["input"]>;
  title_gte?: InputMaybe<Scalars["String"]["input"]>;
  title_lt?: InputMaybe<Scalars["String"]["input"]>;
  title_lte?: InputMaybe<Scalars["String"]["input"]>;
  title_neq?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
  userId_gt?: InputMaybe<Scalars["String"]["input"]>;
  userId_gte?: InputMaybe<Scalars["String"]["input"]>;
  userId_lt?: InputMaybe<Scalars["String"]["input"]>;
  userId_lte?: InputMaybe<Scalars["String"]["input"]>;
  userId_neq?: InputMaybe<Scalars["String"]["input"]>;
};

export type TaskInput = {
  createdAt: Scalars["Int"]["input"];
  isDone: Scalars["Boolean"]["input"];
  title: Scalars["String"]["input"];
  userId: Scalars["String"]["input"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
};

export type UserFilter = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  email_gt?: InputMaybe<Scalars["String"]["input"]>;
  email_gte?: InputMaybe<Scalars["String"]["input"]>;
  email_lt?: InputMaybe<Scalars["String"]["input"]>;
  email_lte?: InputMaybe<Scalars["String"]["input"]>;
  email_neq?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_neq?: InputMaybe<Scalars["ID"]["input"]>;
  ids?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  q?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserInput = {
  email: Scalars["String"]["input"];
};

export type AllTodosQueryVariables = Exact<{ [key: string]: never }>;

export type AllTodosQuery = {
  __typename?: "Query";
  todos?: Array<{
    __typename?: "Task";
    id: string;
    title: string;
    isDone: boolean;
    userId: string;
  } | null> | null;
};
