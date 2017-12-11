import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema';
import resolvers from './resolvers'

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const graphqlEndPoint = '/graphql';
var app = express();
app.use(graphqlEndPoint, bodyParser.json(), graphqlExpress({schema}))
app.use('/graphiql',graphiqlExpress({endpointURL:graphqlEndPoint}))
app.listen(3000)