import Vue from "vue";
import Router from "vue-router";

import ProductsView from "../views/ProductsView";
import FavoritesView from "../views/FavoritesView";
import BasketView from "../views/BasketView";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: "navigation__link_active",
  routes: [
    {
      path: "/",
      component: ProductsView,
    },
    {
      path: "/favorites",
      component: FavoritesView,
    },
    {
      path: "/basket",
      component: BasketView,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
