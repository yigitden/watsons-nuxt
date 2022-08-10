<template>
  <div>
 
 
    <Slider/>
       <Title />
    <div class="mx-[140px]">
      <div class="grid grid-cols-4 gap-10 mb-10">
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
    <Newsletter/>
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
      this.products = res.data.products.slice(0, 4);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>
