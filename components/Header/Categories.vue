<template>
 
    <div class="flex justify-between my-4">
        <div v-for="cat in categories"  :key="cat.index" class="uppercase font-bold p-4 cursor-pointer hover:bg-smoke30 duration-500">{{cat}}</div>
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