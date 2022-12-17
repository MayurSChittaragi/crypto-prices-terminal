const program = require("commander");
const price = require("../commands/price");
program
	.command("price")
	.description("Check Price of coins")
	.option(
		"--coin <type>",
		"Add specific coin types in CSV format",
		"BTC,ETH,XRP"
	)
	.option("--cur <currency>", "Change the currency", "USD")
	.action((cmd) => price.check(cmd));

program.parse(process.argv);
