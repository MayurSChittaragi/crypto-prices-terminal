const Configstore = require("configstore");
const { name } = require("../package.json");

class KeyManager {
	constructor() {
		this.conf = new Configstore(name);
	}

	setKey(key) {
		this.conf.set("apiKey", key);
		return key;
	}

	getKey() {
		const key = this.conf.get("apiKey");
		if (!key) {
			throw new Error(
				"No API Key found, Get new API Key at https://coinlayer.com"
			);
		}
		return key;
	}
	removeKey() {
		const key = this.conf.get("apiKey");
		if (!key) {
			throw new Error(
				"No API Key found, Get new API Key at https://coinlayer.com"
			);
		}
		this.conf.delete("apiKey");
		return key;
	}
}

module.exports = KeyManager;
