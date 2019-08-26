import { prisma } from "../../../generated/prisma-client";

export default {
  Query: {
    feed: () => prisma.links()
  }
};
