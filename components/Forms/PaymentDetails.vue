<template>
  <div>
    <FormTitle title="Payment Details" />
    <div class="grid grid-cols-2 gap-10 ">
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
         <div class="relative">
              <div class="absolute h-48	w-72 bg-white	border rounded-xl	p-6 flex flex-col z-20">
                <div class="self-end"><img src="/images/card_chip.png"/></div>
                <div><p class="font-bold	text-xl text-graphene my-4">0000 0000 0000 0000</p></div>
                <div><p class="text-sm	text-grey mt-4 mb-2">Card Holder</p></div>
                <div><p class="font-medium	font-medium">MM / YY</p></div>
              </div>
              <div class="absolute h-48	w-72	border rounded-xl	  flex flex-col top-12	left-20 z-10	">
                <div class="h-10 bg-smoke my-4"> </div>
                <div class="self-end pr-6"> 
                <div><p class="font-bold	text-sm	 text-grey mb2 ">CVV</p></div>
                <div><p class="text-graphene font-bold	">XXX</p></div> 
                </div>
              </div>
          </div>
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
