import styled from 'styled-components';

export const StyledTable = styled.table`
	width:100%;
	border-collapse: collapse;
	color: var(--black);
	margin-top: 5px;
	tr{
		border-bottom: solid 1px var(--gray);
		text-align: center;
	}

	td, th{
		padding: 15px 0px;
	}

	thead{
		background-color: var(--gray);
	}
`;
