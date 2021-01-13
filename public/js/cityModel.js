import Data from './data.js'

export default class CityModel {
	constructor() {

	}

	getCityWeather(cityId) {
		return Data.getWeather(this.getApiId(cityId));
	}

	getApiId(cityId) {
		return `id=${String(cityId)}`;
	}

}