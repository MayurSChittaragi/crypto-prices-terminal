//Required fields

const required = (input) => {
	if (input === "") {
		return "This value is required";
	} else return true;
};

module.exports = {
	required,
};
