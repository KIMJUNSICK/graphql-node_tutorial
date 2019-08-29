import { prisma } from "../../../../generated/prisma-client";
import { getUserId } from "../../../utils";

export default {
  Mutation: {
    vote: (_, args, { request }) => {
      const userId = getUserId(request);
      const { linkId } = args;
      return prisma.createVote({
        link: { connect: { id: linkId } },
        user: { connect: { id: userId } }
      });
    }
  }
};
