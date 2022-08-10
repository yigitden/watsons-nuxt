<template>
  <div>
    <FormTitle title="Payment Details" />
    <div class="grid grid-cols-2 ">
        <div  >
            <Input type="text" id="cardholder" labelText="Card Holder Name *"/>
             <p   class="text-xs	text-coal60 mt-2 mb-4">Full name on card</p>
            <Input type="text" id="cardnumber" labelText="Card Number *"/>
             <p   class="text-xs	text-coal60 mt-2 mb-4">Enter digits without spaces</p>
             <div class="grid grid-cols-2 gap-10">
                <div ><Input type="text" id="cardnumber" labelText="Expiry Date *" placeholder="MM / YY" /></div>
                <div ><Input type="text" id="cardnumber" labelText="CVV *" /></div>
             </div>



            
        </div>
        <div class="">yigit</div>
    </div>



  </div>
</template>

<script>
import FormTitle from "./FormTitle.vue";
import Input from "../Input/index.vue";
export default {
  name: "PaymentDetails",
  components: { FormTitle, Input },
};
</script>

<style></style>
