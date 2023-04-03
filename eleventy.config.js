module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy({
		"assets": "assets",
	});

	return {
		dir: {
			input: "content",
			output: "_site"
		},
		// TODO: Change the below to "/" if this becomes official
		pathPrefix: "/www.kernelvm.org/",
	};
};
