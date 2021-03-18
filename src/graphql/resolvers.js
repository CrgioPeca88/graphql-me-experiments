// Assets
import { tasksHandler } from '../tasks';

export const resolvers = {
    Query: {
      greet: (root, args) => {
        return `Hi ${args.name}, GRAPHQL greet you!`;
      },
      getTasks: () => {
        return tasksHandler.getTasks();
      }
    },
    Mutation: {
      createTask: (_, { input }) => {
        return tasksHandler.createTask(input);
      }
    }
}
