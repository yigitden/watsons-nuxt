<template>
  <button class="bg-primary p-4 rounded text-white" :class="{ [padding]:padding, [width]:width }">{{text}}</button>
</template>

<script>
export default {
    name:'Button',
    props:['text','padding','width']
}
</script>

<style>

</style>