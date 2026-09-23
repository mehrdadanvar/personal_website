<template>
  <header class="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/85 dark:bg-zinc-950/85 border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Brand & Title -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="relative w-10 h-10 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
          <span class="tracking-tight">MA</span>
          <span class="absolute -top-1 -right-1 flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-teal-600"></span>
          </span>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center gap-1.5">
            <span class="font-bold text-base text-zinc-900 dark:text-zinc-100 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
              Mehrdad Anvar
            </span>
            <span class="px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase bg-teal-500/10 text-teal-800 dark:text-teal-300 border border-teal-500/20">
              MD
            </span>
          </div>
          <span class="text-xs text-zinc-500 dark:text-zinc-400 font-medium hidden sm:inline-block">
            Public Health &amp; Health Informatics
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/80 p-1 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 text-xs font-semibold">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="px-3.5 py-1.5 rounded-xl transition-all duration-200"
          :class="[
            route.path === link.path || (link.path !== '/' && route.path.startsWith(link.path))
              ? 'bg-white dark:bg-zinc-800 text-teal-800 dark:text-teal-300 shadow-xs font-bold'
              : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-white/50 dark:hover:bg-zinc-800/50'
          ]"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Actions (Theme Switcher & Socials) -->
      <div class="flex items-center gap-2">
        <button
          @click="toggleColorMode"
          class="p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-all cursor-pointer"
          :title="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <UIcon
            :name="colorMode.value === 'dark' ? 'i-solar-sun-2-bold-duotone' : 'i-solar-moon-bold-duotone'"
            class="size-5 text-teal-700 dark:text-teal-400"
          />
        </button>

        <a
          href="https://github.com/mehrdadanvar"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden sm:flex p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700 transition-all"
          title="GitHub Profile"
        >
          <UIcon name="i-simple-icons-github" class="size-4" />
        </a>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-xl text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
        >
          <UIcon :name="mobileMenuOpen ? 'i-solar-close-square-bold-duotone' : 'i-solar-hamburger-menu-bold-duotone'" class="size-5" />
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Navigation -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl px-4 pt-3 pb-4 space-y-1 shadow-lg"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        @click="mobileMenuOpen = false"
        class="block px-3 py-2 rounded-xl text-sm font-semibold transition-colors"
        :class="[
          route.path === link.path || (link.path !== '/' && route.path.startsWith(link.path))
            ? 'bg-teal-500/10 text-teal-800 dark:text-teal-300 font-bold'
            : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900'
        ]"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const colorMode = useColorMode();
const mobileMenuOpen = ref(false);

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Medical Systems", path: "/projects" },
  { label: "Research", path: "/research" },
  { label: "Curriculum Vitae", path: "/vita" },
  { label: "Blog", path: "/blog" }
];

function toggleColorMode() {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
}
</script>
