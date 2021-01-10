export default class LocationController {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	async init() {
		let coords;

		try {
			coords = await this.model.getCoords();
		} catch (err) {
			this.view.locationRefuseRender();
			console.log(err);
			return;
		}


		this.model.getLocationData(coords)
		.then(weather => this.view.locationRender(weather))
		.catch((err) => {
			this.view.locationUnavailableRender();
			console.error(err);
		});
	}

}