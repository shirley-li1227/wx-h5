import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "*",
    redirect: "/home",
  },
  {
    name: "home",
    component: () => import("./view/home"),
    // meta: {
    //   title: "排队取号",
    // },
  },
  {
    name: "shop",
    component: () => import("./view/shop"),
    // meta: {
    //   title: "排队取号",
    // },
  },
];

// add route path
routes.forEach((route) => {
  route.path = route.path || "/" + (route.name || "");
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export { router };
