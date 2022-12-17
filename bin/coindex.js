#!/usr/bin/env node
const program = require("commander");

const { version } = require("../package.json");

program
	.version(version)
	.command("key", "Manage API Key --Get at https://coinlayer.com")
	.command("check", "Check Coin Price Info")
	.parse(process.argv);
