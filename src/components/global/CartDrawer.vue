<template>
  <div class="nav-drawer">
    <nav
      class="navbar navbar-light bg-light fixed-top py-0"
      id="navbar"
      style="z-index: 9999"
    >
      <div class="container-fluid">
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title fw-bold" id="offcanvasDarkNavbarLabel">
              Shopping Cart
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body pt-0">
            <span style="display: block; color: grey"
              >{{ cartItems.length }} Items</span
            >
            <p
              style="color: gray"
              class="mt-2"
              v-if="cartItems.length && 10000 - totalItems > 0"
            >
              Only {{ 10000 - totalItems }}$ away From Free Shipping
            </p>
            <p
              style="color: gray"
              class="mt-2"
              v-if="cartItems.length && 10000 - totalItems <= 0"
            >
              Your Order Now Is Free Shipping!
            </p>
            <p style="color: gray" class="mt-2" v-if="!cartItems.length">
              Free shipping for all orders over $10000!
            </p>
            <p
              style="color: grey"
              class="text-center"
              v-if="cartItems.length == 0"
            >
              Your cart is empty
            </p>
            <div
              style="position: relative"
              class="mt-5"
              v-if="cartItems.length"
            >
              <svg
                class="icon-shipping-truck"
                viewBox="0 0 40.55 24"
                :style="{
                  position: 'absolute',
                  top: '-15px',
                  width: '30px',
                  left: `calc(${
                    (totalItems / 10000) * 100 <= 100
                      ? parseInt((totalItems / 10000) * 100)
                      : 100
                  }%  - 30px)`,
                  zIndex: 111111,
                  fill: 'rgb(222 63 78)',
                  transition: 'all 0.15s ease-in-out',
                }"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="truck-body"
                      d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                    />
                    <path
                      class="truck-body"
                      d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                    />
                    <path
                      class="wheel"
                      fill="white"
                      d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                    />
                    <path
                      fill="white"
                      class="wheel"
                      d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                    />
                  </g>
                </g>
              </svg>
              <div class="progress" style="height: 10px">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                  :style="{
                    width:
                      (totalItems / 10000) * 100 <= 100
                        ? `${parseInt((totalItems / 10000) * 100)}%`
                        : '100%',
                    transition: 'all 0.15s ease-in-out',
                  }"
                ></div>
              </div>
            </div>
            <div
              class="parent-cart-items mt-5"
              v-if="cartItems.length"
              style="max-height: 270px; overflow-y: auto"
            >
              <div
                class="cart-Items mb-3"
                v-for="item in cartItems"
                :key="item.id"
              >
                <img
                  :src="item.thumbnail"
                  alt="Not Available"
                  style="float: left; width: 150px"
                />
                <p class="title">{{ item.title }}</p>
                <p class="category">{{ item.category }}</p>
                <div class="price">
                  <span>
                    ${{
                      Math.ceil(
                        item.price -
                          item.price * (item.discountPercentage / 100)
                      ) * item.quantity
                    }}</span
                  >
                </div>
                <div
                  class="quantity mt-2"
                  style="display: flex; justify-content: space-between"
                >
                  <input
                    type="number"
                    style="border-radius: 6px; outline: none; width: 60px"
                    min="1"
                    value="1"
                    v-model="item.quantity"
                  />
                  <span
                    class="delete-Items"
                    style="
                      width: 25px;
                      height: 25px;
                      background-color: indianred;
                      border-radius: 50%;
                      text-align: center;
                      cursor: pointer;
                      color: white;
                    "
                    @click="deleteItem(item.id)"
                  >
                    X
                  </span>
                </div>
                <hr />
              </div>
            </div>
            <div
              class="actions d-flex flex-column mt-4"
              v-if="cartItems.length"
            >
              <button @click="toCheckout" class="btn btn-secondary">
                Check Out
              </button>
              <button class="btn" @click="$router.push({ name: 'cart-page' })">
                View Cart
              </button>
            </div>
            <button
              @click="closeOffcanvas()"
              class="btn btn-secondary"
              v-if="!cartItems.length"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { cartStore } from "@/stores/cart";
import { mapActions, mapState } from "pinia";
export default {
  name: "CartDrawer",
  computed: {
    ...mapState(cartStore, ["cartItems"]),
    totalItems() {
      let total = 0;
      this.cartItems.forEach((item) => {
        total +=
          Math.ceil(item.price - item.price * (item.discountPercentage / 100)) *
          item.quantity;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(cartStore, ["deleteItem", "setToLocalStorage"]),
    closeOffcanvas() {
      document.querySelector("#offcanvasDarkNavbar .btn-close").click();
    },
    toCheckout() {
      this.setToLocalStorage();
      this.$router.push({ name: "checkout_page" });
    },
  },
};
</script>
