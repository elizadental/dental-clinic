<script setup lang="ts">
type LocaleCode = 'tr' | 'en'

const route = useRoute()
const { locale } = useI18n()
const localePath = useLocalePath()
const setI18nParams = useSetI18nParams()

const currentLocale = computed<LocaleCode>(() => {
  return locale.value === 'en' ? 'en' : 'tr'
})

const slug = computed(() => {
  return route.params.slug as string
})

const { data: post } = await useAsyncData(
  () => `blog-post-${currentLocale.value}-${slug.value}`,
  () => {
    return queryCollection('blog')
      .where('contentLocale', '=', currentLocale.value)
      .where('slug', '=', slug.value)
      .first()
  },
  {
    watch: [currentLocale, slug]
  }
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found'
  })
}

const { data: translations } = await useAsyncData(
  () => `blog-translations-${post.value?.translationKey}`,
  () => {
    return queryCollection('blog')
      .where('translationKey', '=', post.value!.translationKey)
      .all()
  },
  {
    watch: [post]
  }
)

watchEffect(() => {
  const trPost = translations.value?.find((item) => item.contentLocale === 'tr')
  const enPost = translations.value?.find((item) => item.contentLocale === 'en')

  setI18nParams({
    tr: {
      slug: trPost?.slug || slug.value
    },
    en: {
      slug: enPost?.slug || slug.value
    }
  })
})

useSeoMeta({
  title: () => post.value?.seoTitle || post.value?.title,
  description: () => post.value?.seoDescription || post.value?.description,
  ogTitle: () => post.value?.seoTitle || post.value?.title,
  ogDescription: () => post.value?.seoDescription || post.value?.description,
  ogImage: () => post.value?.coverImage
})
</script>

