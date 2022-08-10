<template>
  <div class="my-9 flex">
    <div class="bg-smoke border radius-md"></div>
    <p class="text-xl font-medium">
      <font-awesome-icon :icon="icon" />{{title}}
    </p>
  </div>
</template>

<script>
export default {
    name:'FormTitle',
    props:['title','icon']
};
</script>

<style></style>
