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

  chainWebpack: function(config, { webpack }) {
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
    ie: 11,
  },
});
