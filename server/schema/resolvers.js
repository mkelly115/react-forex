const { User, Account } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return await User.findOne({ _id: context.user._id })
          .populate("account");
      }
      throw new AuthenticationError("You are not authenticated");
    },
    allUsers: async () => {
      return await User.find();
    },
    user: async (parent, args) => {
      return await User.findById(args.id)
        .populate("account");
    },
    balance: async (parent, args) => {
      const user = await User.findById(args.id);
      if (!user) {
        throw new Error("User not found");
      }
      return {
        value: user.balance.value,
        currency: user.balance.currency,
        change: user.balance.change,
        user: user._id
      };
    },
    currentCurrency: async (parent, args) => {
      const user = await User.findById(args.id);
      if (!user) {
        throw new Error("User not found");
      }
      return {
        value: user.currentCurrency.value,
        currency: user.currentCurrency.currency,
        change: user.currentCurrency.change,
        user: user._id
      };
    }
  },

  Mutation: {
    login: async (_, { email, password }) => {
      // Implementation for login mutation
    },
    addUser: async (_, { input }) => {
      // Implementation for addUser mutation
    },
    addToBalance: async (_, { userId, input }) => {
      // Implementation for addToBalance mutation
    }
  }
};

module.exports = resolvers;