import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from 'react-bootstrap/Button';
import './../App.css';

const text = (title, total, diff, percentage) => {
	return (
		<p>
			{title} {total}; ({diff}); <b>{percentage}%</b>
		</p>
	);
};

const report = (data) => {
	return (
		<>
			<div
				style={{
					fontSize: 16,
				}}
			>
				<p>
					<b>Relatório do dia {data[data.length - 2][0]}</b>
				</p>
			</div>
			<div
				style={{
					textAlign: 'left',
					fontSize: 14,
				}}
			>
				{text(
					'Total de Casos em Vigilância:',
					data[data.length - 2][18],
					data[data.length - 2][18] - data[data.length - 3][18],
					(
						((data[data.length - 2][18] - data[data.length - 3][18]) /
							data[data.length - 2][18]) *
						100
					).toFixed(2)
				)}
				{text(
					'Total de Obitos:',
					data[data.length - 2][13],
					data[data.length - 2][13] - data[data.length - 3][13],
					(
						((data[data.length - 2][13] - data[data.length - 3][13]) /
							data[data.length - 2][13]) *
						100
					).toFixed(2)
				)}
				{text(
					'Total de Casos Recuperados:',
					data[data.length - 2][12],
					data[data.length - 2][12] - data[data.length - 3][12],
					(
						((data[data.length - 2][12] - data[data.length - 3][12]) /
							data[data.length - 2][12]) *
						100
					).toFixed(2)
				)}
				{text(
					'Total de Casos Confirmados:',
					data[data.length - 2][2],
					data[data.length - 2][11],
					(
						(data[data.length - 2][11] / data[data.length - 2][2]) *
						100
					).toFixed(2)
				)}
				{text(
					'Total de Casos Ativos:',
					data[data.length - 2][86],
					data[data.length - 2][86] - data[data.length - 3][86],
					(
						((data[data.length - 2][86] - data[data.length - 3][86]) /
							data[data.length - 2][86]) *
						100
					).toFixed(2)
				)}
				{text(
					'Total de Casos Internados na Enfermaria:',
					data[data.length - 2][87],
					data[data.length - 2][87] - data[data.length - 3][87],
					(
						((data[data.length - 2][87] - data[data.length - 3][87]) /
							data[data.length - 2][87]) *
						100
					).toFixed(2)
				)}
				{text(
					'Total de Casos Internados em UCI:',
					data[data.length - 2][15],
					data[data.length - 2][15] - data[data.length - 3][15],
					(
						((data[data.length - 2][15] - data[data.length - 3][15]) /
							data[data.length - 2][15]) *
						100
					).toFixed(2)
				)}
			</div>
		</>
	);
};

const copyText = (data) => {
	const text =
		'*Relatório do dia ' +
		data[data.length - 2][0] +
		'*\n' +
		'Total de Casos em Vigilância: ' +
		data[data.length - 2][18].toString() +
		' (' +
		(data[data.length - 2][18] - data[data.length - 3][18]).toString() +
		') *' +
		(
			((data[data.length - 2][18] - data[data.length - 3][18]) /
				data[data.length - 2][18]) *
			100
		)
			.toFixed(2)
			.toString() +
		'*\n' +
		'Total de Obitos: ' +
		data[data.length - 2][13] +
		' (' +
		(data[data.length - 2][13] - data[data.length - 3][13]).toString() +
		') *' +
		(
			((data[data.length - 2][13] - data[data.length - 3][13]) /
				data[data.length - 2][13]) *
			100
		)
			.toFixed(2)
			.toString() +
		'*\n' +
		'Total de Casos Recuperados: ' +
		data[data.length - 2][12] +
		' (' +
		(data[data.length - 2][12] - data[data.length - 3][12]).toString() +
		') *' +
		(
			((data[data.length - 2][12] - data[data.length - 3][13]) /
				data[data.length - 2][12]) *
			100
		)
			.toFixed(2)
			.toString() +
		'*\n' +
		'Total de Casos Confirmados: ' +
		data[data.length - 2][2] +
		' (' +
		data[data.length - 2][11] +
		') *' +
		((data[data.length - 2][11] / data[data.length - 2][2]) * 100)
			.toFixed(2)
			.toString() +
		'*\n' +
		'Total de Casos Ativos: ' +
		data[data.length - 2][86] +
		' (' +
		(data[data.length - 2][86] - data[data.length - 3][86]).toString() +
		') *' +
		(
			((data[data.length - 2][86] - data[data.length - 3][86]) /
				data[data.length - 2][86]) *
			100
		)
			.toFixed(2)
			.toString() +
		'*\n' +
		'Total de Casos Internados na Enfermaria: ' +
		data[data.length - 2][87] +
		' (' +
		(data[data.length - 2][87] - data[data.length - 3][87]).toString() +
		') *' +
		(
			((data[data.length - 2][87] - data[data.length - 3][87]) /
				data[data.length - 2][87]) *
			100
		)
			.toFixed(2)
			.toString() +
		'*\n' +
		'Total de Casos Internados em UCI: ' +
		data[data.length - 2][15] +
		' (' +
		(data[data.length - 2][15] - data[data.length - 3][15]).toString() +
		') *' +
		(
			((data[data.length - 2][15] - data[data.length - 3][15]) /
				data[data.length - 2][15]) *
			100
		)
			.toFixed(2)
			.toString() +
		'*';

	return {
		text,
	};
};
const Text = (props) => {
	const data = props.info;
	return (
		<div className="App">
			<header className="App-header">
				{report(data)}
				<CopyToClipboard text={copyText(data).text}>
					<Button variant="light">Copy to clipboard</Button>
				</CopyToClipboard>
			</header>
		</div>
	);
};

export default Text;
