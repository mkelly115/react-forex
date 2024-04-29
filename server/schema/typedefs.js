const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input: AddBalance {
    value: integer!
    currency: string!
  }

  type TotalBalance {
      value: integer!
      currency: String!
      change: String
      user: ID!
    }
  
  type CurrencyBalance {
    value: integer!
    currency: String!
    change: String
    user: ID!
  }

  type Query {
   me: User
   user: [User]
   balance(id: ID!): TotalBalance
   currentCurrency(id: ID!): CurrencyBalance

  }

  type Mutation {
    login(email: String!, password: String!)
    addUser(input: UserInput!)
    addToBalance(userId: ID!, input: AddBalance): TotalBalance
  }
`;

module.exports = typeDefs;