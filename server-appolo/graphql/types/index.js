import { mergeTypes } from "merge-graphql-schemas";
import User from "./User/";
import Message from "./Message/";

const typeDefs = [User, Message];

export default mergeTypes(typeDefs, { all: true });