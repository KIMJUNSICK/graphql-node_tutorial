import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import { prisma } from "../generated/prisma-client";

const server = new GraphQLServer({
  schema,
  context: { prisma }
});

server.express.use(logger("dev"));

server.start(() =>
  console.log("Server is running on ✅  http://localhost:4000")
);
