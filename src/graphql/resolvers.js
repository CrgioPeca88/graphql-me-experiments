// Assets
import { tasksHandler } from '../tasks';
import User from '../mongodb/models/User';

export const resolvers = {
    Query: {
      greet: (root, args, ctx) => {
        console.log("CONTEXT --> ", ctx);
        return `Hi ${args.name}, GRAPHQL greet you!`;
      },
      getTasks: (_, args, ctx) => {
        return tasksHandler.getTasks();
      }
    },
    Mutation: {
      createTask: (_, { input }) => {
        return tasksHandler.createTask(input);
      },
      createUser: async(_, { input }) => {
        const newUser = new User(input);
        await newUser.save();
        return newUser;
      }
    }
}
