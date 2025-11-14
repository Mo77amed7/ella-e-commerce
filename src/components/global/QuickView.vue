<template>
  <div class="quick-view popup-overlay" id="popup">
    <div class="container">
      <div class="popup-content">
        <span class="close" @click="closePopup()">x</span>
        <div class="row">
          <div class="col-7">
            <div class="text-center">
              <img
                :src="activeImage"
                alt="Main Product Image"
                class="img-fluid main-image mb-3"
                style="height: 400px"
              />
            </div>
            <div class="d-flex justify-content-center flex-wrap gap-2">
              <img
                v-for="(img, index) in product.images"
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
            <h2>{{ product.title }} Sample - {{ product.category }}</h2>
            <div class="stars">
              <!-- <i
                v-for="n in 5"
                :key="n"
                class="star"
                :class="getStarClass(n)"
              ></i> -->
            </div>
            <span> Stock: {{ product.stock }} </span>
            <p>{{ product.description }}</p>
            <p>Brand:{{ product.brand }}</p>
            <span
              >Availability:
              {{ product.stock > 0 ? "In Stock" : "Out of Stock" }}</span
            >
            <div class="price">
              <span class="throughline"> ${{ product.price }}</span> From
              <span
                >${{
                  Math.ceil(
                    product.price -
                      product.price * (product.discountPercentage / 100)
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
            <div class="subtotal">
              Subtotal:${{
                Math.ceil(
                  product.price -
                    product.price * (product.discountPercentage / 100)
                ) * quantity
              }}
            </div>
            <div class="actions">
              <button
                class="my-2 border-0 p-2 btn btn-secondary"
                @click="addToCart(product)"
                :loading="btnLoading"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { cartStore } from "@/stores/cart";
import { mapActions } from "pinia";
export default {
  inject: ["Emitter"],
  name: "single-product",
  data() {
    return {
      loadign: false,
      quantity: 1,
      activeImage: "",
      product: "",
      btnLoading: false,
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
    closePopup() {
      const popup = document.getElementById("popup");
      popup.style.display = "none";
    },
    ...mapActions(cartStore, ["addItem"]),
    addToCart(item) {
      item.quantity = this.quantity;
      this.btnLoading = true;
      setTimeout(() => {
        this.btnLoading = false;
        this.addItem(item);
        this.Emitter.emit("showMsg");
      }, 1000);
      this.closePopup();
      this.$emit("closeNav");
    },
  },
  mounted() {
    this.Emitter.on("openQuickView", (data) => {
      const popup = document.getElementById("popup");
      this.product = data;
      popup.style.display = "block";
    });
  },
  watch: {
    product: {
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
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 1000;
}
.popup-content {
  background-color: #fff;
  padding: 20px 30px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.3);
  max-width: 900px;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 20px;
  z-index: 1001;
}
.close {
  display: block;
  position: sticky;
  background-color: black;
  color: white;
  top: 0;
  margin-left: auto;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
}
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
