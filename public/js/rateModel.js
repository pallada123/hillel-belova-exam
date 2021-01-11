import Data from './data.js'

export default class RateModel {
	constructor() {

	}

	getRateData() {
		const symbol = {
			'USD': '&#36;',
			'EUR': '&#8364;',
			'RUR': '&#8381;'
		};

		return Data.getRate()
			.then(data => data.filter(item => item.ccy !== 'BTC'))
			.then(data => data.map(item => {
					item.ccy = symbol[item.ccy];
					item.buy = this.addZero(this.round(item.buy));
					item.sale = this.addZero(this.round(item.sale));

					return item;
				}))
	}

	round(num) {
		return String(Math.round(Number(num) * 100) / 100);
	}

	addZero(num) {
		const numArr = num.split('.');

		if (numArr[1].length === 2) {
			return numArr.join('.');
		}

		numArr[1] = numArr[1] + '0';
		return numArr.join('.');
	}

}