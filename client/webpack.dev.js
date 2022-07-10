const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
	{
		mode: 'development',
		entry: './src/typescript/app.ts',
		devtool: "eval-source-map",
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.(css)$/,
					use: ['style-loader','css-loader']
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						// Creates `style` nodes from JS strings
						"style-loader",
						// Translates CSS into CommonJS
						"css-loader",
						// Compiles Sass to CSS
						"sass-loader",
					],
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		output: {
			filename: '[name].[chunkhash].js',
			path: path.resolve(__dirname, 'dist'),
		},
		plugins: [
			new HtmlWebpackPlugin(),
		],
	},
	{
		mode: 'development',
		entry: ['./src/typescript/loader.ts'],
		devtool: "eval-source-map",
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
				{
					test: /\.(css)$/,
					use: ['style-loader','css-loader']
				},
				{
					test: /\.s[ac]ss$/i,
					use: [
						// Creates `style` nodes from JS strings
						"style-loader",
						// Translates CSS into CommonJS
						"css-loader",
						// Compiles Sass to CSS
						"sass-loader",
					],
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		output: {
			filename: '[name].[chunkhash].js',
			path: path.resolve(__dirname, 'dist'),
		},
		plugins: [
			new HtmlWebpackPlugin({  // Also generate a test.html
				filename: 'loader.html',
				template: './loader.html'
			})
		],
	}
];

