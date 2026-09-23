<template>
  <footer class="relative overflow-hidden border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-950/90 text-zinc-600 dark:text-zinc-400 transition-colors">
    <!-- SVG Background Accent Layer -->
    <div
      class="absolute inset-0 pointer-events-none opacity-10 dark:opacity-15 bg-center bg-no-repeat bg-cover"
      style="background-image: url('/sample23.svg');"
    ></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Col 1: Bio & Credentials -->
        <div class="space-y-4">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <UIcon name="i-solar-medical-kit-bold-duotone" class="size-5" />
            </div>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Mehrdad Anvar, MD
            </h3>
          </div>
          <p class="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
            Physician, Population &amp; Public Health Researcher, and Full-Stack Systems Engineer.
            Dedicated to designing open-source medical platforms, trauma registries, and clinical decision support tools.
          </p>
          <div class="flex items-center gap-3 pt-2">
            <a
              v-for="social in socials"
              :key="social.id"
              :href="social.link"
              target="_blank"
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
              :title="social.name"
            >
              <UIcon :name="social.icon" class="size-4" />
            </a>
          </div>
        </div>

        <!-- Col 2: Clinical Projects -->
        <div class="space-y-3">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
            Clinical Systems &amp; Software
          </h4>
          <ul class="space-y-2 text-xs">
            <li>
              <NuxtLink to="/projects/hyperqbank" class="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-colors">
                <UIcon name="i-solar-double-alt-arrow-right-linear" class="size-3 text-emerald-500" />
                <span>HyperQbank — MCCQE1 &amp; USMLE Prep</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects/hyperrx" class="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-colors">
                <UIcon name="i-solar-double-alt-arrow-right-linear" class="size-3 text-emerald-500" />
                <span>HyperRx — Health Canada Drug Monograph API</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects/hyperecg" class="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-colors">
                <UIcon name="i-solar-double-alt-arrow-right-linear" class="size-3 text-emerald-500" />
                <span>HyperECG — Vector Graphics Wave Simulator</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects/hyperradio" class="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-colors">
                <UIcon name="i-solar-double-alt-arrow-right-linear" class="size-3 text-emerald-500" />
                <span>HyperRadiology — Imaging Case Registry</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 3: Research & Literature Databases -->
        <div class="space-y-3">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
            Scholarly Indices &amp; Domains
          </h4>
          <ul class="space-y-2 text-xs">
            <li>
              <NuxtLink to="/research" class="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-colors">
                <UIcon name="i-solar-document-text-bold-duotone" class="size-3.5 text-emerald-500" />
                <span>Trauma Epidemiology &amp; Registries</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/research" class="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-colors">
                <UIcon name="i-solar-chart-2-bold-duotone" class="size-3.5 text-emerald-500" />
                <span>Risk Modeling &amp; Mortality Prediction</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/research" class="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-colors">
                <UIcon name="i-solar-users-group-two-rounded-bold-duotone" class="size-3.5 text-emerald-500" />
                <span>Community &amp; Preventive Medicine</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/vita" class="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1.5 transition-colors">
                <UIcon name="i-solar-diploma-bold-duotone" class="size-3.5 text-emerald-500" />
                <span>PubMed &amp; Embase Index References</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 4: Platform Specs & Tech -->
        <div class="space-y-3">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-200">
            Platform Architecture
          </h4>
          <p class="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
            Built with
            <span class="font-semibold text-zinc-800 dark:text-zinc-200">Nuxt 4</span>,
            <span class="font-semibold text-zinc-800 dark:text-zinc-200">Nuxt UI</span>, and
            <span class="font-semibold text-zinc-800 dark:text-zinc-200">Tailwind CSS</span>. Designed for clinical accessibility and high performance.
          </p>
          <div class="flex items-center gap-2 pt-1">
            <UBadge variant="soft" color="neutral" size="sm" class="text-xs">Nuxt v4</UBadge>
            <UBadge variant="soft" color="success" size="sm" class="text-xs">Open Science</UBadge>
            <UBadge variant="soft" color="info" size="sm" class="text-xs">Medical Tech</UBadge>
          </div>
        </div>
      </div>

      <!-- Separator line -->
      <div class="border-t border-zinc-200/80 dark:border-zinc-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div class="flex items-center gap-2">
          <span>&copy; {{ currentYear }} Mehrdad Anvar, MD</span>
          <span>&mdash;</span>
          <span class="text-zinc-500">Academic &amp; Clinical Informatics Website</span>
        </div>
        <div class="flex items-center gap-4">
          <NuxtLink to="/about" class="hover:text-emerald-600 transition-colors">About</NuxtLink>
          <NuxtLink to="/vita" class="hover:text-emerald-600 transition-colors">Curriculum Vitae</NuxtLink>
          <NuxtLink to="/blog" class="hover:text-emerald-600 transition-colors">Blog</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const socials = [
  {
    id: 0,
    name: "LinkedIn",
    icon: "i-simple-icons-linkedin",
    link: "https://www.linkedin.com/in/mehrdad-anvar/",
  },
  {
    id: 1,
    name: "GitHub",
    icon: "i-simple-icons-github",
    link: "https://github.com/mehrdadanvar",
  },
  {
    id: 2,
    name: "Email",
    icon: "i-solar-letter-bold-duotone",
    link: "mailto:mehrdad.anvar@gmail.com",
  },
];
</script>
