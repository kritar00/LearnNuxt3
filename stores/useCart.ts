import { defineStore } from 'pinia';

export const useCart = defineStore('cart', () => {
    interface Cart {
        id?: number,
        name?:string,
        price?: number,
        qty?: number
    }
    let cart = ref<Array<Cart>>([]);
    const cartLength = computed(() => cart.value.length)
    const addToCart = (item: object) => {
        cart.value.some(c => c.id == item.id) ?
        cart.value = cart.value.map(c => c.id == item.id ? {...c, qty: c.qty + item.qty} : c) :
        cart.value = [...cart.value, item]
    }
    
    return {
        cart, addToCart, cartLength
    }
})