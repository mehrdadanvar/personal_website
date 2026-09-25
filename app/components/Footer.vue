<template>
  <footer class="relative border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/90 dark:bg-zinc-950/90 overflow-hidden mt-20 text-xs text-zinc-600 dark:text-zinc-400">
    <!-- SVG Background Overlay -->
    <ArtBackground
      src="/sample23.svg"
      custom-class="inset-0"
      position-class=""
      fit-class="bg-cover bg-center"
      tone-class="opacity-40 dark:opacity-30 dark:invert"
    />

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center gap-6 text-center">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold text-xs">
          MA
        </div>
        <span class="font-bold text-sm text-zinc-900 dark:text-zinc-100">Mehrdad Anvar, MD, LMCC</span>
      </div>

      <nav class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-semibold">
        <NuxtLink to="/" class="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">About</NuxtLink>
        <NuxtLink to="/research" class="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">Research</NuxtLink>
        <NuxtLink to="/vita" class="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">Curriculum Vitae</NuxtLink>
        <NuxtLink to="/projects" class="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">Projects</NuxtLink>
        <NuxtLink to="/blog" class="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">Blog</NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <a
          href="https://github.com/mehrdadanvar"
          target="_blank"
          rel="noopener noreferrer"
          class="p-1.5 rounded-lg bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
          title="GitHub"
        >
          <UIcon name="i-simple-icons-github" class="size-4" />
        </a>
        <a
          href="https://linkedin.com/in/mehrdadanvar"
          target="_blank"
          rel="noopener noreferrer"
          class="p-1.5 rounded-lg bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
          title="LinkedIn"
        >
          <UIcon name="i-simple-icons-linkedin" class="size-4" />
        </a>
      </div>
    </div>

    <!-- Bottom copyright -->
    <div class="relative z-10 border-t border-zinc-200/60 dark:border-zinc-800/60 py-4 text-center text-[11px] text-zinc-500">
      &copy; {{ new Date().getFullYear() }} Mehrdad Anvar &mdash; All Rights Reserved.
    </div>
  </footer>
</template>
