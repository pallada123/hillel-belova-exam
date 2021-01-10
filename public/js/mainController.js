export default class MainController {
	constructor(searchController, locationController, cityController, rateController, model, view) {
		this.searchController = searchController;
		this.locationController = locationController;
		this.cityController = cityController;
		this.rateController = rateController;
		this.model = model;
		this.view = view;

		this.init();
	}

	init() {

		this.view.mainRender();

		this.searchController.init();
		this.locationController.init();
		this.cityController.init();
		this.rateController.init();
	}

}