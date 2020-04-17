const path = require('path');

module.exports = {
  entry: './src/scripts/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'draw-daremon.js'
  }
};