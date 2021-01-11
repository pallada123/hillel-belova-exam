import Data from './data.js'

export default class LocationModel {
	constructor() {

	}

	getLocationData(coords) {
		return Data.getLocationWeather(this.getApiLocation(coords));
	}

	getCoords() {
		return new Promise(
			(resolve, reject) => {
				const success = pos => {
					const crd = pos.coords;

					const coordinates = {
						lat: crd.latitude,
						lon: crd.longitude
					};

					resolve(coordinates);
				};

				const error = err => {
					console.warn(`ERROR(${err.code}): ${err.message}`);

					reject();
				};

				Data.getLocation(success, error);
			}
		);
	}

	getApiLocation(coordinates) {
		return `lat=${String(coordinates.lat)}&lon=${String(coordinates.lon)}`;
	}

	filterWeatherData (weatherObj) {
		return {
			name: weatherObj.name,
			country: weatherObj.sys.country,
			icon: weatherObj.weather[0].icon,
			temp: this.round(weatherObj.main.temp),
			description: weatherObj.weather[0].description,
			feels_like: this.round(weatherObj.main.feels_like),
			wind: weatherObj.wind.speed,
			humidity: weatherObj.main.humidity
		}
	}

	round(num) {
		return String(Math.round(Number(num)));
	}



}