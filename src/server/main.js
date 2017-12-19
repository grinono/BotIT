import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'

console.log('server starting')
// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling'
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
]

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`

// The resolvers
const resolvers = {
  Query: { books: () => books }
}

// Put together a schema
const myGraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const PORT = 3000

const app = express()

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ myGraphQLSchema }))

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT)
