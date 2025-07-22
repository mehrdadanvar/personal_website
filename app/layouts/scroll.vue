<template>
  <div class="transition-all duration-500 ease-in-out">
    <div class="bg-[url('/sample11.svg')] bg-fixed bg-cover bg-left">
      <NuxtLoadingIndicator />

      <Navbar />
      <slot />
      <Footer />
    </div>
  </div>
</template>
<script setup></script>
<style scoped></style>
