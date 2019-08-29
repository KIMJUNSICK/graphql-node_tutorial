import { prisma } from "../../../../generated/prisma-client";

export default {
  Subscription: {
    newLink: {
      subscribe: () => {
        return prisma.$subscribe
          .link({
            mutation_in: "CREATED"
          })
          .node();
      },
      resolve: payload => payload
    }
  }
};
