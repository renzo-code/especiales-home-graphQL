import '../styles/global.scss'
import '../styles/style.scss'

import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../graphql/helpers/apollo'

function MyApp ({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
