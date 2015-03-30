
var _ = require('lodash'),
	path = require('path'),
	fs = require('fs'),
	dotenv = require('dotenv'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin');

dotenv.load();

module.exports = {
	entry: {
		vendor: [
			'react',
			'react-router',
			'lodash'
		],
		index: [/*'webpack/hot/dev-server',*/'./assets/scripts/index.js']
	},
	output: {
		filename: 'scripts/index.[hash].js',
		publicPath: '/',
		path: path.join(__dirname, 'build'),
		chunkFilename: 'scripts/[id].[hash].js'
	},
	externals: {

	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'jsx-loader?insertPragma=React.DOM'
			},
			{
				test: /\.scss$/,
				loaders: [
					'style',
					'css',
					'autoprefixer-loader?browsers=last 2 version',
					'sass?precision=10&outputStyle=expanded&sourceMap=true'
				]

			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'image?optimizationLevel=7&interlaced=false&name=images/[name].[hash].[ext]'
			},
			{
				test: /\.env/i,
				loaders: ['env?allow=' + [

				].join(',')]
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.scss'],
		alias: {
			'env': path.join(__dirname, '.env')
		},
		externals: {

		},
		root: [
			path.join(__dirname, 'assets'),
			path.join(__dirname, 'assets/scripts/lib')
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("vendor", "scripts/vendor.[hash].js"),
		new HtmlWebpackPlugin({
			template: fs.readFileSync(path.join(__dirname, "assets", "index.html"))
		})
	]
};
