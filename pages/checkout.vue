<template>
  <div >
    <Title/>
    <div class="grid grid-cols-3 mx-[140px] gap-10">
      <div class="col-span-2 ">
        <ShippingForm/>
        <PaymentDetails/>
      </div>
      <div class="col-span-1">
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
export default {
  components: { Title, ShippingForm, PaymentDetails, Summary },
};
</script>

<style></style>
