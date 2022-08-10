<template>
 
    <div class="flex justify-between my-4">
        <div v-for="cat in categories"  :key="cat.index" class="uppercase font-bold p-1 cursor-pointer">{{cat}}</div>
    </div>
 
</template>

<script>
export default {
    name:'Categories',
    data(){
        return{
            categories:['campaigns','personal care', 'skin care', 'make-up','mother & baby', 'men care', 'healty life', 'brands']
            }
    }
}
</script>

<style>

</style>