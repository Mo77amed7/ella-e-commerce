<template>
  <section class="brands">
    <div class="container-fluid">
      <div class="title d-flex justify-content-between align-items-center mb-3">
        <a href="">Shop All</a>
        <h2 style="flex: 1" class="text-center">Featured Brands</h2>
      </div>
      <div class="row">
        <Swiper
          :pagination="{ dynamicBullets: true, clickable: true }"
          :modules="modules"
          :slides-per-view="6"
          :space-between="20"
        >
          <swiper-slide
            v-for="brand in filteredBrands"
            :key="brand"
            class="mb-5"
          >
            <div
              class="card border-0 text-center rounded-pill d-flex justify-content-center"
            >
              {{ brand }}
            </div>
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination } from "swiper";
export default {
  name: "MyBrands",
  props: {
    brands: {
      type: Array,
      Required: true,
    },
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    filteredBrands() {
      // Filter out empty or undefined brands
      return this.brands.filter((brand) => brand && brand.trim().length > 0);
    },
  },
};
</script>
<style lang="scss">
.brands {
  padding: 20px 0px;
  .card {
    width: 200px;
    height: 200px;
    background-color: #eee;
  }
  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
  }
  .swiper-pagination-bullet-active {
    background: #007bff;
  }
  .swiper-pagination-bullet-next,
  .swiper-pagination-bullet-prev {
    background: #ac4d4d;
  }
}
</style>
