require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import { prisma } from "../generated/prisma-client";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, prisma })
});

server.express.use(logger("dev"));

server.start(() =>
  console.log(`Server is running on ✅  http://localhost:${PORT}`)
);
