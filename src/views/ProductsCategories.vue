<template>
  <div class="container-fluid">
    <div
      class="title d-flex justify-content-between m-4"
      style="text-transform: capitalize"
    >
      <h3 style="color: red; font-weight: bold">
        {{ $route.params.title }}
      </h3>
      <a href="#" class="text-black">shop all</a>
    </div>
    <div class="row">
      <div
        class="col-3"
        v-for="item in categoryProducts.products"
        :key="item.id"
      >
        <div class="card border-0" style="">
          <div class="img-parent position-relative">
            <img
              :src="
                showenItem[item.title] ? showenItem[item.title] : item.thumbnail
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
              <span style="text-decoration: line-through; font-weight: bold">{{
                item.price
              }}</span>
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
      </div>
    </div>
  </div>
</template>

<script>
import { productsModule } from "@/stores/products";
import { mapActions, mapState } from "pinia";

export default {
  inject: ["Emitter"],
  name: "categoriesProd",
  data() {
    return {
      showenItem: {},
    };
  },
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    $route() {
      this.getProductsByCategory(this.$route.params.category);
    },
  },
  async mounted() {
    await this.getProductsByCategory(this.$route.params.category);
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
