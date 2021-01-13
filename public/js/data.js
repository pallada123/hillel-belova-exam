export default class Data {

	static getRate() {
		let data = fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
		return data.then(res => res.json());
	}

	static getLocation(success, error) {
		const options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		};

		navigator.geolocation.getCurrentPosition(success, error, options);
	}

	static getWeather(cityData) {
		let data = fetch('https://api.openweathermap.org/data/2.5/weather?' + cityData + '&units=metric&appid=b3b5be1d5c8dfc8844ca2b0e047e0cee');
		return data.then(async res => {
			const result = await res.json();
			if (result.cod !== 200) {
				throw new Error('Code: ' + result.cod + '. ' + result.message);
			}
			return result;
		})
		.then(async result => await this.filterWeatherData(result));
	}

	static filterWeatherData(weatherObj) {
		return {
			name: weatherObj.name,
			country: weatherObj.sys.country,
			icon: weatherObj.weather[0].icon,
			temp: this.round(weatherObj.main.temp),
			description: weatherObj.weather[0].description,
			feels_like: this.round(weatherObj.main.feels_like),
			wind: weatherObj.wind.speed,
			humidity: weatherObj.main.humidity
		}
	}

	static round(num) {
		return String(Math.round(Number(num)));
	}

	static async getCity(value) {
		const cities = await fetch('/cities').then(res => res.json());
		return cities.find(item => item.name === value);	}

	static async getUserCityList() {
		return await fetch('/mycities').then(res => res.json());
	}

	static async addCity(cityId) {
		const city = {
			cityId: cityId
		};

		let response = await fetch('/mycities', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(city)
		});

		if (response.ok) {
			return await response.json();
		} else {
			throw new Error(response.status);
		}
	}

	static async deleteCity(id) {

		let response = await fetch('/mycities/' + id, {
			method: 'DELETE'
		});

		if (!response.ok) {
			throw new Error(response.status);
		}
	}

	static async editCity(id, cityId) {
		const city = {
			cityId: cityId
		};

		let response = await fetch('/mycities/' + id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(city)
		});

		if (response.ok) {
			return await response.json();
		} else {
			throw new Error(response.status);
		}
	}
}