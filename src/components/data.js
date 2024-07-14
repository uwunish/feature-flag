const dummyApiResponse = {
	showLightAndDarkMode: false,
	showTicTacToe: true,
	showRandomColorGenerator: true,
	showAccordion: false,
	showTreeView: true,
};

function featureFlagsService() {
	return new Promise((resolve, reject) => {
		if (dummyApiResponse) {
			setTimeout(resolve(dummyApiResponse), 500);
		} else {
			reject("Some error occurred!");
		}
	});
}

export default featureFlagsService;