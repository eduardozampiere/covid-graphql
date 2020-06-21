import React from 'react';
import Head from 'next/head';

import DataProvider from '../src/context/Data';
import Container from '../src/components/Container';

import { withApollo } from '../src/services/apollo';

function Home() {
	return (
		<DataProvider>
			<Head>
				<title>Covid</title>
			</Head>
			<Container />
		</DataProvider>
	);
}

export default withApollo(Home);
