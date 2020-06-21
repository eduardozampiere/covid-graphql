import React from 'react';

import { useData } from '../../context/Data';
import Card from '../Card';

import { Container, Small, Cards } from './style';
function Informations() {
	const { data, formatNumber, formatPercent, formatDate, loading } = useData();

	return (
		<Container>
			<Small>
				Ultima atualização: {loading ? ' Carregando' : formatDate(data.lastDay)}
			</Small>
			<Cards>
				<Card
					title="Casos confirmados: "
					value={formatNumber(data.infecteds)}
					loading={loading}
				/>
				<Card
					title="Mortes: "
					value={formatNumber(data.deads)}
					loading={loading}
				/>
				<Card
					title="Letalidade: "
					value={formatPercent(data.lethality)}
					loading={loading}
				/>
				<Card
					title="Dobrando em: "
					value={`${data.toDouble} dias`}
					loading={loading}
				/>
				<Card
					title="Primeiro caso: "
					value={formatDate(data.firstCase)}
					loading={loading}
				/>
				<Card
					title="Primeira morte: "
					value={formatDate(data.firstDeath)}
					loading={loading}
				/>
				<Card
					title="Últimos confirmados: "
					value={formatNumber(data.lastInfecteds)}
					loading={loading}
				/>
				<Card
					title="Últimas mortes: "
					value={formatNumber(data.lastDeads)}
					loading={loading}
				/>
			</Cards>
		</Container>
	);
}

export default Informations;
