require("dotenv").config();
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const mongoose = require("mongoose");
const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const typeDefs = require("./graphql/schemas");
const resolvers = require("./graphql/resolvers");
// const typeDefs = gql`
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;
// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();

server.applyMiddleware({ app });

// #8 Set the port that the Express application will listen to

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
