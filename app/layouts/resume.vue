<template>
  <div class="resume min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
    <Navbar />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.resume {
  font-family: "Crimson Text", serif;
}
</style>
