<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="product-item" v-for="item in props?.products" :key="item.id">
            <img class="object-cover aspect-[220/290]" :src="item?.image" alt="">
            <h2>{{ item?.name }}</h2>
            <p class="">{{ item?.description }}</p>
            <p>{{ item?.stockStatus ? "In Stock" : "Out of stock"}}</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps(['products']);
</script>

<style scoped>

</style>