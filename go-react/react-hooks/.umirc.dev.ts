// ref: https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  base: '/',
  dva: {
    immer: true,
  },
  dynamicImport: {
    loading: '@/loading',
  },
  title: 'min react hooks',
  hash: true,
  ignoreMomentLocale: true,
  // lessLoader: { javascriptEnabled: true },
  runtimePublicPath:true,
  publicPath:'https://intmin.github.io/react-learn-file/go-react/react-hooks/dist/',
  cssLoader: {},
  // nodeModulesTransform: {
  //   type: 'none',
  //   exclude: [], // 可解析src为项目src
  // },
  alias: {
    src: require('path').resolve(__dirname, './src'),
  },
  // polyfill: {
  //   imports: ['core-js/stable'],
  // },

  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [{ path: '/', component: '../pages/index' }],
    },
  ],

  targets: {
    ie: 11,
  },
});
