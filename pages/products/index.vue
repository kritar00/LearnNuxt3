<template>
  <div>
    <div v-if="pending">
      <div>Loading...</div>
    </div>
    <ProductCard v-else :products="products" />
  </div>
</template>

<script setup>
const {data: products, pending, error, refresh} = await useAsyncData("products", () => $fetch(`https://63f2d751f28929a9df605107.mockapi.io/nttp/products`)
);
</script>

<style scoped></style>
