// Dependencies
import { makeExecutableSchema } from 'graphql-tools';

// Assets
import { resolvers } from './resolvers';

const typeDefs = `
  type Query {
    greet(name: String!): String
    getTasks: [_Task]
  }
  type Mutation {
    createTask(input: _TaskI): _Task
  }

  type _Task {
    _id: ID
    title: String
    description: String
    completed: Boolean
  }

  input _TaskI {
    title: String!
    description: String!
    completed: Boolean!
  }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
