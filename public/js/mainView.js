export default class MainView {

	mainRender() {
		const mainBlock = document.querySelector('#app');
		const location = document.createElement('div');
		const weather = document.createElement('div');
		const cities = document.createElement('div');
		const rate = document.createElement('div');
		location.setAttribute('id', 'weather-location');
		weather.setAttribute('id', 'weather-favorite');
		cities.setAttribute('id', 'cities');
		rate.setAttribute('id', 'exchange');

		weather.append(cities);
		mainBlock.append(location, weather, rate);
	}

}