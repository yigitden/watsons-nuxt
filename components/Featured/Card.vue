<template>
  <div class="border-smoke50 rounded-md border shadow-sm ">
    <div class="flex justify-center flex-col hover:relative">
      <img :src="`${thumbnail}`" class="p-1 h-40 " />
      
    </div>
    <div class="space-y-2 p-8">
      <div class="text-xl text-coal font-bold">{{ price }} $</div>
      <div class="text-graphene h-14 lg:h-auto break-words">{{ name }}</div>
    </div>
          <div class="p-4  border-t border-smoke flex justify-center md:hidden"><Button text="ADD" padding="py-2 px-10" width="w-32"/></div>

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
