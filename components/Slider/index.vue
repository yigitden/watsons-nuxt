<template>
  <agile
    :autoplay="true"
    :fade="true"
    :autoplay-speed="4000" 
    ref="carousel"
    dots="true"
  >
    <div class="slide relative  ">
      <Item
        image="/images/right.png"
        buttonText="SHOP NOW"
        firstLine="NATURALS BY WATSONS"
        secondLine="The new 2021 collection"
        thirdLine="Known as 'the miracle plant', Aloe Vera helps to nourish, moisturize and
        keep the hair looking smooth. Let your hair be flexible and fresh."
      />
    </div>

    <div class="slide relative">
      <Item
        image="/images/slider2.png"
        buttonText="TRY IT"
        firstLine="WATSONS LAB TURKIYE"
        secondLine="SAMPLE SLIDER LAB TURKIYE"
        thirdLine="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
    </div>

    <div class="slide relative">
      <Item
        image="/images/right.png"
        buttonText="SHOP NOW"
        firstLine="THIRD NATURALS BY WATSONS"
        secondLine="The new 2023 collection"
        thirdLine="Known as 'the miracle plant', Aloe Vera helps to nourish, moisturize and
        keep the hair looking smooth. Let your hair be flexible and fresh."
      />
    </div>

  
  </agile>
</template>

<script>
 import Button from "../Button";
import Item from "./Item.vue";

export default {
  components: {
     Button,
    Item,
  },
};
</script>
 
<style>
 
  
</style>
