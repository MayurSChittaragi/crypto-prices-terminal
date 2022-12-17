const { program } = require("commander");

const { set, show, remove } = require("../commands/key");

program
	.command("set")
	.description("Set API Key -- Get at https://coinlayer.com")
	.action(set);
program
	.command("show")
	.description("Show API Key -- Get at https://coinlayer.com")
	.action(show);
program.command("remove").description("Remove API Key ").action(remove);

program.parse(process.argv);
