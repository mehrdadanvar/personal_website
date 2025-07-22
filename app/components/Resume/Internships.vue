<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-3xl text-yellow-700">Internships</h2>
    <div class="grid grid-cols-1 lg:gap-1">
      <div v-for="item in final_internships" :key="item.id" class="sm:flex sm:flex-col sm:pb-6 md:grid md:grid-cols-4 md:pb-12">
        <h4 class="text-gray-800 lg:text-xl col-span-1">
          {{ item.short_dates }}
        </h4>
        <div class="flex flex-col col-span-3">
          <h3 class="text-gray-700 lg:text-xl">
            {{ item.title }}
            <span class="pr-6">({{ item.duration }} weeks)</span>
          </h3>
          <div class="text-gray-500 lg:text-xl">
            <span class=""> {{ item.description }} </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import internships from "../../assets/files/internships.json";

function clean_dates(input_obj) {
  let modified_start = input_obj.start.split("-");
  let modified_end = input_obj.end.split("-");
  let [year_start, month_start] = [modified_start[0], modified_start[1]];
  let [year_end, month_end] = [modified_end[0], modified_end[1]];
  return `${month_start} ${year_start} - ${month_end} ${year_end}`;
}
let final_internships = internships.map((item) => {
  return { ...item, short_dates: clean_dates(item.dates) };
});
console.log(final_internships);
</script>

<style></style>
