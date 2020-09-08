// The User schema.
import Message from "../../../models/Message";

export default {
  Query: {
    message: (root, args) => {
      return new Promise((resolve, reject) => {
        Message.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    messages: () => {
      return new Promise((resolve, reject) => {
        Message.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addMessage: (root, { id, username, message }) => {
      const newMessage = new Message({ id, username, message });

      return new Promise((resolve, reject) => {
        newMessage.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editMessage: (root, { id, message }) => {
      return new Promise((resolve, reject) => {
        Message.findOneAndUpdate({ id }, { $set: { message} }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteMessage: (root, args) => {
      return new Promise((resolve, reject) => {
        Message.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};