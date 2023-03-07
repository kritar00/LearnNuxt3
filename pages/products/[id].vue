<template>
  <div class="py-12 px-5">
    <div v-if="pending">Loading...</div>
    <div v-else class="flex">
      <img
        :src="data?.data?.image"
        class="w-[524px]"
        width="524"
        height="524"
        alt="Product image"
      />
      <div class="ml-5">
        <div class="space-y-8">
          <h3 class="font-bold text-4xl">{{ data?.data?.name }}</h3>
          <p class="text-2xl">Description: {{ data?.data?.description }}</p>
          <p class="text-2xl">Price: {{ data?.data?.priceField }} credits</p>
          <p class="text-2xl">Stock status: {{ data?.data?.stockStatus }}</p>
        </div>
        <div class="mt-5 flex items-center space-x-6">
          <input :disabled="!data?.data?.stockStatus" class="w-11 h-8 text-black rounded-md" type="number" v-model="qty" />
          <button :disabled="!data?.data?.stockStatus" @click="() =>handleAddClick(data?.data?.id, data?.data?.name, data?.data?.priceField, qty)" class="p-1 text-black bg-slate-50 rounded-md">Add to card</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '~~/stores/useCart.ts';
const checkout = useCart();
const { id } = useRoute().params;
const runtimeConfig = useRuntimeConfig();
let qty = ref(1);

const { data, pending } = useAsyncData("getSingleProduct", async () => {
  try {
    const response = await $fetch(`${runtimeConfig.public.productsApi}/${id}`);
    if (response) {
      return {
        data: response,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      data: {},
    };
  }
});

const handleAddClick = (id, name, price, qty) => {
  checkout.addToCart({id, name, price, qty})
  console.log(checkout.cart);
};
</script>

<style scoped></style>
