const {GraphQLServer} = require('graphql-yoga');
const path = require('path');
const resolvers = require('./resolvers');

const graphqlServer = new GraphQLServer({
    typeDefs: path.resolve(__dirname, "schema.graphql"),
    resolvers,
});


graphqlServer.start({
    cors: true,
    port: 4001,
});
