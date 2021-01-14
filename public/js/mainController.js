export default class MainController {
	constructor(searchController, locationController, cityController, rateController, view) {
		this.searchController = searchController;
		this.locationController = locationController;
		this.cityController = cityController;
		this.rateController = rateController;
		this.view = view;

		this.init();
	}

	init() {

		this.view.mainRender();

		this.locationController.init();
		this.rateController.init();
		this.searchController.init();
		this.cityController.init();
	}

}