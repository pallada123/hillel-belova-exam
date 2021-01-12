export default class CityView {
	constructor() {

	}

	cityRender(city) {

		this.mainCity = document.querySelector('#weather-favorite');

		this.city = document.createElement('div');

		this.city.innerText = city.cityId;

		this.mainCity.appendChild(this.city);
	}

}