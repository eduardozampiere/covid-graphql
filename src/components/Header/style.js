import styled from 'styled-components';

export const StyledHeader = styled.header`
	background-color: var(--light-gray);
	display: flex;
	justify-content: space-between;
`;

export const ContainerDark = styled.div`
	margin-right: 20px;
`;

export const Container = styled.div`
	display: flex;
	min-height: 70px;
	color: var(--black);
	width: calc(100% - 90px);
	margin-left: 45px;
	@media (max-width: 767px) {
		width: 100%;
		margin-left: 0;
		flex-direction: column;
		padding-bottom: 15px;
	}
`;

export const ContainerBottom = styled.div`
	display: flex;
	flex-direction: row;
`;

export const Item = styled.div`
	height: 70px;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 1fr;
	justify-items: center;
	align-items: center;
	@media (max-width: 767px) {
		width: 100%;
		height: 40px;
	}
`;

export const Brand = styled.a`
	color: var(--black);
	text-decoration: none;
	font-weight: bold;
	font-size: 20px;
	margin-right: 25px;
	display: block;
	@media (max-width: 767px) {
		overflow-x: hidden;
		margin-left: 15px;
		flex-wrap: nowrap;
	}
`;

export const Select = styled.select`
	margin-right: 10px;
	border: none;
	background-color: transparent;
	color: var(--black);
	border-radius: 3px;
	padding: 5px;
	-webkit-appearance: none;
	-moz-appearance: none;
	outline: none;
	font-weight: bold;
	cursor: pointer;
	font-size: 15px;
	max-width: 100px;
`;

export const Button = styled.button`
	float: right;
	border: none;
	background-color: var(--blue);
	color: var(--white);
	padding: 10px 15px;
	border-radius: 4px;
	box-shadow: 1px 1px 2px var(--dark-gray);
	cursor: pointer;
	@media (max-width: 767px) {
		margin-right: 10px;
	}
`;
