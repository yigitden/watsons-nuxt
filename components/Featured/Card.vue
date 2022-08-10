<template>

  <div class="border-smoke50  rounded-md border shadow-sm	 max-w-64	">
    <div class="flex justify-center">
    <img v-bind:src="`${thumbnail}`" class="p-1  w-56 h-40 flex "/>

    </div>
    <div class="space-y-2 p-8">

    <div class="text-xl text-coal font-bold"> {{price}} $</div>
    <div class="text-graphene">{{name}}</div>
    </div>
 
    </div>
   

  
</template>

<script>
export default {
    name:'Card',
    props:['name','id','thumbnail','price'],

}
</script>

<style>

</style>