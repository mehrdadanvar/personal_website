<template>
  <div class="sticky top-1 z-20">
    <nav
      class="flex flex-row items-center justify-between rounded-xl border border-zinc-300/50 dark:border-zinc-800 z-30 w-9/12 px-6 mx-auto overflow-hidden backdrop-blur-sm bg-opacity-40 dark:text-zinc-400"
    >
      <div>
        <NuxtLink to="/">/</NuxtLink>
      </div>
      <div class="flex text-base items-center justify-around w-1/2">
        <NuxtLink to="/blog">Blog</NuxtLink>
        <NuxtLink to="/resume">Vitae</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>

        <!-- <div>
          <select v-model="$colorMode.preference">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="sepia">Sepia</option>
          </select>
        </div> -->
      </div>
      <Modes />
    </nav>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style scoped></style>
