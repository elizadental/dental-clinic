<script setup lang="ts">
type LocaleCode = 'tr' | 'en'

const { locale } = useI18n()
const localePath = useLocalePath()

const currentLocale = computed<LocaleCode>(() => {
  return locale.value === 'en' ? 'en' : 'tr'
})

const { data: posts } = await useAsyncData(
  () => `blog-posts-${currentLocale.value}`,
  () => {
    return queryCollection('blog')
      .where('contentLocale', '=', currentLocale.value)
      .order('date', 'DESC')
      .all()
  },
  {
    watch: [currentLocale]
  }
)

useSeoMeta({
  title: () =>
    currentLocale.value === 'en'
      ? 'Blog | Eliza Dental Clinic'
      : 'Blog | Eliza Dental Clinic',

  description: () =>
    currentLocale.value === 'en'
      ? 'Dental health articles from Eliza Dental Clinic.'
      : 'Eliza Dental Clinic ağız ve diş sağlığı blog yazıları.'
})
</script>

<template>
  <main class="bg-white">
    <!-- HERO -->
    <!-- HERO -->
<section class="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-100 py-20 md:py-24">
  <div class="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl"></div>
  <div class="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-teal-200/20 blur-3xl"></div>

  <div class="relative mx-auto max-w-7xl px-4 text-center">
    <p class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
      {{ locale === 'en' ? 'Articles' : 'Yazılar' }}
    </p>

    <h1 class="mb-5 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
      {{ locale === 'en' ? 'Blog' : 'Blog' }}
    </h1>

    <p class="mx-auto max-w-2xl text-slate-600 leading-7">
      {{
        locale === 'en'
          ? 'Helpful articles about dental health, treatments, and oral care.'
          : 'Ağız ve diş sağlığı, tedaviler ve bakım önerileri hakkında faydalı yazılar.'
      }}
    </p>
  </div>
</section>

    <!-- POSTS -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4">
       <div class="mb-10">
      <NuxtLink
        :to="localePath('/')"
        class="inline-flex btn-clinic "
      >
        <Icon name="lucide:arrow-left" class="h-4 w-4 shrink-0" />
        <span>{{ locale === 'en' ? 'Back to home' : 'Ana sayfaya dön' }}</span>
      </NuxtLink>
    </div>
        <div
          v-if="posts?.length"
          class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <NuxtLink
            v-for="post in posts"
            :key="post.path"
            :to="localePath(`/blog/${post.slug}`)"
            class="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100/60"
          >
            <div class="h-64 overflow-hidden bg-slate-100">
              <img
                v-if="post.coverImage"
                :src="post.coverImage"
                :alt="post.title"
                class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div
                v-else
                class="flex h-full items-center justify-center text-slate-400"
              >
                Blog Image
              </div>
            </div>

            <div class="p-6">
              <div class="mb-4 flex items-center gap-3 text-xs font-medium text-slate-500">
                <span class="rounded-full bg-sky-50 px-3 py-1 text-sky-600">
                  {{ post.category }}
                </span>

                <span class="inline-flex gap-2"><Icon name="lucide:clock-3" class="h-4 w-4 font-extrabold text-sky-200" />{{ post.readingTime }}</span>
              </div>

              <h2 class="text-xl font-semibold tracking-tight text-slate-900 mb-3 group-hover:text-sky-600 transition">
                {{ post.title }}
              </h2>

              <p class="text-sm text-slate-500 leading-7">
                {{ post.description }}
              </p>

              <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-600">
                {{ locale === 'en' ? 'Read Article' : 'Yazıyı Oku' }}
                <Icon
                  name="lucide:arrow-right"
                  class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </div>
          </NuxtLink>
        </div>

        <div
          v-else
          class="rounded-3xl border border-slate-100 bg-slate-50 p-10 text-center text-slate-500"
        >
          {{ locale === 'en' ? 'No articles yet.' : 'Henüz blog yazısı bulunmuyor.' }}
        </div>
      </div>
    </section>
  </main>
</template>