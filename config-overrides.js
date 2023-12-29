const path = require('path');

module.exports = function override(config, env) {
	config.output.publicPath = './';
	// config.module.rules.push({
	// 	test: /\.(png|jpg|gif)$/i,
	// 	use: [
	// 		{
	// 			loader: 'url-loader',
	// 			options: {
	// 				limit: 8192,
	// 				name: 'static/media/[name].[hash:8].[ext]',
	// 			},
	// 		},
	// 	],
	// });
	// config.module.rules
	// 	.find((rule) => rule.oneOf)
	// 	.oneOf.forEach((loader) => {
	// 		if (loader.test && loader.test.toString().includes('svg')) {
	// 			loader.use = [
	// 				{
	// 					loader: require.resolve('@svgr/webpack'),
	// 					options: {
	// 						svgoConfig: {
	// 							plugins: {
	// 								removeViewBox: false,
	// 							},
	// 						},
	// 					},
	// 				},
	// 				{
	// 					loader: require.resolve('url-loader'),
	// 					options: {
	// 						limit: 10000,
	// 						name: 'static/media/[name].[hash:8].[ext]',
	// 					},
	// 				},
	// 			];
	// 		}
	// 		if (loader.test && loader.test.toString().includes('images')) {
	// 			loader.use = [
	// 				{
	// 					loader: 'url-loader',
	// 					options: {
	// 						limit: 8192,
	// 						name: 'static/media/[name].[hash:8].[ext]',
	// 					},
	// 				},
	// 			];
	// 		}
	// 	});

	return config;
};
