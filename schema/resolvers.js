let { POSTS, USERS } = require('./mock');

let nextUserId = 4;
// let nextCategoryId = 4;

const resolvers = {
  Query: {
    posts: () => POSTS,
    post: (obj, args) => POSTS.find(post => post.id === args.id),
    users: () => USERS,
    user: (obj, args) => USERS.find(user => user.id === args.id),
  },
  Mutation: {
    addUser: (root, args) => {
      const newUser = {
        id: String(nextUserId++),
        name: args.name,
        handle: args.handle,
        profilePicture: args.profilePicture,
      };
      USERS.push(newUser);
      return newUser;
    },
    // addCategory: (root, { name }) => {
    //   const newCategory = { id: (nextCategoryId++).toString(), name };
    //   CATEGORIES = CATEGORIES.concat([newCategory]);
    //   return newCategory;
    // },
  },
  Post: {
    author: post => {
      const postAuthor = USERS.find(user => user.id === post.authorId);
      return postAuthor;
    },
  },
  User: {
    posts: user => POSTS.filter(post => post.authorId === user.id),
  },
};

module.exports = resolvers;
