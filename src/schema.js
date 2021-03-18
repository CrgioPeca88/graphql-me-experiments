// Dependencies
import { makeExecutableSchema } from 'graphql-tools';

// Assets
import { resolvers } from './resolvers';

const typeDefs = `
  type Query {
    hello: String
  }
`;

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});
