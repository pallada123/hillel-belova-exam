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
		.then(weather => {
			this.view.cityRender(weather, city._id);
			this.addEditDeleteHandles(city._id);
		})
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

	async deleteCity(item) {
		this.view.deleteCity(item);
		try {
			const attr = item.getAttribute('data-id');
			await this.model.deleteCity(attr);

		} catch (err) {
			console.error(err);
		}
	}

	editCity(item) {
		this.view.editCity(item);
	}

	addEditDeleteHandles(id) {
		const item = document.querySelector('div[data-id=\"' + id + '\"]');

		item.addEventListener('click', (event) => {
			if (event.target.className === 'btnEdit') {
				this.editCity(item);
			} else if (event.target.className === 'btnDelete') {
				this.deleteCity(item);
			}
		});
	}
}