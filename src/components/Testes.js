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

const Testes = (props) => {
	const amostras = props.info;
	return (
		<div className="App">
			<header className="App-header">
				<div
					style={{ flex: 1, width: '95%', margin: 0, padding: 0, fontSize: 15 }}
				>
					<Row style={{ margin: 0, padding: 0 }}>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								amostras[amostras.length - 2][1] -
									amostras[amostras.length - 3][1] <
									amostras[amostras.length - 3][1] -
										amostras[amostras.length - 4][1]
									? 'red'
									: 'green',
								amostras[amostras.length - 2][1] -
									amostras[amostras.length - 3][1] >
									amostras[amostras.length - 3][1] -
										amostras[amostras.length - 4][1]
									? 'up'
									: 'down',
								'Testes',
								amostras[amostras.length - 2][0] +
									' vs ' +
									amostras[amostras.length - 3][0],
								'Total: ' +
									amostras[amostras.length - 2][1] +
									' vs ' +
									amostras[amostras.length - 3][1],
								'Dif: ' +
									(amostras[amostras.length - 2][1] -
										amostras[amostras.length - 3][1]) +
									' vs ' +
									(amostras[amostras.length - 3][1] -
										amostras[amostras.length - 4][1]),
								'Perc: ' +
									(
										((amostras[amostras.length - 2][1] -
											amostras[amostras.length - 3][1]) /
											amostras[amostras.length - 2][1]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((amostras[amostras.length - 3][1] -
											amostras[amostras.length - 4][1]) /
											amostras[amostras.length - 3][1]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
					</Row>
					<Row style={{ margin: 0, padding: 0 }}>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								amostras[amostras.length - 2][3] -
									amostras[amostras.length - 3][3] <
									amostras[amostras.length - 3][3] -
										amostras[amostras.length - 4][3]
									? 'red'
									: 'green',
								amostras[amostras.length - 2][3] -
									amostras[amostras.length - 3][3] >
									amostras[amostras.length - 3][3] -
										amostras[amostras.length - 4][3]
									? 'up'
									: 'down',
								'PCR',
								amostras[amostras.length - 2][0] +
									' vs ' +
									amostras[amostras.length - 3][0],
								'Total: ' +
									amostras[amostras.length - 2][3] +
									' vs ' +
									amostras[amostras.length - 3][3],
								'Dif: ' +
									(amostras[amostras.length - 2][3] -
										amostras[amostras.length - 3][3]) +
									' vs ' +
									(amostras[amostras.length - 3][3] -
										amostras[amostras.length - 4][3]),
								'Perc: ' +
									(
										((amostras[amostras.length - 2][3] -
											amostras[amostras.length - 3][3]) /
											amostras[amostras.length - 2][3]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((amostras[amostras.length - 3][3] -
											amostras[amostras.length - 4][3]) /
											amostras[amostras.length - 3][3]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								amostras[amostras.length - 2][5] -
									amostras[amostras.length - 3][5] <
									amostras[amostras.length - 3][5] -
										amostras[amostras.length - 4][5]
									? 'red'
									: 'green',
								amostras[amostras.length - 2][5] -
									amostras[amostras.length - 3][5] >
									amostras[amostras.length - 3][5] -
										amostras[amostras.length - 4][5]
									? 'up'
									: 'down',
								'Antigenio',
								amostras[amostras.length - 2][0] +
									' vs ' +
									amostras[amostras.length - 3][0],
								'Total: ' +
									amostras[amostras.length - 2][5] +
									' vs ' +
									amostras[amostras.length - 3][5],
								'Dif: ' +
									(amostras[amostras.length - 2][5] -
										amostras[amostras.length - 3][5]) +
									' vs ' +
									(amostras[amostras.length - 3][5] -
										amostras[amostras.length - 4][5]),
								'Perc: ' +
									(
										((amostras[amostras.length - 2][5] -
											amostras[amostras.length - 3][5]) /
											amostras[amostras.length - 2][5]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										((amostras[amostras.length - 3][5] -
											amostras[amostras.length - 4][5]) /
											amostras[amostras.length - 3][5]) *
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

export default Testes;
