<template>
  <div class="relative min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
    <title>Curriculum Vitae — Dr. Mehrdad Anvar, MD</title>

    <!-- SVG Background Overlay with enhanced visibility for light & dark modes -->
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] pointer-events-none opacity-40 dark:opacity-30 bg-top bg-no-repeat bg-contain z-0"
      style="background-image: url('/sample12.svg');"
    ></div>

    <!-- Header Banner -->
    <div class="relative z-10 space-y-3 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-8">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-800 dark:text-teal-300 border border-teal-500/20">
        <UIcon name="i-solar-diploma-bold-duotone" class="size-4 text-teal-600" />
        Academic Curriculum Vitae
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
        Curriculum Vitae &amp; Credentials
      </h1>
      <p class="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed">
        Chronological record of medical education (MD), clinical internship rotations, trauma epidemiology research appointments, and peer-reviewed publications.
      </p>
    </div>

    <!-- Section 1: Education & Qualifications UTimeline -->
    <section class="relative z-10 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xs space-y-6">
      <div class="flex items-center gap-3 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4 text-teal-700 dark:text-teal-400">
        <div class="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
          <UIcon name="i-solar-diploma-bold-duotone" class="size-5" />
        </div>
        <div>
          <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Education &amp; Qualifications</h2>
          <p class="text-xs text-zinc-500">Academic Degrees &amp; Board Examinations</p>
        </div>
      </div>

      <UTimeline :items="educationTimeline" class="px-2">
        <template #default="{ item }">
          <div class="space-y-1 pb-6">
            <span class="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 block">{{ item.date }}</span>
            <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100">{{ item.title }}</h3>
            <p class="text-xs font-medium text-zinc-600 dark:text-zinc-400">{{ item.institution }}</p>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed pt-1">{{ item.description }}</p>
          </div>
        </template>
      </UTimeline>
    </section>

    <!-- Section 2: Research Appointments UTimeline -->
    <section class="relative z-10 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xs space-y-6">
      <div class="flex items-center gap-3 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4 text-teal-700 dark:text-teal-400">
        <div class="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
          <UIcon name="i-solar-notes-bold-duotone" class="size-5" />
        </div>
        <div>
          <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Research Experience &amp; Appointments</h2>
          <p class="text-xs text-zinc-500">Epidemiology Registries &amp; Statistical Modeling</p>
        </div>
      </div>

      <UTimeline :items="researchTimeline" class="px-2">
        <template #default="{ item }">
          <div class="space-y-1.5 pb-6">
            <span class="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 block">{{ item.date }}</span>
            <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100">{{ item.title }}</h3>
            <p class="text-xs font-medium text-zinc-600 dark:text-zinc-400">{{ item.location }}</p>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ item.description }}</p>
            <ul v-if="item.bullets && item.bullets.length" class="space-y-1 pt-1 text-xs text-zinc-600 dark:text-zinc-400">
              <li v-for="(bullet, bIdx) in item.bullets" :key="bIdx" class="flex items-start gap-1.5">
                <UIcon name="i-solar-double-alt-arrow-right-linear" class="size-3 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <span>{{ bullet }}</span>
              </li>
            </ul>
          </div>
        </template>
      </UTimeline>
    </section>

    <!-- Section 3: Clinical Internships UTimeline -->
    <section class="relative z-10 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xs space-y-6">
      <div class="flex items-center gap-3 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4 text-teal-700 dark:text-teal-400">
        <div class="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
          <UIcon name="i-solar-medical-kit-bold-duotone" class="size-5" />
        </div>
        <div>
          <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Clinical Internships (42 Months)</h2>
          <p class="text-xs text-zinc-500">Supervised Inpatient &amp; Outpatient Clerkship Rotations</p>
        </div>
      </div>

      <UTimeline :items="internshipTimeline" class="px-2">
        <template #default="{ item }">
          <div class="space-y-1 pb-5">
            <div class="flex items-center justify-between gap-4">
              <h3 class="text-base font-bold text-zinc-900 dark:text-zinc-100">{{ item.title }}</h3>
              <span class="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                {{ item.duration }}
              </span>
            </div>
            <p class="text-xs font-medium text-teal-700 dark:text-teal-400">{{ item.location }}</p>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{{ item.description }}</p>
          </div>
        </template>
      </UTimeline>
    </section>

    <!-- Section 4: Peer-Reviewed Publications UTimeline -->
    <section class="relative z-10 rounded-3xl p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl shadow-xs space-y-6">
      <div class="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800/80 pb-4">
        <div class="flex items-center gap-3 text-teal-700 dark:text-teal-400">
          <div class="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
            <UIcon name="i-solar-document-text-bold-duotone" class="size-5" />
          </div>
          <div>
            <h2 class="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">Publications</h2>
            <p class="text-xs text-zinc-500">PubMed &amp; Embase Indexed Manuscripts</p>
          </div>
        </div>

        <NuxtLink to="/research" class="text-xs font-semibold text-teal-700 dark:text-teal-400 hover:underline">
          View Full Abstracts &rarr;
        </NuxtLink>
      </div>

      <UTimeline :items="publicationsTimeline" class="px-2">
        <template #default="{ item }">
          <div class="space-y-1.5 pb-6">
            <div class="flex items-center justify-between gap-4">
              <span class="text-xs font-mono font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider">{{ item.journal }} &mdash; {{ item.year }}</span>
              <a v-if="item.link" :href="item.link" target="_blank" class="text-xs text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-1">
                <span>Article Link</span>
                <UIcon name="i-solar-export-bold" class="size-3" />
              </a>
            </div>
            <h3 class="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-snug">{{ item.title }}</h3>
            <p class="text-xs text-zinc-500 leading-relaxed">{{ item.authors }}</p>
          </div>
        </template>
      </UTimeline>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const educationTimeline = [
  {
    date: "September 2007 – December 2015",
    title: "Doctor of Medicine (MD)",
    institution: "Shiraz University of Medical Sciences",
    description: "Completed 8-year intensive medical degree including basic sciences, clinical clerkships, and 42 months of supervised clinical internship."
  },
  {
    date: "September 2021 – June 2023",
    title: "Master of Science in Global Health & Human Services",
    institution: "Fairleigh Dickinson University, Vancouver",
    description: "Specialized in health systems management, epidemiological surveillance, and public health data analysis."
  },
  {
    date: "Licensing Examinations",
    title: "MCCQE1 & USMLE Step Qualifications",
    institution: "Medical Council of Canada & USMLE",
    description: "Demonstrated clinical competency across Canadian and US medical licensing examination frameworks."
  }
];

