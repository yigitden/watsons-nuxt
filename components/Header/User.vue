<template>
  <div class="flex items-center space-x-5 divide-x">
    <div class="flex items-center space-x-3">
      <p class="text-grey">
        Hello, <span class="font-bold text-coal"> Clara Clara </span>
      </p>
      <img src="/images/user.png" />

      <font-awesome-icon :icon="['fas', 'angle-down']" />
    </div>

    <div class="pl-4 inline-flex relative">
      <font-awesome-icon :icon="['fas', 'basket-shopping']" class="w-6 h-6" />
        <div class="inline-flex absolute -top-2 -right-3 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white ">2</div>

      </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
