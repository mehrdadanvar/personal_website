<template>
  <div>
    <div class="w-[300px] h-[300px] mx-auto p-[1px] rounded-lg father">
      <div class="h-full bg-black rounded-lg">
        <div class="p-6 h-full bg-gradient-to-bl rounded-lg backdrop-brightness-125 from-zinc-500/10 to bg-zinc-800/20">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.father {
  background: linear-gradient(to bottom right, rgba(114, 114, 114, 0.555), rgb(32, 32, 32), black);
  /* background-size: 10%; */
}
</style>
