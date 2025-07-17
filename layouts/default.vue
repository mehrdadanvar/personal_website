<template>
  <div class="dark:bg-zinc-900 bg-zinc-50 center transition-all duration-200 ease-in-out">
    <NuxtLoadingIndicator />
    <Navbar />
    <slot />
    <Footer />
  </div>
</template>
<script setup></script>
<style scoped>
/* .center {
  background-image: url("/sample23.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
} */
</style>
