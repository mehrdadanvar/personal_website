<template>
  <div class="dark:bg-zinc-900 bg-zinc-50 center transition-all duration-200 ease-in-out">
    <div class="">
      <!-- <aside class="border w-3/12">sidebar</aside> -->
      <main>
        <div class="">
          <NuxtLoadingIndicator />
          <slot />
        </div>
      </main>
    </div>
  </div>
  <Footer />
</template>
<script setup></script>
<style scoped></style>
