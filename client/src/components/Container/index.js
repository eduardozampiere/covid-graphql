import React from 'react';
import Header from '../Header';
import Main from '../Main';

import GlobalStyles from './global'; 
function Container() {
	return (
		<>
			<GlobalStyles theme="light"/>
			<Header />
			<Main />
		</>
	);
}

export default Container;