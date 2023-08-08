import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new  ApolloClient({
	cache: new InMemoryCache,
	uri: `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_SPACE_ID}`,
	headers: {
		authorization: `Bearer ${import.meta.env.VITE_CONTENT_TOKEN}`
	}
})

export default client