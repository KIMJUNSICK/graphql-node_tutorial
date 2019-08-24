import { GraphQLServer } from "graphql-yoga";

let links = [
  {
    id: "link-0",
    description: "www.junsik.com",
    url: "Fullstack tutorial for GraphQL"
  }
];

const typeDefs = `
    type Query {
        info:String!
        feed:[Link!]!
    }

    type Link {
        id:ID!
        description: String!
        url:String!
    }
`;

const resolvers = {
  Query: {
    info: () => "junsik! it's APIs of a Hackernews Clone!",
    feed: () => links
  },
  Link: {
    id: parent => parent.id,
    description: parent => parent.description,
    url: parent => parent.url
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() =>
  console.log("Server is running on ✅  http://localhost:4000")
);
