export default class RateView {
	constructor() {

	}

	getMainEl() {
		return document.querySelector('#exchange');
	}

	rateRender() {
		const mainRate = this.getMainEl();
		mainRate.innerHTML = '';
		const head = document.createElement('div');
		head.classList.add('exchange-head');
		this.table = document.createElement('table');
		const tr = document.createElement('tr');
		const th1 = document.createElement('th');
		const th2 = document.createElement('th');
		const th3 = document.createElement('th');

		th2.innerText = 'Buy';
		th3.innerText = 'Sale';
		head.innerHTML = '&#8372; Exchange Rate';
		tr.append(th1, th2, th3);
		this.table.append(tr);
		mainRate.append(head, this.table);
	}

	rateRenderItem(rate) {
		const tr = document.createElement('tr');
		const td1 = document.createElement('td');
		const td2 = document.createElement('td');
		const td3 = document.createElement('td');

		td1.innerHTML = rate.ccy;
		td2.innerText = rate.buy;
		td3.innerText = rate.sale;

		tr.append(td1, td2, td3);
		this.table.append(tr);
	}

	rateRenderError() {
		const mainRate = this.getMainEl();
		mainRate.innerHTML = '<p>Unfortunately, the&nbsp;exchange rate data isn\'t&nbsp;available now.</p>';
	}
}