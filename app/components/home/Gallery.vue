<!-- components/home/Gallery.vue -->
<template>
  <section id="gallery" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Title -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          {{ $t('home.gallery.title') }}
        </h2>

        <p class="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-7">
          {{ $t('home.gallery.subtitle') }}
        </p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Card -->
        <div class="group overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100/50">
          <div class="grid grid-cols-2">
            <div class="relative h-48 bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-500">
              <span class="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs text-slate-600 shadow-sm">
               {{ $t('home.gallery.labels.before') }}
              </span>
              Image
            </div>

            <div class="relative h-48 bg-sky-100 flex items-center justify-center text-sm font-medium text-slate-500">
              <span class="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs text-slate-600 shadow-sm">
                {{ $t('home.gallery.labels.after') }}
              </span>
              Image
            </div>
          </div>

          <div class="bg-white p-5">
            <p class="font-semibold text-slate-900">
             {{ $t('home.gallery.cases.smile.title') }}
            </p>
            <p class="mt-1 text-sm text-slate-500">
              {{ $t('home.gallery.cases.smile.desc') }}
            </p>
          </div>
        </div>

        <!-- Card -->
        <div class="group overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100/50">
          <div class="grid grid-cols-2">
            <div class="relative h-48 bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-500">
              <span class="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs text-slate-600 shadow-sm">
                 {{ $t('home.gallery.labels.before') }}
              </span>
              Image
            </div>

            <div class="relative h-48 bg-sky-100 flex items-center justify-center text-sm font-medium text-slate-500">
              <span class="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs text-slate-600 shadow-sm">
                 {{ $t('home.gallery.labels.after') }}
              </span>
              Image
            </div>
          </div>

          <div class="bg-white p-5">
            <p class="font-semibold text-slate-900">
              {{ $t('home.gallery.cases.whitening.title') }}
            </p>
            <p class="mt-1 text-sm text-slate-500">
              {{ $t('home.gallery.cases.whitening.desc') }}
            </p>
          </div>
        </div>

        <!-- Card -->
        <div class="group overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-100/50">
          <div class="grid grid-cols-2">
            <div class="relative h-48 bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-500">
              <span class="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs text-slate-600 shadow-sm">
                {{ $t('home.gallery.labels.before') }}
              </span>
              Image
            </div>

            <div class="relative h-48 bg-sky-100 flex items-center justify-center text-sm font-medium text-slate-500">
              <span class="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs text-slate-600 shadow-sm">
                 {{ $t('home.gallery.labels.after') }}
              </span>
              Image
            </div>
          </div>

          <div class="bg-white p-5">
            <p class="font-semibold text-slate-900">
              {{ $t('home.gallery.cases.implant.title') }}
            </p>
            <p class="mt-1 text-sm text-slate-500">
              {{ $t('home.gallery.cases.implant.desc') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Button -->
      <div class="mt-16 text-center">
        <NuxtLink to="/gallery" class="btn-clinic">
          <span>{{ $t('home.gallery.button') }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>