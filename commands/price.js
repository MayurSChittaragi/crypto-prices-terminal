const axios = require("axios");
const { coinLayer, fetchKey } = require("../lib/CryptoAPI");
const colors = require("colors");

const price = {
	check: async (cmd) => {
		console.log("Checking Price...", cmd.coin, cmd.cur);
		let output = "";

		try {
			const formatter = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: cmd.cur,
			});
			const API_KEY = fetchKey();
			// console.log(API_KEY);
			if (API_KEY) {
				const data = await coinLayer.get("/live", {
					params: {
						target: cmd.cur,
						symbols: cmd.coin,
						access_key: API_KEY,
					},
				});
				const myRates = data.data.rates;
				// console.log(myRates);
				const keys = Object.keys(myRates);
				keys.forEach((key) => {
					output +=
						`${key.yellow}` +
						`: ${formatter.format(myRates[key]).green}\n`;
				});
				console.log(output);
			}
		} catch (err) {
			handleAPIError(err);
		}
	},
};

const handleAPIError = (err) => {
	// console.log(err);
	if (err.response.status === 401) {
		throw new Error(
			"Your API Key is Invalid - Get at https://coinlayer.com"
		);
	} else if (err.response.status === 404) {
		throw new Error("Your API Key is not responding");
	} else {
		throw new Error("Something is not working");
	}
};

module.exports = price;
