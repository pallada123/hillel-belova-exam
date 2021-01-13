export default class CityView {
	constructor() {

	}

	cityRender(weather, id) {
		this.search = document.querySelector('#city-search');

		const item = document.createElement('div');
		const head = document.createElement('div');
		const container = document.createElement('div');
		const img = document.createElement('img');
		const temp = document.createElement('div');
		const desc = document.createElement('div');
		const btns = document.createElement('div');
		this.delete = document.createElement('button');
		this.edit = document.createElement('button');

		item.setAttribute('data-id', id);
		img.setAttribute('alt', '');
		img.setAttribute('src', 'http://openweathermap.org/img/wn/' + weather.icon + '.png');

		item.classList.add('city-w-item');
		head.classList.add('city-w-head');
		container.classList.add('city-w-container');
		temp.classList.add('city-w-temp');
		desc.classList.add('city-w-desc');
		btns.classList.add('city-w-btns');

		head.innerText = weather.name + ', ' + weather.country;
		temp.innerHTML = weather.temp + '&deg;C';
		desc.innerHTML = `
			${weather.description}<br />
			feels like: ${weather.feels_like}&deg;C<br />
			wind: ${weather.wind} mps<br />
			humidity: ${weather.humidity}%
		`;
		this.delete.innerText = 'Delete';
		this.edit.innerText = 'Edit';

		btns.append(this.delete, this.edit);
		container.append(img, temp, desc, btns);
		item.append(head, container);

		this.search.after(item);
	}

	cityErrorRender() {
		console.log('погода не доступна');
	}

}