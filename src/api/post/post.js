export default {
  Mutation: {
    post: async (_, args, { prisma }) => {
      const { url, description } = args;
      const newLink = await prisma.createLink({
        url,
        description
      });
      return newLink;
    }
  }
};
