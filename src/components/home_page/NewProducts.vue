<template>
  <div class="new-products py-5">
    <div class="container-fluid">
      <div class="title d-flex justify-content-between text-capitalize">
        <h3 style="font-weight: bold">new products</h3>
        <a style="" class="text-black" href="#">shop all</a>
      </div>
      <div class="row">
        <div class="col-7">
          <Swiper
            :pagination="{ el: '.swiper-pagination', clickable: true }"
            :modules="modules"
            :slides-per-view="3"
            :space-between="20"
          >
            <swiper-slide v-for="item in products" :key="item.id" class="mb-5">
              <div class="card border-0">
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
                    <span
                      >({{
                        item.title.split(" ").length <= 3
                          ? item.title
                          : item.title.split(" ").slice(0, 2).join(" ")
                      }})</span
                    ><br />{{
                      item.description.split(" ").length <= 10
                        ? item.description
                        : item.description.split(" ").slice(0, 8).join(" ")
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
                          item.price -
                            item.price * (item.discountPercentage / 100)
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
            <div class="swiper-pagination"></div>
          </Swiper>
        </div>
        <div class="col-5">
          <img
            src="../../assets/images/vr-banner.webp"
            alt="Not Available"
            class="w-100"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination } from "swiper";
export default {
  inject: ["Emitter"],
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  name: "NewProducts",
  data() {
    return {
      showenItem: {},
    };
  },
  props: {
    products: {
      type: Array,
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
};
</script>

<style lang="scss" scoped>
.img-parent:hover {
  .quick-view {
    opacity: 1 !important;
  }
}
</style>
