<template>
  <div>
    <Slider />
    <Title />
    <div class="md:mx-[140px]">
      <div
        class="grid lg:grid-cols-4 grid-cols-2 lg:gap-16 gap-4 mb-10 p-4 lg:p-0"
      >
        <Card
          v-for="product in products"
          :key="product.id"
          :id="product.id"
          :name="product.title"
          :thumbnail="product.thumbnail"
          :price="product.price"
        />
      </div>
    </div>
    <div class=" ">
      <Newsletter />
    </div>
  </div>
</template>

<script>
import Title from "../components/Featured/Title.vue";
import Card from "../components/Featured/Card.vue";
import Header from "../components/Header/index.vue";
import axios from "axios";
import Input from "../components/Input/index.vue";
import Newsletter from "../components/Newsletter/index.vue";
import Slider from "../components/Slider/index.vue";
export default {
  head: {
    title: "Watsons Home Page",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "The biggest cosmetics e-commerce web site watsons provide you to buy new and quality products fair price.",
      },
    ],
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
  name: "IndexPage",
  components: { Title, Header, Card, Input, Newsletter, Slider },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      this.products = res.data.products
        .sort(function (a, b) {
          return b.rating - a.rating;
        })
        .slice(0, 4);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
