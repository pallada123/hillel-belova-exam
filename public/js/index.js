import MainController from './mainController.js';
import MainModel from './mainModel.js';
import MainView from './mainView.js';

import SearchController from './searchController.js';
import SearchModel from './searchModel.js';
import SearchView from './searchView.js';

import LocationController from './locationController.js';
import LocationModel from './locationModel.js';
import LocationView from './locationView.js';

import CityController from './cityController.js';
import CityModel from './cityModel.js';
import CityView from './cityView.js';

import RateController from './rateController.js';
import RateModel from './rateModel.js';
import RateView from './rateView.js';


document.addEventListener('DOMContentLoaded', () => {

	(function init() {
		const searchView = new SearchView;
		const searchModel = new SearchModel;
		const searchController = new SearchController(searchModel, searchView);

		const locationView = new LocationView;
		const locationModel = new LocationModel;
		const locationController = new LocationController(locationModel, locationView);

		const cityView = new CityView;
		const cityModel = new CityModel;
		const cityController = new CityController(cityModel, cityView);

		const rateView = new RateView;
		const rateModel = new RateModel;
		const rateController = new RateController(rateModel, rateView);

		const mainView = new MainView;
		const mainModel = new MainModel;
		const mainController = new MainController(searchController, locationController, cityController, rateController, mainModel, mainView);

	})();

});

