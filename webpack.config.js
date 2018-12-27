const path = require('path');

module.exports = {
  entry: './src/js/draw.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'src/dist'),
    filename: 'draw-daremon.js'
  }
};