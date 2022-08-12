<template>
  <div class="bg-smoke30 divide-y ">
    <MobileUserMenuItem text="My profile" :icon="['fas', 'user']" />
    <MobileUserMenuItem text="Order history" :icon="['fas', 'inbox']" />
    <MobileUserMenuItem text="Help center" :icon="['fas', 'circle-question']" />
    <MobileUserMenuItem text="Log out" :icon="['fas', 'right-from-bracket']" />
  </div>
</template>

<script>
import MobileUserMenuItem from "./MobileUserMenuItem.vue";
export default {
  components: { MobileUserMenuItem },
};
</script>

<style></style>
