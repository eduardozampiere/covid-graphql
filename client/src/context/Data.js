import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import api from '../api';
import momentjs from 'moment';
import { populations } from '../config/populations.json' 

const DataContext = createContext();

export default function DataProvider({children}){
	const [data, setData] = useState(null);

	const updateData = async () => {
		const responseUpdate = await api.update();
		await loadData();
		if(responseUpdate.data.data.updateCases){
			alert('Ok');
		}
		else{
			alert('Houve um erro!');
		}
	}

	const loadData = useCallback( async () => {
		const response = await api.getData();
		const responseData = response.data.data.cases;
		organizeData(responseData);
	}, []);

	const organizeData = useCallback( (responseData) => {
		const totalCase = {
			perHundredThousand: {},
			perState: {},
			perDay: {},
			perNewDay: {},
			perRegion: {},
			perWeek: {},
			perLethality: {},
			statePerRegion: {},
			projection: {},
			deads: 0,
			infecteds: 0,
			firstCase: null,
			firstDeath: null,
			lastDay: null,
			lastInfecteds: 0,
			lastDeads: 0,
			toDouble: 0,
			projectionDays: 30,
			lethality: null
		}

		for(let dayCase of responseData){
			const state = dayCase.state;
			const date = dayCase.date;
			const region = dayCase.region;
			const newCases = dayCase.infecteds;
			const newDeaths = dayCase.deads;
			const moment = momentjs(date, 'YYYY-MM-DD');
			const weekNumber = moment.week();
			totalCase.deads += newDeaths;
			totalCase.infecteds += newCases;

			if(totalCase.infecteds <= 0 && totalCase.deads <= 0) continue;

			totalCase.lastDay = date;

			if(!totalCase.firstDeath && totalCase.deads){
				totalCase.firstDeath = date;
			}

			if(!totalCase.firstCase){
				totalCase.firstCase = date;
			}

			//States per region
			if(!totalCase.statePerRegion[region]){
				totalCase.statePerRegion[region] = {}
			}
			if(!totalCase.statePerRegion[region][state]){
				totalCase.statePerRegion[region][state] = true;
			}

			//Cases per day
			if(!totalCase.perDay[date]){
				totalCase.perDay[date] = {}
			}

			totalCase.perDay[date].deads = totalCase.deads;
			totalCase.perDay[date].infecteds = totalCase.infecteds;

			//New cases per day
			if(!totalCase.perNewDay[date]){
				totalCase.perNewDay[date] = {
					deads: 0,
					infecteds: 0
				};
			}
			totalCase.perNewDay[date].deads += newDeaths;
			totalCase.perNewDay[date].infecteds += newCases;

			//Cases per state
			if(!totalCase.perState[state]){
				totalCase.perState[state] = {
					deads: 0,
					infecteds: 0
				};
			}
			totalCase.perState[state].deads += newDeaths;
			totalCase.perState[state].infecteds += newCases;

			//Cases per region
			if(!totalCase.perRegion[region]){
				totalCase.perRegion[region] = {
					infecteds: 0,
					deads: 0
				};
			}
			totalCase.perRegion[region].infecteds += newCases;
			totalCase.perRegion[region].deads += newDeaths;
		
			//New cases per week
			if(!totalCase.perWeek[weekNumber]){
				totalCase.perWeek[weekNumber] = {
					infecteds: 0,
					deads: 0
				}
			}
			totalCase.perWeek[weekNumber].infecteds += newCases;
			totalCase.perWeek[weekNumber].deads += newDeaths;
		}

		const arr = [];
		//Lethality per day
		for(let day in totalCase.perDay){
			const dayCase = totalCase.perDay[day];
			const infecteds = dayCase.infecteds;
			const deads = dayCase.deads;
			arr.push(infecteds);
			
			if(deads > 0){
				totalCase.perLethality[day] = (deads/infecteds) * 100;
			}
		}

		//Double infecteds
		let aux = 0;
		for(let i = arr.length - 1; i >= 0; i--){
			const infecteds = arr[i];
			if(aux == 0) aux = infecteds;

			if(infecteds <= aux / 2){
				break;
			}
			totalCase.toDouble++;
		}
		
		//Per hundred thousand
		for(let state in totalCase.perState){
			const dayCase = totalCase.perState[state];
			totalCase.perHundredThousand[state] = {
				infecteds: (dayCase.infecteds / populations[state]) * 100000,
				deads: (dayCase.deads / populations[state]) * 100000
			}
		}

		//Projection
		totalCase.lethality = (totalCase.deads/totalCase.infecteds);
		let toDouble_mirror = 1;
		for(let i = 1; i <= totalCase.projectionDays; i++){
			let newInfections = parseInt( aux * (Math.pow(2, toDouble_mirror/totalCase.toDouble)));
			toDouble_mirror++;
			const futureDay = momentjs(totalCase.lastDay, "YYYY-MM-DD").add(i, 'd').format('YYYY-MM-DD');
			
			totalCase.projection[futureDay] = {
				infecteds: newInfections,
				deads: parseInt(newInfections * totalCase.lethality)					
			}
		}

		totalCase.lastInfecteds = totalCase.perNewDay[totalCase.lastDay].infecteds;
		totalCase.lastDeads = totalCase.perNewDay[totalCase.lastDay].deads;
		setData(totalCase);

	}, []);

	const formatNumber = (value) => {
		return new Intl.NumberFormat('pt-BR', {

		}).format(value);
	}

	const formatPercent = (value) => {
		return new Intl.NumberFormat('pt-BR', {
			style: 'percent',
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		}).format(value);
	}

	const formatDate = (date) => {
		return date.split('-').reverse().join('/');
		
	}

	useEffect( () => {
		( async () => {
			await loadData();			
		})();
	}, [loadData]);

	return (
		<DataContext.Provider value={{
			data, setData,
			formatNumber, formatPercent,
			formatDate, updateData
		}}>
			{children}
		</DataContext.Provider>
	)
}

export function useData(){
	return useContext(DataContext);
}