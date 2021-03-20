<template>
  <ul class="flex space-x-8">
    <li v-for="project in projects" :key="project.slug" class="flex-1">
      <nuxt-link :to="`/projects/${project.slug}`" title="learn more">
        <div
          class="w-100 h-64 rounded-xs overflow-hidden image"
          :style="`background-image: url('${project.image[0].small}'); background-position: top center; background-size:cover`"
        >
          <div class="relative w-100 h-full layover">
            <div class="absolute bottom-0 left-0 py-1 px-2">
              <h3 class="leading-3">
                {{ project.title }}
              </h3>
              <span class="uppercase text-xs leading-3">{{
                project.type
              }}</span>
            </div>
          </div>
        </div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
  async fetch() {
    this.projects = await this.$http
      .$get("/_content/projects")
      .catch((err) => console.error(err));
  },
};
</script>