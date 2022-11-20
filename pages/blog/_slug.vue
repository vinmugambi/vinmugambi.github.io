<script>
import { formatDate } from "@/lib/utils.js";

export default {
  async asyncData({ $content, params }) {
    const page = await $content("blog", params.slug).fetch();
    return { page };
  },
  methods: {
    formatDate,
  },
};
</script>

<template>
  <article>
    <header>
      <h1>{{ page.title }}</h1>
      <p>{{ page.description }}</p>

      <dl>
        <div class="flex space-x-2">
          <dt>Posted on</dt>
          <dd>{{ formatDate(page.updatedAt) }}</dd>
        </div>

        <div class="flex space-x-2 -ml-2">
          <dt class="hidden">tags</dt>
          <dl class="text-sm self-center" v-for="tag in page.tags" :key="tag">
            #{{ tag }}
          </dl>
        </div>
      </dl>
    </header>
    <nuxt-content :document="page" />
  </article>
</template>

<style  scoped>
article {
  @apply lg:max-w-3xl;
}

article p {
  @apply my-6;
}

article header {
  @apply pb-4 border-b;
}

article header h1 {
  @apply mt-8 text-4xl max-w-prose font-bold;
  line-height: 1.2;
}

article :is(h2, h3, h4, h5) {
  @apply font-bold scroll-mt-8 mt-6 mb-2;
}

article h2 {
  @apply text-3xl;
}

article h2 {
  @apply text-2xl;
}

article ul,
ol {
  @apply list-inside pl-4;
}

article ul {
  @apply list-disc;
}
article ol {
  @apply list-decimal;
}

article img,
figure {
  @apply rounded border my-4;
}

article a {
  @apply underline hover:text-blue-500;
}

article pre.line-numbers {
  @apply rounded;
}
</style>

