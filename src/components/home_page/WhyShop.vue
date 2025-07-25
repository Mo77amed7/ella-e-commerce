<template>
  <section class="why-shop text-white">
    <div class="container-fluid">
      <h2 class="title text-center fw-bold m-4">
        <span>Why shop</span> with us
      </h2>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div
            class="card text-white text-center border-0 bg-transparent d-flex justify-content-center align-items-center"
          >
            <img src="@/assets/images/free-shipping.png" alt="free shipping" />
            <h3 class="m-3 fw-bold">Free Shipping On First Order</h3>
            <p>Present suscipit mattis facilities</p>
            <a class="text-white" href="">Learn more</a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div
            class="card text-white text-center border-0 bg-transparent d-flex justify-content-center align-items-center"
          >
            <img
              src="@/assets/images/weekly-flash-sales.png"
              alt="flash sale"
            />
            <h3 class="m-3 fw-bold">Weekly Flash Sale</h3>
            <p>Present suscipit mattis facilities</p>
            <a class="text-white" href="">Learn more</a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div
            class="card text-white text-center border-0 bg-transparent d-flex justify-content-center align-items-center"
          >
            <img src="@/assets/images/discount.png" alt="discount" />
            <h3 class="m-3 fw-bold">Anual Payment Discount</h3>
            <p>Present suscipit mattis facilities</p>
            <a class="text-white" href="">Learn more</a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div
            class="card text-white text-center border-0 bg-transparent d-flex justify-content-center align-items-center"
          >
            <img
              class="img-fluid"
              src="@/assets/images/cash-back.png"
              alt="cashback"
            />
            <h3 class="m-3 fw-bold">Cashback Reward program</h3>
            <p>Present suscipit mattis facilities</p>
            <a class="text-white" href="">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyShop",
};
</script>
<style lang="scss">
.why-shop {
  background-image: url(@/assets/images/why-shop-with-us-banner.webp);
  background-size: cover;
  padding: 40px 0px;
  img {
    width: 60px;
  }
  h2 {
    span {
      color: #02fddd;
    }
  }
  h3 {
    font-size: 22px;
  }
  p {
    color: #eee;
    margin-bottom: 5px;
  }
}
</style>
