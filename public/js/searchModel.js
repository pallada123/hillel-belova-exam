import Data from './data.js';

export default class SearchModel {

	async getCity(value) {
		return await Data.getCity(value);
	}

	async getUserCityList() {
		return await Data.getUserCityList();
	}

	async addCity(newCityId) {
		return await Data.addCity(newCityId);
	}
}
