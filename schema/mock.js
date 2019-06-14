const POSTS = [
  { id: '1', text: 'This is post 1', timestamp: 1560480603323, authorId: '1' },
  { id: '2', text: 'This is post 2', timestamp: 1560480603323, authorId: '1' },
  { id: '3', text: 'This is post 3', timestamp: 1560480603323, authorId: '2' },
  { id: '4', text: 'This is post 4', timestamp: 1560480603323, authorId: '2' },
  { id: '5', text: 'This is post 5', timestamp: 1560480603323, authorId: '3' },
  { id: '6', text: 'This is post 6', timestamp: 1560480603323, authorId: '3' },
  { id: '7', text: 'This is post 7', timestamp: 1560480603323, authorId: '2' },
  { id: '8', text: 'This is post 8', timestamp: 1560480603323, authorId: '2' },
  { id: '9', text: 'This is post 9', timestamp: 1560480603323, authorId: '1' },
];

const USERS = [
  {
    id: '1',
    name: 'Johnny Author 1',
    handle: '@author1',
    profilePicture: 'https://i.imgur.com/0HMoeO2.jpg',
  },
  {
    id: '2',
    name: 'Author 2 McAllister',
    handle: '@mr_author2',
    profilePicture: 'https://i.imgur.com/0HMoeO2.jpg',
  },
  {
    id: '3',
    name: 'Doug "Author 3" Yang',
    handle: '@iamauthor3',
    profilePicture: 'https://i.imgur.com/0HMoeO2.jpg',
  },
];

module.exports = { POSTS, USERS };
