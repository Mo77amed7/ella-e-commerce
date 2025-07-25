import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    groceries: [],
    fragrances: [],
    beauty: [],
    brands: [],
    categoryProducts: [],
    singleProduct: "",
    categories: [
      {
        title: "Beauty",
        route: "beauty",
      },
      {
        title: "Fragrances",
        route: "fragrances",
      },
      {
        title: "Furniture",
        route: "furniture",
      },
      {
        title: "Groceries",
        route: "groceries",
      },
      {
        title: "Home Decoration",
        route: "home-decoration",
      },
      {
        title: "Kitchen Accessories",
        route: "kitchen-accessories",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          const products = res.data.products;
          this.newProducts = res.data.products.filter(
            (el) => el.category === "furniture"
          );
          this.flashDeals = res.data.products.slice(0, 8);
          this.groceries = res.data.products.filter(
            (el) => el.category === "groceries"
          );
          this.fragrances = res.data.products.filter(
            (el) => el.category === "fragrances"
          );
          this.beauty = res.data.products.filter(
            (el) => el.category === "beauty"
          );
          // Extract unique brands
          const allBrands = products.map((el) => el.brand);
          this.brands = [...new Set(allBrands)]; // Remove duplicates
        })
        .catch((err) => console.log(err));
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.categoryProducts = res.data));
    },
    async getSingleProduct(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => {
          this.singleProduct = res.data;
        });
    },
  },
});
