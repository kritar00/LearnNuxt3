<template>
  <div>
    <header :style="{transitionDelay: duration}" :class="reactiveClass" class="transition-transform px-8 sticky top-0 h-16 bg-shark-900 z-10">
      <nav class="flex h-full items-center w-full">
        <ul class="flex space-x-6 float-right">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="layout-box">
      <slot />
    </div>
    <footer>Contact</footer>
  </div>
</template>
<script setup>
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
</script>
<style>
.router-link-exact-active {
  
}
.layout-box {
  @apply px-5 sm:px-[30px] xl:max-w-[1192px] xl:px-0 mx-auto pb-10 xs:pb-[60px] xl:pb-20;
}
</style>
