export default class RateController {
	constructor(model, view) {
		this.model = model;
		this.view = view;
	}

	init() {
		this.model.getRateData()
			.then(rate => {
				this.view.rateRender(rate);
				rate.forEach((item) => {
					this.view.rateRenderItem(item);
				});
			})
			.catch((err) => {
				this.view.rateRenderError();
				console.log(err);
			});

		setTimeout(this.init.bind(this), 3600000);
	}




}