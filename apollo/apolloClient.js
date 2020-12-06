import { ApolloClient } from "apollo-client"
import { ApolloProvider } from "@apollo/react-hooks"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import fetch from "isomorphic-unfetch"

import { setContext } from "apollo-link-context"
import cookie from "cookie"

import withApollo from "next-with-apollo"

const uri = "http://localhost:8080/graphql"

const httpLink = createHttpLink({ uri, fetch })

const authLink = setContext((_, { headers }) => {
  // Get token from cookie
  let cookies

  // Server side
  if (headers) {
    cookies = cookie.parse(header.cookie || "")
  }

  // Client side
  if (typeof window !== "undefined") {
    cookies = cookie.parse(document.cookie || "")
  }

  const token = (cookies && cookies.jwt) || ""

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  }
})

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache().restore(initialState || {})
    })
  },
)