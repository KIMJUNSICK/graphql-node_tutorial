import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    feed: (_, args) => {
      const { filter } = args;
      return prisma.links({
        where: {
          OR: [
            {
              url_contains: filter
            },
            {
              description_contains: filter
            }
          ]
        }
      });
    }
  }
};
