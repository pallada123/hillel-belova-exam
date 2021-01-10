import Data from './data.js'

export default class LocationModel {
	constructor() {

	}

	getLocation() {
		const cood = {};

		const success = pos => {
			const crd = pos.coords;

			cood.lat = crd.latitude;
			cood.lon = crd.longitude;
		};

		const error = err => {
			console.warn(`ERROR(${err.code}): ${err.message}`);
		};

		Data.getLocation(success, error);

		return cood;
	}

}