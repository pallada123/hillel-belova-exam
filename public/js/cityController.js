export default class CityController {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	init() {
		document.body.addEventListener('newCityAdded', evt => this.getCityWeather(evt.detail));
	}

	getCityWeather(city) {
		this.model.getCityWeather(city.cityId)
		.then(weather => this.view.cityRender(weather, city._id))
		.catch((err) => {
			this.view.cityErrorRender();
			console.error(err);
		});
	}

}