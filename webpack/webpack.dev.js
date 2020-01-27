const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

const common = require('./webpack.common')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:9000',
		'webpack/hot/only-dev-server',
		'./index.tsx',
	],
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		publicPath: '/',
		compress: true,
		port: 9000,
		historyApiFallback: true,
		hot: true,
	},
	optimization: {
		usedExports: true,
		splitChunks: {
			chunks: 'all',
		},
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ForkTsCheckerWebpackPlugin(),
		new ProgressBarPlugin({
			format: `build [:bar] ${chalk.blue.green(':percent')}`,
		}),
	],
})
