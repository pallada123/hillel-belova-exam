export default class LocationController {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	init() {
		this.view.locationRender(this.model.getLocation());
	}

}