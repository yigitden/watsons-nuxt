<template>
  <div class="text-graphene flex items-center justify-end p-4 pt-4 pb-2 cursor-pointer hover:bg-smoke50 duration-500">
    <p class="text-sm font-medium mr-4 ">{{ text }}</p>
    <font-awesome-icon :icon="icon" />
  </div>
</template>

<script>
export default {
  props: ["text", "icon"],
};
</script>

<style></style>
