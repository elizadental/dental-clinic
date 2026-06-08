<script setup lang="ts">
type LocaleCode = 'tr' | 'en'

const { locale } = useI18n()
const localePath = useLocalePath()

const currentLocale = computed<LocaleCode>(() => {
  return locale.value === 'en' ? 'en' : 'tr'
})

const asyncDataKey = computed(() => {
  return `home-blog-posts-${currentLocale.value}`
})

const isClientRefreshing = ref(false)

const {
  data: posts,
  status,
  error,
  refresh
} = await useAsyncData(
  asyncDataKey,
  () => {
    return queryCollection('blog')
      .where('contentLocale', '=', currentLocale.value)
      .order('date', 'DESC')
      .limit(3)
      .all()
  },
  {
    server: true,
    lazy: false,
    default: () => []
  }
)

const isLoading = computed(() => {
  return status.value === 'pending' || isClientRefreshing.value
})

async function refreshPosts() {
  isClientRefreshing.value = true

  try {
    await refresh()
  } finally {
    isClientRefreshing.value = false
  }
}

onMounted(async () => {
  /*
   * If the initial server response contains no articles,
   * request the content again after client hydration.
   */
  if (!posts.value.length) {
    await refreshPosts()
  }
})
</script>

<template>
  <section
    id="blog"
    class="bg-gradient-to-b from-white to-sky-50/60 py-24"
  >
    <div class="mx-auto max-w-7xl px-4">
      <!-- SECTION TITLE -->
      <div class="mb-16 text-center">
        <p
          class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600"
        >
          {{ $t('home.blog.eyebrow') }}
        </p>

        <h2
          class="mb-5 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
        >
          {{ $t('home.blog.title') }}
        </h2>

        <p
          class="mx-auto max-w-2xl text-sm leading-7 text-slate-600 md:text-base"
        >
          {{ $t('home.blog.subtitle') }}
        </p>
      </div>

      <!-- LOADING STATE -->
      <div
        v-if="isLoading"
        class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <article
          v-for="item in 3"
          :key="item"
          class="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm"
        >
          <div class="h-64 animate-pulse bg-slate-100" />

          <div class="space-y-4 p-6">
            <div
              class="h-6 w-28 animate-pulse rounded-full bg-slate-100"
            />

            <div
              class="h-7 w-4/5 animate-pulse rounded-lg bg-slate-100"
            />

            <div class="space-y-2">
              <div
                class="h-4 w-full animate-pulse rounded bg-slate-100"
              />

              <div
                class="h-4 w-full animate-pulse rounded bg-slate-100"
              />

              <div
                class="h-4 w-2/3 animate-pulse rounded bg-slate-100"
              />
            </div>

            <div
              class="h-5 w-32 animate-pulse rounded bg-slate-100"
            />
          </div>
        </article>
      </div>

      <!-- ERROR STATE -->
      <div
        v-else-if="error"
        class="rounded-3xl border border-red-100 bg-red-50/60 p-10 text-center"
      >
        <div
          class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm"
        >
          <Icon
            name="lucide:triangle-alert"
            class="h-5 w-5 text-red-500"
          />
        </div>

        <p class="font-medium text-slate-700">
          {{
            locale === 'en'
              ? 'Articles could not be loaded.'
              : 'Blog yazıları yüklenemedi.'
          }}
        </p>

        <button
          type="button"
          class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-700"
          @click="refreshPosts"
        >
          <Icon
            name="lucide:refresh-cw"
            class="h-4 w-4"
          />

          {{ locale === 'en' ? 'Try Again' : 'Tekrar Dene' }}
        </button>
      </div>

      <!-- BLOG CARDS -->
      <div
        v-else-if="posts.length"
        class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <NuxtLink
          v-for="post in posts"
          :key="post.path"
          :to="localePath(`/blog/${post.slug}`)"
          class="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100/70"
        >
          <!-- IMAGE -->
          <div class="h-64 shrink-0 overflow-hidden bg-slate-100">
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

          <!-- CONTENT -->
          <div class="flex flex-1 flex-col p-6">
            <div
              class="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500"
            >
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
                <Icon
                  name="lucide:clock-3"
                  class="h-4 w-4 text-sky-400"
                />

                {{ post.readingTime }}
              </span>
            </div>

            <h3
              class="mb-3 text-xl font-semibold leading-snug tracking-tight text-slate-900 transition group-hover:text-sky-600"
            >
              {{ post.title }}
            </h3>

            <p
              class="line-clamp-3 text-sm leading-7 text-slate-500"
            >
              {{ post.description }}
            </p>

            <span
              class="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-sky-600"
            >
              {{ $t('home.blog.readArticle') }}

              <Icon
                name="lucide:arrow-right"
                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </div>
        </NuxtLink>
      </div>

      <!-- REAL EMPTY STATE -->
      <div
        v-else
        class="rounded-3xl border border-slate-100 bg-white p-10 text-center text-slate-500 shadow-sm"
      >
        <div
          class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-50"
        >
          <Icon
            name="lucide:newspaper"
            class="h-5 w-5 text-sky-500"
          />
        </div>

        {{ $t('home.blog.empty') }}
      </div>

      <!-- VIEW ALL BLOG POSTS -->
      <div class="mt-12 text-center">
        <NuxtLink
          :to="localePath('/blog')"
          class="btn-clinic"
        >
          <span>{{ $t('home.blog.viewAll') }}</span>

          <Icon
            name="lucide:arrow-right"
            class="h-4 w-4"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>