<template>
  <div class="xl:px-[140px] bg-white sticky top-0 mt-3 z-50">
    <div class="flex items-center">
      <div class="flex justify-between items-center w-3/4">
        <Logo /> 
        <SearchBar />
      </div>
      <div class="w-1/4">
        <User />
      </div>
    </div>

    <div><Categories /></div>
  </div>
</template>

<script>
import Categories from "./Categories.vue";
import User from "./User.vue";
import Logo from "./Logo.vue";
import SearchBar from "./SearchBar.vue";
export default {
  components: { User, Categories, Logo, SearchBar },
};
</script>

<style></style>
