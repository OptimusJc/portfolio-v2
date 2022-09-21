module.exports = {
	flags: {
		DEV_SSR: true,
	},
	siteMetadata: {
		title: `portfolio-v2`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
	],
};
