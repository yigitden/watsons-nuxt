<template>
  <div class="grid md:grid-cols-2 grid-cols-1 bg-titan md:px-[140px] p-4 md:p-0">
     <div class="flex flex-col justify-center">
      <p class="font-bold text-sm text-grey">{{firstLine}}</p>
      <p class="text-4xl text-coal font-bold">{{secondLine}}</p>
      <p class="text-graphene my-4">
        {{thirdLine}}
      </p>
      <div>
        <Button :text="buttonText" padding="py-2 px-4" />
      </div>
    </div>
    <div class="flex items-center justify-center row-start-1 lg:row-start-auto">
      <img :src="image" class="max-w-[580px] max-h-[400px]"/>
    </div>
   </div>
 </template>

<script>
export default {
    name:'Item',
    props:['image','buttonText','firstLine','secondLine','thirdLine']
};
</script>

<style></style>
