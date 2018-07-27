import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: './src/index',
  mode: 'production',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'generatePI'
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', include },
      { test: /\.json$/, type: 'javascript/auto', loader: require.resolve('json-loader'), include }
    ]
  }
};
