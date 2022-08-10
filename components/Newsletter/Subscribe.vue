<template>
  <div class="flex items-center space-x-4">
    <div class="w-2/3">
      <input
        type="text"
        id="email"
        class="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        placeholder="Your email address"
        required
      />
    </div>
    <div class="w-1/3">
      <Button text='SUBSCRIBE'/>
    </div>
  </div>
</template>

<script>
import Button from '../Button/index.vue';
export default { components: { Button } };
</script>

<style></style>
