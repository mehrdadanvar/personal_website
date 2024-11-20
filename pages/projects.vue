<template>
  <section class="describe min-w-[400px]">
    <h1>Mehrdad Anvar Projects</h1>
  </section>
  <section class="projects rounded-xl mx-auto h-screen w-11/12 md:w-10/12 lg:w-3/4 mt-36">
    <!-- <div class="card-holder px-12 py-6 container grid grid-cols-1 md:grid-cols-2 gap-12">
      <div
        class="project mt-24 bg-white border border-gray-300 rounded-2xl transition-all duration-75 hover:scale-[1.01] hover:shadow-lg hover:shadow-gray-500"
        v-for="project in cardList"
        :key="project.identity"
      >
        <div class="inner">
          <div class="left">
            <img :src="`/${images[project.identity]}`" class="rounded-full mx-auto -mt-24 shadow-lg shadow-gray-600" width="200" />
          </div>
          <div class="right">
            <h2 class="text-amber-700 font-bold text-lg py-4 px-3">
              {{ project.title }}
            </h2>
            <p class="text-gray-700 text-lg px-4 my-6">
              {{ project.description }}
            </p>
            <UBadge color="amber" variant="outline" class="ml-6 mb-4"> {{ project.status }}</UBadge>
            <svg></svg>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script setup>
//grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
//sm:max-w-[200px] md:max-w-[250px] lg:max-w-[350px]
// import cardList from "../src/files/projectspage.json";
// console.log(cardList);
// let images = ["gptdecipher.jpeg", "chat.jpeg", "nurse.png", "anatomy2.png"];
</script>

<style scoped>
.projects {
  font-family: "Open Sans";
}
/* .right {
  background-repeat: no-repeat;
  background-size: auto;
} */
</style>
