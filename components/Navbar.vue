<template>
  <div class="sticky top-1">
    <nav
      class="flex flex-row items-center justify-between rounded-full border dark:border-zinc-800 z-30 w-8/12 px-6 py-2 mx-auto overflow-hidden backdrop-blur-sm bg-opacity-40 dark:text-zinc-400"
    >
      <div>
        <NuxtLink to="/">/</NuxtLink>
      </div>
      <div class="flex gap-10 text-base">
        <NuxtLink to="/resume">resume</NuxtLink>
        <div class="flex gap-2 items-center">
          <!-- <NuxtLink to="/projects">projects</NuxtLink> -->
        </div>
        <div class="flex gap-2 items-center">
          <NuxtLink to="/about">About</NuxtLink>
        </div>
        <div>
          <select v-model="$colorMode.preference">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="sepia">Sepia</option>
          </select>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style scoped></style>
