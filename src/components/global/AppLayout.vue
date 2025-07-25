<template>
  <div class="app-layout">
    <nav-drawer></nav-drawer>
    <app-bar></app-bar>
    <fixed-nav></fixed-nav>
  </div>
</template>

<script>
import AppBar from "@/components/global/AppBar.vue";
import NavDrawer from "@/components/global/CartDrawer.vue";
import FixedNav from "@/components/global/FixedNav.vue";
export default {
  data: () => {
    return {};
  },
  components: { AppBar, NavDrawer, FixedNav },
};
</script>
