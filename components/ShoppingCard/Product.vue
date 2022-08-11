<template>
  <div
        class="rounded-md p-2 border border-smoke shadow-sm flex flex-row  items-center"
      >
        <div class="lg:w-1/3  flex justify-center mb-4 lg:mb-0 ">
          <img :src="`${productImage}`" />
        </div>
        <div
          class="w-2/3 text-sm flex flex-col  space-y-6 pl-2"
        >
          <p class="font-medium text-coal">{{productName}}</p>
          <div class="text-graphene flex flex-row items-start  items-center justify-between w-full">
            <div>{{productPrice}}</div>
            <div class="space-x-2 flex items-center">
              <div
                class="border border-smoke rounded bg-smoke30 font-bold cursor-pointer h-6 w-6 text-center"
              >
               <button @click="incrementCounter" > <font-awesome-icon :icon="['fas', 'plus']" /></button>
              </div>
              <div class="text-base">{{count}}</div>
              <div
                class="border border-smoke rounded bg-smoke30 h-6 w-6 text-center font-bold cursor-pointer"
              >
               <button  @click="decrementCounter" :disabled="count === 1"> <font-awesome-icon :icon="['fas', 'minus']" /></button>
              </div>
            </div>
          </div>
        </div>

        
      </div>
</template>

<script>
export default {
    props:['productName','productPrice','productImage'],
 data() {
    return {
      count: 1,
    };
  },
  methods: {
    incrementCounter: function () {
      this.count += 1;
    },
    decrementCounter: function () {
      this.count -= 1;
    },
  },
};
</script>

<style>

</style>