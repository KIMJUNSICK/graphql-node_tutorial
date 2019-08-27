require("dotenv").config();
import jwt from "jsonwebtoken";

export const getUserId = request => {
  const Authorization = request.headers.authorization;
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    return userId;
  }
};
