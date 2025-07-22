<template>
  <div class="dark:bg-zinc-900 bg-zinc-100 center transition-all duration-200 ease-in-out">
    <NuxtLoadingIndicator />
    <Navbar />

    <slot />
    <Footer />
  </div>
</template>
<script setup></script>
<style scoped></style>
