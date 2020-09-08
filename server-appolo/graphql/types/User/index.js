export default `
  type User {
    id: String!
    firstname: String
    lastname: String!
    email: String!
    username: String!
  }
  type Query {
    user(id: String!): User
    users: [User]
  }
  type Mutation {
    addUser(id: String!, firstname: String!, lastname: String!, email: String!, username: String!): User
    editUser(id: String, firstname: String, lastname: String, email: String, username: String!): User
    deleteUser(id: String, username: String, email: String): User
  }
`;