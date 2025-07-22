<template>
  <main class="">
    <div><Navbar /></div>
    <div class="flex justify-center items-center sticky top-1 z-10">
      <div class="w-[500px] h-[50px] bg-linear-to-l from-orange-400/50 to-black rounded-full blur-xl -rotate-[15deg]"></div>
      <div class="w-[300px] h-[300px] bg-orange-600/50 rounded-full blur-2xl z-50"></div>
      <div class="w-[500px] h-[50px] bg-linear-to-r from-orange-600 to-black rounded-full blur-2xl rotate-[15deg]"></div>
    </div>
    <div class="mx-auto w-3/4">
      <section class="grid grid-cols-4 gap-6">
        <article v-for="item in department_categories" class="z-20">
          <DarkFile class="">
            <h2 class="py-4 font-semibold text-white">{{ item.name }}</h2>

            <p class="text-zinc-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam tempore animi atque consequuntur et officia vel ipsum optio, amet
              ullam!
            </p>
          </DarkFile>
        </article>
        <div><DarkFile /></div>
      </section>
    </div>
  </main>
</template>
<script setup>
let department_categories = [
  {
    id: 1,
    name: "Cardiology",
    db_names: "cardiology",
    route: "cardiology",
    icon: "i-healthicons-heart-cardiogram",
  },
  {
    id: 2,
    name: "Dermatology",
    db_names: "DERMA",
    route: "dermatology",
    icon: "i-medical-icon-dermatology",
  },
  {
    id: 3,
    name: "Emergency Medicine",
    db_names: "EMERGENCY",
    route: "emergency",
    icon: "i-healthicons-accident-and-emergency",
  },
  {
    id: 4,
    name: "Endocrinology",
    db_names: "ENDO",
    route: "endocrine",
    icon: "i-healthicons-endocrinology",
  },
  {
    id: 5,
    name: "ENT",
    db_names: "ENT",
    route: "otolarynx",
    icon: "i-healthicons-nose",
  },
  {
    id: 6,
    name: "Ethics",
    db_names: "ETHICS",
    route: "ethics",
    icon: "i-medical-icon-i-mental-health",
  },
  {
    id: 7,
    name: "Gastroenterology",
    db_names: "GI",
    route: "gastroenterology",
    icon: "i-healthicons-gastroenterology",
  },
  {
    id: 8,
    name: "Hematology",
    db_names: "HEMATO",
    route: "hematology",
    icon: "i-healthicons-blood-cells",
  },
  {
    id: 9,
    name: "Infectious Diseases",
    db_names: "INFECT",
    route: "infectious",
    icon: "i-healthicons-bacteria",
  },
  {
    id: 10,
    name: "Nephrology",
    db_names: "NEPHRO",
    route: "nephrology",
    icon: "i-healthicons-nephrology",
  },
  {
    id: 11,
    name: "Neurology",
    db_names: "NEURO",
    route: "neurology",
    icon: "i-healthicons-neurology",
  },
  {
    id: 12,
    name: "Obstetrics & Gynecology",
    db_names: "obgyn",
    route: "gynecology",
    icon: "i-healthicons-gynecology",
  },
  {
    id: 13,
    name: "Ophthalmology",
    db_names: "OPHTH",
    route: "ophthalmology",
    icon: "i-healthicons-eye",
  },
  {
    id: 14,
    name: "Orthopedics",
    db_names: "ORTHO",
    route: "orthopedics",
    icon: "i-healthicons-orthopaedics",
  },
  {
    id: 15,
    name: "Pediatrics",
    db_names: "PEDS",
    route: "pediatrics",
    icon: "i-healthicons-pediatrics",
  },
  {
    id: 16,
    name: "Psychiatry",
    db_names: "PSYCH",
    route: "psychiatry",
    icon: "i-healthicons-psychology",
  },
  {
    id: 17,
    name: "Pulmonology",
    db_names: "RESP",
    route: "respirology",
    icon: "i-healthicons-respirology",
  },
  {
    id: 18,
    name: "Rheumatology",
    db_names: "RHEU",
    route: "rheumatology",
    icon: "i-healthicons-rheumatology",
  },
  {
    id: 19,
    name: "Surgery",
    db_names: "SURG",
    route: "surgery",
    icon: "i-healthicons-general-surgery",
  },
  {
    id: 20,
    name: "Urology",
    db_names: "URO",
    route: "urology",
    icon: "i-healthicons-urology",
  },
];
</script>
<style scoped></style>
