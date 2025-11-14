<template>
  <div class="flash-deals py-5">
    <div class="container-fluid">
      <div
        class="title d-flex justify-content-between"
        style="text-transform: capitalize"
      >
        <h3 style="color: red; font-weight: bold">flash deals</h3>
        <a href="#" class="text-black">shop all</a>
      </div>
      <Swiper
        :pagination="{ el: '.swiper-pagination', clickable: true }"
        :modules="modules"
        :slides-per-view="4"
        :space-between="35"
        :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
      >
        <swiper-slide v-for="item in products" :key="item.id" class="mb-5">
          <div class="card border-0" style="">
            <div class="img-parent position-relative">
              <img
                :src="
                  showenItem[item.title]
                    ? showenItem[item.title]
                    : item.thumbnail
                "
                class="card-img-top"
                alt="Not Found"
              />
              <button
                @click="openQuickView(item)"
                class="quick-view"
                style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  background-color: white;
                  border: 1px solid white;
                  border-radius: 6px;
                  opacity: 0;
                  transition: 0.2 all ease-in-out;
                "
              >
                Quick view
              </button>
            </div>
            <div class="card-body">
              <h5 class="card-title" style="font-size: 17px">
                <span>({{ item.title }})</span><br />{{
                  item.description.split(" ").length <= 10
                    ? item.description
                    : item.description.split(" ").slice(0, 9).join(" ") + "..."
                }}
              </h5>
              <p class="py-2">
                <span
                  style="text-decoration: line-through; font-weight: bold"
                  >{{ item.price }}</span
                >
                <span style="font-weight: light"> From </span>
                <span style="color: red; font-weight: bold"
                  >${{
                    Math.ceil(
                      item.price - item.price * (item.discountPercentage / 100)
                    )
                  }}</span
                >
              </p>
              <div
                class="btn-group"
                role="group"
                aria-label="Basic example"
                v-bind="showenItem[item.title]"
              >
                <button
                  type="button"
                  class="btn border-0"
                  v-for="(pic, i) in item.images"
                  :key="i"
                  :value="pic"
                >
                  <img
                    :src="pic"
                    style="width: 30px; height: 30px; border-radius: 50%"
                  />
                </button>
              </div>
              <a
                href="#"
                class="btn d-block border-dark rounded-pill my-3"
                style="font-weight: bold"
                @click="
                  $router.push({
                    name: 'single_product',
                    params: { productId: item.id },
                  })
                "
                >Choose Options</a
              >
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-prev"></div>
        <div class="swiper-next"></div>
        <div class="swiper-pagination"></div>
      </Swiper>
    </div>
  </div>
</template>

<style scoped lang="scss">
.swiper-button-next:after,
.swiper-button-prev:after {
  color: black;
}
</style>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation } from "swiper";
export default {
  inject: ["Emitter"],
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  name: "FlashDeals",
  props: {
    products: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    showenItem: {},
  }),
};
</script>
<style scoped lang="scss">
.img-parent:hover {
  .quick-view {
    opacity: 1 !important;
  }
}
</style>
