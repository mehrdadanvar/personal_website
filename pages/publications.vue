<template>
  <UContainer>
    <h1>Peer-Reviewed Publications</h1>
    <section class="backdrop-blur-lg">
      <div v-for="pub in newpubs">
        {{ pub }}
      </div>
    </section>
  </UContainer>
</template>
<script setup>
import pubs from "../assets/files/pubs.json";

let newpubs = pubs.sort((a, b) => {
  return b.id - a.id;
});
</script>
<style scoped></style>
