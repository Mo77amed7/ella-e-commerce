import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ProductsCategories from "@/views/ProductsCategories.vue";
import SingleProduct from "@/views/SingleProduct.vue";
import CartPage from "@/views/CartPage.vue";
const routes = [
  {
    name: "home",
    path: "/",
    component: HomePage,
    meta: {
      title: "Ellamart",
    },
  },
  {
    name: "category",
    path: "/products/:category/:title",
    component: ProductsCategories,
    meta: {
      title: "Category",
    },
  },
  {
    name: "single_product",
    path: "/products/single-product/:productId",
    component: SingleProduct,
    meta: {
      title: "Single Product",
    },
  },
  {
    name: "cart-page",
    path: "/cart-page",
    component: CartPage,
    meta: {
      title: "Cart Page",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router;
