import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Create the User Schema.
const UserSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
});

const User = mongoose.model("User", UserSchema);

export default User;