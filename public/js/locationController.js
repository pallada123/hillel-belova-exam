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
			let msg = 'refuse';
			this.view.locationErrorRender(msg);
			console.log(err);
			return;
		}

		this.model.getLocationData(coords)
		.then(weather => this.model.filterWeatherData(weather))
		.then(weather => this.view.locationRender(weather))
		.catch((err) => {
			let msg = 'notavailable';
			this.view.locationErrorRender(msg);
			console.error(err);
		});
	}

}