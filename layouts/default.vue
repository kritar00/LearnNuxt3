<template>
  <div>
    <header :style="{transitionDelay: duration}" :class="reactiveClass" class="transition-transform px-8 sticky top-0 h-16 bg-shark-900 z-10">
      <nav class="flex h-full items-center w-full">
        <ul class="flex space-x-6 float-right">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
          <li><nuxt-link to="/feedbacks">Feedbacks</nuxt-link></li>
          <li><nuxt-link to="/about">About me</nuxt-link></li>
        </ul>
        <NuxtLink to="/cart" class="flex items-center ml-auto"><img width="30" height="30" src="../assets/shopping-cart.svg" class="mr-1 checkout-cart" alt="Cart">To your cart ({{ numberItem }})</NuxtLink>
      </nav>
    </header>
    <div class="layout-box min-h-screen">
      <slot />
    </div>
    <footer class="py-9 px-5 bg-shark-900">
      <div>
        <p>Contact me <a class="underline" href="mailto:example@example.com">by Email</a></p>
        <p>This is my testing page</p>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { useCart } from '~~/stores/useCart.ts';
const cart = useCart();
    let duration = "200ms";
    let offset = 0;
    let lastY = 0;
    function deriveClass(y, dy) {
    if (y < offset || dy < 0) {
      return "hide-navbar";
    }
    return "show-navbar";
    }
    function updateClass(y) {
    const dy = lastY - y;
    lastY = y;
    return deriveClass(y, dy);
    }
    const y = ref(trackScrollY());
    let reactiveClass = ref('');
    watch(y, (current, previous) => {
      reactiveClass.value = updateClass(current);
    })

    const numberItem = computed(() => cart.cartLength)
</script>

<style lang="scss" scoped>
.checkout-cart {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(78deg) brightness(106%) contrast(101%);
}
</style>