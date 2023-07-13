const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'assets/js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './templates/home.html',
      filename: 'templates/home.html',
    }),
    new HtmlWebpackPlugin({
      template: './templates/about.html',
      filename: 'templates/about.html',
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      template: './templates/education.html',
      filename: 'templates/education.html',
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      template: './templates/skills.html',
      filename: 'templates/skills.html',
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      template: './templates/services.html',
      filename: 'templates/services.html',
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      template: './templates/portfolio.html',
      filename: 'templates/portfolio.html',
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      template: './templates/contact.html',
      filename: 'templates/contact.html',
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      template: './templates/request-quote.html',
      filename: 'templates/request-quote.html',
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      template: './templates/analytics.html',
      filename: 'templates/analytics.html',
      chunks: ['bundle'],
    }),
    new HtmlWebpackPlugin({
      template: './templates/404.html',
      filename: 'templates/404.html',
      chunks: ['bundle'],
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/styles.css',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
};
