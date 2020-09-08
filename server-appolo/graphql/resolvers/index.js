import { mergeResolvers } from "merge-graphql-schemas";
import User from "./User/";
import Message from "./Message/";

const resolvers = [User, Message];

export default mergeResolvers(resolvers);