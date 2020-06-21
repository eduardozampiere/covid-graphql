import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import { chartThemes } from '../../config/themes.json';
import { useData } from '../../context/Data';

function Chart({ data, id, type, stacked }) {
	const { theme } = useData();

	useEffect(() => {
		if (!data) return () => {};
		const infecteds = [];
		const deads = [];
		Object.keys(data).map((date) => {
			if (typeof data[date] === 'object') {
				infecteds.push([date, data[date].infecteds]);
				deads.push([date, data[date].deads]);
			} else {
				deads.push([date, data[date]]);
			}
		});

		const opt = {
			chart: {
				type: type,
			},
			title: {
				text: '',
			},

			xAxis: {
				type: 'category',
			},

			series: [
				{
					name: 'Mortes',
					data: deads,
				},
			],
		};

		if (infecteds.length > 0) {
			opt.series.push({
				name: 'Casos',
				data: infecteds,
			});
		}

		if (stacked) {
			opt.plotOptions = {
				column: {
					stacking: 'stream',
				},
			};
		}
		Highcharts.theme = chartThemes[theme];
		Highcharts.setOptions(Highcharts.theme);
		Highcharts.chart(id, opt);
	}, [data, theme]);
	return <div id={id}></div>;
}

export default Chart;
