export default class CityController {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	init() {
		document.body.addEventListener('newCityAdded', evt => this.getCityWeather(evt.detail));
		this.getUserCityList();
	}

	getCityWeather(city) {
		this.model.getCityWeather(city.cityId)
		.then(weather => this.view.cityRender(weather, city._id))
		.catch((err) => {
			this.view.cityErrorRender();
			console.error(err);
		});
	}

	async getUserCityList() {
		try {
			let userCities = await this.model.getUserCityList();

			if (!userCities.length) {
				return;
			}

			userCities.forEach((item) => {
				this.getCityWeather(item);
			});

		} catch (err) {
			console.error(err);
		}
	}

}