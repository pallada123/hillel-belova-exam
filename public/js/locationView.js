export default class LocationView {
	constructor() {

	}

	locationRender(weather) {
		this.mainLocation = document.querySelector('#weather-location');
		const head = document.createElement('div');
		const data = document.createElement('div');
		const img = document.createElement('img');
		const span = document.createElement('span');
		const desc = document.createElement('div');
		const city = document.createElement('div');

		img.setAttribute('alt', '');
		img.setAttribute('src', 'http://openweathermap.org/img/wn/' + weather.icon + '.png');

		head.classList.add('loc-w-head');
		data.classList.add('loc-w-data');
		span.classList.add('loc-w-data-temp');
		desc.classList.add('loc-w-desc');
		city.classList.add('loc-w-city');

		head.innerText = 'Your City';
		span.innerHTML = weather.temp + '&deg;C';
		desc.innerText = weather.description;
		city.innerText = weather.name + ', ' + weather.country;

		data.append(img, span);
		this.mainLocation.append(head, data, desc, city);
	}

	locationErrorRender(msg) {
		if (msg === 'refuse') {
			this.mainLocation.innerHTML = '<p>You\'ve refused to&nbsp;receive the&nbsp;weather in&nbsp;your city</p>';
		} else {
			this.mainLocation.innerHTML = '<p>Unfortunately, the&nbsp;weather in&nbsp;your city isn\'t&nbsp;available now.</p>';
		}
	}


}