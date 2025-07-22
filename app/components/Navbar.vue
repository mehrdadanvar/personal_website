<template>
  <div class="sticky top-0 z-20 border-b border-muted">
    <nav
      class="flex flex-row items-center justify-between rounded-xl z-30 px-6 mx-auto backdrop-blur-sm bg-opacity-40 w-10/12"
    >
      <div>
        <NuxtLink to="/">Home</NuxtLink>
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
      {
        label: "HyperRx",
        icon: "",
        description: "A Clinical Drug Info API",
        to: "/projects/hyperqbank",
      },
    ],
  },
  {
    label: "About",
    to: "/about",
    icon: "",
    children: [],
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
