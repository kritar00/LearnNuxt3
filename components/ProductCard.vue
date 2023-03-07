<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div
      class="product-item flex"
      v-for="item in props?.products"
      :key="item.id"
    >
      <img
        class="object-cover aspect-square w-[120px] h-[120px] flex-shrink-0 flex-grow-0"
        width="120"
        height="120"
        :src="item?.image"
        alt=""
      />
      <div class="ml-4">
        <NuxtLink class="font-bold text-xl" :to="'products/' + item?.id">{{
          item?.name
        }}</NuxtLink>
        <p class="text-ellipsis line-clamp-1">
          {{ item?.description }}
        </p>
        <p>Stock status: {{ item?.stockStatus ? "In Stock" : "Out of stock" }}</p>
        <p>Price: {{ item?.priceField }}</p>
        <button @click="handleAddClick(item?.id, item?.name, item?.priceField)" class="p-2 bg-slate-50 text-black rounded-md" v-if="item?.stockStatus">Add to your cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '~~/stores/useCart.ts';
const checkout = useCart();
const props = defineProps(["products"]);
const handleAddClick = (id, name, price, qty = 1) => {
  checkout.addToCart({id, name, price, qty});
}
</script>
