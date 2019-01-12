const { gql } = require('apollo-server');

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const schema = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  type Category {
    id: ID!
    name: String!
    bills: [Bill]
  }

  type Bill {
    id: ID!
    date: String!
    value: Int!
    category: Category!
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    bills: [Bill]
    bill(id: String!): Bill
    categories: [Category]
    category(id: String!): Category
  }

  # Book Mutation (addBook)
  type Mutation {
    addBill(date: String!, value: Int!, categoryId: ID!): Bill
    addCategory(name: String!): Category
  }
`;

module.exports = schema;
