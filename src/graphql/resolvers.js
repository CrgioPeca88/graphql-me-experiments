// Assets
import { tasksHandler } from '../tasks';
import User from '../mongodb/models/User';

const query = {
  Query: {
    greet: (root, args, ctx) => {
      console.log("CONTEXT --> ", ctx);
      return `Hi ${args.name}, GRAPHQL greet you!`;
    },
    getTasks: (_, args, ctx) => {
      return tasksHandler.getTasks();
    },
    getUsers: async() => {
      return await User.find();
    }
  }
}

const mutation = {
  Mutation: {
    createTask: (_, { input }) => {
      return tasksHandler.createTask(input);
    },
    createUser: async(_, { input }) => {
      const newUser = new User(input);
      await newUser.save();
      return newUser;
    },
    deleteUser: async(_, { _id }) => {
       return await User.findByIdAndDelete(_id);
    },
    updateUser: async(_, { _id, input }) => {
      return await User.findByIdAndUpdate(_id, input, {new: true});
    }
  }
}

export const resolvers = {
  ...query,
  ...mutation
}
