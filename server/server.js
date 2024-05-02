require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema/index'); 

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer().then(() => {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () =>
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  );
}).catch(error => {
  console.error('Error starting Apollo Server:', error);
});