<template>
  <section class="new-sletter text-center p-5">
    <div class="container-fluid">
      <div class="title">
        <h2 class="text-uppercase fw-bold">Subscribe to our newsletter</h2>
        <p class="text-capitalize">
          get the latest updates on new products and upcoming sales
        </p>
      </div>
      <form class="mt-4" action="">
        <input
          class="border-0 bg-white rounded-pill p-2"
          type="email"
          name="SEmail"
          id="s-emial"
          placeholder="enter your email address"
        />
        <input
          class="border-0 rounded-pill py-2 px-5 ms-2"
          type="button"
          value="Submit"
        />
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: "NewSletter",
};
</script>
<style lang="scss">
.new-sletter {
  background-color: #eee;
  h2 {
    font-size: 23px;
  }
  p {
    color: #777;
  }
  form {
    input[type="email"] {
      width: 500px;
      &:focus {
        outline: none;
      }
    }
    input[type="button"] {
      background-color: #182281;
      color: white;
    }
  }
}
</style>
