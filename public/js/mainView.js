export default class MainView {
	constructor() {
		this.mainBlock = document.querySelector('#app');

		this.location = document.createElement('div');
		this.city = document.createElement('div');
		this.rate = document.createElement('div');
		this.location.setAttribute('id', 'weather-location');
		this.city.setAttribute('id', 'weather-favorite');
		this.rate.setAttribute('id', 'exchange');
	}

	mainRender() {
		this.mainBlock.append(this.location, this.city, this.rate);
	}

}