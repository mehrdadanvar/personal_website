<template>
  <div class="sticky top-1 z-10">
    <div class="dark:border-zinc-800 z-30 px-6 py-2 mx-auto overflow-hidden backdrop-blur-sm bg-opacity-40 dark:text-zinc-400">
      <div class="w-1/2 flex">
        <UInput
          class="w-full"
          :ui="{ rounded: 'rounded-md', base: 'px-12' }"
          placeholder="Topics i.e. cardiology, celliac disease ..."
          icon="i-solar-magnifer-bold-duotone"
        />
        <!-- <UIcon name="i-solar-magnifer-bold-duotone" class="text-3xl text-zinc-700 dark:text-zinc-300" /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
</script>

<style scoped></style>
