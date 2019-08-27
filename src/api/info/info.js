export default {
  Query: {
    info: (_, __, { request }) => {
      const Authorization = request.headers.authorization;
      console.log(Authorization.replace("Bearer ", ""));
      return null;
    }
  }
};
