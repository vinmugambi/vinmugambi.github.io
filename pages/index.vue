<script>
import { formatDate } from "@/lib/utils";

export default {
  async asyncData({ $content }) {
    const articles = await $content("blog")
      // .only(["title", "slug", "updatedAt", "tagline", "readingTime"])
      .sortBy("createdAt", "desc")
      .fetch();

    return { articles };
  },
  methods: {
    formatDate: formatDate,
  },
};
</script>

<template>
  <div>
    <aside class="flex space-x-4 my-24">
      <div>
        <img
          class="w-20 rounded-full bg-gray-50"
          src="/avatar.jpg"
          alt="Avatar of Vincent Mugambi"
        />
      </div>
      <dl class="self-center">
        <dt>
          Personal blog by
          <nuxt-link class="link" to="/about">Vincent Mugambi</nuxt-link>
        </dt>
        <dd>Here, I share things I learn during work and play</dd>
      </dl>
    </aside>

    <main>
      <ul class="mt-8 space-y-8 max-w-prose">
        <li
          class="hover:bg-gray-100 rounded-xl cursor-pointer p-4 -m-4"
          v-for="article of articles"
          :key="article.slug"
        >
          <nuxt-link class="hover:text-gray-800" :to="`blog/${article.slug}`">
            <h3 class="font-bold text-2xl tracking-tight mb-2">
              {{ article.title }}
            </h3>
            <dl class="text-sm flex space-x-2 -ml-2">
              <template v-if="article.draft">
                <dt class="hidden">isDraft</dt>
                <dd class="bg-red-100 px-1 py-0.5 text-xs inline-block">
                  DRAFT
                </dd>
              </template>
              <template v-else>
                <dt class="hidden">Posted on</dt>
                <dd class="uppercase tracking-wide">
                  {{ formatDate(article.updatedAt) }}
                </dd>
              </template>
              <dt class="hidden">Reading time</dt>
              <dd>{{ article.readingTime }}</dd>
            </dl>
            <p>{{ article.tagline }}</p>
          </nuxt-link>
        </li>
      </ul>
    </main>
  </div>
</template>
