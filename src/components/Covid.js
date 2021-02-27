import React from 'react';
import './../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import * as Icon from 'react-bootstrap-icons';

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
const Covid = (props) => {
	const data = props.info;

	return (
		<div className="App">
			<header className="App-header">
				<div
					style={{ flex: 1, width: '95%', margin: 0, padding: 0, fontSize: 15 }}
				>
					<Row style={{ margin: 0, padding: 0 }}>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								data[data.length - 2][2] - data[data.length - 3][2] >
									data[data.length - 3][2] - data[data.length - 4][2]
									? 'red'
									: 'green',
								data[data.length - 2][2] - data[data.length - 3][2] >
									data[data.length - 3][2] - data[data.length - 4][2]
									? 'up'
									: 'down',
								'Confirmados',
								data[data.length - 2][0] + ' vs ' + data[data.length - 3][0],
								'Total: ' +
									data[data.length - 2][2] +
									' vs ' +
									data[data.length - 3][2],
								'Dif: ' +
									(data[data.length - 2][2] - data[data.length - 3][2]) +
									' vs ' +
									(data[data.length - 3][2] - data[data.length - 4][2]),
								'Perc: ' +
									(
										((data[data.length - 2][2] - data[data.length - 3][2]) /
											data[data.length - 2][2]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((data[data.length - 3][2] - data[data.length - 4][2]) /
											data[data.length - 3][2]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								data[data.length - 2][12] - data[data.length - 3][12] <
									data[data.length - 3][12] - data[data.length - 4][12]
									? 'red'
									: 'green',
								data[data.length - 2][12] - data[data.length - 3][12] >
									data[data.length - 3][12] - data[data.length - 4][12]
									? 'up'
									: 'down',
								'Recuperados',
								data[data.length - 2][0] + ' vs ' + data[data.length - 3][0],
								'Total: ' +
									data[data.length - 2][12] +
									' vs ' +
									data[data.length - 3][12],
								'Dif: ' +
									(data[data.length - 2][12] - data[data.length - 3][12]) +
									' vs ' +
									(data[data.length - 3][12] - data[data.length - 4][12]),
								'Perc: ' +
									(
										((data[data.length - 2][12] - data[data.length - 3][12]) /
											data[data.length - 2][12]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((data[data.length - 3][12] - data[data.length - 4][12]) /
											data[data.length - 3][12]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
					</Row>
					<Row style={{ margin: 0, padding: 0 }}>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								data[data.length - 2][13] - data[data.length - 3][13] >
									data[data.length - 3][13] - data[data.length - 4][13]
									? 'red'
									: 'green',
								data[data.length - 2][13] - data[data.length - 3][13] >
									data[data.length - 3][13] - data[data.length - 4][13]
									? 'up'
									: 'down',
								'Óbitos',
								data[data.length - 2][0] + ' vs ' + data[data.length - 3][0],
								'Total: ' +
									data[data.length - 2][13] +
									' vs ' +
									data[data.length - 3][13],
								'Dif: ' +
									(data[data.length - 2][13] - data[data.length - 3][13]) +
									' vs ' +
									(data[data.length - 3][13] - data[data.length - 4][13]),
								'Perc: ' +
									(
										((data[data.length - 2][13] - data[data.length - 3][13]) /
											data[data.length - 2][13]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((data[data.length - 3][13] - data[data.length - 4][13]) /
											data[data.length - 3][13]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								data[data.length - 2][86] > data[data.length - 3][86]
									? 'red'
									: 'green',
								data[data.length - 2][86] > data[data.length - 3][86]
									? 'up'
									: 'down',
								'Ativos',
								data[data.length - 2][0] + ' vs ' + data[data.length - 3][0],
								'Total: ' +
									data[data.length - 2][86] +
									' vs ' +
									data[data.length - 3][86],
								'Dif: ' +
									(data[data.length - 2][86] - data[data.length - 3][86]) +
									' vs ' +
									(data[data.length - 3][86] - data[data.length - 4][86]),
								'Perc: ' +
									(
										((data[data.length - 2][86] - data[data.length - 3][86]) /
											data[data.length - 2][86]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((data[data.length - 3][86] - data[data.length - 4][86]) /
											data[data.length - 3][86]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
					</Row>
					<Row style={{ margin: 0, padding: 0 }}>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								data[data.length - 2][87] > data[data.length - 3][87]
									? 'red'
									: 'green',
								data[data.length - 2][87] > data[data.length - 3][87]
									? 'up'
									: 'down',
								'Enfermaria',
								data[data.length - 2][0] + ' vs ' + data[data.length - 3][0],
								'Total: ' +
									data[data.length - 2][87] +
									' vs ' +
									data[data.length - 3][87],
								'Dif: ' +
									(data[data.length - 2][87] - data[data.length - 3][87]) +
									' vs ' +
									(data[data.length - 3][87] - data[data.length - 4][87]),
								'Perc: ' +
									(
										((data[data.length - 2][87] - data[data.length - 3][87]) /
											data[data.length - 2][87]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((data[data.length - 3][87] - data[data.length - 4][87]) /
											data[data.length - 3][87]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								data[data.length - 2][15] > data[data.length - 3][15]
									? 'red'
									: 'green',
								data[data.length - 2][15] > data[data.length - 3][15]
									? 'up'
									: 'down',
								'UCI',
								data[data.length - 2][0] + ' vs ' + data[data.length - 3][0],
								'Total: ' +
									data[data.length - 2][15] +
									' vs ' +
									data[data.length - 3][15],
								'Dif: ' +
									(data[data.length - 2][15] - data[data.length - 3][15]) +
									' vs ' +
									(data[data.length - 3][15] - data[data.length - 4][15]),
								'Perc: ' +
									(
										((data[data.length - 2][15] - data[data.length - 3][15]) /
											data[data.length - 2][15]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((data[data.length - 3][15] - data[data.length - 4][15]) /
											data[data.length - 3][15]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
					</Row>
					<Row style={{ margin: 0, padding: 0 }}>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								data[data.length - 2][18] > data[data.length - 3][18]
									? 'red'
									: 'green',
								data[data.length - 2][18] > data[data.length - 3][18]
									? 'up'
									: 'down',
								'Vigilância',
								data[data.length - 2][0] + ' vs ' + data[data.length - 3][0],
								'Total: ' +
									data[data.length - 2][18] +
									' vs ' +
									data[data.length - 3][18],
								'Dif: ' +
									(data[data.length - 2][18] - data[data.length - 3][18]) +
									' vs ' +
									(data[data.length - 3][18] - data[data.length - 4][18]),
								'Perc: ' +
									(
										((data[data.length - 2][18] - data[data.length - 3][18]) /
											data[data.length - 2][18]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((data[data.length - 3][18] - data[data.length - 4][18]) /
											data[data.length - 3][18]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
					</Row>
				</div>
			</header>
		</div>
	);
};

export default Covid;
