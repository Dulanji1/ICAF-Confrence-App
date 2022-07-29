const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) =>
{
	const isProduction = env === 'production';

	return {
		entry   : './src/index.jsx',
		resolve : {
			alias : {
				components : path.resolve(__dirname, 'src'),
			},
			extensions : [ '.js', '.jsx' ],
		},
		output : {
			path       : path.resolve(__dirname, 'build'),
			filename   : 'bundle.js',
			publicPath : '/',
		},
		devServer : {
			contentBase        : "./build",
			historyApiFallback : true,
			port               : 8008,
		},
		module : {
			rules : [
				{
					test    : /\.(js|jsx)$/,
					exclude : /node_modules/,
					use     : [ 'babel-loader' ],
				},
				{
					test : /\.less$/,
					use  : [
						'style-loader',
						'css-loader',
						'less-loader',
					],
				},
				{
					test : /\.scss$/,
					use  : [
						'style-loader',
						'css-loader',
						'sass-loader',
					],
				},
				{
					test : /\.css$/,
					use  : [
						'style-loader',
						'css-loader',
					],
				},
				{
					test : /\.(jpe?g|gif|png|svg)$/i,
					use  : [
						{
							loader  : 'url-loader',
							options : {
								limit : 10000,
							},
						},
					],
				},
				{
					test : /\.(png|jpe?g|gif)$/i,
					use  : [
						{
							loader : 'file-loader',
						},
					],
				},
			],
		},
		plugins : [
			new HtmlWebpackPlugin({
				template : path.resolve('./index.html'),
			}),
		],
		devtool : isProduction ? 'source-map' : 'inline-source-map',
	};
};
