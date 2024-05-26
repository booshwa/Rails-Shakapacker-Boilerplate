// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
const { generateWebpackConfig } = require("shakapacker");
const ForkTSCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const customConfig = {
    plugins: [new ForkTSCheckerWebpackPlugin()],
    resolve: {
      extensions: ['.css']
    }
  }

module.exports = generateWebpackConfig(customConfig);