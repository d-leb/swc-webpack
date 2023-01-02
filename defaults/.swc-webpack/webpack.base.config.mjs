/*

This is a webpack config file that is used by swc-webpack in all enbironments.

The existing config is commented out below for reference. Edit the configuration to suit your needs.

*/

export default () => ({
  /*
  entry: [path.resolve('src/index.tsx')],
  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve('build/'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: ['swc-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ['svg-url-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      template: path.join('public/index.html'),
    }),
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.tsx', '.ts', 'jsx', '.js', '.json'],
  },
  */
})
