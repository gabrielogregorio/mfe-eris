const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const { mergeWithRules } = require("webpack-merge");

const tailwindConfig = {
  test: /\.css$/i,
  use: [
    require.resolve("style-loader", {
      paths: [require.resolve("webpack-config-single-spa")],
    }),
    require.resolve("css-loader", {
      paths: [require.resolve("webpack-config-single-spa")],
    }),
    "postcss-loader",
  ],
};

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mfe",
    projectName: "eris",
    webpackConfigEnv,
    argv,
  });

  const config = mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    module: {
      rules: [tailwindConfig],
    },
  });

  return config;
};
