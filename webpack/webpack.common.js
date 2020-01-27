const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const flexbugs = require('postcss-flexbugs-fixes')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const precss = require('precss')
const LoadablePlugin = require('@loadable/webpack-plugin')

const isDebug = process.env.NODE_ENV !== 'production'

function srcPath(name) {
	return path.resolve(__dirname, '../', 'src', name)
}

function sharedPath(name) {
	return path.resolve(__dirname, '../', 'src', 'shared', name)
}

const postCssPlugins = [flexbugs(), precss(), autoprefixer()]
const cssnanoPlugin = cssnano({
	preset: ['default', { discardComments: { removeAll: true } }],
})

const cssLoaders = [
	{
		loader: 'style-loader',
	},
	{
		loader: 'css-loader',
		options: { url: true, importLoaders: 1 },
	},
	{
		loader: 'postcss-loader',
		options: {
			plugins: () =>
				isDebug ? postCssPlugins : postCssPlugins.push(cssnanoPlugin),
		},
	},
	{
		loader: 'sass-loader',
	},
]

const tsLoaderOptions = {
	loader: 'babel-loader',
	options: {
		cacheDirectory: true,
		babelrc: false,
		presets: [
			[
				'@babel/preset-env',
				{ targets: { browsers: 'last 2 versions' } }, // or whatever your project requires
			],
			'@babel/preset-typescript',
			'@babel/preset-react',
		],
		plugins: [
			// plugin-proposal-decorators is only needed if you're using experimental decorators in TypeScript
			['@babel/plugin-proposal-decorators', { legacy: true }],
			['@babel/plugin-proposal-class-properties', { loose: true }],
			'react-hot-loader/babel',
		],
	},
}

module.exports = {
	entry: './index.tsx',
	target: 'web',
	output: {
		path: path.resolve(__dirname, '../', 'dist'),
		filename: '[name].[hash].js',
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'react-dom': '@hot-loader/react-dom',
			App: srcPath('App'),
			pages: srcPath('pages'),
			components: sharedPath('components'),
			scss: sharedPath('scss'),
			utils: sharedPath('utils'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(j|t)s(x)?$/,
				exclude: /node_modules/,
				use: tsLoaderOptions,
			},
			{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
			{ test: /\.scss$/, use: cssLoaders },
			{ test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
			{ test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
			{ test: /\.(csv|tsv)$/, use: ['csv-loader'] },
			{ test: /\.xml$/, use: ['xml-loader'] },
		],
	},
	performance: {
		hints: false,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../', 'public', 'index.html'),
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV),
			},
			API_BASE_URL: JSON.stringify('http://localhost:3000'),
		}),
		new LoadablePlugin(),
	],
}
