// Core
const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

// Constants
const { PROJECT_ROOT, BUILD_DIRECTORY, APP_DIRECTORY } = require("./constants");
const APP_CONFIG = path.join(APP_DIRECTORY + "/index.js");

// Config
module.exports = cliString => {
  // Забираем из опции командной строки имя area
  const AREA_NAME = cliString.AREA_NAME;
  const AREA_DIRECTORY = path.join(
    APP_DIRECTORY + "/areas" + `/src-${AREA_NAME}`
  );
  // До запуска кофигурационного файла заменяем импорт
  fs.readFile(APP_CONFIG, "utf8", (err, data) => {
    if (err) throw err;
    let array = data.split("\n");
    array = array.map(s => {
      if (s.includes("import components")) {
        if (AREA_NAME) {
          return `import components from \'../areas/src-${AREA_NAME}\'`;
        } else {
          return "";
        }
      } else {
        return s;
      }
    });
    data = array.join("\n");
    fs.writeFile(APP_CONFIG, data, err => {
      if (err) {
        throw err;
      } else {
        console.log(`General app index.js add import area: ${AREA_NAME}`);
      }
    });
  });

  return {
    mode: "none",
    devtool: false,
    entry: APP_DIRECTORY,
    output: {
      path: BUILD_DIRECTORY,
      filename: AREA_NAME + ".js"
    },
    resolve: {
      alias: {
        $: PROJECT_ROOT,
        $area: AREA_DIRECTORY
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: '"development"'
        }
      }),
      new VueLoaderPlugin(),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: ["!*.*", AREA_NAME + ".js"],
        verbose: true
      })
    ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
          options: {
            loaders: {
              scss: [
                "vue-style-loader",
                "style-loader",
                "css-loader",
                "sass-loader",
                "postcss-loader"
              ]
            }
          }
        },
        {
          test: /\.scss$/,
          loader: [
            "style-loader",
            "css-loader",
            "sass-loader",
            "postcss-loader"
          ]
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        },
        {
          test: /\.js$/,
          loader: "babel-loader"
        }
      ]
    }
  };
};
