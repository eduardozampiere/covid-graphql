import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import { useData } from '../../context/Data';
import { chartThemes } from '../../config/themes.json';

function PieChart({ data }) {
	const { formatNumber, formatPercent, theme } = useData();

	useEffect(() => {
		if (!data) return () => {};

		const dataSet = Object.keys(data).map((region) => {
			return {
				name: region,
				y: data[region].infecteds,
			};
		});
		Highcharts.theme = chartThemes[theme];
		Highcharts.setOptions(Highcharts.theme);
		Highcharts.chart('pieChart', {
			chart: {
				type: 'pie',
			},

			title: {
				text: '',
			},

			tooltip: {
				formatter: function () {
					return `${this.key}: <b>${formatNumber(
						this.y
					)}</b><br/>${formatPercent(this.percentage / 100)}`;
				},
			},

			series: [
				{
					name: 'Casos',
					data: dataSet,
				},
			],
		});
	}, [data, theme]);

	if (!data) {
		return <p>loading</p>;
	}

	return <div id="pieChart"></div>;
}

export default PieChart;
