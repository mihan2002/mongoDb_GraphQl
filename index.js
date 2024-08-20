const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const MDB =
  "mongodb+srv://w1953506:72ospsW8eyhYA4nX@cluster0.rfojrum.mongodb.net/";

const typeDefs = require("./graphQl/typeDefs");
const resolvers = require("./graphQl/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose.connect(MDB, { useNewUrlParser: true }).then(() => {
  console.log("goda");
  return server.listen({ port: 5000 });
});
