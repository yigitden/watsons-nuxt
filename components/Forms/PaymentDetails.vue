<template>
  <div><i class="fa-solid fa-dollar-sign"></i>
    <FormTitle title="Payment Details" :icon="['fas', 'dollar-sign']" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div >
            <Input type="text" id="cardholder" labelText="Card Holder Name *" v-model="card.holder"/>
             <p   class="text-xs	text-coal60 mt-2 mb-4">Full name on card</p>
            <Input type="text" id="cardnumber" labelText="Card Number *" v-model="card.number"/>
             <p   class="text-xs	text-coal60 mt-2 mb-4">Enter digits without spaces</p>
             <div class="grid grid-cols-2 gap-10">
                <div ><Input type="text" id="cardnumber" labelText="Expiry Date *" placeholder="MM / YY" v-model="card.exp"/></div>
                <div ><Input type="text" id="cardnumber" labelText="CVV *" v-model="card.cvv" /></div>
             </div>



            
        </div>
        <div class="row-start-1 lg:row-start-auto mb-56">  
      <CreditCard
      :holder="card.holder"
      :number="card.number"
      :exp="card.exp"
      :cvv="card.cvv"
      />
      </div>
    </div>



  </div>
</template>

<script>
import FormTitle from "./FormTitle.vue";
import Input from "../Input/index.vue";
import CreditCard from "./CreditCard.vue";
 
export default {
  name: "PaymentDetails",
  components: { FormTitle, Input, CreditCard },
  data(){
    
    return{
      
      card:{
        holder: "Card Holder",
        number: "0000 0000 0000 0000",
        exp: "MM / YY",
        cvv: "XXX",
      }
    }
  }
   
        
};

</script>

<style></style>
