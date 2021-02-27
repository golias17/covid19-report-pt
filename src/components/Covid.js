import React, { useState, useEffect } from 'react';
import './../App.css';
import { Row, Col, Card } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

var moment = require('moment');

const card = (typeColor, arrow, header, line1, line2, line3, line4) => {
	return (
		<Card text={'dark'} style={{ margin: '0.2rem' }}>
			<Card.Body style={{ padding: '0.5rem' }}>
				<Card.Title style={{ textAlign: 'center', fontSize: 18 }}>
					{header}
				</Card.Title>
				<Card.Subtitle className="mb-2 text-muted" style={{ fontSize: 11 }}>
					{line1}
				</Card.Subtitle>
				<Card.Text style={{ fontSize: 14 }}>
					{arrow === 'up' && <Icon.ArrowUpCircle color={typeColor} size={40} />}
					{arrow === 'down' && (
						<Icon.ArrowDownCircle color={typeColor} size={40} />
					)}
					<div style={{ width: '100%', marginTop: '1rem' }}>
						{line2}
						<br />
						{line3}
						<br />
						{line4}
					</div>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

const onChangeStart = (date, data, endDate, setStartDate) => {
	if (date > endDate) {
		if (date > moment('03-03-2020', 'DD-MM-YYYY')) {
			if (date <= moment(data[data.length - 2][0], 'DD-MM-YYYY'))
				setStartDate(date);
		}
	}
};

const onChangeEnd = (date, data, startDate, setEndDate) => {
	if (date < startDate) {
		if (date > moment('02-03-2020', 'DD-MM-YYYY')) {
			if (date <= moment(data[data.length - 3][0], 'DD-MM-YYYY'))
				setEndDate(date);
		}
	}
};

const Covid = (props) => {
	const data = props.info;
	const [startDate, setStartDate] = useState(
		moment(data[data.length - 2][0], 'DD-MM-YYYY')._d
	);
	const [endDate, setEndDate] = useState(
		moment(data[data.length - 3][0], 'DD-MM-YYYY')._d
	);
	const [startIndex, setStartIndex] = useState(data.length - 2);
	const [endIndex, setEndIndex] = useState(data.length - 3);

	useEffect(() => {
		setStartIndex(
			data.length -
				2 -
				moment(data[data.length - 2][0], 'DD-MM-YYYY').diff(
					moment(startDate),
					'days'
				)
		);
		setEndIndex(
			data.length -
				3 -
				moment(data[data.length - 3][0], 'DD-MM-YYYY').diff(
					moment(endDate),
					'days'
				)
		);
	}, [data, startDate, endDate]);

	return (
		<div className="App">
			<header className="App-header">
				<div
					style={{ flex: 1, width: '95%', margin: 0, padding: 0, fontSize: 15 }}
				>
					<Row style={{ fontSize: 16, padding: '1rem' }}>
						<Col>
							<p>Data mais recente</p>
							<DatePicker
								selected={startDate}
								dateFormat={'dd-MM-yyyy'}
								onChange={(date) =>
									onChangeStart(date, data, endDate, setStartDate)
								}
							/>
						</Col>
						<Col>
							<p>Data mais antiga</p>
							<DatePicker
								selected={endDate}
								dateFormat={'dd-MM-yyyy'}
								onChange={(date) =>
									onChangeEnd(date, data, startDate, setEndDate)
								}
							/>
						</Col>
					</Row>

					<Row style={{ margin: 0, padding: 0 }}>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								Number(data[startIndex][2]) - Number(data[startIndex - 1][2]) >
									Number(data[endIndex][2]) - Number(data[endIndex - 1][2])
									? 'red'
									: 'green',
								Number(data[startIndex][2]) - Number(data[startIndex - 1][2]) >
									Number(data[endIndex][2]) - Number(data[endIndex - 1][2])
									? 'up'
									: 'down',
								'Confirmados',
								data[startIndex][0] + ' vs ' + data[endIndex][0],
								'Total: ' + data[startIndex][2] + ' vs ' + data[endIndex][2],
								'Dif: ' +
									(data[startIndex][2] - data[startIndex - 1][2]) +
									' vs ' +
									(data[endIndex][2] - data[endIndex - 1][2]),
								'Perc: ' +
									(
										((data[startIndex][2] - data[startIndex - 1][2]) /
											data[startIndex][2]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((data[endIndex][2] - data[endIndex - 1][2]) /
											data[endIndex][2]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								Number(data[startIndex][12]) -
									Number(data[startIndex - 1][12]) <
									Number(data[endIndex][12]) - Number(data[endIndex - 1][12])
									? 'red'
									: 'green',
								Number(data[startIndex][12]) -
									Number(data[startIndex - 1][12]) >
									Number(data[endIndex][12]) - Number(data[endIndex - 1][12])
									? 'up'
									: 'down',
								'Recuperados',
								data[startIndex][0] + ' vs ' + data[endIndex][0],
								'Total: ' + data[startIndex][12] + ' vs ' + data[endIndex][12],
								'Dif: ' +
									(data[startIndex][12] - data[startIndex - 1][12]) +
									' vs ' +
									(data[endIndex][12] - data[endIndex - 1][12]),
								'Perc: ' +
									(
										((data[startIndex][12] - data[startIndex - 1][12]) /
											data[startIndex][12]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((data[endIndex][12] - data[endIndex - 1][12]) /
											data[endIndex][12]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
					</Row>
					<Row style={{ margin: 0, padding: 0 }}>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								Number(data[startIndex][13]) -
									Number(data[startIndex - 1][13]) >
									Number(data[endIndex][13]) - Number(data[endIndex - 1][13])
									? 'red'
									: 'green',
								Number(data[startIndex][13]) -
									Number(data[startIndex - 1][13]) >
									Number(data[endIndex][13]) - Number(data[endIndex - 1][13])
									? 'up'
									: 'down',
								'Óbitos',
								data[startIndex][0] + ' vs ' + data[endIndex][0],
								'Total: ' + data[startIndex][13] + ' vs ' + data[endIndex][13],
								'Dif: ' +
									(data[startIndex][13] - data[startIndex - 1][13]) +
									' vs ' +
									(data[endIndex][13] - data[endIndex - 1][13]),
								'Perc: ' +
									(
										((data[startIndex][13] - data[startIndex - 1][13]) /
											data[startIndex][13]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((data[endIndex][13] - data[endIndex - 1][13]) /
											data[endIndex][13]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								Number(data[startIndex][86]) > Number(data[endIndex][86])
									? 'red'
									: 'green',
								Number(data[startIndex][86]) > Number(data[endIndex][86])
									? 'up'
									: 'down',
								'Ativos',
								data[startIndex][0] + ' vs ' + data[endIndex][0],
								'Total: ' + data[startIndex][86] + ' vs ' + data[endIndex][86],
								'Dif: ' +
									(data[startIndex][86] - data[startIndex - 1][86]) +
									' vs ' +
									(data[endIndex][86] - data[endIndex - 1][86]),
								'Perc: ' +
									(
										((data[startIndex][86] - data[startIndex - 1][86]) /
											data[startIndex][86]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((data[endIndex][86] - data[endIndex - 1][86]) /
											data[endIndex][86]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
					</Row>
					<Row style={{ margin: 0, padding: 0 }}>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								Number(data[startIndex][87]) > Number(data[endIndex][87])
									? 'red'
									: 'green',
								Number(data[startIndex][87]) > Number(data[endIndex][87])
									? 'up'
									: 'down',
								'Enfermaria',
								data[startIndex][0] + ' vs ' + data[endIndex][0],
								'Total: ' + data[startIndex][87] + ' vs ' + data[endIndex][87],
								'Dif: ' +
									(data[startIndex][87] - data[startIndex - 1][87]) +
									' vs ' +
									(data[endIndex][87] - data[endIndex - 1][87]),
								'Perc: ' +
									(
										((data[startIndex][87] - data[startIndex - 1][87]) /
											data[startIndex][87]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((data[endIndex][87] - data[endIndex - 1][87]) /
											data[endIndex][87]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								Number(data[startIndex][15]) > Number(data[endIndex][15])
									? 'red'
									: 'green',
								Number(data[startIndex][15]) > Number(data[endIndex][15])
									? 'up'
									: 'down',
								'UCI',
								data[startIndex][0] + ' vs ' + data[endIndex][0],
								'Total: ' + data[startIndex][15] + ' vs ' + data[endIndex][15],
								'Dif: ' +
									(data[startIndex][15] - data[startIndex - 1][15]) +
									' vs ' +
									(data[endIndex][15] - data[endIndex - 1][15]),
								'Perc: ' +
									(
										((data[startIndex][15] - data[startIndex - 1][15]) /
											data[startIndex][15]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((data[endIndex][15] - data[endIndex - 1][15]) /
											data[endIndex][15]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
					</Row>
					<Row style={{ margin: 0, padding: 0 }}>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								Number(data[startIndex][18]) > Number(data[endIndex][18])
									? 'red'
									: 'green',
								Number(data[startIndex][18]) > Number(data[endIndex][18])
									? 'up'
									: 'down',
								'Vigilância',
								data[startIndex][0] + ' vs ' + data[endIndex][0],
								'Total: ' + data[startIndex][18] + ' vs ' + data[endIndex][18],
								'Dif: ' +
									(data[startIndex][18] - data[startIndex - 1][18]) +
									' vs ' +
									(data[endIndex][18] - data[endIndex - 1][18]),
								'Perc: ' +
									(
										((data[startIndex][18] - data[startIndex - 1][18]) /
											data[startIndex][18]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((data[endIndex][18] - data[endIndex - 1][18]) /
											data[endIndex][18]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
					</Row>
					<p>
						Regras: Escolhe um dia entre 03-03-2020 até ao dia{' '}
						{data[data.length - 2][0]}
					</p>
				</div>
			</header>
		</div>
	);
};

export default Covid;
