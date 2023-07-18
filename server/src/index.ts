import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./typeDefs.js";
import mongoose from "mongoose";
import { verifyToken } from "./utils.js";
// import { config } from "dotenv";

// config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req, ...res }) => {
    let isAuthenticated = false;
    let token: string;
    try {
      const authHeader = req.headers.authorization || "";
      if (authHeader) {
        token = authHeader;
        const payload = await verifyToken(token);
        isAuthenticated = payload !== null ? true : false;
      }
    } catch (error) {
      console.log(`error: ${error}`);
    }
    return { ...res, req, auth: { isAuthenticated, token } };
  },
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
// const uri = `mongodb+srv://kavehhashemi:${environmentVariables.mongoPassword}@flashcards.dlkterc.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://kavehhashemi:${process.env.MONGOPASSWORD}@flashcards.dlkterc.mongodb.net/?retryWrites=true&w=majority`;
mongoose.set("strictQuery", true);
// const db = await mongoose.connect("mongodb://127.0.0.1:27017/flashcards", {});

const db = await mongoose.connect(uri);
console.info("📚 Connected to db", db?.connections[0]?.host);
