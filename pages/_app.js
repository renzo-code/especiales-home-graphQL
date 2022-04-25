import '../styles/global.scss'
import '../styles/style.scss'
// import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../graphql/helpers/apollo'

// class MyApp extends App {
//   static async getInitialProps ({ Component, ctx }) {
//     let pageProps = {}
//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx)
//     }
//     const apolloClient = useApollo(pageProps.initialApolloState)
//     return { pageProps, apolloClient }
//   }

  
//   render() {
//     const { Component, pageProps } = this.props
//     return(
//       <ApolloProvider client={apolloClient}>
//         <Component {...pageProps} />
//       </ApolloProvider>
//     )
//   }
// }

function MyApp ({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
