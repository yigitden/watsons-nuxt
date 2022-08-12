<template>
  <div class="border-smoke50 rounded-md border shadow-sm ">
    <div class="flex justify-center flex-col relative">
      <img :src="`${thumbnail}`" class="p-1 h-40 " />
      <div class=" absolute inset-x-0 bottom-0 opacity-0 md:hover:opacity-100
           bg-black80 text-white divide-x  flex 
       h-12 items-center space-x-4 justify-center w-fit">
        <div  class=" md:cursor-pointer ">
          <font-awesome-icon :icon="['fas', 'eye']" class="mr-2 "/> Quick View
        </div>
       
         <div class=" md:cursor-pointer">
             <font-awesome-icon :icon="['fas', 'basket-shopping']" class="mr-2 ml-4"/> Add
           
        </div>
      </div>
    </div>
    <div class="space-y-2 p-8 ">
      <div class="text-xl text-coal font-bold">{{ price }} $</div>
      <div class="text-graphene h-14 lg:h-auto break-words">{{ name }}</div>
      
    </div>
          <div class="p-4  border-t border-smoke flex justify-center md:hidden">
            <Button text="ADD" padding="py-2 px-10" width="w-32" :icon="['fas', 'basket-shopping']"/></div>

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
