import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client/react'
import { client } from '../lib/apollo'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
