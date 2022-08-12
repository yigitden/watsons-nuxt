<template>
  <button
    :type="type"
    class="bg-primary p-4 rounded text-white flex items-center justify-center"
    :class="{ [padding]: padding, [width]: width }"
  >
    <font-awesome-icon :icon="icon" v-if="icon" class="mr-2" />
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: ["text", "padding", "width", "icon", "type"],
};
</script>

<style></style>
