<template>
  <button class="bg-primary p-4 rounded text-white" :class="{ [padding]:padding }">{{text}}</button>
</template>

<script>
export default {
    name:'Button',
    props:['text','padding']
}
</script>

<style>

</style>