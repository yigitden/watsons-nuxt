<template>
  <div >
    <p class="text-xl font-medium my-9">Shopping cart summary</p>

    <div class="rounded-md p-6 border border-smoke shadow space-y-6">
      <Product
      productName="Herbal Science Boom Butter Hair Care Oil 190ml"
      productPrice="44,95 TL"
      productImage="/images/product.png"
      />
      <Product
      productName="Ashley Joy Strengthening Shampoo 400ml"
      productPrice="29,45 TL"
      productImage="/images/product2.png"
      />
         

      <div class="my-6">
        <Input type="text" id="discount" placeholder="Discount code" />
      </div>
      <div class="space-y-4">
        <div class="flex justify-between">
          <p>Subtotal:</p>
          <p>74,40 TL</p>
        </div>
        <div class="flex justify-between">
          <p>Shipping:</p>
          <p>10.50 TL</p>
        </div>
      </div>

      <div class="flex-grow border-t border-smoke my-4"></div>

      <div class="text-xl text-coal font-bold flex justify-between">
        <p>Total:</p>
        <p>84,90 TL</p>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../Input/index.vue";
import Product from "./Product.vue";
export default { components: { Input, Product } };
</script>

<style></style>
