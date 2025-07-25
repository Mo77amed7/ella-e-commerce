<template>
  <div class="single-product py-5">
    <div class="container">
      <div class="row">
        <div class="col-7">
          <div class="text-center">
            <img
              :src="activeImage"
              alt="Main Product Image"
              class="img-fluid main-image mb-3"
              style="height: 330px"
            />
          </div>
          <div class="d-flex justify-content-center flex-wrap gap-2">
            <img
              v-for="(img, index) in singleProduct.images"
              :key="index"
              :src="img"
              alt="Thumbnail"
              @click="activeImage = img"
              class="img-thumbnail thumb-image"
              :class="{ 'border-primary': activeImage === img }"
              style="cursor: pointer; width: 100px; height: auto"
            />
          </div>
        </div>
        <div class="col-5">
          <h2>
            {{ singleProduct.title }} Sample - {{ singleProduct.category }}
          </h2>
          <div class="stars">
            <!-- <i
              v-for="n in 5"
              :key="n"
              class="star"
              :class="getStarClass(n)"
            ></i> -->
          </div>
          <span> Stock: {{ singleProduct.stock }} </span>
          <p>{{ singleProduct.description }}</p>
          <p>Brand:{{ singleProduct.brand }}</p>
          <span
            >Availability:
            {{ singleProduct.stock > 0 ? "In Stock" : "Out of Stock" }}</span
          >
          <div class="price">
            <span class="throughline"> ${{ singleProduct.price }}</span> From
            <span
              >${{
                Math.ceil(
                  singleProduct.price -
                    singleProduct.price *
                      (singleProduct.discountPercentage / 100)
                )
              }}</span
            >
          </div>
          <div class="quantity mt-2" style="width: fit-content">
            <input
              type="number"
              style="border-radius: 6px; outline: none; width: 60px"
              min="1"
              value="1"
              v-model="quantity"
            />
          </div>
          <div class="actions">
            <button
              style="color: white; border-radius: 6px"
              class="p-2 my-2 border-0 btn btn-success"
              @click="addToCart(singleProduct)"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { productsModule } from "@/stores/products";
import { cartStore } from "@/stores/cart";
import { mapActions, mapState } from "pinia";
export default {
  name: "single-product",
  data() {
    return {
      quantity: 1,
      activeImage: "",
    };
  },
  methods: {
    // getStarClass(index) {
    //   const fullStars = Math.floor(this.rating);
    //   const hasHalfStar = this.rating % 1 >= 0.5;
    //   if (index <= fullStars) {
    //     return "fas fa-star"; // full star
    //   } else if (index === fullStars + 1 && hasHalfStar) {
    //     return "fas fa-star-half-alt"; // half star
    //   } else {
    //     return "far fa-star"; // empty star
    //   }
    // },
    ...mapActions(productsModule, ["getSingleProduct"]),
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.addItem(item);
    },
  },
  async mounted() {
    await this.getSingleProduct(this.$route.params.productId);
  },
  computed: {
    ...mapState(productsModule, ["singleProduct"]),
  },
  watch: {
    singleProduct: {
      handler(newVal) {
        if (newVal?.images?.length) {
          this.activeImage = newVal.images[0];
        }
      },
      immediate: true,
    },
  },
};
</script>
<style lang="css" scoped>
.stars {
  color: gold;
  font-size: 24px;
}
.star {
  margin-right: 2px;
}
.main-image {
  max-width: 100%;
  border-radius: 8px;
}
.img-thumbnail {
  transition: border 0.3s;
}
.img-thumbnail:hover {
  border-color: #0d6efd;
}
</style>
