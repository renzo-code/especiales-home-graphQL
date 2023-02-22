import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

export function createApolloClient () {
  const client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    connectToDevTools: true,
    link: new HttpLink({
      // uri: 'https://qacronosapi2.glr.pe/graphql/trivia',
      // uri: 'https://cronosapipublic.glr.pe/graphql/trivia',
      uri: 'https://qacronosapi2.glr.pe/graphql',
      headers: {
        token_id: 'c5c56J7f2e07H46h3F1a8h9hJg3cfb06a2g53DAC43',
        'Content-Type': 'application/json'
      }
    }),
    cache: new InMemoryCache()
  })
  return client
}
