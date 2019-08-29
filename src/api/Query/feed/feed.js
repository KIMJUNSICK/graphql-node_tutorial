import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    feed: (_, args) => {
      const { filter, skip, first } = args;
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
        },
        skip,
        first,
        orderBy: "createdAt_DESC"
      });
    }
  }
};
