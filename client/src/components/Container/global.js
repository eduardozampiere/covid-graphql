import { createGlobalStyle } from 'styled-components';
import {pageThemes} from '../../config/themes.json';
const GlobalStyle = createGlobalStyle`
	*{
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	:root{
		--black: ${props => pageThemes[props.theme].black};
		--blue: ${props => pageThemes[props.theme].blue};
		--light-blue: ${props => pageThemes[props.theme].lightBlue};
		--gray: ${props => pageThemes[props.theme].gray};
		--light-gray: ${props => pageThemes[props.theme].lightGray};
		--dark-gray: ${props => pageThemes[props.theme].darkGray};
		--red: ${props => pageThemes[props.theme].red};		
		--white: ${props => pageThemes[props.theme].white};
	}

	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: var(--black);
		background-color: var(--white);
	}
`;

export default GlobalStyle;