import React from 'react';
import Header from '../Header';
import Main from '../Main';

import GlobalStyles from './global';
import { useData } from '../../context/Data';
function Container() {
	const { theme } = useData();
	return (
		<>
			<GlobalStyles theme={theme} />
			<Header />
			<Main />
		</>
	);
}

export default Container;
