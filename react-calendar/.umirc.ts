import { defineConfig } from "umi";
import myRouter from "./src/routers/index";

export default defineConfig({
  base: "/",
  dva: {
    immer: true,
  },
  dynamicImport: {
    loading: "@/loading",
  },
  lessLoader: { javascriptEnabled: true },
  title: "ui-calendar react版本",
  routes: myRouter,
  cssLoader: {},
  ignoreMomentLocale: true,
  hash: true,
  mfsu:{},
  webpack5:{},

  alias: {
    src: require("path").resolve(__dirname, "./src"),
  },

  define: {
    // 添加这个自定义的环境变量
    "process.env.UMI_ENV": process.env.UMI_ENV,
  },
  targets: {
    chrome: 58,
    ie: 9,
  },
});
