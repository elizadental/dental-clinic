<!-- components/home/Services.vue -->
<script setup lang="ts">
const localePath = useLocalePath()

const services = [
  {
    key: 'esthetic',
    icon: 'lucide:sparkles',
    image: '/images/services/esthetic-dentistry.jpg',
    to: '/services/esthetic-dentistry'
  },
  {
    key: 'implant',
    icon: 'lucide:badge-plus',
    image: '/images/services/dental-implant.jpg',
    to: '/services/dental-implant'
  },
  {
    key: 'whitening',
    icon: 'lucide:sun',
    image: '/images/services/teeth-whitening.jpg',
    to: '/services/teeth-whitening'
  },
  {
    key: 'surgery',
    icon: 'lucide:scissors',
    image: '/images/services/oral-surgery.jpg',
    to: '/services/oral-surgery'
  },
  {
    key: 'endo',
    icon: 'lucide:activity',
    image: '/images/services/root-canal-treatment.jpg',
    to: '/services/root-canal-treatment'
  },
  {
    key: 'smile',
    icon: 'lucide:smile',
    image: '/images/services/smile-design.jpg',
    to: '/services/smile-design'
  },
  {
    key: 'prosthesis',
    icon: 'lucide:layers',
    image: '/images/services/dental-prosthetics.jpg',
    to: '/services/dental-prosthetics'
  },
  {
    key: 'pedodonti',
    icon: 'lucide:baby',
    image: '/images/services/pediatric-dentistry.jpg',
    to: '/services/pediatric-dentistry'
  },
  {
    key: 'periodontoloji',
    icon: 'lucide:heart-pulse',
    image: '/images/services/periodontology.jpg',
    to: '/services/periodontology'
  },
  {
    key: 'ortho',
    icon: 'lucide:align-justify',
    image: '/images/services/orthodontics.jpg',
    to: '/services/orthodontics'
  }
]
</script>

<template>
  <section
    id="services"
    class="relative overflow-hidden bg-gradient-to-b from-white via-sky-50/60 to-white py-20 md:py-28"
  >
    <!-- Background decoration -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-200/25 blur-3xl" />
      <div class="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100/35 blur-3xl" />
    </div>

    <div class="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <!-- Title -->
      <div class="mx-auto mb-12 max-w-3xl text-center md:mb-16">
        <span
          class="inline-flex items-center rounded-full border border-sky-100 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-600 shadow-sm"
        >
          {{ $t('home.services.eyebrow') }}
        </span>

        <h2
          class="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl"
        >
          {{ $t('home.services.title') }}
        </h2>

        <p
          class="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 md:text-lg md:leading-8"
        >
          {{ $t('home.services.subtitle') }}
        </p>
      </div>

      <!-- Grid -->
      <div
        class="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 md:gap-7 xl:grid-cols-3"
      >
        <NuxtLink
          v-for="service in services"
          :key="service.key"
          :to="localePath(service.to)"
          class="group relative min-h-[320px] overflow-hidden rounded-[1.75rem] border border-white/60 bg-slate-900 shadow-md shadow-slate-200/70 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-sky-200/60 focus:outline-none focus:ring-4 focus:ring-sky-200 sm:min-h-[340px] lg:min-h-[370px]"
        >
          <!-- Background image -->
          <img
            :src="service.image"
            :alt="$t(`home.services.items.${service.key}.title`)"
            class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          >

          <!-- Main image darkening -->
          <div class="absolute inset-0 bg-slate-950/25" />

          <!-- Bottom readability gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/10"
          />

          <!-- Soft left readability layer -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-slate-950/10 to-transparent"
          />

          <!-- Top icon -->
          <div
            class="absolute left-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-sky-600 shadow-lg transition duration-300 group-hover:scale-105 group-hover:bg-sky-500 group-hover:text-white md:left-7 md:top-7 md:h-[52px] md:w-[52px]"
          >
            <Icon :name="service.icon" class="h-5 w-5 md:h-6 md:w-6" />
          </div>

          <!-- Content -->
          <div
            class="relative z-10 flex min-h-[320px] flex-col justify-end p-6 pt-24 sm:min-h-[340px] sm:p-7 sm:pt-24 lg:min-h-[370px] lg:p-8 lg:pt-28"
          >
            <!-- Title -->
            <h3
              class="max-w-[17rem] text-[22px] font-bold leading-[1.15] tracking-tight text-white drop-shadow-md md:max-w-[20rem] md:text-2xl lg:text-[26px]"
            >
              {{ $t(`home.services.items.${service.key}.title`) }}
            </h3>

            <!-- Description -->
            <p
              class="mt-3 max-w-[21rem] line-clamp-2 text-[14px] leading-6 text-white/90 drop-shadow-sm md:line-clamp-3 md:text-[15px] md:leading-7"
            >
              {{ $t(`home.services.items.${service.key}.desc`) }}
            </p>

            <!-- Link text -->
            <div
              class="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-sky-100 drop-shadow-sm transition group-hover:text-white md:mt-6 md:text-sm"
            >
              <span>{{ $t('home.services.readMore') }}</span>
              <Icon
                name="lucide:arrow-right"
                class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>