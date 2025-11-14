<template>
  <div class="banner-app">
    <div class="container-fluid">
      <div class="row">
        <div class="col-7">
          <div class="content">
            <h2><span>Huge Saving</span> On UHD Televisions</h2>
            <p>Sale up to 70% off on selected items*</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-outline-light rounded-pill py-3 px-5"
        style="margin: 40px 0px 0px 165px"
      >
        Shop Now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerApp",
};
</script>

<style lang="scss" scoped>
.banner-app {
  background-image: url(../../assets/images/banner-bg.jpg);
  background-size: cover;
  height: 450px;
  .content {
    padding: 40px 0px 0px 165px;
    h2 {
      color: white;
      font-weight: 900;
      font-size: 50px;
      span {
        color: rgb(37, 223, 195);
      }
    }
    p {
      color: rgb(253, 249, 249);
      margin: 30px 0px;
      word-spacing: 2px;
      letter-spacing: 1px;
    }
  }
}
</style>
