<template>
  <main>
    <section class="py-8">
      <nuxt-content :document="about"></nuxt-content>
      <ul class="skills" v-for="(skills, lang) in about.skills" :key="lang">
        <li class="title">{{ lang }}</li>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const about = await $content("about").fetch();
    const projects = await $content("projects").fetch();
    const contacts = await $content("contacts").fetch();
    const work = await $content("work_history").fetch();
    const education = await $content("education").fetch();

    return { about, projects, contacts, work, education };
  }
};
</script>

<style lang="postcss" scoped>
h1 {
  @apply text-5xl pb-2 font-light;
}
.subtitle {
  @apply text-2xl font-semibold opacity-80;
}

p {
  @apply pb-8 text-lg;
}

ul.skills {
  @apply flex flex-wrap pb-4;
}

ul.skills li {
  @apply px-1 mb-1 mr-2 bg-gray-100 bg-opacity-50;
}
ul.skills li.title {
  @apply font-semibold;
}
</style>
