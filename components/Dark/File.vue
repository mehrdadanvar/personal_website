<template>
  <div>
    <div class="mx-auto p-[2px] rounded-lg senior backdrop-blur-md">
      <div class="h-full dark:bg-black/50 rounded-lg">
        <div class="p-6 h-full rounded-lg bg-gradient-to-bl dark:from-zinc-500/20 dark:to-zinc-800/30 from-zinc-400/20 to-zinc-50/20">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.senior:dark {
  background: linear-gradient(to bottom right, rgba(114, 114, 114, 0.4), rgb(32, 32, 32, 0.1), black);
}
.senior:light {
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.4), rgb(32, 32, 32, 0.1), rgb(85, 85, 85));
}
</style>
