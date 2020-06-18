import React from 'react';

import { Container, BodyCard, Title, Value } from './style';
function Card({title, value}) {
	return (
		<Container>
			<BodyCard>
				<Title>{title}</Title>
				<Value>{value}</Value>
			</BodyCard>
		</Container>
	);
}

export default Card;