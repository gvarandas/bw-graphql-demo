const { gql } = require('apollo-server');

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const schema = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  type Post {
    id: ID!
    text: String!
    timestamp: Int!
    author: User
  }

  type User {
    id: ID!
    name: String!
    handle: String!
    profilePicture: String!
    posts: [Post]
  }

  # The "Query" type is the root of all GraphQL queries.
  type Query {
    posts: [Post]
    post(id: String!): Post
    users: [User]
    user(id: String!): User
  }

  # User Mutation (addUser)
  type Mutation {
    addUser(name: String!, handle: String!, profilePicture: String!): User
  }
`;

module.exports = schema;
