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
		try {
			const attr = item.getAttribute('data-id');
			await this.model.deleteCity(attr);
			this.view.deleteCity(item);

		} catch (err) {
			console.error(err);
		}
	}

	startEditCity(id) {
		this.view.startEditCity(id);
		this.view.disableBtn();
		this.addSaveHandle();
		this.addCityInputHandle();
		this.addCancelHandle();
		this.addBodyEventDisableSearch();
	}

	cancelEditCity() {
		this.view.cancelEditCity();
		this.view.enableBtn();
		this.addBodyEventEnableSearch();
	}

	async finishEditCity(event) {

		const itemId = this.view.getIndex(event.target);
		const cityName = this.view.getValue(itemId);
		this.view.removeCityError(itemId);

		if (cityName.length) {

			try {

				const city = await this.model.getCity(cityName);

				if (city === undefined) {
					this.view.showCityError('spelling');
					return;
				}

				this.view.clearInput();

				let userCities = await this.model.getUserCityList();

				if (userCities.find(item => item.cityId === city.id)) {
					this.view.showCityError('done');
					return;
				}

				await this.model.editCity(itemId, city.id);

				this.model.getCityWeather(city.id)
				.then(weather => {
					this.view.finishEditCity(weather);
					this.view.enableBtn();
					this.addBodyEventEnableSearch();
				})
				.catch((err) => {
					this.view.cityErrorRender();
					console.error(err);
				});

			} catch (err) {
				console.error(err);
			}

		}
	}

	addEditDeleteHandles(id) {
		const item = document.querySelector('div[data-id=\"' + id + '\"]');

		item.addEventListener('click', (event) => {
			if (event.target.className === 'btnEdit') {
				this.startEditCity(id);
			} else if (event.target.className === 'btnDelete') {
				this.deleteCity(item);
			}
		});
	}

	addSaveHandle() {
		const btnSave = document.querySelector('.btnSave');
		btnSave.addEventListener('click', this.finishEditCity.bind(this));
	}

	addCityInputHandle() {
		this.view.input.addEventListener('keydown', e => {
			if (e.keyCode === 13) {
				this.finishEditCity(e);
			}
		});
	}

	addCancelHandle() {
		const btnEsc = document.querySelector('.btnEsc');
		btnEsc.addEventListener('click', this.cancelEditCity.bind(this));
	}

	addBodyEventDisableSearch() {
		const startEdit = new CustomEvent('startEdit');
		document.body.dispatchEvent(startEdit);
	}

	addBodyEventEnableSearch() {
		const finishEdit = new CustomEvent('finishEdit');
		document.body.dispatchEvent(finishEdit);
	}
}