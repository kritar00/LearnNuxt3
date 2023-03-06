import { getProductsFromAPI } from '~/composables/functions';
import { useRuntimeConfig } from '#app';
import { defineStore } from 'pinia';
export const useApi = defineStore("api", () => {
    const runtimeConfig = useRuntimeConfig();
    const product = ref({});
    const getProducts = () => {
            getProductsFromAPI().then(res => {
                Object.assign(product.value, res?.data)
            })
    }
    return {
        product, getProducts
    }
})