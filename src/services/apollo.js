import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';

export function withApollo(PageComponent) {
	const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
		const client = apolloClient || initApolloClient(apolloState);

		return (
			<ApolloProvider client={client}>
				<PageComponent {...pageProps} />
			</ApolloProvider>
		);
	};

	WithApollo.getInicialProps = async (ctx) => {
		const { AppTree } = ctx;
		const apolloClient = (ctx.apolloClient = initApolloClient);

		let pageProps = {};

		const apolloState = apolloClient.cache.extract();

		return {
			...pageProps,
			apolloState,
		};
	};

	return WithApollo;
}

function initApolloClient(initialState = {}) {
	const cache = new InMemoryCache().restore(initialState);
	const client = new ApolloClient({
		uri: 'http://localhost:3000/api/graphql',
		cache,
		fetch,
	});

	return client;
}
