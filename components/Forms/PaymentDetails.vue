<template>
  <div>
    <i class="fa-solid fa-dollar-sign"></i>
    <FormTitle title="Payment Details" :icon="['fas', 'dollar-sign']" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <Input
          type="text"
          id="cardholder"
          labelText="Card Holder Name *"
          :modelValue="card.holder"
          @update:modelValue="(newValue) => (card.holder = newValue)"
        />
        <p class="text-xs text-coal60 mt-2 mb-4">Full name on card</p>
        <Input
          type="text"
          id="cardnumber"
          labelText="Card Number *"
          pattern="[0-9]{13,16}"
          :modelValue="card.number"
          @update:modelValue="(newValue) => (card.number = newValue)"
        />
        <p class="text-xs text-coal60 mt-2 mb-4">Enter digits without spaces</p>
        <div class="grid grid-cols-2 gap-10">
          <div>
            <Input
              type="text"
              id="cardnumber"
              labelText="Expiry Date *"
              pattern="(0[1-9]|1[012]).[0-9]{2}"
              :modelValue="card.exp"
              @update:modelValue="(newValue) => (card.exp = newValue)"
            />
          </div>
          <div>
            <Input
              type="text"
              id="cardnumber"
              labelText="CVV *"
              pattern="[0-9]{4}" 
              :maxLength="4"
              :modelValue="card.cvv"
              @update:modelValue="(newValue) => (card.cvv = newValue)"
              
            />
          </div>
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
  data() {
    return {
      card: {
        holder: "Card Holder",
        number: "0000 0000 0000 0000",
        exp: "MM / YY",
        cvv: "XXX",
      },
    };
  },
  
};
</script>

<style></style>
