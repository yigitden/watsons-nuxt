<template>
  <agile>
    <div class="slide">


      <Item
      image="/images/right.png"
      buttonText="SHOP NOW"
      firstLine="NATURALS BY WATSONS"
      secondLine="The new 2021 collection"
      thirdLine="Known as 'the miracle plant', Aloe Vera helps to nourish, moisturize and
        keep the hair looking smooth. Let your hair be flexible and fresh."
      />
    </div>



    <div class="slide">
           <Item
      image="/images/right.png"
      buttonText="TRY IT"
      firstLine="WATSONS LAB TURKIYE"
      secondLine="SAMPLE SLIDER LAB TURKIYE"
      thirdLine="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
    </div>
   
  </agile>
</template>

<script>
import { VueAgile } from "vue-agile";
import Button from "../Button/index.vue";
import Item from "./Item.vue";

export default {
  components: {
    agile: VueAgile,
    Button,
    Item
},
};
</script>
<style scoped></style>
