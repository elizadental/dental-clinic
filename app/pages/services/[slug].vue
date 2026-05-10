<script setup lang="ts">
import { services } from '~/data/services'

const route = useRoute()
const localePath = useLocalePath()
const { locale } = useI18n()

const slug = computed(() => String(route.params.slug))

const service = computed(() => {
  return services.find((item) => item.slug === slug.value)
})

const content = computed(() => {
  if (!service.value) return null

  const currentLocale = locale.value === 'en' ? 'en' : 'tr'

  return service.value.content[currentLocale]
})

if (!service.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Service not found'
  })
}

useSeoMeta({
  title: () => content.value?.title || 'Service',
  description: () => content.value?.shortDescription || ''
})
</script>
<template>
  <main v-if="service && content" class="bg-white">
    <!-- HERO -->
    <section class="relative overflow-hidden bg-slate-950">
      <div class="absolute inset-0">
        <img
  :src="service.image"
  :alt="content.title"
  class="h-full w-full object-cover opacity-90"
>

<!-- Softer readability layers -->
<div class="absolute inset-0 bg-slate-950/15" />
<div class="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/35 to-transparent" />
<div class="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
      </div>

      <div class="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
        <NuxtLink
          :to="localePath('/')"
          class="mb-8 inline-flex items-center gap-2 btn-clinic text-sm font-semibold text-sky-100 transition hover:text-white"
        >
          <Icon name="lucide:arrow-left" class="h-4 w-4 shrink-0" />
          <span>{{ locale === 'en' ? 'Back to home' : 'Ana sayfaya dön' }}</span>
        </NuxtLink>

        <div class="max-w-3xl">
          <!-- Hero Icon -->
         <div
  class="mb-6 inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white text-sky-600 shadow-xl ring-1 ring-white/40"
>
  <Icon :name="service.icon" class="h-6 w-6 shrink-0" />
</div>

          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-sky-100 drop-shadow-sm">
            {{ content.eyebrow }}
          </p>

          <h1 class="mt-5 text-4xl font-bold tracking-tight text-white drop-shadow-md md:text-6xl">
            {{ content.title }}
          </h1>

          <p class="mt-6 max-w-2xl text-base leading-8 text-white drop-shadow-sm md:text-lg">
            {{ content.shortDescription }}
          </p>
        </div>
      </div>
    </section>

    <!-- INTRO -->
    <section class="py-20 md:py-24">
      <div class="mx-auto  max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="max-w-5xl ">
          <p class="text-sm mb-6 font-semibold uppercase tracking-[0.2em] text-sky-600">
            {{ locale === 'en' ? 'Overview' : 'Genel Bakış' }}
          </p>

          <h2
            class="mt-4 mb-4 max-w-5xl text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-4xl lg:text-5xl"
          >
            {{ content.introTitle }}
          </h2>

          <p class="mt-8 max-w-5xl text-base leading-8 text-slate-600 md:text-lg md:leading-9">
            {{ content.intro }}
          </p>
        </div>
      </div>
    </section>

    <!-- WHO IS IT FOR -->
    <section class="bg-sky-50/70 py-20 md:py-24">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm mb-6 font-semibold uppercase tracking-[0.2em] text-sky-600">
            {{ locale === 'en' ? 'Suitability' : 'Uygunluk' }}
          </p>

          <h2 class="mt-4 mb-6 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            {{ content.whoTitle }}
          </h2>
        </div>

        <div class="mt-10 grid gap-5 md:grid-cols-2">
          <div
            v-for="item in content.who"
            :key="item"
            class="flex items-center gap-4 rounded-2xl border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div
              class="mt-1 flex h-9 w-9 min-w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600"
            >
              <Icon name="lucide:check" class="h-4 w-4 shrink-0" />
            </div>

            <p class="text-[15px] leading-7 text-slate-700">
              {{ item }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="py-20 md:py-24">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <p class="text-sm mb-6 font-semibold uppercase tracking-[0.2em] text-sky-600">
            {{ locale === 'en' ? 'Treatment Process' : 'Tedavi Süreci' }}
          </p>

          <h2 class="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            {{ content.processTitle }}
          </h2>
        </div>

        <div class="mt-12 ml-3 grid gap-6 lg:grid-cols-4">
          <div
            v-for="(step, index) in content.process"
            :key="step.title"
            class="  bg-white p-7  transition hover:-translate-y-1"
          >
            <div
              class="mb-6   flex h-11 w-11 min-w-11 shrink-0 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white "
            >
              {{ index + 1 }}
            </div>

            <h3 class="text-lg  font-bold text-slate-950">
              {{ step.title }}
            </h3>

            <p class="mt-3  text-sm leading-7 text-slate-600">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- BENEFITS -->
    <section class="bg-slate-950 py-20 text-white md:py-24">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p class="text-sm mb-6 font-semibold uppercase tracking-[0.2em] text-sky-300">
              {{ locale === 'en' ? 'Benefits' : 'Avantajlar' }}
            </p>

            <h2 class="mt-4 mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              {{ content.benefitsTitle }}
            </h2>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div
              v-for="item in content.benefits"
              :key="item"
              class="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
            >
              <div
                class="mb-4 flex h-9 w-9 min-w-9 shrink-0 items-center justify-center rounded-full bg-sky-400/10 text-sky-300"
              >
                <Icon name="lucide:sparkle" class="h-4 w-4 shrink-0" />
              </div>

              <p class="text-sm leading-7 text-white/80">
                {{ item }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ / Q-A -->
    <section class="py-20 md:py-24">
      <div class="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Q / A
          </p>

          <h2 class="mt-4 mb-6 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            {{ content.faqTitle }}
          </h2>
        </div>

<div
  class="mt-10 divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
>
  <details
    v-for="item in content.faq"
    :key="item.q"
    class="faq-item p-6 open:bg-sky-50/50"
  >
    <summary class="flex cursor-pointer list-none items-start justify-between gap-6">
      <h3 class="text-base font-semibold leading-7 text-slate-950">
        {{ item.q }}
      </h3>

      <span class="faq-icon relative mt-1 flex h-5 w-5 shrink-0 items-center justify-center text-sky-600">
        <Icon
          name="lucide:plus"
          class="faq-plus absolute h-5 w-5"
        />

        <Icon
          name="lucide:minus"
          class="faq-minus absolute h-5 w-5"
        />
      </span>
    </summary>

    <p class="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
      {{ item.a }}
    </p>
  </details>
</div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.faq-minus {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.faq-plus {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.faq-item[open] .faq-plus {
  opacity: 0;
  transform: rotate(90deg) scale(0.9);
}

.faq-item[open] .faq-minus {
  opacity: 1;
  transform: scale(1);
}
</style>