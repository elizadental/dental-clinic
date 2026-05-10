<script setup lang="ts">
const route = useRoute()
const { getDoctorBySlug, getLocalizedText, getSpokenLanguageLabel } = useDoctors()

const localePath = useLocalePath()
const doctor = computed(() => {
  return getDoctorBySlug(route.params.slug as string)
})

if (!doctor.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Doctor not found'
  })
}
</script>

<template>
  <main v-if="doctor" class="overflow-hidden bg-white">
    <!-- HERO -->
    <section class="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-100 py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
          <!-- LEFT -->
         <!-- LEFT -->
          
<div class="max-w-2xl">
    
 <NuxtLink
  :to="localePath('/ekibimiz')"
  class="mb-10 btn-clinic inline-flex items-center gap-2 text-sm font-semibold text-slate-100 transition"
>
  <Icon name="lucide:arrow-left" class="h-4 w-4" />
  {{ $t('doctorPage.backToTeam') }}
</NuxtLink>

<div>
  <!-- Specialty Badge -->
  <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 shadow-sm">
    <span class="h-2 w-2 rounded-full bg-sky-500"></span>
    <span class="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
      {{ getLocalizedText(doctor.specialty) }}
    </span>
  </div>

  <!-- Name -->
  
</div>

  <!-- Name -->
  <h1 class="text-4xl md:text-6xl font-bold tracking-tight text-slate-950 leading-tight mb-5">
    {{ doctor.name }}
  </h1>

  <!-- Title -->
  <div class="mb-8 flex items-center gap-3 text-slate-600">
    <div class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50">
      <Icon name="lucide:badge-check" class="h-5 w-5 text-sky-500" />
    </div>

    <p class="text-base font-medium">
      {{ getLocalizedText(doctor.title) }}
    </p>
  </div>

  <!-- Bio Card -->
  <div
    v-if="doctor.shortBio"
    class="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm backdrop-blur"
  >
    <p class="text-base md:text-lg leading-8 text-slate-600">
      {{ getLocalizedText(doctor.shortBio) }}
    </p>
  </div>

  <!-- Spoken Languages -->
  <div v-if="doctor.spokenLanguages?.length" class="mt-8">
    <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
      {{ $t('doctorPage.spokenLanguagesTitle') }}
    </p>

    <div class="flex flex-wrap gap-3">
      <span
        v-for="language in doctor.spokenLanguages"
        :key="language"
        class="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
      >
        <Icon name="lucide:languages" class="h-4 w-4 text-sky-500" />
        {{ getSpokenLanguageLabel(language) }}
      </span>
    </div>
  </div>
</div>

          <!-- RIGHT -->
          <div class="relative">
            <div class="absolute inset-0 bg-sky-200/30 blur-3xl rounded-full"></div>

            <div class="relative overflow-hidden rounded-[2rem] border border-slate-100 shadow-xl bg-slate-100">
              <img
                :src="doctor.image"
                :alt="doctor.name"
                class="w-full h-[420px] md:h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="py-20 md:py-24">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-[1fr_360px] gap-10 items-start">
          <!-- MAIN INFO -->
          <div class="space-y-10">
            <!-- EXPERTISE -->
            <div v-if="doctor.expertiseAreas?.length">
              <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                {{ $t('doctorPage.expertiseTitle') }}
              </h2>

              <div class="grid sm:grid-cols-2 gap-5">
                <div
                  v-for="(item, index) in doctor.expertiseAreas"
                  :key="index"
                  class="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <div class="flex items-center gap-4">
                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-50">
                      <Icon name="lucide:check" class="h-5 w-5 text-sky-500" />
                    </div>

                    <p class="font-medium text-slate-800">
                      {{ getLocalizedText(item) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- EDUCATION -->
            <div v-if="doctor.education?.length">
              <h2 class="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                {{ $t('doctorPage.educationTitle') }}
              </h2>

              <div class="space-y-4">
                <div
                  v-for="(item, index) in doctor.education"
                  :key="index"
                  class="rounded-2xl border border-slate-100 bg-slate-50/70 p-6"
                >
                  <div class="flex items-center gap-4">
                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
                      <Icon name="lucide:graduation-cap" class="h-5 w-5 text-sky-500" />
                    </div>

                    <p class="font-medium text-slate-800">
                      {{ getLocalizedText(item) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SIDEBAR -->
          <aside class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm lg:sticky lg:top-32">
            <h3 class="text-xl font-semibold text-slate-900 mb-5">
              {{ $t('doctorPage.contactTitle') }}
            </h3>

            <div class="space-y-4 text-sm">
              <div class="flex items-center gap-3">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50">
                  <Icon name="lucide:user-round" class="h-5 w-5 text-sky-500" />
                </div>

                <div>
                  <p class="text-slate-400">{{ $t('doctorPage.titleLabel') }}</p>
                  <p class="font-medium text-slate-800">
                    {{ getLocalizedText(doctor.title) }}
                  </p>
                </div>
              </div>

             <div v-if="doctor.showContact && doctor.contact?.email" class="flex items-center gap-3">
  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50">
    <Icon name="lucide:mail" class="h-5 w-5 text-sky-500" />
  </div>

  <div>
    <p class="text-slate-400">{{ $t('doctorPage.emailLabel') }}</p>
    <a
      :href="`mailto:${doctor.contact.email}`"
      class="font-medium text-slate-800 hover:text-sky-600"
    >
      {{ doctor.contact.email }}
    </a>
  </div>
</div>
<div v-if="doctor.showContact && doctor.contact?.phone" class="flex items-center gap-3">
  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50">
    <Icon name="lucide:phone" class="h-5 w-5 text-sky-500" />
  </div>

  <div>
    <p class="text-slate-400">{{ $t('doctorPage.phoneLabel') }}</p>
    <a
      :href="`tel:${doctor.contact.phone}`"
      class="font-medium text-slate-800 hover:text-sky-600"
    >
      {{ doctor.contact.phone }}
    </a>
  </div>
</div>

             <NuxtLink :to="localePath('/#contact')" class="btn-clinic mt-6 w-full">
                <span>{{ $t('doctorPage.appointmentButton') }}</span>
              </NuxtLink>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>