<template>
  <div class="border-smoke50 rounded-md border shadow-sm w-[260px]">
    <div class="flex justify-center flex-col hover:relative">
      <img :src="`${thumbnail}`" class="p-1 w-56 h-40 " />
      <div class="hover:absolute hover:inset-x-0 hover:bottom-0 
       invisible hover:visible bg-black80 text-white divide-x flex h-12 items-center space-x-4 justify-center w-fit">
        <div>
          <font-awesome-icon :icon="['fas', 'eye']" class="mr-2"/> Quick View
        </div>
            
         <div>
             <font-awesome-icon :icon="['fas', 'basket-shopping']" class="mr-2"/> Add
           
        </div>
      </div>
    </div>
    <div class="space-y-2 p-8">
      <div class="text-xl text-coal font-bold">{{ price }} $</div>
      <div class="text-graphene">{{ name }}</div>
      <div class="  p-4 w-full  "><Button text="ADD" padding="py-2 px-10"/></div>
    </div>
    
  </div>
  
</template>

<script>
import Button from '../Button/index.vue';
export default {
    name: "Card",
    props: ["name", "id", "thumbnail", "price"],
    components: { Button }
};
</script>

<style></style>
