// pages/api/graphql.js
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import gql from "graphql-tag";
import { categories, products } from "./utils/data";

// Define your schema
const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    categoryId: ID!
    category: [Category!]!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    hello: () => "hello world!!",
    products: () => products,
    product: (_: any, args: { id: string }) =>
      products.find((el) => el.id === args.id),
    categories: (c: any, g: any, ctx: any) => {
    //   console.log(ctx.s());
      return ctx.s().categories;
    },

    category: (p: any, args: { id: any }, ctx: any) => {
      return categories.find((el) => el.id === args.id);
    },
  },
  Category: {
    products: (p: any, args: { id: any }, ctx: any) => {
      console.log(p);
      return products.filter((el) => el.categoryId === p.id);
    },
  },
  Product: {
    category: (p: any, args: { id: any }, ctx: any) => {
      //   console.log(ctx);
      return categories.filter((el) => el.id === p.categoryId);
    },
  },
};

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Export the handler for Next.js
export default startServerAndCreateNextHandler(server, {
  context: async () => ({
    s: () => ({ categories, products }),
  }),
});

/*

query ExampleQuery($helloId: ID!) {
  hello(id: $helloId)
}

*/
