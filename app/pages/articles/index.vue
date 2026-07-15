<template>
  <UContainer>
    <div class="">
      <h2>Articles</h2>
      <!-- <div>{{ articles }}</div> -->
      <div v-for="item in articles">
        <ContentRenderer :value="item" />
      </div>
    </div>
  </UContainer>
</template>

<script setup>
const { data: articles } = await useAsyncData("articles", () => queryCollection("articles").all());
</script>

<style scoped></style>
