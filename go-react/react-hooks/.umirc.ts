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
