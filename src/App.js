import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { readRemoteFile } from 'react-papaparse';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import covid from './images/covid-40.jpg';

import Text from './components/Text';
import Graph from './components/Graph';
import Visual from './components/Visual';

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
				<Router>
					<Navbar bg="dark" variant="dark">
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Brand>
							<Container>
								<Image src={covid} roundedCircle />
							</Container>
						</Navbar.Brand>
						<Nav className="mr-auto">
							<Nav.Link href="/">Summary</Nav.Link>
							<Nav.Link href="/visual">Visual Summary</Nav.Link>
							<Nav.Link href="/graph">Graphs</Nav.Link>
						</Nav>
					</Navbar>
					<Switch>
						<Route exact path="/" component={Text}>
							<Text info={data} />
						</Route>
						<Route path="/visual" component={Visual}>
							<Visual />
						</Route>
						<Route path="/graph" component={Graph}>
							<Graph />
						</Route>
					</Switch>
				</Router>
			) : (
				<div className="App">
					<header className="App-header">
						<p>Fetching Covid19 data!</p>
						<p>It's ok, this is not transmissible</p>
						<Spinner animation="border" variant="danger" />
					</header>
				</div>
			)}
		</>
	);
}

export default App;
