function ParametersException(message) {
	this.response = {
		name: 'ParametersException',
		status: 400,
		data: {
			message: message,
		},
	};
}

module.exports = { ParametersException };
