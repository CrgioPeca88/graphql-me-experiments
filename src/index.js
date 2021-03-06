// Dependencies
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

// Assets
import schema from './graphql/schema';
import { connectToMongoDB } from './mongodb/database-config'

console.log('==> Starting NODE server with ExpressJs....');
console.log('==> Starting connection to MongoDB....');

connectToMongoDB();

const app = express();
app.get('/', (req, res) => {
    res.json({
      message: 'Hello world GRAPHQL!'
    })
});
app.use('/graphql', graphqlHTTP({
  rootValue: {
    hello: () => 'Hello world GRAPHQL! USE'
  },
  graphiql: true,
  schema: schema,
  context: {
    messageId: 'context messageId test!'
  }
}));
app.listen(3000, () => console.log('==> OK, Server launched on port: 3000'));
