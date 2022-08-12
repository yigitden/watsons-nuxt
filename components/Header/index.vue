<template>
  <div class="md:px-[140px] bg-white mt-3 z-50 mb-4 lg:mb-0">
    <div class="flex items-center">
      <div class="w-1/4">
        <Logo />
      </div>
      <div class="w-3/4 flex justify-between   items-center ">
            <SearchBar />
        <User />
           <Basket/>
            <div class="flex items-center lg:hidden ">
        <button
          class="text-black text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
          @click="handleOpen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      </div>
    </div>

    <div id="menu" class="hidden lg:flex">
    
      <div class="bg-titan text-xl	font-medium	flex justify-between h-12 p-4 mt-2 items-center lg:hidden">
         <div class="cursor-pointer" @click="handleOpen"><p>x</p>
         </div>
         <p>Menu</p>
          </div>
     <Categories />
     
     </div>
    
     
  </div>
</template>

<script>
import Categories from "./Categories.vue";
import User from "./User.vue";
import Logo from "./Logo.vue";
import SearchBar from "./SearchBar.vue";
import Basket from './Basket.vue';

export default {
  components: { User, Categories, Logo, SearchBar, Basket },
  methods: {
    handleOpen: function () {
      var menu = document.getElementById("menu");
      menu.classList.toggle("hidden");
    },
  },
};
</script>

<style></style>
