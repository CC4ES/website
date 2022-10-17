const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log(`${__dirname}/source`)
module.exports = {
  mode: 'production',
  entry: {
    all: './wpsrc/javascripts/all.js',
    site: './wpsrc/stylesheets/site.css.scss'
  },
  output: {
    path: path.resolve(__dirname, '.tmp/dist'),
    filename: '[name].js'
  },
  plugins: [
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/dist/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * See `Options and Defaults` for information
     */
    new CleanWebpackPlugin(),
    /**
     * This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
     * It builds on top of a new webpack v5 feature and requires webpack 5 to work.
     */
    new MiniCssExtractPlugin()
  ],
  optimization: {
    minimizer: [
       `...`,
      /**
       * Minifies CSS
       */
      new CssMinimizerPlugin()
    ],
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          /**
           * In upgrading webpack 4 to 5, all images' url(/image/.../) properties broke due to a breaking change
           * See: https://github.com/webpack-contrib/sass-loader#problems-with-url
           * 
           * Workaround involves telling `css-loader` not to worry about urls and using `resolve-url-loader` to
           * properly resolve and load urls.
           * 
           * Additionally, sourcemaps need to be generated at every step to allow resolve-url-loader to work properly.
           */
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: true
            }
          },
          'resolve-url-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      }
    ]
  }
}
