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
    teamId: ID
  }

    type Query {
    fill out later
  }

  type Mutation {
    fill out later
  }
`;

module.exports = typeDefs;