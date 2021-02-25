import React from 'react';
import './../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import * as Icon from 'react-bootstrap-icons';

const card = (border, header, line1, line2, line3) => {
	return (
		<Card
			border={border}
			text={'dark'}
			style={{ margin: '0.2rem', borderWidth: 'medium' }}
		>
			<Card.Header style={{ textAlign: 'center' }}>{header}</Card.Header>
			<Card.Body style={{ padding: '0.5rem' }}>
				<Card.Text>
					<Icon.ArrowUpCircle size={32} />
					<div style={{ width: '100%', marginTop: '1rem' }}>
						{line1}
						<br />
						{line2}
						<br />
						{line3}
					</div>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
const Visual = (props) => {
	const data = props.info;
	return (
		<div className="App">
			<header className="App-header">
				<h1>On work Visual</h1>
				{/*<h3>Sumário comparativo hoje vs ontem</h3>
				<div
					style={{ flex: 1, width: '95%', margin: 0, padding: 0, fontSize: 15 }}
				>
					<Row style={{ margin: 0, padding: 0 }}>
						<Col style={{ margin: 0, padding: 0 }}>
							{card(
								'success',
								'Casos Confirmados',
								'Total: ' +
									data[data.length - 2][2] +
									' vs ' +
									data[data.length - 3][2],
								'Dif: ' +
									data[data.length - 2][11] +
									' vs ' +
									data[data.length - 3][11],
								'Perc: ' +
									(
										(data[data.length - 2][11] / data[data.length - 2][2]) *
										100
									).toFixed(2) +
									'% vs ' +
									(
										(data[data.length - 3][11] / data[data.length - 3][2]) *
										100
									).toFixed(2) +
									'%'
							)}
						</Col>
						<Col style={{ margin: 0, padding: 0 }}>
							{card('danger', 'Casos Recuperados', 'text')}
						</Col>
					</Row>
					<Row style={{ margin: 0, padding: 0 }}>
						<Col style={{ margin: 0, padding: 0 }}>
							{card('danger', 'Casos Recuperados', 'text')}
						</Col>
						<Col style={{ margin: 0, padding: 0 }}>
							{card('danger', 'Casos Recuperados', 'text')}
						</Col>
					</Row>
									</div>*/}
			</header>
		</div>
	);
};

export default Visual;
