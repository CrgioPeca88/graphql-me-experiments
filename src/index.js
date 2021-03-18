// Dependencies
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

// Assets
import schema from './graphql/schema';

console.log('==> Starting NODE server with ExpressJs....');
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
  schema: schema
}));

app.listen(3000, () => console.log('==> Server launched on port: 3000'));
