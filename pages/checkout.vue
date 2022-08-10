<template>
  <div>
    <Title />
    <div class="grid grid-cols-3">
      <div class="col-span-2 mx-[140px]">
        <ShippingForm/>
        <PaymentDetails/>
      </div>
      <div class="col-span-1">


      </div>
    </div>
  </div>
</template>

<script>
import Title from "../components/Checkout/Title.vue";
import ShippingForm from "../components/Forms/ShippingForm.vue";
import PaymentDetails from "../components/Forms/PaymentDetails.vue";
export default {
  components: { Title, ShippingForm, PaymentDetails },
};
</script>

<style></style>
