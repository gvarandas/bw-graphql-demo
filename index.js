const { ApolloServer } = require('apollo-server');
const schema = require('./schema/schema');
const resolvers = require('./schema/resolvers');

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  engine: process.env.ENGINE_API_KEY && {
    apiKey: process.env.ENGINE_API_KEY,
  },
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`🚀  Server ready at ${url}`);
});
