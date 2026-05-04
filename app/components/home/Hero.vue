<!-- components/home/Hero.vue -->
<script setup lang="ts">
const whatsappLink = 'https://wa.me/905xxxxxxxxx'
</script>

<template>
  <section
    id="hero"
    class="relative min-h-[calc(100vh-96px)] overflow-hidden bg-slate-900"
  >
    <!-- Background image placeholder -->
    <div class="absolute inset-0">
      <div class="h-full w-full bg-gradient-to-br from-sky-100 via-slate-200 to-teal-100"></div>

      <!-- Later replace with real image -->
      <!--
      <img
        src="/clinic/hero-1.jpg"
        alt="Eliza Dental Clinic"
        class="h-full w-full object-cover"
      />
      -->
    </div>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/55 to-slate-900/20"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>

    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-4 py-28 md:py-36 min-h-[calc(100vh-96px)] flex items-center">
      <div class="max-w-2xl text-white">
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
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
  </section>
</template>