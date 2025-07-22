<template>
  <UApp>
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
  </UApp>
</template>
<script setup>
const colorMode = useColorMode();
colorMode.preference = "system";
// onMounted(() => {
//   setTimeout(() => {
//     colorMode.preference = "dark";
//   }, 1000);
// });
</script>
<style scoped>
.app {
  font-family: "Source Sans 3", sans-serif;
}
</style>
