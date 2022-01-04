import type { Resolvers } from "@gql-test/type-resolver";
import { ApolloServerPluginDrainHttpServer, Config } from "apollo-server-core";
import { ApolloServer } from "apollo-server-fastify";
import { ApolloServerPlugin } from "apollo-server-plugin-base";
import { Chance } from "chance";
import type { FastifyInstance } from "fastify";
import fastify from "fastify";
import fastifyStatic from "fastify-static";
import { readFileSync } from "fs";
import { join } from "path";

const chance = new Chance();

function fastifyAppClosePlugin(app: FastifyInstance): ApolloServerPlugin {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await app.close();
        },
      };
    },
  };
}

async function startApolloServer(
  typeDefs: Config["typeDefs"],
  resolvers: Config["resolvers"]
) {
  const app = fastify();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      fastifyAppClosePlugin(app),
      ApolloServerPluginDrainHttpServer({ httpServer: app.server }),
    ],
  });

  await server.start();
  app.register(server.createHandler());
  app.register(fastifyStatic, {
    root: join(__dirname, "../app/dist"),
  });
  await app.listen(4000);
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

const resolvers: Resolvers = {
  Query: {
    launches() {
      return [{ id: chance.guid(), isBooked: true, time: new Date() }];
    },
  },
  Mutation: {
    bookTrips(parent, args, context, info) {
      return {
        success: args.launchIds.length % 2 === 0,
      };
    },
  },
};

startApolloServer(
  readFileSync("../../schema.graphql", { encoding: "utf8" }),
  resolvers
);
