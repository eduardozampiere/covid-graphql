import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Small = styled.small`
	margin-top: 10px;
	color: var(--dark-gray);
	display: block;
	@media (max-width: 767px){
		margin-left: 10px;
	}
`;

export const Cards = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	@media (max-width: 767px){
		grid-template-columns: 1fr 1fr;
	}

`;
