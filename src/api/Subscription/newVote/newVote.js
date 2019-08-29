import { prisma } from "../../../../generated/prisma-client";

export default {
  Subscription: {
    newVote: {
      subscribe: () => {
        return prisma.$subscribe
          .vote({
            mutation_in: "CREATED"
          })
          .node();
      },
      resolve: payload => payload
    }
  }
};
