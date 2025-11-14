<template>
  <div class="cyber-categories">
    <div class="cyber-offers">
      <img
        style="max-width: 100%"
        src="../../assets/images/cyber-banner.webp"
        alt="Not Available"
      />
    </div>
    <div class="top0-categories p-5">
      <div class="container-fluid">
        <div class="title d-flex justify-content-between">
          <h3 style="text-align: center; flex: 1; font-weight: bold">
            Top Categories
          </h3>
          <a href="#" style="color: black">Shop All</a>
        </div>
        <div class="categories">
          <div class="row">
            <div
              class="col-2"
              v-for="category in categories"
              :key="category.title"
            >
              <div class="category d-flex flex-column align-items-center pt-5">
                <img :src="category.img" alt="Not Available" />
                <a
                  href="#"
                  class="mt-3 text-black text-decoration-none"
                  style="text-transform: capitalize"
                  >{{ category.title }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
          title: "mobile phones",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
          title: "laptop & tablets",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
          title: "televisions",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
          title: "pCs & accessories",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
          title: "audio & video",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
          title: "gaming & accessories",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
          title: "home appliances",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
          title: "kitchen appliances",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
          title: "cameras",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
          title: "consumables",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
          title: "smart homes",
        },
        {
          img: "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
          title: "accessories",
        },
      ],
    };
  },
};
</script>
