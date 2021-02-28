import './App.css';
import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { readRemoteFile } from 'react-papaparse';
import Spinner from 'react-bootstrap/Spinner';
import { Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';
import covid from './images/covid-40.jpg';

import Text from './components/Text';
import Covid from './components/Covid';
import Testes from './components/Testes';
import Vacinas from './components/Vacinas';
import Graph from './components/Graph';

function App() {
	const [loading, setLoading] = useState(true);
	const [amostras, setAmostras] = useState(null);
	const [data, setData] = useState(null);
	const [vacinas, setVacinas] = useState(null);

	useEffect(() => {
		function fetchData() {
			readRemoteFile(
				'https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/vacinas.csv',
				{
					download: true,
					complete: (results) => {
						setVacinas(results.data);
					},
				}
			);

			readRemoteFile(
				'https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/data.csv',
				{
					download: true,
					complete: (results) => {
						setData(results.data);
					},
				}
			);

			readRemoteFile(
				'https://raw.githubusercontent.com/dssg-pt/covid19pt-data/master/amostras.csv',
				{
					download: true,
					complete: (results) => {
						setAmostras(results.data);
					},
				}
			);
		}

		fetchData();
	}, []);

	useEffect(() => {
		if (amostras !== null && vacinas !== null && data !== null) {
			setLoading(false);
		}
	}, [amostras, vacinas, data]);

	return (
		<>
			{loading === false ? (
				<div
					style={{
						textAlign: 'center',
						alignItems: 'center',
					}}
				>
					<HashRouter>
						<Navbar bg="dark" variant="dark">
							<Navbar.Brand>
								<Image src={covid} roundedCircle />
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav
									className="mr-auto"
									style={{
										textAlign: 'center',
										alignItems: 'center',
									}}
								>
									<Nav.Link href="/covid19-report-pt/#/">Sumário</Nav.Link>
									<NavDropdown title="Dashboard" id="basic-nav-dropdown">
										<NavDropdown.Item href="/covid19-report-pt/#/covid">
											Covid
										</NavDropdown.Item>
										<NavDropdown.Item href="/covid19-report-pt/#/testes">
											Testes
										</NavDropdown.Item>
										<NavDropdown.Item href="/covid19-report-pt/#/vacinas">
											Vacinas
										</NavDropdown.Item>
									</NavDropdown>
									<Nav.Link href="/covid19-report-pt/#/graph">
										Gráficos
									</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
						<Switch>
							<Route exact path="/" component={Text}>
								<Text info={data} />
							</Route>
							<Route path="/covid" component={Covid}>
								<Covid info={data} />
							</Route>
							<Route path="/testes" component={Testes}>
								<Testes info={amostras} />
							</Route>
							<Route path="/vacinas" component={Vacinas}>
								<Vacinas info={vacinas} />
							</Route>
							<Route path="/graph" component={Graph}>
								<Graph info={data} />
							</Route>
						</Switch>
					</HashRouter>
				</div>
			) : (
				<div className="App">
					<header className="App-header" style={{ justifyContent: 'center' }}>
						<p>À procura de dados do Covid19!</p>
						<p>Não te preocupes, não é transmissível</p>
						<Spinner animation="border" variant="danger" />
					</header>
				</div>
			)}
		</>
	);
}

export default App;
