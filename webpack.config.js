const path = require('path');

module.exports = {
  entry: './src/calculator-card.ts',
  output: {
    filename: 'calculator-card.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'CalculatorCard',
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    hot: true,
  },
};
