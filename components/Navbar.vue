<template>
  <div class="sticky top-1 z-20">
    <nav
      class="flex flex-row items-center justify-between rounded-xl border border-zinc-300/50 dark:border-zinc-800 z-30 w-9/12 px-6 mx-auto backdrop-blur-sm bg-opacity-40"
    >
      <div>
        <NuxtLink to="/">/</NuxtLink>
      </div>
      <div>
        <UNavigationMenu :items="items" class="w-full justify-center" color="neutral" />
      </div>

      <Modes />
    </nav>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
import type { NavigationMenuItem } from "@nuxt/ui";
let items = ref<NavigationMenuItem[]>([
  {
    label: "About",
    to: "/about",
    icon: "",
    children: [],
  },
  {
    label: "Projects",
    to: "/projects",
    icon: "",
    children: [
      {
        label: "HyperQbank",
        icon: "",
        description: "A modern Medical Exam Preparation Platform",
        to: "/projects/hyperqbank",
      },
    ],
  },

  {
    label: "Blog",
    to: "/blog",
    icon: "",
    children: [],
  },
  {
    label: "Vitae",
    to: "/resume",
    icon: "",
    children: [],
  },
]);
</script>

<style scoped></style>
