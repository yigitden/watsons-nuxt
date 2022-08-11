<template>
  <div class="p-4 " >
    <Title/>
 
    <div class="grid grid-cols-1 lg:grid-cols-3 lg:mx-[140px] lg:gap-10  	">
      <div class="col-span-2 ">
        <ShippingForm/>
        <PaymentDetails/>
        <div class="w-1/2 mt-4">

        <Button text="PAY NOW" width="w-full"/>
        </div>
      </div>
      <div class="col-span-1 row-start-1 lg:row-start-auto">
        <Summary/>

      </div>
    </div>
 
  </div>
</template>

<script>
import Title from "../components/Checkout/Title.vue";
import ShippingForm from "../components/Forms/ShippingForm.vue";
import PaymentDetails from "../components/Forms/PaymentDetails.vue";
import Summary from "../components/ShoppingCard/Summary.vue";
import Button from "../components/Button/index.vue";
export default {
  components: { Title, ShippingForm, PaymentDetails, Summary, Button },
};
</script>

<style></style>
