<template>
  <div >
    <p class="text-xl font-medium my-9">Shopping cart summary</p>

    <div class="rounded-md p-6 border border-smoke shadow">
      <div
        class="rounded-md p-2 border border-smoke shadow-sm flex items-center"
      >
        <div class="w-1/3">
          <img src="/images/thumbnail.jpg" />
        </div>
        <div
          class="w-2/3 text-sm flex flex-col  space-y-6 pl-2"
        >
          <p class="font-medium text-coal">Ürün ismi</p>
          <div class="text-graphene flex items-center justify-between w-full">
            <div>29,35 TL</div>
            <div class="space-x-2 flex items-center">
              <div
                class="border border-smoke rounded bg-smoke30 font-bold cursor-pointer h-6 w-6 text-center"
              >
                <font-awesome-icon :icon="['fas', 'plus']" />
              </div>
              <div class="text-base">1</div>
              <div
                class="border border-smoke rounded bg-smoke30 h-6 w-6 text-center font-bold cursor-pointer"
              >
                <font-awesome-icon :icon="['fas', 'minus']" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="my-6">
        <Input type="text" id="discount" placeholder="Discount code" />
      </div>
      <div class="space-y-4">
        <div class="flex justify-between">
          <p>Subtotal:</p>
          <p>90 $</p>
        </div>
        <div class="flex justify-between">
          <p>Shipping:</p>
          <p>90 $</p>
        </div>
      </div>

      <div class="flex-grow border-t border-smoke my-4"></div>

      <div class="text-xl text-coal font-bold flex justify-between">
        <p>Total:</p>
        <p>90 $</p>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../Input/index.vue";
export default { components: { Input } };
</script>

<style></style>
