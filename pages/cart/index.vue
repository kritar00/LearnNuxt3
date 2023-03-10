<template>
    <div class="py-12 px-5">
        <div class="items-center w-full h-28 grid grid-cols-6" v-for="item in cart">
            <input type="checkbox">
            <p>{{ item?.id }}</p>
            <p class="line-clamp-1">{{ item?.name }}</p>
            <input type="number" class="w-11 h-8 text-black" v-model="item.qty">
            <p>Price: ${{ item.qty*item.price }} credits</p>
            <button class=""><img src="~~/assets/remove.svg" class="remove-btn" alt=""></button>
        </div>
        <p>Price to pay: ${{ priceSum }}</p>
        <button>To checkout</button>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useCart } from '~~/stores/useCart';
const checkout = useCart()
const {cart} = storeToRefs(checkout);
const priceSum = computed(() => cart.value.reduce((partial, curr) => partial + (curr.price * curr.qty), 0))
</script>

<style lang="scss" scoped>
.remove-btn {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(78deg) brightness(106%) contrast(101%);
}
</style>