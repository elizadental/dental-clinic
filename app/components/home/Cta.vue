<!-- /components/home/Cta.vue -->
<script setup lang="ts">
const whatsappLink = "https://wa.me/905xxxxxxxxx"
</script>

<template>
  <section class="py-24 bg-gradient-to-b from-sky-50/60 to-white">
    <div class="max-w-4xl mx-auto text-center px-4">

      <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
        {{ $t('home.cta.title') }}
      </h2>

      <p class="text-slate-600 mb-10 leading-7">
        {{ $t('home.cta.subtitle') }}
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4">

        <!-- WhatsApp -->
        <a
          :href="whatsappLink"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-clinic"
        >
          <span>{{ $t('home.cta.whatsapp') }}</span>
        </a>

        <!-- Call -->
        <a
          href="tel:+905xxxxxxxxx"
          class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-600 hover:shadow-md"
        >
          {{ $t('home.cta.call') }}
        </a>

      </div>

    </div>
  </section>
</template>