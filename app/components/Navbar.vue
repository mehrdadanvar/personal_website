<template>
  <header
    class="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 dark:bg-zinc-950/85 border-b border-zinc-200/80 dark:border-zinc-800/80 transition-all duration-200"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Brand Logo / Name -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div
            class="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-105 transition-all duration-200 shadow-xs"
          >
            <UIcon name="i-solar-medical-kit-bold-duotone" class="size-6" />
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-zinc-900 dark:text-zinc-100 tracking-tight text-base sm:text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Mehrdad Anvar, MD
            </span>
            <span class="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              Public Health &amp; Health Informatics
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation Menu -->
        <nav class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150"
            :class="[
              route.path === item.to || (item.to !== '/' && route.path.startsWith(item.to))
                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20'
                : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
            ]"
          >
            <div class="flex items-center gap-1.5">
              <UIcon :name="item.icon" class="size-4" />
              <span>{{ item.label }}</span>
            </div>
          </NuxtLink>
        </nav>

        <!-- Actions: Quick Links & Theme Toggle -->
        <div class="flex items-center gap-2">
          <!-- Direct Academic / Social Icons -->
          <div class="hidden sm:flex items-center gap-1 pr-2 border-r border-zinc-200 dark:border-zinc-800">
            <NuxtLink
              to="https://github.com/mehrdadanvar"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
              title="GitHub Profile"
            >
              <UIcon name="i-simple-icons-github" class="size-4" />
            </NuxtLink>
            <NuxtLink
              to="https://www.linkedin.com/in/mehrdad-anvar/"
              target="_blank"
              rel="noopener noreferrer"
              class="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors"
              title="LinkedIn Profile"
            >
              <UIcon name="i-simple-icons-linkedin" class="size-4" />
            </NuxtLink>
          </div>

          <!-- Dark / Light Theme Button -->
          <button
            @click="toggleColorMode"
            class="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 cursor-pointer"
            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          >
            <UIcon :name="isDark ? 'i-solar-sun-2-bold-duotone' : 'i-solar-moon-stars-bold-duotone'" class="size-5" />
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-all"
            aria-label="Toggle mobile menu"
          >
            <UIcon :name="mobileMenuOpen ? 'i-solar-close-square-bold' : 'i-solar-hamburger-menu-bold'" class="size-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Dropdown Navigation -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl px-4 py-3 space-y-1 shadow-lg"
    >
      <NuxtLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        @click="mobileMenuOpen = false"
        class="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
        :class="[
          route.path === item.to || (item.to !== '/' && route.path.startsWith(item.to))
            ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20'
            : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
        ]"
      >
        <UIcon :name="item.icon" class="size-5" />
        <span>{{ item.label }}</span>
      </NuxtLink>

      <div class="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-3 px-3 py-2">
        <a
          href="https://github.com/mehrdadanvar"
          target="_blank"
          class="text-xs flex items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-emerald-600"
        >
          <UIcon name="i-simple-icons-github" class="size-4" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/mehrdad-anvar/"
          target="_blank"
          class="text-xs flex items-center gap-1 text-zinc-500 dark:text-zinc-400 hover:text-emerald-600"
        >
          <UIcon name="i-simple-icons-linkedin" class="size-4" /> LinkedIn
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const colorMode = useColorMode();

const mobileMenuOpen = ref(false);

const isDark = computed(() => colorMode.value === 'dark');

function toggleColorMode() {
  colorMode.preference = isDark.value ? 'light' : 'dark';
}

const navItems = [
  { label: "Home", to: "/", icon: "i-solar-home-2-bold-duotone" },
  { label: "About", to: "/about", icon: "i-solar-user-id-bold-duotone" },
  { label: "Projects", to: "/projects", icon: "i-solar-widget-5-bold-duotone" },
  { label: "Academic Research", to: "/research", icon: "i-solar-document-text-bold-duotone" },
  { label: "Vitae", to: "/vita", icon: "i-solar-diploma-bold-duotone" },
  { label: "Blog", to: "/blog", icon: "i-solar-notebook-bold-duotone" }
];
</script>
