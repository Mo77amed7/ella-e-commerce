<template>
  <app-layout></app-layout>
  <router-view />
  <footer-app></footer-app>
  <popup></popup>
  <div
    class="toast align-items-center text-white bg-success border-0"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    id="myToast"
  >
    <div class="d-flex">
      <div class="toast-body">Your product has been shipped successfully.</div>
      <button
        type="button"
        class="btn-close btn-close-white me-2 m-auto"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
  </div>
</template>

<script>
import Popup from "@/components/global/QuickView.vue";
import AppLayout from "@/components/global/AppLayout.vue";
import FooterApp from "./components/global/FooterApp.vue";
import { mapActions } from "pinia";
import { cartStore } from "./stores/cart";
import * as bootstrap from "bootstrap";
export default {
  inject: ["Emitter"],
  data: () => {
    return {};
  },
  components: { AppLayout, FooterApp, Popup },
  methods: {
    ...mapActions(cartStore, ["getCartItems"]),
  },
  mounted() {
    this.getCartItems();
    this.Emitter.on("showMsg", () => {
      const el = document.getElementById("myToast");
      const toast = new bootstrap.Toast(el, {
        autohide: true,
        delay: 2500,
      });
      toast.show();
    });
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
// input[type="number"]::-webkit-outer-spin-button,
// input[type="number"]::-webkit-inner-spin-button {
//   -webkit-appearance: none;
//   margin: 0;
// }
.clear {
  clear: both;
}
.toast {
  position: fixed;
  top: calc(100vh - 50px);
  left: 10px;
  z-index: 1111111111;
}
</style>
