<template>
  <div class="homepage">
    <banner-app></banner-app>
    <the-features></the-features>
    <top-offers></top-offers>
    <pro-components :products="flashDeals"></pro-components>
    <top-categories></top-categories>
    <new-products :products="newProducts"></new-products>
    <the-services></the-services>
    <pro-components :products="groceries"></pro-components>
    <div class="mid-banner">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <img
              class="img-fluid w-100"
              src="@/assets/images/band-left-cover.webp"
              alt="mid-banner1"
            />
          </div>
          <div class="col-md-6">
            <img
              class="img-fluid w-100"
              src="@/assets/images/band-left-cover.webp"
              alt="mid-banner2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <pro-components :products="fragrances"></pro-components>
  <div class="tv-banner">
    <img
      class="img-fluid w-100"
      src="@/assets/images/tv-banner.webp"
      alt="tv-banner"
    />
  </div>
  <pro-components :products="beauty"></pro-components>
  <brands :brands="brands"></brands>
  <why-shop></why-shop>
  <NewSletter />
</template>

<script>
import BannerApp from "@/components/home_page/BannerApp.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TopOffers from "@/components/home_page/TopOffers.vue";
import ProComponents from "@/components/home_page/ProductsComponents.vue";
import TopCategories from "@/components/home_page/TopCategories.vue";
import NewProducts from "@/components/home_page/NewProducts.vue";
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import TheServices from "@/components/home_page/TheServices.vue";
import WhyShop from "@/components/home_page/WhyShop.vue";
import NewSletter from "@/components/home_page/NewSletter.vue";
import Brands from "@/components/home_page/Brands.vue";
export default {
  name: "HomeView",
  components: {
    BannerApp,
    TheFeatures,
    TopOffers,
    ProComponents,
    TopCategories,
    NewProducts,
    TheServices,
    WhyShop,
    NewSletter,
    Brands,
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "newProducts",
      "groceries",
      "fragrances",
      "beauty",
      "brands",
    ]),
  },
  methods: {
    ...mapActions(productsModule, ["getProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
};
</script>
