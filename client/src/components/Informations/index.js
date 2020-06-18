import React from 'react';

import { useData } from '../../context/Data';
import Card from '../Card';

import { Container, Small, Cards } from './style';
function Informations() {
	const { data, formatNumber, formatPercent, formatDate } = useData();

	if(!data){
		return <p>Carregando</p>
	}
	return (
			<Container>
				<Small>Ultima atualização: {formatDate(data.lastDay)}</Small>
				<Cards>
					<Card title="Casos confirmados: " value={formatNumber(data.infecteds)} />
					<Card title="Mortes: " value={formatNumber(data.deads)} />
					<Card title="Letalidade: " value={formatPercent(data.lethality) } />
					<Card title="Dobrando em: " value={`${data.toDouble} dias`} />
					<Card title="Primeiro caso: " value={formatDate(data.firstCase)} />
					<Card title="Primeira morte: " value={formatDate(data.firstDeath)} />
					<Card title="Últimos confirmados: " value={formatNumber(data.lastInfecteds)} />
					<Card title="Últimas mortes: " value={formatNumber(data.lastDeads)} />
				</Cards>
			</Container>
	);
}

export default Informations;