<template>
  <div class="cart-page mt-2">
    <div class="container">
      <div class="row">
        <div col="12">
          <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link
                  style="font-weight: bold; text-decoration: none"
                  :to="'/'"
                  >Home</router-link
                >
              </li>
              <li
                style="font-weight: bold"
                class="breadcrumb-item active"
                aria-current="page"
              >
                Cart
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h2 style="font-weight: bold">Your Cart</h2>
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
          <div style="position: relative" class="mt-5" v-if="cartItems.length">
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
                }% )`,
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
        </div>
      </div>
      <div class="row">
        <div class="col-8">
          <div class="parent-cart-items mt-5" v-if="cartItems.length">
            <div class="cart-Items mb-3">
              <table style="width: 100%">
                <thead>
                  <tr>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartItems" :key="item.id">
                    <td style="display: flex; align-items: center">
                      <img
                        :src="item.thumbnail"
                        alt="Not Available"
                        style="float: left; width: 150px"
                      />
                      <div>
                        <p class="title">{{ item.title }}</p>
                        <p class="category">{{ item.category }}</p>
                      </div>
                    </td>
                    <td>
                      <div class="price">
                        <span>
                          ${{
                            Math.ceil(
                              item.price -
                                item.price * (item.discountPercentage / 100)
                            )
                          }}</span
                        >
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        style="border-radius: 6px; outline: none; width: 60px"
                        min="1"
                        value="1"
                        v-model="item.quantity"
                      />
                      <div
                        class="quantity mt-2"
                        style="display: flex; justify-content: space-between"
                      ></div>
                    </td>
                    <td>
                      <span>
                        ${{
                          Math.ceil(
                            item.price -
                              item.price * (item.discountPercentage / 100)
                          ) * item.quantity
                        }}</span
                      >
                    </td>
                    <td>
                      <span
                        class="delete-Items"
                        style="
                          display: block;
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
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="order-summary my-5" v-if="cartItems.length">
            <h3 style="font-size: 22px">ORDER SUMMARY</h3>
            <hr />
            <div
              class="subtotal"
              style="display: flex; justify-content: space-between"
            >
              <span>SUBTOTAL</span>
              <span>{{ totalItems }}$</span>
            </div>
            <hr />
            <p>Get Shipping estimate</p>
            <select
              name=""
              id=""
              class="w-100 p-2"
              style="border: 1px solid rgb(184, 184, 184); border-radius: 30px"
            >
              <option
                :value="country"
                v-for="country in countries"
                :key="country"
              >
                {{ country }}
              </option>
            </select>
            <select
              name=""
              id=""
              class="w-50 p-2 mt-2"
              style="border: 1px solid rgb(184, 184, 184); border-radius: 30px"
            >
              <option
                :value="country"
                v-for="country in countries"
                :key="country"
              >
                {{ country }}
              </option>
            </select>
            <input
              type="text"
              class="w-50 p-2"
              style="border: 1px solid rgb(184, 184, 184); border-radius: 30px"
            />
            <button class="btn btn-secondary w-100 mt-2">Check Out</button>
            <button
              class="btn btn-primary w-100 my-2"
              @click="$router.push({ name: 'cart-page' })"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { cartStore } from "@/stores/cart";
import { mapActions, mapState } from "pinia";
export default {
  name: "CartDrawer",
  data() {
    return {
      countries: ["Egypt", "Saudi Arabia", "United Emirates"],
    };
  },
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
    ...mapActions(cartStore, ["deleteItem"]),
    closeOffcanvas() {
      document.querySelector("#offcanvasDarkNavbar .btn-close").click();
    },
  },
};
</script>
<style scoped lang="scss"></style>
