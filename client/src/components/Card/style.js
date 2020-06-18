import styled from 'styled-components';

export const Container = styled.article`
`;

export const BodyCard = styled.div`
	background-color: var(--white);
	font-size: 15px;
	margin: 5px;
	padding: 25px 15px;
	border-radius: 3px;
	box-shadow: 1px 1px 2px var(--dark-gray);
	display: flex;
	@media (max-width: 767px){
		flex-direction: column;
	}
`;

export const Title = styled.span`
	color: var(--black);

`;

export const Value = styled.span`
	font-weight: bold;
	color: var(--black);
	margin-left: 7px;

	@media (max-width: 767px){
		margin-left: 0;
	}
`;
