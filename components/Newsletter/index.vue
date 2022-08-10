<template>
<div class="bg-titan grid grid-cols-2 px-[140px] py-10"> 
  <TextNewsletter />
  <Subscribe/>
</div>
</template>

<script>
import TextNewsletter from './TextNewsletter.vue';
import Subscribe from './Subscribe.vue';
export default {
    components: { TextNewsletter,Subscribe }
}
</script>

<style>

</style>