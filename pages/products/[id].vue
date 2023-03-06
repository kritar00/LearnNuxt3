<template>
  <div>
    <p>Product details for {{ data?.id }}</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});
const { id } = useRoute().params;
</script>

<style scoped></style>
