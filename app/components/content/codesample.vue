<template>
  <div
    class="codesample px-6 py-6 rounded-lg bg-neutral-800 dark:bg-transparent backdrop-blur-sm backdrop-brightness-125 border border-neutral-300 dark:border-neutral-700 max-w-1/2 text-sm"
  >
    <slot />
  </div>
</template>

<script setup></script>

<style scoped>
.codesample {
  font-family: Cascadia Mono;
}
</style>
