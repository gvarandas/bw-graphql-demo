const { ApolloServer } = require('apollo-server');
const schema = require('./schema/schema');
let { CATEGORIES, BILLS } = require('./schema/mock');

let nextBillId = 9;
let nextCategoryId = 4;

const resolvers = {
  Query: {
    bills: () => BILLS,
    bill: (obj, { id }) => BILLS.find(bill => bill.id === id),
    categories: () => CATEGORIES,
    category: (obj, { id }) => CATEGORIES.find(category => category.id === id),
  },
  Mutation: {
    addBill: (root, { categoryId, date, value }) => {
      const newBill = { id: nextBillId++, date, value, categoryId };
      BILLS = BILLS.concat([newBill]);
      return newBill;
    },
    addCategory: (root, { name }) => {
      const newCategory = { id: nextCategoryId++, name };
      CATEGORIES.concat([newCategory]);
      return newCategory;
    },
  },
  Bill: {
    category: bill =>
      CATEGORIES.find(category => category.id === bill.categoryId),
  },
  Category: {
    bills: category => BILLS.filter(bill => bill.categoryId === category.id),
  },
};

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
