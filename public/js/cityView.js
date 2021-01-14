import {msgErrorCityListWeatherNotAvailable, msgErrorSpelling, msgErrorCityExists, iconUrl, iconExt, tempSymbol, windSymbol} from './data.js';

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
		img.setAttribute('src', iconUrl + weather.icon + iconExt);

		item.classList.add('city-w-item');
		head.classList.add('city-w-head');
		container.classList.add('city-w-container');
		temp.classList.add('city-w-temp');
		desc.classList.add('city-w-desc');
		btns.classList.add('city-w-btns');
		btnDelete.classList.add('btnDelete');
		btnEdit.classList.add('btnEdit');

		head.innerText = weather.name + ', ' + weather.country;
		temp.innerHTML = weather.temp + tempSymbol;
		desc.innerHTML = `
			${weather.description}<br />
			feels like: ${weather.feels_like}${tempSymbol}<br />
			wind: ${weather.wind} ${windSymbol}<br />
			humidity: ${weather.humidity}%
		`;
		btnDelete.innerText = 'Delete';
		btnEdit.innerText = 'Edit';

		btns.append(btnEdit, btnDelete);
		container.append(img, temp, desc, btns);
		item.append(head, container);

		search.after(item);
	}

	cityErrorRender() {
		const search = this.getPrevEl();
		const item = document.createElement('div');
		item.classList.add('city-w-item');
		item.innerHTML = `<p>${msgErrorCityListWeatherNotAvailable}</p>`;
		search.after(item);
	}


	getIndex(item) {
		return item.closest('div.city-w-item').getAttribute('data-id');
	}

	getValue() {
		return document.querySelector('.city-w-head input').value;
	}

	deleteCity(item) {
		item.remove();
	}

	disableBtn() {
		const btnEdit = document.querySelectorAll('.btnEdit');
		const btnDelete = document.querySelectorAll('.btnDelete');
		btnEdit.forEach((item) => {
			item.setAttribute('disabled', 'disabled');
		});
		btnDelete.forEach((item) => {
			item.setAttribute('disabled', 'disabled');
		});
	}

	enableBtn() {
		const btnEdit = document.querySelectorAll('.btnEdit');
		const btnDelete = document.querySelectorAll('.btnDelete');
		btnEdit.forEach((item) => {
			item.removeAttribute('disabled');
		});
		btnDelete.forEach((item) => {
			item.removeAttribute('disabled');
		});
	}

	startEditCity(id) {
		this.item = document.querySelector('div[data-id=\"' + id + '\"]');
		this.btnSave = document.createElement('button');
		this.btnEsc = document.createElement('button');
		this.input = document.createElement('input');
		this.head = this.item.firstChild;
		this.oldText = this.head.innerText;
		this.btnSave.innerHTML = 'Save';
		this.btnEsc.innerHTML = 'Cancel';
		this.btnSave.classList.add('btnSave');
		this.btnEsc.classList.add('btnEsc');
		this.input.setAttribute('type', 'text');

		this.btns = document.querySelector('div[data-id=\"' + id + '\"] .city-w-btns');
		this.btnEdit = document.querySelector('div[data-id=\"' + id + '\"] .btnEdit');

		this.btns.insertBefore(this.btnEsc, this.btnEdit);
		this.btns.insertBefore(this.btnSave, this.btnEsc);
		this.head.innerText = '';
		this.head.append(this.input);

		this.city = this.oldText.split(', ');
		this.input.value = this.city[0];
	}

	clearEdit() {
		this.btnSave.remove();
		this.btnEsc.remove();
		this.input.remove();
	}

	cancelEditCity() {
		this.clearEdit();
		this.head.innerText = this.oldText;
	}

	finishEditCity(weather) {
		this.clearEdit();

		const parent = this.item;
		const img = parent.querySelector('img');
		const temp = parent.querySelector('.city-w-temp');
		const desc = parent.querySelector('.city-w-desc');

		img.removeAttribute('src');
		img.setAttribute('src', iconUrl + weather.icon + iconExt);

		this.head.innerText = weather.name + ', ' + weather.country;
		temp.innerHTML = weather.temp + tempSymbol;
		desc.innerHTML = `
			${weather.description}<br />
			feels like: ${weather.feels_like}${tempSymbol}<br />
			wind: ${weather.wind} ${windSymbol}<br />
			humidity: ${weather.humidity}%
		`;
	}

	showCityError(msg) {
		const p = document.createElement('p');
		if (msg === 'spelling') {
			p.innerHTML = msgErrorSpelling;
		} else if (msg === 'done') {
			p.innerHTML = msgErrorCityExists;
		}

		this.input.after(p);
		this.clearInput();
	}

	clearInput() {
		this.input.value = '';
	}

	removeCityError() {
		const spellingError = document.querySelector('.city-w-head p');

		if(spellingError) {
			spellingError.remove();
		}
	}

}