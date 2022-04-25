import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client'
import withApollo from 'next-with-apollo'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import fetch from 'isomorphic-unfetch'

export function createApolloClient () {
  const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    connectToDevTools: true,
    link: new HttpLink({
      // uri: 'https://qacronosapi2.glr.pe/graphql/trivia',
      uri: 'https://cronosapipublic.glr.pe/graphql/trivia',
      headers: {
        token_id: 'c5c56J7f2e07H46h3F1a8h9hJg3cfb06a2g53DAC43',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }),
    cache: new InMemoryCache()
  })
  return client
}

// const link = createHttpLink({
//   fetch,
//   uri: 'https://qacronosapi2.glr.pe/graphql/trivia'
// })

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       'Content-Type' : 'application/json',
//       'token_id': 'c5c56J7f2e07H46h3F1a8h9hJg3cfb06a2g53DAC43'
//     }
//   }
// })

// export default withApollo(
//   ({ initialState }) => 
//   new ApolloClient({
//     ssrMode: typeof window === 'undefined',
//     link: authLink.concat(link),
//     cache: new InMemoryCache().restore(initialState || {})
//   })
// )


