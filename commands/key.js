const KeyManager = require("../lib/keyManager");
const inquirer = require("inquirer");
const colors = require("colors");
const { required } = require("../utils/validation");

const key = {
	set: async () => {
		const keyManager = new KeyManager();
		const input = await inquirer.prompt([
			{
				type: "input",
				name: "key",
				message: "Enter API key".green + " https://coinlayer.com".red,
				validate: required,
			},
		]);
		const key = keyManager.setKey(input.key);

		if (key) console.log("API key set!".blue);
	},
	show: () => {
		try {
			const keyManager = new KeyManager();
			const key = keyManager.getKey();

			console.log("Current API Key: ", key.yellow);
		} catch (err) {
			console.log(err.message.red);
		}
	},
	remove: () => {
		try {
			const keyManager = new KeyManager();
			const key = keyManager.removeKey();

			console.log("API Key Removed!".yellow);
		} catch (err) {
			console.log(err.message.red);
		}
	},
};

module.exports = key;
