<template>
  <agile>
    <div class="slide">
      <div class="grid grid-cols-2 bg-titan px-[140px]">
        <div class="flex flex-col justify-center ">
          <p class="font-bold	text-sm text-grey">NATURALS BY WATSONS</p>
           <p class="text-4xl text-coal font-bold ">The new 2021 collection</p>
            <p class="text-graphene my-4">Known as "the miracle plant", Aloe Vera helps to nourish, moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.</p>
           <div>
             <Button text="SHOP NOW" padding="py-2 px-4"/>

           </div>
        </div>
        <div>       <img src="/images/right.png"/></div>
   
      </div>
      
    </div>

    ...

    <div class="slide">
      <h3>slide n</h3>
    </div>
  </agile>
</template>

<script>
  import { VueAgile } from 'vue-agile'
import Button from '../Button/index.vue'

export default {
  components: {
    agile: VueAgile,
    Button
}
}
</script>
<style scoped>

</style>