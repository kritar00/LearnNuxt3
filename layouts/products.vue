<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <slot />
    <footer>
      <p>This just some random footer idk</p>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped></style>
