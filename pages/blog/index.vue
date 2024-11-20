<template>
  <section>
    <div>welcome</div>

    <ContentList path="/blog" v-slot="{ list }">
      <div class="border border-slate-400 px-p py-6">
        <div v-for="post in list" class="">
          <nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
        </div>
      </div>
      <!-- <div
        v-for="item in list"
        class="border border-slate-500 rounded-lg w-3/4 mx-auto px-6 py-12"
      >
        <h1>{{ item.title }}</h1>
        <p>draft ?{{ item._draft }}</p>
        <p>ext: {{ item._extension }}</p>
        <p>file: {{ item._file }}</p>
        <p>id: {{ item._id }}</p>
        <p>{{ item._locale }}</p>
        <p>{{ item._partial }}</p>
        <p>path {{ item._path }}</p>
        <p>source :{{ item._source }}</p>
        <p>type:{{ item._type }}</p>
        <div class="bg-gray-50">
          <p v-for="child in item.body.children">{{ child }}</p>
        </div>
      </div> -->
    </ContentList>
  </section>
</template>

<script setup></script>

<style scoped></style>
