import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
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

		if (PageComponent.getInicialProps) {
			pageProps = await PageComponent.getInicialProps(ctx);
		}

		//On server
		if (typeof window === 'undefined') {
			if (ctx.res && ctx.res.finished) {
				return pageProps;
			}
			try {
				const { getDataFromTree } = await import('@apollo/react-ssr');
				await getDataFromTree(
					<AppTree
						pageProps={{
							...pageProps,
							apolloClient,
						}}
					/>
				);
			} catch (e) {
				console.log(e);
			}
			Head.rewind();
		}

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
		uri: process.env.API_URL,
		cache,
		fetch,
	});

	return client;
}
