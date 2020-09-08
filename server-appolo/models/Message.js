import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create the User Schema.
const MessageSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
});

const Message = mongoose.model("Message", MessageSchema);

export default Message;