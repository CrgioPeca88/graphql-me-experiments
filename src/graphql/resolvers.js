// Assets
import { tasks } from '../tasks';

export const resolvers = {
    Query: {
      greet: (root, args) => {
        return `Hi ${args.name}, GRAPHQL greet you!`;
      },
      getTasks: () => {
        return tasks;
      }
    }
}
