const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BabelMinifyPlugin = require('babel-minify-webpack-plugin')
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin')

const common = require('./webpack.common')

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	optimization: {
		runtimeChunk: 'single',
		moduleIds: 'hashed',
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.scss$/,
					chunks: 'all',
					enforce: true,
				},
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
		minimizer: [
			new TerserJSPlugin({
				cache: true,
			}),
			new OptimizeCSSAssetsPlugin({}),
			new BabelMinifyPlugin(),
			new UglifyWebpackPlugin({
				uglifyOptions: {
					compress: {
						collapse_vars: false,
					},
				},
			}),
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
			chunkFilename: '[id].[hash].css',
		}),
	],
})
