<template>
  <div class="min-h-screen flex flex-col justify-between bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-200 relative overflow-x-hidden">
    <NuxtLoadingIndicator color="#10b981" />
    <Navbar />
    <main class="grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>
