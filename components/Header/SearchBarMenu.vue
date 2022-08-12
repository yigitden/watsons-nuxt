<template>
<div class="w-full flex justify-end lg:justify-center self-end">
  <div class="flex items-center lg:hidden">
        <button
          class="text-black text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
          @click="handleOpen"
        >
         <svg      
                aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="none" 
            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
            </path>
            </svg>
       
        </button>
      </div>
    

     <div id="searchbar" class="hidden lg:flex lg:justify-center">
    
      <div class="relative ">
          <div class="absolute lg:inset-y-0 inset-y-6 w-[340px] lg:max-width-560 lg:right-0 -right-32 z-50 lg:relative">
            <SearchBar />
          </div>
          </div>
    
     
     </div>
    </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
export default {
    components: { SearchBar },
     methods: {
    handleOpen: function () {
      var searchbar = document.getElementById("searchbar");
      searchbar.classList.toggle("hidden");
    },
  }
}
</script>

<style>

</style>