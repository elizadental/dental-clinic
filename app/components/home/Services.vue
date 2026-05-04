<!-- components/home/Services.vue -->
<template>
  <section id="services" class="py-24 bg-gradient-to-b from-white to-sky-50/60">
    <div class="max-w-7xl mx-auto px-4">

      <!-- Title -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          {{ $t('home.services.title') }}
        </h2>

        <p class="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-7">
          {{ $t('home.services.subtitle') }}
        </p>
      </div>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- Card -->
        <div class="group bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100/50">

          <div class="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-sky-50 group-hover:bg-sky-100 transition">
            <Icon name="lucide:tooth" class="w-6 h-6 text-sky-500" />
          </div>

          <h3 class="font-semibold text-lg text-slate-900 mb-2">
            {{ $t('home.services.implant.title') }}
          </h3>

          <p class="text-sm text-slate-500 leading-relaxed">
            {{ $t('home.services.implant.desc') }}
          </p>
        </div>

        <!-- Card -->
        <div class="group bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100/50">

          <div class="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-sky-50 group-hover:bg-sky-100 transition">
            <Icon name="lucide:sparkles" class="w-6 h-6 text-sky-500" />
          </div>

          <h3 class="font-semibold text-lg text-slate-900 mb-2">
            {{ $t('home.services.whitening.title') }}
          </h3>

          <p class="text-sm text-slate-500 leading-relaxed">
            {{ $t('home.services.whitening.desc') }}
          </p>
        </div>

        <!-- Card -->
        <div class="group bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100/50">

          <div class="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-sky-50 group-hover:bg-sky-100 transition">
            <Icon name="lucide:align-justify" class="w-6 h-6 text-sky-500" />
          </div>

          <h3 class="font-semibold text-lg text-slate-900 mb-2">
            {{ $t('home.services.ortho.title') }}
          </h3>

          <p class="text-sm text-slate-500 leading-relaxed">
            {{ $t('home.services.ortho.desc') }}
          </p>
        </div>

        <!-- Card -->
        <div class="group bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100/50">

          <div class="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-sky-50 group-hover:bg-sky-100 transition">
            <Icon name="lucide:smile" class="w-6 h-6 text-sky-500" />
          </div>

          <h3 class="font-semibold text-lg text-slate-900 mb-2">
            {{ $t('home.services.smile.title') }}
          </h3>

          <p class="text-sm text-slate-500 leading-relaxed">
            {{ $t('home.services.smile.desc') }}
          </p>
        </div>

      </div>

      <!-- CTA -->
      <!-- <div class="mt-16 text-center">
        <NuxtLink
          to="/#contact"
          class="btn-clinic"
        >
          <span>{{ $t('home.services.cta') }}</span>
        </NuxtLink>
      </div> -->

    </div>
  </section>
</template>