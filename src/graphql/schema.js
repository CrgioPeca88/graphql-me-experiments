// Dependencies
import { makeExecutableSchema } from 'graphql-tools';

// Assets
import { resolvers } from './resolvers';

const typeDefs = `
  type Query {
    greet(name: String!): String
    getTasks: [_Task]
  }

  type _Task {
    _id: ID
    title: String
    description: String
    completed: Boolean
  }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
