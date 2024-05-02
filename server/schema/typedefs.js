const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    balance: String
    currentCurrency: String
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input AddBalance {
    value: String!
    currency: String!
  }

  type TotalBalance {
    value: String!
    currency: String!
    change: String
    user: ID!
  }
  
  type CurrencyBalance {
    value: String!
    currency: String!
    change: String
    user: ID!
  }

  type Query {
    me: User
    user(id: ID!): User
    balance(id: ID!): TotalBalance
    currentCurrency(id: ID!): CurrencyBalance
    allUsers: [User] 
  }

  type Mutation {
    login(email: String!, password: String!): String
    addUser(input: UserInput!): User
    addToBalance(userId: ID!, input: AddBalance): TotalBalance
  }
`;

module.exports = typeDefs;