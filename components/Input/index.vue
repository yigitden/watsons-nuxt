<template>
<div>
     <label
          :for="id"
          class="block mb-2 text-sm font-medium text-gray-900"
          >{{labelText}}</label
        >
        <input
          :type="type" :id="id" 
          class="border border-smoke text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          :placeholder="placeholder"
          :pattern="pattern"
        
          :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
          required="required"
        />
       

 
    
</div>
 
     
</template>

<script>
export default {
    name:'Input',
    props:['placeholder','type','id','labelText','pattern','v-model','modelValue'],
    emits: ['update:modelValue']

}
</script>

<style>

</style>