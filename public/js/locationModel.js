import Data from './data.js';

export default class LocationModel {

	getLocationData(coords) {
		return Data.getWeather(this.getApiLocation(coords));
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

}