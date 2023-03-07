<template>
  <div class="pt-7">
    <div v-if="pending">
      <div>Loading...</div>
    </div>
    <ProductCard v-else :products="data?.data" />
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
const {data, pending} = useAsyncData('getProducts', async () => {
    try {
        const response = await $fetch(runtimeConfig.public.productsApi);
        if(response.length) {
            return {
                data: response
            }
        }
    } catch (error) {
        return {
            data: []
        }
    }
})

</script>