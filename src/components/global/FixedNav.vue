<template>
  <div class="fixed-nav" @closeNav="closeNav">
    <nav class="navbar fixed-top p-3" style="background-color: #0a1b69">
      <div class="container-fluid" style="display: block">
        <div class="row align-items-center">
          <div class="col-2">
            <div class="logo">
              <img
                src="@/assets/images/logo.png"
                alt="Logo"
                @click="$router.push({ name: 'home' })"
                style="cursor: pointer"
              />
            </div>
          </div>
          <div class="col-7">
            <ul
              class="d-flex justify-content-between p-0 m-0"
              style="color: white; list-style-type: none"
            >
              <li v-for="category in categories" :key="category.title">
                <router-link
                  style="color: white; font-weight: bold; text-decoration: none"
                  :to="{
                    name: 'category',
                    params: { category: category.route, title: category.title },
                  }"
                  >{{ category.title }}</router-link
                >
              </li>
            </ul>
          </div>
          <div class="col-2"></div>
          <div class="col-1 d-flex justify-content-between align-items-center">
            <svg
              data-icon="search"
              viewBox="0 0 512 512"
              width="25px"
              height="25px"
              style="fill: white"
            >
              <path
                d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"
              ></path>
            </svg>
            <div
              class="cart d-flex flex-column align-items-center position-relative"
            >
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasDarkNavbar"
                aria-controls="offcanvasDarkNavbar"
                aria-label="Toggle navigation"
                :disabled="$route.name === 'cart-page'"
              >
                <svg
                  style="width: 30px; margin-bottom: 4px; fill: white"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  class=""
                >
                  <path
                    class="path1"
                    d="M409.6 1024c-56.464 0-102.4-45.936-102.4-102.4s45.936-102.4 102.4-102.4S512 865.136 512 921.6 466.064 1024 409.6 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                  ></path>
                  <path
                    class="path2"
                    d="M768 1024c-56.464 0-102.4-45.936-102.4-102.4S711.536 819.2 768 819.2s102.4 45.936 102.4 102.4S824.464 1024 768 1024zm0-153.6c-28.232 0-51.2 22.968-51.2 51.2s22.968 51.2 51.2 51.2 51.2-22.968 51.2-51.2-22.968-51.2-51.2-51.2z"
                  ></path>
                  <path
                    class="path3"
                    d="M898.021 228.688C885.162 213.507 865.763 204.8 844.8 204.8H217.954l-5.085-30.506C206.149 133.979 168.871 102.4 128 102.4H76.8c-14.138 0-25.6 11.462-25.6 25.6s11.462 25.6 25.6 25.6H128c15.722 0 31.781 13.603 34.366 29.112l85.566 513.395C254.65 736.421 291.929 768 332.799 768h512c14.139 0 25.6-11.461 25.6-25.6s-11.461-25.6-25.6-25.6h-512c-15.722 0-31.781-13.603-34.366-29.11l-12.63-75.784 510.206-44.366c39.69-3.451 75.907-36.938 82.458-76.234l34.366-206.194c3.448-20.677-1.952-41.243-14.813-56.424zm-35.69 48.006l-34.366 206.194c-2.699 16.186-20.043 32.221-36.39 33.645l-514.214 44.714-50.874-305.246h618.314c5.968 0 10.995 2.054 14.155 5.782 3.157 3.73 4.357 9.024 3.376 14.912z"
                  ></path>
                </svg>
              </button>
              <span
                class="position-absolute top-0 end-0 translate-middle bg-danger rounded-circle text-center"
                style="
                  width: 20px;
                  height: 20px;
                  color: white;
                  line-height: 20px;
                  font-size: 12px;
                "
              >
                {{ cartItems.length }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.navbar-toggler {
  border: none;
  &:focus {
    box-shadow: none;
  }
}
</style>

<script>
import { productsModule } from "@/stores/products";
import { mapState } from "pinia";
import { cartStore } from "@/stores/cart";
export default {
  name: "FixedNav",
  inject: ["Emitter"],
  computed: {
    ...mapState(productsModule, ["categories"]),
    ...mapState(cartStore, ["cartItems"]),
  },
  methods: {
    openCart() {
      document.querySelector(".button-toggler").click();
    },
  },
};
</script>