const researchTimeline = [
  {
    date: "2015 – 2019",
    title: "Research Assistant",
    location: "Shiraz Trauma Center, Shiraz, Iran",
    description: "Analyzed trauma registry administrative databases (>47,000 patient cohort) using multiple logistic regression and survival analysis models.",
    bullets: [
      "Determined independent risk factors for early (<48h) and late (>48h) in-hospital trauma mortality",
      "Mapped ICD-10 diagnosis codes to AIS-98 injury severity codes using computerized algorithms"
    ]
  },
  {
    date: "2016 – 2019",
    title: "Student Consultant",
    location: "Shiraz Bone & Joint Research Center, Shiraz, Iran",
    description: "Refined clinical research questions, structured data collection, and co-authored observational orthopedic studies.",
    bullets: [
      "Evaluated core muscle endurance in sited vs. non-sited health personnel",
      "Analyzed radiographic markers of normal tibiofibular syndesmosis"
    ]
  },
  {
    date: "2018 – 2019",
    title: "Data Analysis Advisor",
    location: "Shiraz Neonatology Research Center",
    description: "Contributed statistical modeling to evaluate risk predictors for catheter-related bloodstream infections in neonatal intensive care units."
  },
  {
    date: "2020 – 2021",
    title: "Community Medicine Assistant Manager",
    location: "Shiraz University of Medical Sciences",
    description: "Assisted in designing electronic survey instruments and statistical analysis for population health endeavors."
  }
];

