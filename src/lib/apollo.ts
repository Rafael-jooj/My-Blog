import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/clkso6xk30bhf01rsc5dadlw7/master',
    cache: new InMemoryCache()
})