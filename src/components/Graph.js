import React, { Component } from 'react';
import './../App.css';
import CanvasJSReact from './../canvasjs.react';
import 'moment/locale/pt';
import moment from 'moment';

moment.locale('pt');

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const getData = (type, data, X, Y) => {
	const graphData = [];

	if (type === 1) {
		data.slice(1, data.length - 1).map((line) => {
			graphData.push({
				x: moment(line[X], 'DD-MM-YYYY').toDate(),
				y: Number(line[Y]),
			});
		});
	} else if (type === 2) {
		for (let i = 2; i < data.length - 1; i++) {
			graphData.push({
				x: moment(data[i][X], 'DD-MM-YYYY').toDate(),
				y: Number(data[i][Y] - data[i - 1][Y]),
			});
		}
	} else if (type === 3) {
		for (let i = 7; i < data.length - 1; i++) {
			graphData.push({
				x: moment(data[i][X], 'DD-MM-YYYY').toDate(),
				y:
					(Number(data[i][Y]) +
						Number(data[i - 1][Y]) +
						Number(data[i - 2][Y]) +
						Number(data[i - 3][Y]) +
						Number(data[i - 4][Y]) +
						Number(data[i - 5][Y]) +
						Number(data[i - 6][Y])) /
					7,
			});
		}
	}

	return graphData;
};

const getData2 = (amostras, data, X, Y1, Y2) => {
	const graphData = [];

	//y2= 11
	for (let i = 7; i < amostras.length - 1; i++) {
		let d1 =
			(Number(data[i][Y1]) +
				Number(data[i - 1][Y1]) +
				Number(data[i - 2][Y1]) +
				Number(data[i - 3][Y1]) +
				Number(data[i - 4][Y1]) +
				Number(data[i - 5][Y1]) +
				Number(data[i - 6][Y1])) /
			7;
		let d2 =
			(Number(amostras[i][Y2]) +
				Number(amostras[i - 1][Y2]) +
				Number(amostras[i - 2][Y2]) +
				Number(amostras[i - 3][Y2]) +
				Number(amostras[i - 4][Y2]) +
				Number(amostras[i - 5][Y2]) +
				Number(amostras[i - 6][Y2])) /
			7;

		graphData.push({
			x: moment(data[i][X], 'DD-MM-YYYY').toDate(),
			y: Number(((d1 / d2) * 100).toFixed(2)),
		});
	}
	return graphData;
};

class Graph extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}

	toggleDataSeries(e) {
		if (typeof e.dataSeries.visible === 'undefined' || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}

	render() {
		const data = this.props.data;
		const amostras = this.props.amostras;

		const hospital = {
			theme: 'light2',
			animationEnabled: true,
			title: {
				text: 'Evolução das hospitalizações',
			},
			subtitles: [
				{
					text:
						'Número de pessoas na Enfermaria e na Unidade de Cuidados Intensivos',
				},
			],
			axisX: {
				title: 'Data',
			},
			axisY: {
				title: 'Pacientes na Enfermaria',
				titleFontColor: '#6D78AD',
				lineColor: '#6D78AD',
				labelFontColor: '#6D78AD',
				tickColor: '#6D78AD',
			},
			axisY2: {
				title: 'Pacientes na UCI',
				titleFontColor: '#51CDA0',
				lineColor: '#51CDA0',
				labelFontColor: '#51CDA0',
				tickColor: '#51CDA0',
			},
			toolTip: {
				shared: true,
			},
			legend: {
				cursor: 'pointer',
				itemclick: this.toggleDataSeries,
			},
			data: [
				{
					type: 'spline',
					name: 'Enfermaria',
					showInLegend: true,
					dataPoints: getData(1, data, 0, 87),
				},
				{
					type: 'spline',
					name: 'UCI',
					axisYType: 'secondary',
					showInLegend: true,
					dataPoints: getData(1, data, 0, 15),
				},
			],
		};

		const mortalida = {
			theme: 'light2',
			animationEnabled: true,
			title: {
				text: 'Evolução do mortalidade',
			},
			subtitles: [
				{
					text: 'Número de mortes diárias e total de mortes',
				},
			],
			axisX: {
				title: 'Data',
			},
			axisY: {
				title: 'Mortos diários',
				titleFontColor: '#6D78AD',
				lineColor: '#6D78AD',
				labelFontColor: '#6D78AD',
				tickColor: '#6D78AD',
			},
			axisY2: {
				title: 'Total de Mortos',
				titleFontColor: '#51CDA0',
				lineColor: '#51CDA0',
				labelFontColor: '#51CDA0',
				tickColor: '#51CDA0',
			},
			toolTip: {
				shared: true,
			},
			legend: {
				cursor: 'pointer',
				itemclick: this.toggleDataSeries,
			},
			data: [
				{
					type: 'spline',
					name: 'Mortos diárias',
					showInLegend: true,
					dataPoints: getData(2, data, 0, 13),
				},
				{
					type: 'spline',
					name: 'Total Mortos',
					axisYType: 'secondary',
					showInLegend: true,
					dataPoints: getData(1, data, 0, 13),
				},
			],
		};

		const testes = {
			theme: 'light2',
			animationEnabled: true,
			title: {
				text: 'Evolução do processo de testagem',
			},
			subtitles: [
				{
					text:
						'Percentagem de testes positivos em função do total de testes realizados - média de 7 dias',
				},
			],
			axisX: {
				title: 'Data',
			},
			axisY: {
				title: 'Testes realizados por dia',
				titleFontColor: '#6D78AD',
				lineColor: '#6D78AD',
				labelFontColor: '#6D78AD',
				tickColor: '#6D78AD',
			},
			axisY2: {
				title: 'Percentagem de testes confirmados',
				titleFontColor: '#51CDA0',
				lineColor: '#51CDA0',
				labelFontColor: '#51CDA0',
				tickColor: '#51CDA0',
			},
			toolTip: {
				shared: true,
			},
			legend: {
				cursor: 'pointer',
				itemclick: this.toggleDataSeries,
			},
			data: [
				{
					type: 'spline',
					name: 'Testes por dia',
					showInLegend: true,
					yValueFormatString: '#,###.#',
					dataPoints: getData(3, amostras, 0, 2),
				},
				{
					type: 'spline',
					name: 'Percentagem de Positivos',
					axisYType: 'secondary',
					yValueFormatString: '#.##',
					showInLegend: true,
					dataPoints: getData2(amostras, data, 0, 11, 2),
				},
			],
		};

		console.log(getData2(amostras, data, 0, 11, 2));

		return (
			<div className="App">
				<header
					className="App-header"
					style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
				>
					<CanvasJSChart
						options={hospital}
						onRef={(ref) => (this.chart = ref)}
					/>
					<br />
					<CanvasJSChart
						options={mortalida}
						onRef={(ref) => (this.chart = ref)}
					/>
					<br />
					<CanvasJSChart options={testes} onRef={(ref) => (this.chart = ref)} />
				</header>
			</div>
		);
	}
}

export default Graph;
