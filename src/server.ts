import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import { CategoryResolver } from './graphql/category/CategoryResolver'
import { VideoResolver } from './graphql/video/VideoResolver'

async function makeGraphQLServer () {
  const schema = await buildSchema({
    resolvers: [CategoryResolver, VideoResolver]
  })

  const server = new ApolloServer({ schema, cors: true })
  server.listen({ port: 4100 }, () => console.log('GraghQL server running'))
}

makeGraphQLServer()