const internshipTimeline = [
  {
    title: "Thesis & Research Internship",
    duration: "4 Weeks",
    location: "Rajaee Trauma Hospital",
    description: "Regression modeling for identification of factors affecting trauma mortality outcome."
  },
  {
    title: "General Surgery (I & II)",
    duration: "8 Weeks",
    location: "Namazi & Shahid Faghihi Hospital",
    description: "Pre & post-op inpatient care, operating room clerkship, colorectal & urology wards."
  },
  {
    title: "Emergency Medicine",
    duration: "8 Weeks",
    location: "Shahid Faghihi & Namazi Hospital",
    description: "First-line screening, acute toxicology, poisoning & emergency room resuscitation."
  },
  {
    title: "Internal Medicine",
    duration: "4 Weeks",
    location: "Shahid Faghihi Hospital",
    description: "Inpatient general internal medicine & rheumatology ward rounds."
  },
  {
    title: "Pediatrics & Pediatric Emergencies",
    duration: "8 Weeks",
    location: "Namazi Hospital",
    description: "Pediatric ward rounds, pediatric ER, gastroenterology & neurology clerkships."
  },
  {
    title: "Obstetrics & Gynecology",
    duration: "8 Weeks",
    location: "Shahid Faghihi & Hafiz Hospital",
    description: "Labour & delivery, prenatology, obstetrical emergencies & gynecological surgery."
  },
  {
    title: "Community Medicine",
    duration: "4 Weeks",
    location: "Shiraz School of Medicine",
    description: "Epidemiological surveillance, population health assessment & preventive medicine."
  },
  {
    title: "Psychiatry",
    duration: "4 Weeks",
    location: "Avesina Psychiatric Hospital",
    description: "Psychiatric emergency triage, mood disorders & inpatient psychiatric care."
  }
];

const publicationsTimeline = [
  {
    year: 2018,
    journal: "Medicine",
    title: "Injury Patterns among Various Age and Gender Groups of Trauma Patients in Southern Iran",
    authors: "Shahram Bolandparvaz, Mahnaz Yadollahi, Hamid Reza Abbasi, Mehrdad Anvar",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5662297/"
  },
  {
    year: 2017,
    journal: "Medicine",
    title: "Time Distribution of Injury-related in-hospital Mortality in a Trauma Referral Center in Southern Iran (2010–2015)",
    authors: "Hamidreza Abbasi, Shahram Bolandparvaz, Mahnaz Yadollahi, Mehrdad Anvar, Zahra Farahgol",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5457857/"
  },
  {
    year: 2017,
    journal: "Chinese Journal of Traumatology",
    title: "Analysis of Shahid Rajaee Hospital Administrative Data on Injuries Resulting from Car Accidents in Shiraz, Iran: 2011-2014 Data",
    authors: "Mahnaz Yadollahi, Aida Ghiassee, Mehrdad Anvar, Hale Ghaem, Mohammad Farahmand",
    link: "https://www.sciencedirect.com/science/article/pii/S1008127517300123"
  },
  {
    year: 2016,
    journal: "Iranian Red Crescent Medical Journal",
    title: "Logistic Regression Modeling for Evaluation of Factors Affecting Trauma Outcome in a Level I Trauma Center in Shiraz",
    authors: "Mahnaz Yadollahi, Mehrdad Anvar, Haleh Ghaem, Shahram Bolandparvaz, Shahram Paydar, Fateme Izianloo",
    link: "https://www.ircmj.com/article_194557.html"
  },
  {
    year: 2016,
    journal: "Journal of Health Management and Informatics",
    title: "Does Implementation of ISO Standards in Hospitals Improve Patient Satisfaction?",
    authors: "Vahid Keshtkar, Meisam Bazgir, Mehrdad Anvar",
    link: "https://jhmi.sums.ac.ir/article_42681.html"
  },
  {
    year: 2015,
    journal: "Razavi International Journal of Medicine",
    title: "Epidemiologic Study of Trauma Patients Admitted to a Level 1 Trauma Center in Shiraz: One Year Survey",
    authors: "Haleh Ghaem, Shahram Paydar, Mehrdad Anvar, Mahnaz Yadollahi, Parsa Ravanfar",
    link: "https://journal.razavihospital.ir/article_113491.html"
  }
];
</script>
