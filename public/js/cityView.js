export default class CityView {
	constructor() {

	}

	getPrevEl() {
		return document.querySelector('#city-search');
	}

	cityRender(weather, id) {
		const search = this.getPrevEl();

		const item = document.createElement('div');
		const head = document.createElement('div');
		const container = document.createElement('div');
		const img = document.createElement('img');
		const temp = document.createElement('div');
		const desc = document.createElement('div');
		const btns = document.createElement('div');
		const btnDelete = document.createElement('button');
		const btnEdit = document.createElement('button');

		item.setAttribute('data-id', id);
		img.setAttribute('alt', '');
		img.setAttribute('src', 'http://openweathermap.org/img/wn/' + weather.icon + '.png');

		item.classList.add('city-w-item');
		head.classList.add('city-w-head');
		container.classList.add('city-w-container');
		temp.classList.add('city-w-temp');
		desc.classList.add('city-w-desc');
		btns.classList.add('city-w-btns');
		btnDelete.classList.add('btnDelete');
		btnEdit.classList.add('btnEdit');

		head.innerText = weather.name + ', ' + weather.country;
		temp.innerHTML = weather.temp + '&deg;C';
		desc.innerHTML = `
			${weather.description}<br />
			feels like: ${weather.feels_like}&deg;C<br />
			wind: ${weather.wind} mps<br />
			humidity: ${weather.humidity}%
		`;
		btnDelete.innerText = 'Delete';
		btnEdit.innerText = 'Edit';

		btns.append(btnDelete, btnEdit);
		container.append(img, temp, desc, btns);
		item.append(head, container);

		search.after(item);
	}

	cityErrorRender() {
		const search = this.getPrevEl();
		const item = document.createElement('div');
		item.classList.add('city-w-item');
		item.innerHTML = '<p>The&nbsp;city has&nbsp;been added to&nbsp;your list.<br />Unfortunately, the&nbsp;weather in&nbsp;this&nbsp;city isn\'t&nbsp;available now.</p>';
		search.after(item);
	}

	editCity(item) {
		console.log('edit', item);
	}

	deleteCity(item) {
		item.remove();
	}

}