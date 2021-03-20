<template>
  <div>
    <h1 class="text-2xl">{{ project.title }}</h1>
    <img :src="project.image[0].small" :alt="`${project.title}'s image`" />
    <div>
      <a :href="project.link" class="underline">View site </a>
    </div>
    <nuxt-content :document="project"/>    
      <prev-next :prev="prev" :next="next" />
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params, error }) {
    const project = await $content("projects", params.slug)
      .fetch()
      .catch(() => error({ statusCode: 404, message: "Project not found" }));

    const [prev, next] = await $content("projects")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return {
      prev,
      next,
      project,
    };
  },
};
</script>