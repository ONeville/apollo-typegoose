import { ApolloServer } from "apollo-server";
import connect from "./db-connect";
import { typeDefs, resolvers, serviceMapper } from "./di-mapper";

const PORT_ID = 8080;

connect("uri");
const server = new ApolloServer({
  typeDefs: [...typeDefs],
  resolvers: [...resolvers],
  dataSources: () => ({
    ...serviceMapper
  }),
  introspection: true,
  playground: {
    endpoint: "/graphql/source"
  }
});

server.listen(
  {
    port: PORT_ID,
    url: "/apix/playground"
  },
  () => console.log(`Server is running on http://localhost:${PORT_ID}`)
);
