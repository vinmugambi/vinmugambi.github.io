<template>
  <main class="pt-8">
    <section class="px-8">
      <nuxt-content :document="about"></nuxt-content>
      <ul class="skills" v-for="(skills, lang) in about.skills" :key="lang">
        <li class="title">{{ lang }}</li>
        <li v-for="skill in skills" :key="skill">{{ skill }}</li>
      </ul>
    </section>
    <div class="px-8 pt-8 bg-gray-100">
      <section id="work">
        <h2>Where I have worked</h2>
        <ul class="work" v-for="job in work" :key="job.title">
          <li class="title">
            <div>
              <strong class="inline-block pr-2">{{ job.title }}</strong>
              <i class="text-base"
                >{{ job.startDate }} &mdash; {{ job.endDate }}</i
              >
            </div>
            <div class="opacity-90">
              <span class=" ">{{ job.org }}</span>
              <i>{{ job.address }}</i>
            </div>

            <!-- <pre>{{job}}</pre> -->
          </li>
          <li v-for="(duty, index) in job.duties" :key="`${index}-${job.slug}`">
            {{ duty }}
          </li>
        </ul>
      </section>
      <section id="projects">
        <h2>Things I have built</h2>
        <ul>
          <li class="project" v-for="project in projects" :key="project.slug">
            <div class="project-image">
              <img
                :src="project.screenshot"
                alt=""
                class="object-cover w-full"
              />
            </div>
            <div class="project-details">
              <h3>{{ project.title }}</h3>
              <div class="project-description">
                <p>{{ project.description }}</p>
                <span>{{ project.date }}</span>
                <a :href="project.link">View project</a>
                <span>{{ project.type }}</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section id="education">
        <h2>My education history</h2>
        <ul class="work">
          <li v-for="level in education" :key="level.from" class="title">
            <div>
              <strong class="inline-block pr-2">{{ level.course }}</strong>
              <i class="text-base"
                >{{ level.startDate }} &mdash; {{ level.endDate }}</i
              >
            </div>
            <div class="opacity-90">
              <span class=" ">{{ level.org }}</span>
              <i>{{ level.address }}</i>
            </div>
          </li>
        </ul>
      </section>
    </div>
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
section {
  @apply pb-8;
}
section h2 {
  @apply text-4xl pb-6;
}
section h3 {
  @apply text-2xl;
}
.subtitle {
  @apply text-2xl font-semibold opacity-80;
}

p {
  @apply pt-4 pb-2 text-lg max-w-prose;
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
ul.work {
  @apply list-inside pb-4 text-lg;
}
ul.work li.title {
  @apply pb-2;
}
ul.work li:not(.title) {
  @apply list-circle;
}
li.project {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 1rem;
}
</style>
