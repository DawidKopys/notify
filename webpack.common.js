const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
// Temporary workaround for 'browserslist' bug that is being patched in the near future
const target = process.env.NODE_ENV === 'production' ? 'browserslist' : 'web';

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  target: target, // webpack bugfix: Live Reloading Not Working with browskerlist present
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // favicon: './src/assets/R-favicon3.png',
    }),
  ],
  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
      Assets: path.resolve(__dirname, 'src/assets/'),
      GlobalContext: path.resolve(__dirname, 'src/context.js'),
      CustomHooks: path.resolve(__dirname, 'src/custom-hooks/'),
      Components: path.resolve(__dirname, 'src/components/'),
    },
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};
