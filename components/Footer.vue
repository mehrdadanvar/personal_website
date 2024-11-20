<template>
  <section class="mx-auto w-9/12 backdrop-blur-lg">
    <div class="grid grid-cols-4 h-72">
      <div class="col-span-2">
        <h2 class="dark:text-white text-xl pb-3">Mehrdad Anvar</h2>
        <div class="socials pt-6">
          <span v-for="element in socials" class="text-zinc-400 pr-4">
            <UIcon :name="element.icon_name" class="hover:scale-125 text-xl" />
          </span>
        </div>
      </div>
      <div class="col-span-1 flex flex-col gap-6">
        <p
          v-for="element in seconds"
          class="text-zinc-500 dark:text-zinc-400 hover:font-semibold hover:cursor-pointer hover:translate-x-1 transition-all"
        >
          <nuxt-link :to="element.route">{{ element.name }}</nuxt-link>
        </p>
      </div>
      <div class="col-span-1 flex flex-col gap-6">
        <p v-for="element in thirds">
          {{ element }}
        </p>
      </div>
    </div>
    <UDivider />
    <div class="h-6 flex justify-around p-3 my-6 items-center rounded-full">
      <p class="">Mehrdad Anvar</p>
      <p class="text-sm">Last Update November 2024</p>
      <div>
        <span v-for="element in states" class="hover:cursor-pointer">
          <UIcon :name="element.icon_name" class="text-xl px-6 text-zinc-500" @click="changeColrMode(element.condition)" />
        </span>
      </div>
    </div>
  </section>
</template>
<script setup>
let socials = [
  {
    id: 0,
    icon_name: "i-simple-icons-linkedin",
    link: "https://www.linkedin.com/in/mehrdad-anvar/",
  },
  {
    id: 1,
    icon_name: "i-simple-icons-github",
    link: "https://github.com/mehrdadanvar",
  },
  {
    id: 2,
    icon_name: "i-simple-icons-gmail",
    link: "mailto:mehrdad.anvar@gamil.com",
  },
  { id: 3, icon_name: "i-simple-icons-gitlab", link: "" },
  { id: 4, icon_name: "i-simple-icons-x", link: "" },
];
let seconds = [
  { name: "Blog", route: "/blog" },
  { name: "Projects", route: "/projects" },
  { name: "Resume", route: "/resume" },
  { name: "Publications", route: "/publications" },
  "Blog",
  "Projects",
  "Resume",
  "Publications",
];
let thirds = ["Interest", "Programming", "Statistics", "Consulting"];

let states = [
  {
    id: 0,
    icon_name: "i-solar-laptop-bold-duotone",
    condition: "system",
  },
  {
    id: 1,
    icon_name: "i-solar-sun-2-bold-duotone",
    condition: "light",
  },
  {
    id: 3,
    icon_name: "i-solar-moon-stars-bold",
    condition: "dark",
  },
];
const colorMode = useColorMode();
async function changeColrMode(input) {
  colorMode.preference = input;
}
</script>
<style scoped></style>
