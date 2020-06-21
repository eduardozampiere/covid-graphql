import Case from '../server/models/Case';
import csv from 'get-csv';
import { CSV_URL } from '../config/config.json';

function getRegion(state) {
	if (['AM', 'RR', 'AP', 'PA', 'TO', 'RO', 'AC'].indexOf(state) !== -1)
		return 'Norte';
	if (
		['MA', 'PI', 'CE', 'RN', 'PE', 'PB', 'SE', 'AL', 'BA'].indexOf(state) !== -1
	)
		return 'Nordeste';
	if (['MT', 'MS', 'GO', 'DF'].indexOf(state) !== -1) return 'Centro-Oeste';
	if (['PR', 'RS', 'SC'].indexOf(state) !== -1) return 'Sul';
	return 'Sudeste';
}

export const caseMutations = {
	Mutation: {
		updateCases: async () => {
			const rows = await csv(CSV_URL);
			for (let row of rows) {
				if (row.state === 'TOTAL') continue;
				const state = row.state;
				const date = row.date;
				const deads = parseInt(row.newDeaths);
				const infecteds = parseInt(row.newCases);
				const region = getRegion(state);

				try {
					const localCase = await Case.findOne({
						state,
						date,
					});

					if (!localCase) {
						await Case.create({
							state,
							date,
							deads,
							infecteds,
							region,
						});
					} else {
						if (
							localCase.deads !== deads ||
							localCase.infecteds !== infecteds
						) {
							localCase.deads = deads;
							localCase.infecteds = infecteds;
							await localCase.save();
						}
					}
				} catch (err) {
					return false;
				}
			}
			return true;
		},
	},
};
