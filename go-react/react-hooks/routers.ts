export default [
  {
    path: "/",
    component: "../layouts/index",
    routes: [
      { path: "/", component: "../pages/index" },
      { path: "/404", component: "./404" },
      { path: "/oneDrive/list", component: "../pages/oneDrive/index" },
      { path: "/oneDrive/detail", component: "../pages/oneDrive/detail" },
      { path: "/desc/learnDoc", component: "../pages/learnDoc/index" }

    ]
  }
];
