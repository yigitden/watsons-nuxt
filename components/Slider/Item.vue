<template>
  <div class="grid grid-cols-2 bg-titan px-[140px]">
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
    <div>
      <img :src="image" />
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
