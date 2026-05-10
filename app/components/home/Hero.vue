<!-- components/home/Hero.vue -->
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const whatsappLink = 'https://wa.me/905xxxxxxxxx'

const heroImages = [
  {
    src: '/images/hero/hero_img_1.png',
    alt: 'Eliza Dental Clinic modern dental treatment room',
  },
  {
    src: '/images/hero/hero_img_2.png',
    alt: 'Eliza Dental Clinic healthy tooth concept',
  },
  {
    src: '/images/hero/hero_img_3.png',
    alt: 'Eliza Dental Clinic dental health background',
  },
]

const activeSlide = ref(0)

let timer: ReturnType<typeof setInterval> | null = null

function nextSlide() {
  activeSlide.value = (activeSlide.value + 1) % heroImages.length
}

function prevSlide() {
  activeSlide.value =
    activeSlide.value === 0 ? heroImages.length - 1 : activeSlide.value - 1
}

function goToSlide(index: number) {
  activeSlide.value = index
}

onMounted(() => {
  timer = setInterval(nextSlide, 6000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-[calc(100vh-96px)] overflow-hidden bg-slate-900"
  >
    <!-- Background image carousel -->
    <div class="absolute inset-0">
      <img
  v-for="(image, index) in heroImages"
  :key="image.src"
  :src="image.src"
  :alt="image.alt"
  :loading="index === 0 ? 'eager' : 'lazy'"
  class="absolute inset-0 h-full w-full object-cover object-right md:object-center transition-all duration-1000 ease-in-out"
  :class="
    activeSlide === index
      ? 'opacity-100 scale-100'
      : 'opacity-0 scale-105'
  "
/>
    </div>

    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/55 to-slate-900/20"
    ></div>
    <div
      class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"
    ></div>

    <!-- Content -->
    <div
      class="relative max-w-7xl mx-auto px-4 py-28 md:py-36 min-h-[calc(100vh-96px)] flex items-center"
    >
      <div class="max-w-2xl text-white">
        <h1
          class="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
        >
          {{ $t('home.hero.title') }}
        </h1>

        <p class="text-base md:text-lg text-white/80 leading-8 mb-8 max-w-xl">
          {{ $t('home.hero.subtitle') }}
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-clinic"
          >
            <span>{{ $t('home.hero.cta') }}</span>
          </a>

          <NuxtLink
            to="/#services"
            class="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-slate-900 hover:shadow-lg"
          >
            {{ $t('home.hero.secondary') }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Carousel controls -->
    <div
      class="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3"
    >
      <button
        v-for="(_, index) in heroImages"
        :key="index"
        type="button"
        class="h-2.5 rounded-full transition-all duration-300"
        :class="
          activeSlide === index
            ? 'w-8 bg-white'
            : 'w-2.5 bg-white/40 hover:bg-white/70'
        "
        :aria-label="`Go to hero slide ${index + 1}`"
        @click="goToSlide(index)"
      ></button>
    </div>

    <!-- Optional arrows -->
    <button
      type="button"
      aria-label="Previous hero image"
      class="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900 md:flex"
      @click="prevSlide"
    >
      <Icon name="lucide:chevron-left" class="h-5 w-5" />
    </button>

    <button
      type="button"
      aria-label="Next hero image"
      class="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-slate-900 md:flex"
      @click="nextSlide"
    >
      <Icon name="lucide:chevron-right" class="h-5 w-5" />
    </button>
  </section>
</template>