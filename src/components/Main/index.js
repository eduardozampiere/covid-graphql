import React from 'react';
import { Container, StyledMain, Row} from './style';
import Informations from '../Informations';
import Article from '../Article';
import Table from '../Table';
import PieChart from '../PieChart';
import Chart from '../Chart';
import { useData } from '../../context/Data';
function Main() {
	const { data } = useData();
	return (
		<StyledMain>
			<Container>
				<Informations />
				<Row>
					<Article title="Casos por Estado">
						<Table />
					</Article>

					<Article title="Casos por região">
						<PieChart data={data ? data.perRegion : null} />
					</Article>
				</Row>

				<Row>
					<Article title="Casos acumulados por dia">
						<Chart type="line" id="perDay" data={data ? data.perDay : null} />
					</Article>

					<Article title="Casos novos por dia">
						<Chart type="column" id="perNewDay" data={data ? data.perNewDay : null} /> 
					</Article>
				</Row>

				<Row>
					<Article title="Mortalidade por dia">
						<Chart type="line" id="perLethality" data={data ? data.perLethality : null} />
					</Article>

					<Article title="Projeção">
						<Chart type="line" id="projection" data={data ? data.projection : null} /> 
					</Article>
				</Row>

				<Row>
					<Article title="Casos por semana">
						<Chart stacked={true} type="column" id="week" data={data ? data.perWeek : null} />
					</Article>

					<Article title="Casos a cada 100mil habitantes">
						<Chart stacked={true} type="column" id="hundred" data={data ? data.perHundredThousand : null} /> 
					</Article>
				</Row>


			</Container>
		</StyledMain>
	);
}

export default Main;