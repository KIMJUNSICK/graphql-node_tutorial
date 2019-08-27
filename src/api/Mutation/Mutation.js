require("dotenv").config();
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../../../generated/prisma-client";
import { getUserId } from "../../utils";

export default {
  Mutation: {
    signUp: async (_, args) => {
      const { email, password, name } = args;
      const passwordHash = await bcrypt.hash(password, 10);
      const user = prisma.createUser({
        email,
        name,
        password: passwordHash
      });
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      return {
        token,
        user
      };
    },
    logIn: async (_, args) => {
      const { email, password } = args;
      const user = await prisma.user({ email });
      if (!user) {
        throw new Error("No such user found");
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Invalid password");
      }

      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      return {
        token,
        user
      };
    },
    post: async (_, args, { request }) => {
      const userId = await getUserId(request);
      const { url, description } = args;
      return prisma.createLink({
        url,
        description,
        postBy: { connect: { id: userId } }
      });
    }
  }
};
