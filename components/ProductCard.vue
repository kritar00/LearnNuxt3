<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="product-item" v-for="item in props?.products" :key="item.id">
      <div class="flex">
        <img
          class="object-cover aspect-square flex-shrink-0"
          width="120"
          height="120"
          :src="item?.image"
          alt=""
        />
        <a class="font-bold text-xl" :href="'products/' + item?.slug">{{
          item?.name
        }}</a>
      </div>
      <p class="text-ellipsis limit-line two-lines">{{ item?.description }}</p>
      <p>{{ item?.stockStatus ? "In Stock" : "Out of stock" }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["products"]);
</script>
