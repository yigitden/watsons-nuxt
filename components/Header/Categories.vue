<template>
 
    <div class="flex justify-between my-4 flex-col lg:flex-row w-full">
        <div v-for="cat in categories"  :key="cat.index" 
        class="capitalize lg:uppercase font-medium lg:font-bold p-4 cursor-pointer hover:bg-smoke30 
        duration-500 flex justify-between items-center ">
        <div class="lg:hidden"> 
        <font-awesome-icon :icon="['fas', 'angle-left']" />  
        </div>
        {{cat}}  
        </div>
        <div class="block lg:hidden">

        <MobileUserMenu/>
        </div>
        
              
  
    </div>
 
</template>

<script>
import MobileUserMenu from './MobileUserMenu.vue';
export default {
    name: "Categories",
    data() {
        return {
            categories: ["campaigns", "personal care", "skin care", "make-up", "mother & baby", "men care", "healty life", "brands"]
        };
    },
    components: { MobileUserMenu }
}
</script>

<style>

</style>