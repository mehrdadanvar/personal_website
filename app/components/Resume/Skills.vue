<template>
  <div>
    <section>
      <h2>Skills</h2>
      <ul>
        <li>Data Analysis</li>
        <p>linear regression</p>
        <p>logisitc regression</p>
        <li>Literature Review</li>
        <li>Research Methodology and Study Design</li>
        <li>Web Design</li>
        <li></li>
      </ul>
      <!-- <div>
        Data analysis: Include any statistical software you are proficient in,
        such as SAS, SPSS, or R, and mention any specific analyses you are
        skilled in, such as regression analysis, survival analysis, or
        meta-analysis. Study design: Mention any experience you have in
        designing studies, including randomized controlled trials, case-control
        studies, or cohort studies. Literature review: Highlight your ability to
        conduct comprehensive literature searches and critically evaluate
        articles for relevance and quality. Writing and communication: Emphasize
        your ability to write scientific reports, grants, and manuscripts, as
        well as your ability to present research findings to a range of
        audiences, including academic researchers, policymakers, and the general
        public. Ethical considerations: Discuss your understanding of ethical
        considerations related to research, including informed consent, privacy,
        and confidentiality. Project management: Include any experience you have
        in project management, such as managing timelines, budgets, and
        personnel. Interdisciplinary collaboration: Highlight your ability to
        work effectively with other researchers and professionals in related
        fields, such as medicine, nursing, or social work.
      </div> -->

      <div
        v-for="skill in raw_skills"
        :key="skill.identity"
        class="border border-rose-100"
      >
        <h2>{{ skill.title }}</h2>
        <h3>{{ skill.description }}</h3>
        <p v-for="child in skill.children" :key="child.id">
          {{ child.name }}
          {{ child.techs }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
let some = ref([1, 2, 3, 4, 5]);
let raw_skills = ref([]);
console.log("hi this is skills");
// async function load_skills() {
//   let response = await fetch("skills.json");
//   let data = await response.text();
//   let content = JSON.parse(data);
//   raw_skills.value = content.skills;
// }
// load_skills();
</script>

<style></style>
