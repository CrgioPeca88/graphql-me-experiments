// Dependencies
import { makeExecutableSchema } from 'graphql-tools';

// Assets
import { resolvers } from './resolvers';

const typeDefs = `
  type Query {
    greet(name: String!): String
    getTasks: [_Task]
    getUsers: [_User]
  }
  type Mutation {
    createTask(input: _TaskI): _Task
    createUser(input: _UserI): _User
    deleteUser(_id: ID!): _User
    updateUser(_id: ID!, input: _UserI): _User
  }

  type _Task {
    _id: ID
    title: String
    description: String
    completed: Boolean
  }

  type _User {
    _id: ID
    firstname: String
    lastname: String
    email: String
    nickname: String
  }

  input _TaskI {
    title: String!
    description: String!
    completed: Boolean!
  }

  input _UserI {
    firstname: String!
    lastname: String
    email: String!
    nickname: String!
  }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
