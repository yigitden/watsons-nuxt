<template>
  <div>
    <label
      :for="id"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >{{ labelText }}</label
    >
    <textarea
      :id="id"
      :rows="rows"
      class="block p-2.5 w-full text-sm text-gray-900 rounded border border-smoke focus:ring-blue-500 focus:border-blue-500"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: ["id", "labelText", "rows", "placeholder"],
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
