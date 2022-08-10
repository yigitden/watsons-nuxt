<template>
         <div class="relative">
              <div class="absolute h-48	w-72 bg-white	border rounded-xl	p-6 flex flex-col z-20">
                <div class="self-end"><img src="/images/card_chip.png"/></div>
                <div><p class="font-bold	text-xl text-graphene my-4">{{number}}</p></div>
                <div><p class="text-sm	text-grey mt-4 mb-2">{{holder}}</p></div>
                <div><p class="font-medium	font-medium">{{exp}}</p></div>
              </div>
              <div class="absolute h-48	w-72	border rounded-xl	  flex flex-col top-12	left-20 z-10	">
                <div class="h-10 bg-smoke my-4"> </div>
                <div class="self-end pr-6"> 
                <div><p class="font-bold	text-sm	 text-grey mb2 ">CVV</p></div>
                <div><p class="text-graphene font-bold	">{{cvv}}</p></div> 
                </div>
              </div>
          </div>
</template>

<script>
export default {
    name:'CreditCard',
    props:['holder','number','exp','cvv']
}
</script>

<style>

</style>