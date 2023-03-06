<template>
  <div class="pt-7">
    <div v-if="!products">
      <div>Loading...</div>
    </div>
    <ProductCard v-else :products="products" />
    <p>{{ data }}</p>
  </div>
</template>

<script setup>
import {useApi} from '~/stores/api'
const productFromApi = useApi();
onMounted(async() => {
  await productFromApi.getProducts();
})
const products = computed(() => productFromApi?.product)

watch(products, val => {
  console.log(val);
})
</script>