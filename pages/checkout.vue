<template>
  <div class="p-4 " >
    <Title/>
 
    <div class="grid grid-cols-1 lg:grid-cols-3 lg:mx-[140px] lg:gap-10  	">
      <div class="col-span-2 ">
        <form>
        <ShippingForm/>
        <PaymentDetails/>
  
        <div class="w-1/2 mt-4">

        <Button text="PAY NOW" width="w-full" type="submit"/>
        </div> 
        </form>
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
  head: {
    title: 'Watsons Checkout Page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Checkout page.'
      }
    ],
  },
  components: { Title, ShippingForm, PaymentDetails, Summary, Button },
    mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
};
</script>

<style></style>
