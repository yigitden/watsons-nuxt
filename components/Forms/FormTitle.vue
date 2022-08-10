<template>
  <div class="my-9 flex items-center">
    <div class="bg-smoke30 border rounded  mr-4 h-9 w-9 flex justify-center items-center"><font-awesome-icon :icon="icon" /></div>
    <p class="text-xl font-medium">
      {{title}}
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
