// ref: https://umijs.org/config/
import { defineConfig } from "umi";
import routers from "./routers";

export default defineConfig({
  "404": true,
  base: "/",
  dva: {
    immer: true
  },
  // mfsu: {},
  // webpack5: {},
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

  chainWebpack(config) {
    config.module // 配置raw-loader
      .rule("md")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader");
  },
  alias: {
    src: require("path").resolve(__dirname, "./src")
  },

  routes: routers,

  targets: {
    ie: 11
  }
});
