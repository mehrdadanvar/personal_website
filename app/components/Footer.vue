<template>
  <footer
    class="dark:bg-linear-to-br dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-700 bg-linear-to-bl from-zinc-50 via-zinc-50 to-zinc-400"
  >
    <section class="mx-auto w-9/12 backdrop-blur-lg">
      <div class="grid grid-cols-4 h-72">
        <div class="col-span-2">
          <h2 class="dark:text-white text-xl pb-3">Mehrdad Anvar</h2>
          <div class="socials pt-6">
            <span v-for="element in socials" class="text-zinc-400 pr-4">
              <NuxtLink :to="element.link" target="_blank">
                <UIcon :name="element.icon_name" class="hover:scale-125 text-xl" />
              </NuxtLink>
            </span>
          </div>
          <div>
            <p class="py-2">
              I have used
              <NuxtLink to="https://nuxtjs.org/" target="_blank">
                <UBadge variant="soft" size="md">Nuxt v4.0</UBadge>
              </NuxtLink>
              and
              <NuxtLink to="https://ui.nuxt.com/">
                <UBadge variant="soft">Nuxt UI v3.2.0</UBadge>
              </NuxtLink>
              to build this website. It is hosted over on Oracle Cloud.
            </p>
          </div>
        </div>
        <div class="col-span-1 flex flex-col gap-6">
          <p
            v-for="element in seconds"
            class="text-zinc-500 dark:text-zinc-400 hover:font-semibold hover:cursor-pointer hover:translate-x-1 transition-all"
          >
            <NuxtLink :to="element.route">{{ element.name }}</NuxtLink>
          </p>
        </div>
        <div class="col-span-1 flex flex-col gap-6">
          <p v-for="element in thirds">
            {{ element }}
          </p>
        </div>
      </div>
      <USeparator class="pb-6" />
      <div class="h-6 flex justify-around p-3 my-1 items-center rounded-full">
        <p class="">Mehrdad Anvar</p>
        <p class="text-sm">Last Update July 2025</p>
        <div>
          <span v-for="element in states" class="hover:cursor-pointer">
            <UIcon
              :name="element.icon_name"
              class="text-xl px-6 text-zinc-500"
              @click="changeColrMode(element.condition)"
            />
          </span>
        </div>
      </div>
      <div class="h-6"></div>
    </section>
  </footer>
</template>
<script setup>
import { USeparator } from "#components";

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
  { name: "Research", route: "/research" },
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
