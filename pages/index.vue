<template>
    <div class="">
        <h1 class="hidden-item grid place-items-center content-center min-h-screen text-5xl font-bold">WELCOME</h1>
        <div class="hidden-item flex flex-col w-full justify-center sm:ml-[30%] space-y-6 min-h-screen">
            <div class="flex space-x-6">
                <img class="bg-shark-900 p-4 rounded-2xl w-48 h-48" width="192" height="192" src="https://api.dicebear.com/5.x/adventurer/svg?seed=PhuNguyen" alt="avatar">
                <p class="my-auto">My name is Phu Nguyen</p>
            </div>
            <div class="flex space-x-6">
                <img class="rounded-2xl w-48 h-48" width="192" height="192" src="https://api.dicebear.com/5.x/icons/svg?seed=program" alt="avatar">
                <p class="my-auto">I am a Front-end developer</p>
            </div>
        </div>
        <div class="hidden-item grid place-items-center content-center min-h-screen">
            <h2>This is my website</h2>
            <p>Check out my Merch at my <NuxtLink class="underline" to="/products">Products page.</NuxtLink></p>
        </div>
    </div>
</template>

<script setup>
onMounted(async() => {
    await nextTick()
    observeAnimation();
})
</script>