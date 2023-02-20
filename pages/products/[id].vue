<template>
  <div>
    <p>Product details for {{ product?.id }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
const { id } = useRoute().params;
const uri = "https://63f2d751f28929a9df605107.mockapi.io/nttp/products/" + id;
const {data:product} = await useFetch(uri);
</script>

<style scoped></style>
