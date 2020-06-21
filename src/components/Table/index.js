import React from 'react';
import { useData } from '../../context/Data';
import { StyledTable } from './style';
function Table() {
	const { data, formatNumber, loading } = useData();
	function renderTable() {
		return Object.keys(data.perState).map((state) => {
			return (
				<tr key={state}>
					<td>
						{' '}
						<b>{state}</b>{' '}
					</td>
					<td> {formatNumber(data.perState[state].infecteds)} </td>
					<td> {formatNumber(data.perState[state].deads)} </td>
				</tr>
			);
		});
	}

	if (loading) {
		return <p>Carregando dados</p>;
	}

	return (
		<StyledTable>
			<thead>
				<tr>
					<th>Estado</th>
					<th>Casos</th>
					<th>Mortes</th>
				</tr>
			</thead>
			<tbody>{renderTable()}</tbody>
		</StyledTable>
	);
}

export default Table;
