<template>
  <NuxtLayout>
    <main class="app">
      <NuxtPage />
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="sepia">Sepia</option>
      </select>
    </main>
  </NuxtLayout>
</template>
<script setup>
const colorMode = useColorMode();
console.log(colorMode);
colorMode.preference = "system";
onMounted(() => {
  setTimeout(() => {
    colorMode.preference = "dark";
  }, 1000);
});
</script>
<style scoped>
.app {
  font-family: "Roboto";
}
/* body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
} */
</style>
