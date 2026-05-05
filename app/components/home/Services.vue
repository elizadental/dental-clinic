<!-- components/home/Services.vue -->
<script setup lang="ts">
const services = [
  { key: 'esthetic', icon: 'lucide:sparkles' },
  { key: 'implant', icon: 'lucide:badge-plus' },
  { key: 'whitening', icon: 'lucide:sun' },
  { key: 'surgery', icon: 'lucide:scissors' },
  { key: 'endo', icon: 'lucide:activity' },
  { key: 'smile', icon: 'lucide:smile' },
  { key: 'prosthesis', icon: 'lucide:layers' },
  { key: 'pedodonti', icon: 'lucide:baby' },
  { key: 'periodontoloji', icon: 'lucide:heart-pulse' },
  { key: 'ortho', icon: 'lucide:align-justify' }
]
</script>

<template>
  <section id="services" class="py-28 bg-gradient-to-b from-white to-sky-50/60">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Title -->
      <div class="text-center mb-20">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-5">
          {{ $t('home.services.title') }}
        </h2>

        <p class="text-slate-600 max-w-2xl mx-auto text-base leading-7">
          {{ $t('home.services.subtitle') }}
        </p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div
          v-for="service in services"
          :key="service.key"
          class="group bg-white rounded-3xl p-8 text-center border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-100/60"
        >
          <!-- Icon -->
          <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-sky-50 group-hover:bg-sky-100 transition">
            <Icon :name="service.icon" class="w-7 h-7 text-sky-500" />
          </div>

          <!-- Title -->
          <h3 class="font-semibold text-base text-slate-900 mb-3 leading-snug">
            {{ $t(`home.services.items.${service.key}.title`) }}
          </h3>

          <!-- Desc -->
          <p class="text-sm text-slate-500 leading-relaxed">
            {{ $t(`home.services.items.${service.key}.desc`) }}
          </p>
        </div>

      </div>

    </div>
  </section>
</template>