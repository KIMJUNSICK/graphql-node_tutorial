import { prisma } from "../../generated/prisma-client";

export default {
  Link: {
    postBy: ({ id }) => prisma.link({ id }).postBy(),
    votes: ({ id }) => prisma.link({ id }).votes(),
    votesCount: ({ id }) =>
      prisma
        .votesConnection({
          where: { link: { id } }
        })
        .aggregate()
        .count()
  },
  User: {
    links: ({ id }) => prisma.user({ id }).links()
  },
  Vote: {
    user: ({ id }) => prisma.vote({ id }).user(),
    link: ({ id }) => prisma.vote({ id }).link()
  }
};