<template>
  <main v-if="post" class="bg-white">
    <!-- HERO -->
    <section class="relative overflow-hidden bg-slate-950">
      <div class="absolute inset-0">
        <img
          v-if="post.coverImage"
          :src="post.coverImage"
          :alt="post.title"
          class="h-full w-full object-cover opacity-90"
        >

        <div
          v-else
          class="h-full w-full bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950"
        />

        <!-- Readability layers: same language as service page -->
        <div class="absolute inset-0 bg-slate-950/20" />
        <div class="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-transparent" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
      </div>

      <div class="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <NuxtLink
          :to="localePath('/blog')"
          class="mb-8 inline-flex items-center gap-2 btn-clinic text-sm font-semibold text-sky-100 transition hover:text-white"
        >
          <Icon name="lucide:arrow-left" class="h-4 w-4 shrink-0" />
          <span>{{ locale === 'en' ? 'Back to Blog' : 'Blog’a Dön' }}</span>
        </NuxtLink>

        <div class="max-w-4xl">
          <!-- Hero Icon -->
          <div
            class="mb-6 inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white text-sky-600 shadow-xl ring-1 ring-white/40"
          >
            <Icon name="lucide:newspaper" class="h-6 w-6 shrink-0" />
          </div>

          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-sky-100 drop-shadow-sm">
            {{ post.category }}
          </p>

          <h1 class="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-md md:text-6xl">
            {{ post.title }}
          </h1>

          <p class="mt-6 max-w-3xl text-base leading-8 text-white drop-shadow-sm md:text-lg">
            {{ post.description }}
          </p>

          <!-- Meta chips -->
          <div class="mt-8 flex flex-wrap gap-3">
            <span
              v-if="post.author"
              class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
            >
              <Icon name="lucide:user-round" class="h-4 w-4 text-sky-200" />
              {{ post.author }}
            </span>

            <span
              v-if="post.date"
              class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
            >
              <Icon name="lucide:calendar-days" class="h-4 w-4 text-sky-200" />
              {{ post.date }}
            </span>

            <span
              v-if="post.readingTime"
              class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
            >
              <Icon name="lucide:clock-3" class="h-4 w-4 text-sky-200" />
              {{ post.readingTime }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ARTICLE OVERVIEW -->
    <section class="py-20 md:py-24">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <!-- Main article -->
          <article class="blog-content max-w-4xl">
            <ContentRenderer :value="post" />
          </article>

          <!-- Sidebar -->
          <aside class="space-y-6 lg:sticky lg:top-28">
            <div class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <p class="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                {{ locale === 'en' ? 'Article Info' : 'Yazı Bilgisi' }}
              </p>

              <div class="space-y-4 text-sm">
                <div v-if="post.category" class="flex items-center gap-3">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50">
                    <Icon name="lucide:folder-open" class="h-5 w-5 text-sky-500" />
                  </div>

                  <div>
                    <p class="text-slate-400">{{ locale === 'en' ? 'Category' : 'Kategori' }}</p>
                    <p class="font-medium text-slate-800">{{ post.category }}</p>
                  </div>
                </div>

                <div v-if="post.readingTime" class="flex items-center gap-3">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50">
                    <Icon name="lucide:clock-3" class="h-5 w-5 text-sky-500" />
                  </div>

                  <div>
                    <p class="text-slate-400">{{ locale === 'en' ? 'Reading Time' : 'Okuma Süresi' }}</p>
                    <p class="font-medium text-slate-800">{{ post.readingTime }}</p>
                  </div>
                </div>

                <div v-if="post.updatedAt" class="flex items-center gap-3">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50">
                    <Icon name="lucide:refresh-cw" class="h-5 w-5 text-sky-500" />
                  </div>

                  <div>
                    <p class="text-slate-400">{{ locale === 'en' ? 'Updated' : 'Güncellendi' }}</p>
                    <p class="font-medium text-slate-800">{{ post.updatedAt }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div
  v-if="post.tags?.length"
  class="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-teal-50 p-6 shadow-sm"
>
  <p class="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
    {{ locale === 'en' ? 'Topics' : 'Konular' }}
  </p>

  <div class="flex flex-wrap gap-2.5">
    <span
      v-for="(tag, index) in post.tags"
      :key="tag"
      class="inline-flex items-center rounded-full border px-3.5 py-2 text-xs font-bold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      :class="[
        index % 3 === 0
          ? 'border-sky-100 bg-sky-100/80 text-sky-700'
          : index % 3 === 1
            ? 'border-teal-100 bg-teal-100/70 text-teal-700'
            : 'border-slate-100 bg-white text-slate-700'
      ]"
    >
      #{{ tag }}
    </span>
  </div>
</div>
          </aside>
        </div>
      </div>
    </section>

    <!-- MEDICAL NOTE -->
    <section class="bg-sky-50/70 py-16 md:py-20">
      <div class="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div class="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm md:p-8">
          <div class="flex flex-col gap-5 sm:flex-row">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
              <Icon name="lucide:info" class="h-6 w-6" />
            </div>

            <div>
              <h2 class="text-xl font-bold tracking-tight text-slate-950">
                {{ locale === 'en' ? 'Important Note' : 'Önemli Bilgilendirme' }}
              </h2>

              <p class="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                {{
                  locale === 'en'
                    ? 'This article is for general informational purposes only. Diagnosis and treatment decisions require a dental examination.'
                    : 'Bu yazı genel bilgilendirme amacı taşır. Teşhis ve tedavi kararları için diş hekimi muayenesi gereklidir.'
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-slate-950 py-20 text-white md:py-24">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              ElizaDent Klinik
            </p>

            <h2 class="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              {{
                locale === 'en'
                  ? 'Need a personalized dental treatment plan?'
                  : 'Size özel bir diş tedavi planına mı ihtiyacınız var?'
              }}
            </h2>
          </div>

          <div class="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p class="text-sm leading-7 text-white/80 md:text-base">
              {{
                locale === 'en'
                  ? 'Every patient’s oral structure, expectations, and treatment needs are different. Contact our clinic to learn which option may be more suitable for you.'
                  : 'Her hastanın ağız yapısı, beklentileri ve tedavi ihtiyacı farklıdır. Size hangi seçeneğin daha uygun olabileceğini öğrenmek için kliniğimizle iletişime geçebilirsiniz.'
              }}
            </p>

            <NuxtLink :to="localePath('/#contact')" class="btn-clinic mt-6">
              <span>{{ locale === 'en' ? 'Contact Us' : 'İletişime Geç' }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.blog-content :deep(h1) {
  @apply hidden;
}

.blog-content :deep(h2) {
  @apply relative mt-16 mb-7 border-l-4 border-sky-400 pl-5 text-2xl font-bold leading-tight tracking-tight text-slate-950 md:text-3xl;
}

.blog-content :deep(h2:first-of-type) {
  @apply mt-0;
}
.blog-content :deep(h2 a),
.blog-content :deep(h3 a) {
  @apply no-underline decoration-transparent;
}

.blog-content :deep(h3) {
  @apply mt-12 mb-5 text-xl font-semibold leading-tight tracking-tight text-slate-900 md:text-2xl;
}

.blog-content :deep(a) {
  @apply font-semibold text-sky-600 no-underline transition hover:text-sky-700;
}

.blog-content :deep(p) {
  @apply my-6 max-w-4xl text-base leading-8 text-slate-600 md:text-lg md:leading-9;
}

.blog-content :deep(p:first-child) {
  @apply mt-0;
}

.blog-content :deep(strong) {
  @apply font-semibold text-slate-950;
}



.blog-content :deep(blockquote) {
  @apply my-10 rounded-3xl border-l-4 border-sky-500 bg-sky-50/80 p-6 text-slate-700 shadow-sm;
}

.blog-content :deep(blockquote p) {
  @apply my-0 text-base leading-8 text-slate-700 md:text-lg;
}

.blog-content :deep(ul) {
  @apply my-8 grid gap-3 pl-0 md:grid-cols-2;
}

.blog-content :deep(ol) {
  @apply my-8 space-y-3 pl-6;
}

.blog-content :deep(li) {
  @apply leading-8 text-slate-600;
}

.blog-content :deep(ul li) {
  @apply relative list-none rounded-2xl border border-slate-100 bg-white p-5 pl-12 shadow-sm;
}

.blog-content :deep(ul li::before) {
  content: '';
  @apply absolute left-5 top-7 h-2.5 w-2.5 rounded-full bg-sky-500;
}

.blog-content :deep(ol li) {
  @apply list-decimal;
}

.blog-content :deep(img) {
  @apply my-10 w-full rounded-3xl border border-slate-100 shadow-xl shadow-slate-100;
}

.blog-content :deep(em) {
  @apply block -mt-6 mb-10 text-center text-sm leading-6 text-slate-400;
}

.blog-content :deep(hr) {
  @apply my-12 border-slate-100;
}
</style>