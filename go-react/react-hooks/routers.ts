export default [
  {
    path: "/",
    component: "../layouts/index",
    routes: [
      { path: "/", component: "../pages/index" },
      { path: "/oneDrive/list", component: "../pages/oneDrive/index" }
    ]
  }
];
