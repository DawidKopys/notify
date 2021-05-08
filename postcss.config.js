// module.exports = {
//   plugins: [['postcss-preset-env', {}]],
// };

module.exports = {
  parser: 'postcss-scss',
  plugins: [require('autoprefixer')],
};
