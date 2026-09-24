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

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Col 1: Bio & Credentials -->
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold text-xs">
            MA
          </div>
          <div>
            <span class="font-bold text-sm text-zinc-900 dark:text-zinc-100 block">Mehrdad Anvar, MD</span>
            <span class="text-[11px] text-zinc-500">Shiraz University of Medical Sciences</span>
          </div>
        </div>
        <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Physician and systems engineer specializing in trauma registry analytics, mortality prediction modeling, and clinical data platforms.
        </p>
        <div class="flex items-center gap-3 pt-1">
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

      <!-- Col 2: Clinical Systems & Software -->
      <div class="space-y-3">
        <h4 class="font-bold text-xs uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
          Clinical Platforms
        </h4>
        <ul class="space-y-2 text-xs">
          <li>
            <NuxtLink to="/projects" class="hover:text-teal-700 dark:hover:text-teal-400 transition-colors flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              HyperQbank &mdash; Licensing Exam Engine
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" class="hover:text-teal-700 dark:hover:text-teal-400 transition-colors flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              HyperRx &mdash; Health Canada DPD Monograph Parser
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" class="hover:text-teal-700 dark:hover:text-teal-400 transition-colors flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              HyperECG &mdash; SVG 12-Lead Simulator
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" class="hover:text-teal-700 dark:hover:text-teal-400 transition-colors flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-teal-600"></span>
              HyperRadiology &mdash; Diagnostic Archive
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Col 3: Research Indices -->
      <div class="space-y-3">
        <h4 class="font-bold text-xs uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
          Research Indices
        </h4>
        <ul class="space-y-2 text-xs">
          <li>
            <NuxtLink to="/research" class="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
              Trauma Mortality Predictors (OR Analysis)
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/research" class="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
              Hospital ISO Certification Impact Study
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/research" class="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
              Time Distribution of Trauma Mortality
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/research" class="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
              PubMed &amp; Embase Indexing Directory
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Col 4: Engineering Stack -->
      <div class="space-y-3">
        <h4 class="font-bold text-xs uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
          Architecture
        </h4>
        <p class="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Engineered with Nuxt 4, Nuxt UI, and Tailwind CSS. Modern academic design system with glassmorphic cards and SVG backgrounds.
        </p>
        <div class="pt-1 flex flex-wrap gap-1">
          <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300">Nuxt 4</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300">Tailwind CSS</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300">TypeScript</span>
        </div>
      </div>
    </div>

    <!-- Bottom copyright -->
    <div class="relative z-10 border-t border-zinc-200/60 dark:border-zinc-800/60 py-4 text-center text-[11px] text-zinc-500">
      &copy; {{ new Date().getFullYear() }} Dr. Mehrdad Anvar, MD &mdash; All Rights Reserved. Professional Academic &amp; Clinical Informatics Site.
    </div>
  </footer>
</template>
