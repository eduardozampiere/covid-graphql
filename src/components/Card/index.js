import React from 'react';

import { Container, BodyCard, Title, Value } from './style';
function Card({ title, value, loading }) {
	return (
		<Container>
			<BodyCard>
				<Title>{title}</Title>
				<Value>{loading ? 'Carregando' : value}</Value>
			</BodyCard>
		</Container>
	);
}

export default Card;
