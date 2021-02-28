import React, { Component } from 'react';
import './../App.css';
import CanvasJSReact from './../canvasjs.react';
import 'moment/locale/pt';
import moment from 'moment';

moment.locale('pt');

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const getData = (data, X, Y) => {
	const graphData = [];
	data.slice(1, data.length - 1).map((line) => {
		graphData.push({
			x: moment(line[X], 'DD-MM-YYYY').toDate(),
			y: Number(line[Y]),
		});
	});

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
		const data = this.props.info;
		const options = {
			theme: 'light2',
			animationEnabled: true,
			title: {
				text: 'Número de pessoas na Enfermaria vs UCI',
			},
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
					dataPoints: getData(data, 0, 87),
				},
				{
					type: 'spline',
					name: 'UCI',
					axisYType: 'secondary',
					showInLegend: true,
					dataPoints: getData(data, 0, 15),
				},
			],
		};

		console.log(getData(data, 0, 87));

		return (
			<div className="App">
				<header
					className="App-header"
					style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
				>
					<CanvasJSChart
						options={options}
						onRef={(ref) => (this.chart = ref)}
					/>
				</header>
			</div>
		);
	}
}

export default Graph;
