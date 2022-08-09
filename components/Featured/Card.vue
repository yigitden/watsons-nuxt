<template>

  <div class="border-smoke  rounded-md border-2 shadow-md	">
    <div class="flex justify-center">
    <img v-bind:src="`${thumbnail}`" class="p-1  w-56 h-40 flex justify-center"/>

    </div>
    <div class="p-2 space-y-2 my-8">

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