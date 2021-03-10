// ref: https://umijs.org/config/
import { defineConfig } from "umi";
import routers from "./routers";

export default defineConfig({
  base: "/",
  dva: {
    immer: true
  },
  dynamicImport: {
    loading: "@/loading"
  },
  title: "min react hooks",
  hash: true,
  ignoreMomentLocale: true,
  // lessLoader: { javascriptEnabled: true },
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

  targets: {
    ie: 11
  }
});
