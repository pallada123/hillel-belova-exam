export default class SearchController {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	init() {
		this.view.searchRender();
		this.addSearchBtnHandle();
		this.addSearchInputHandle();
	}

	async validateCity() {

		this.view.removeCityError();

		if (this.view.input.value.length) {

			try {

				const city = await this.model.getCity(this.view.input.value);

				if (city === undefined) {
					this.view.showCityError('spelling');

				} else {
					this.view.clearInput();

					let userCities = await this.model.getUserCityList();

					if (userCities.find(item => item.cityId === city.id)) {
						this.view.showCityError('done');
					} else {
						const addedCity = await this.model.addCity(city.id);

						//console.log(addedCity);

						const newCityAdded = new CustomEvent('newCityAdded', {detail: addedCity});
						document.body.dispatchEvent(newCityAdded);
					}

				}
			} catch (err) {
				console.error(err);
			}

		}

	}

	addSearchBtnHandle() {
		this.view.button.addEventListener('click', this.validateCity.bind(this));
	}
	addSearchInputHandle() {
		this.view.input.addEventListener('keydown', e => {
			if (e.keyCode === 13) {
				this.validateCity();
			}
		});
	}

}