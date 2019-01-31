const path = require('path');

module.exports = {
  entry: './scripts/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'docs')
  }
};
