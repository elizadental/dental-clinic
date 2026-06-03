<script setup lang="ts">
type LocaleCode = 'tr' | 'en'

const { locale } = useI18n()
const localePath = useLocalePath()

const currentLocale = computed<LocaleCode>(() => {
  return locale.value === 'en' ? 'en' : 'tr'
})

const { data: posts } = await useAsyncData(
  () => `home-blog-posts-${currentLocale.value}`,
  () => {
    return queryCollection('blog')
      .where('contentLocale', '=', currentLocale.value)
      .order('date', 'DESC')
      .limit(3)
      .all()
  },
  {
    watch: [currentLocale],
    default: () => []
  }
)
</script>

<template>
  <section id="blog" class="bg-gradient-to-b from-white to-sky-50/60 py-24">
    <div class="mx-auto max-w-7xl px-4">
      <!-- Title -->
      <div class="mb-16 text-center">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
          {{ $t('home.blog.eyebrow') }}
        </p>

        <h2 class="mb-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {{ $t('home.blog.title') }}
        </h2>

        <p class="mx-auto max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          {{ $t('home.blog.subtitle') }}
        </p>
      </div>

      <!-- Blog Cards -->
      <div
        v-if="posts.length"
        class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <NuxtLink
          v-for="post in posts"
          :key="post.path"
          :to="localePath(`/blog/${post.slug}`)"
          class="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100/70"
        >
          <!-- Image -->
          <div class="h-64 overflow-hidden bg-slate-100">
            <img
              v-if="post.coverImage"
              :src="post.coverImage"
              :alt="post.title"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            >

            <div
              v-else
              class="flex h-full items-center justify-center text-sm text-slate-400"
            >
              {{ $t('home.blog.imageFallback') }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
              <span
                v-if="post.category"
                class="rounded-full bg-sky-50 px-3 py-1.5 font-semibold text-sky-600"
              >
                {{ post.category }}
              </span>

              <span
                v-if="post.readingTime"
                class="inline-flex items-center gap-1.5"
              >
                <Icon name="lucide:clock-3" class="h-4 w-4 text-sky-400" />
                {{ post.readingTime }}
              </span>
            </div>

            <h3 class="mb-3 text-xl font-semibold leading-snug tracking-tight text-slate-900 transition group-hover:text-sky-600">
              {{ post.title }}
            </h3>

            <p class="line-clamp-3 text-sm leading-7 text-slate-500">
              {{ post.description }}
            </p>

            <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-600">
              {{ $t('home.blog.readArticle') }}
              <Icon
                name="lucide:arrow-right"
                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- Empty State -->
      <div
        v-else
        class="rounded-3xl border border-slate-100 bg-white p-10 text-center text-slate-500 shadow-sm"
      >
        {{ $t('home.blog.empty') }}
      </div>

      <!-- Blog Button -->
      <div class="mt-12 text-center">
        <NuxtLink
          :to="localePath('/blog')"
          class="btn-clinic"
        >
          <span>{{ $t('home.blog.viewAll') }}</span>
          <Icon name="lucide:arrow-right" class="h-4 w-4" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>