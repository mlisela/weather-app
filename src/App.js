import './App.css';
import React, { useEffect, useState } from 'react';
import Weather from './components/weather';
import Loader from './components/loader';
import useWindowSize from "./utils/useWindowSize";

function App() {

	const [lat, setLat] = useState([]);
	const [long, setLong] = useState([]);
	const [forecastData, setForecastData] = useState([]);
	const { width } = useWindowSize();

	// used to load the function when app loads | reloads
	useEffect(() => {
		const fetchData = async () => {
			navigator.geolocation.getCurrentPosition(function (position) {
				setLat(position.coords.latitude);
				setLong(position.coords.longitude);
			});

			await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
				.then(res => res.json())
				.then(result => {
					setForecastData(result)
					console.log(result);
				});
		}
		fetchData();
	}, [lat, long]);

	return (
		<div className="App">
			{(typeof forecastData.main !== 'undefined') ? (
				width > 319 &&(<Weather weatherData={forecastData} />)
			) : (
				<Loader />
			)}
		</div>
	);
}

export default App;
