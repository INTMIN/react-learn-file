
// ref: https://umijs.org/config/
export default {
  // treeShaking: true,
  dva: {
    immer: true,
  },
  dynamicImport: {
    loading: '@/loading',
  },
  title: 'react hooks',
  hash:true,
  ignoreMomentLocale:true,
  targets: {
    ie: 11,
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
}
