/*

This is a webpack config file that is used by swc-webpack in the production environment. It is applied over the base config.

The existing config is commented out below for reference. Edit the configuration to suit your needs. It will be necessary to
override the optimization and performance settings as your project grows.

*/

export default () => ({
  /*
  mode: 'production',
  devtool: false,
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 81920, // 80kb
    },
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 81920, // 80kb
    maxEntrypointSize: 143360, // 140kb
  },
  plugins: [new CompressionPlugin()],
  */
})
