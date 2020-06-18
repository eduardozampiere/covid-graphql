import styled from 'styled-components';

export const Item = styled.article`
	margin: 5px;
	box-shadow: 1px 1px 2px var(--dark-gray);
	height: 500px;
	overflow: auto;
`;

export const ItemHeader = styled.header`
	background-color: var(--light-gray);
	border-bottom: 1px solid var(--gray);
	padding: 15px;
	font-size: 15px;
`;
