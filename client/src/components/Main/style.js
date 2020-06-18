import styled from 'styled-components';

export const StyledMain = styled.main`

`;

export const Row = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;

	@media(max-width: 767px){
		grid-template-columns: 1fr;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 70px;
	color: var(--black);
	width: calc(100% - 90px);
	margin-left: 45px;

	@media (max-width: 767px){
		width: 100%;
		margin-left: 0;
	}
`;
