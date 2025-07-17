<template>
  <section
    class="grid grid-cols-1 gap-2 p-6 lg:grid lg:grid-cols-1 lg:items-center lg:h-screen bg-linear-to-br from-white via-white to-slate-300"
  >
    <h1 class="text-gray-700 sm: text-xl lg:text-3xl">Mehrdad Anvar</h1>
    <div class="text-gray-500 text-sm lg:text-2xl">
      <h4>Physician, Health Researcher</h4>
      <h4>Full Stack Web Developer</h4>
    </div>

    <p class="text-md lg:text-xl text-gray-500">
      I build application that facilitate care, teach programming and
      statistics.
    </p>
    <address
      class="flex container mx-auto gap-2 md:gap-4 transition-all duration-75 ease-linear lg:flex-wrap lg:gap-10 lg:justify-center"
    >
      <div
        v-for="item in socials"
        :key="item.id"
        class="sm:text-md lg:text-2xl text-gray-500 transition-all ease-linear duration-75 hover:text-cyan-600 hover:scale-110"
      >
        <a
          :href="item.link.includes('https') ? item.link : `${item.link}`"
          target="_blank"
        >
          <UIcon :name="item.icon_name" />
        </a>
      </div>
    </address>
  </section>
</template>

<script setup>
let side_props = defineProps({
  name: String,
  title: String,
});
console.log(side_props);
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
  { id: 4, icon_name: "i-carbon-phone", link: "tel:+12368665644" },
];
</script>

<style scoped></style>
