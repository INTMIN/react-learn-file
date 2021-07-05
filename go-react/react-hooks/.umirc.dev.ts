// ref: https://umijs.org/config/
import { defineConfig } from "umi";
import routers from "./routers";

export default defineConfig({
  "404":true,
  base: "/",
  dva: {
    immer: true
  },
  mfsu: {},
  webpack5: {},
  dynamicImport: {
    loading: "@/loading"
  },
  title: "min react hooks",
  hash: true,
  ignoreMomentLocale: true,
  // lessLoader: { javascriptEnabled: true },
  runtimePublicPath: true,
  publicPath:
    "https://intmin.github.io/react-learn-file/go-react/react-hooks/dist/",
  cssLoader: {},
  // nodeModulesTransform: {
  //   type: 'none',
  //   exclude: [], // 可解析src为项目src
  // },
  alias: {
    src: require("path").resolve(__dirname, "./src")
  },
  // polyfill: {
  //   imports: ['core-js/stable'],
  // },

  routes: routers,

  chainWebpack: function(config) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: "all",
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: ".",
          cacheGroups: {
            vendor: {
              name: "vendors",
              // @ts-ignore
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10
            }
          }
        }
      }
    });
  },

  targets: {
    ie: 11
  }
});
