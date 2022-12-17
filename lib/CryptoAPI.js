const { default: axios } = require("axios");
const KeyManager = require("./keyManager");

const fetchKey = () => {
	const keyManager = new KeyManager();
	try {
		const key = keyManager.getKey();
		// console.log(key);
		return key;
	} catch {
		console.log(
			"No API Key found, Get new API Key at https://coinlayer.com"
		);
		return false;
	}
};

const coinLayer = axios.create({
	baseURL: "http://api.coinlayer.com/",
	timeout: 3000,
});

module.exports = {
	fetchKey,
	coinLayer,
};
