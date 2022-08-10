<template>
<div>
   <FormTitle
   title="Shopping details"
   :icon="['fas', 'box-taped']"/>
      

  <form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
     
        <Input
        type="text"
        id="firstName"
        labelText="First Name *"
         />
        <Input
        type="text"
        id="lastName"
        labelText="Last Name *" 
        />
        <Input
        type="text"
        id="email"
        labelText="Email Address *"
         />
        <Input
        type="text"
        id="phone"
        labelText="Phone number *"
        placeholder="+90 ( 5_ _ ) _ _ _  _ _  _ _"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>



 
      <div>
        <label
          for="cities"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >City *</label
        >
        <select
          id="cities"
          class="border border-smoke text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected>Please Select</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
      <div>
        <label
          for="district"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >District *</label
        >
        <select
          disabled
          id="district"
          class="border border-smoke text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option selected>Please Select</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </div>
    
    <div class="mb-6">
        <TextArea
        labelText="Address *"
        id="address"
        rows="4"
        placeholder="Enter neighborhood, street, avenue and other information"

        />
      
    </div>
  </form>
  </div>
</template>

<script>
import Input from '../Input/index.vue';
import TextArea from '../TextArea/index.vue';
import FormTitle from './FormTitle.vue';
export default { components: { Input, TextArea, FormTitle } };
</script>

<style></style>
