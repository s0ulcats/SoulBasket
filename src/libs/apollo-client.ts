import { ApolloClient, InMemoryCache, split } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

const httpLink = createUploadLink({
	credentials: 'include',
	headers: {
		'apollo-require-preflight': 'true'
	}
})
const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query)

		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		)
	},
	httpLink
)

export const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache()
})
