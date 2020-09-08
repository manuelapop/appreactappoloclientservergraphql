export default `
  type Message {
    id: String!
    username: String!
    message: String!
  }
  type Query {
    message(id: String!): Message
    messages: [Message]
  }
  type Mutation {
    addMessage(id: String!, username: String!, message: String!): Message
    editMessage(id: String, message: String!): Message
    deleteMessage(id: String, username: String, message: String): Message
  }
`;