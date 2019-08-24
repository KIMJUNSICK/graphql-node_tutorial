import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
type Query {
    info:String!
}
`;

const resolvers = {
  Query: {
    info: () => "junsik! you're so sexy!"
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() =>
  console.log("Server is running on ✅  http://localhost:4000")
);
