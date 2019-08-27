import { prisma } from "../../generated/prisma-client";

export default {
  Link: {
    postBy: ({ id }) => {
      console.log(id);
      return prisma.link({ id }).postBy();
    }
  },
  User: {
    links: ({ id }) => prisma.user({ id }).links()
  }
};
