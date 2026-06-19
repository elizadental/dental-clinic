<script setup lang="ts">
definePageMeta({
  layout: false
})

const route = useRoute()
const localePath = useLocalePath()

const {
  isLoadingDoctors,
  error,
  refresh,
  getDoctorBySlug,
  getLocalizedText,
  getSpokenLanguageLabel
} = useDoctors()

async function refreshDoctorPage() {
  await refresh()
}

const doctor = computed(() => {
  return getDoctorBySlug(route.params.slug as string)
})

const isNotFound = computed(() => {
  return !isLoadingDoctors.value && !error.value && !doctor.value
})

useSeoMeta({
  title: () => doctor.value ? `${doctor.value.name} | Elizadent` : 'Doktor | Elizadent',
  description: () => doctor.value?.short_bio ? getLocalizedText(doctor.value.short_bio) : 'Elizadent doktor profili.'
})
</script>

<template>
  <main class="overflow-hidden bg-white">
    <!-- LOADING -->
    <section
      v-if="isLoadingDoctors"
      class="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-slate-100 px-4"
    >
      <div class="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm">
        <Icon
          name="lucide:loader-circle"
          class="mx-auto mb-4 h-9 w-9 animate-spin text-sky-600"
        />

        <p class="text-sm font-medium text-slate-600">
          Doktor bilgileri yükleniyor...
        </p>
      </div>
    </section>

    <!-- ERROR -->
    <section
      v-else-if="error"
      class="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-slate-100 px-4"
    >
      <div class="max-w-md rounded-3xl border border-red-100 bg-red-50 p-8 text-center shadow-sm">
        <Icon
          name="lucide:triangle-alert"
          class="mx-auto mb-4 h-9 w-9 text-red-500"
        />

        <h1 class="text-xl font-bold text-red-700">
          Doktor bilgileri yüklenemedi
        </h1>

        <p class="mt-3 text-sm leading-6 text-red-600">
          {{ error.message }}
        </p>

        <button
          type="button"
          class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-700"
          @click="refreshDoctorPage"
        >
          <Icon name="lucide:refresh-cw" class="h-4 w-4" />
          Tekrar dene
        </button>
      </div>
    </section>

    <!-- NOT FOUND -->
    <section
      v-else-if="isNotFound"
      class="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-slate-100 px-4"
    >
      <div class="max-w-md rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm">
        <Icon
          name="lucide:user-x"
          class="mx-auto mb-4 h-9 w-9 text-slate-400"
        />

        <h1 class="text-xl font-bold text-slate-900">
          Doktor bulunamadı
        </h1>

        <p class="mt-3 text-sm leading-6 text-slate-500">
          Aradığınız doktor profili bulunamadı veya yayında değil.
        </p>

        <NuxtLink
          :to="localePath('/ekibimiz')"
          class="btn-clinic mt-6"
        >
          Ekibimize dön
        </NuxtLink>
      </div>
    </section>

    <!-- DOCTOR PAGE -->
    <template v-else-if="doctor">
      <!-- HERO -->
      <section class="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-100 py-16 md:py-24">
        <div class="mx-auto max-w-7xl px-4">
          <div class="grid items-center gap-10 md:gap-12 lg:grid-cols-2">
            <!-- LEFT -->
            <div class="max-w-2xl">
              <NuxtLink
                :to="localePath('/ekibimiz')"
                class="btn-clinic mb-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-100 transition"
              >
                <Icon name="lucide:arrow-left" class="h-4 w-4" />
                {{ $t('doctorPage.backToTeam') }}
              </NuxtLink>

              <!-- Specialty Badge -->
              <div
                v-if="getLocalizedText(doctor.specialty)"
                class="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/80 px-4 py-2 shadow-sm"
              >
                <span class="h-2 w-2 rounded-full bg-sky-500" />

                <span class="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
                  {{ getLocalizedText(doctor.specialty) }}
                </span>
              </div>

              <!-- Name -->
              <h1 class="mb-5 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">
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
                v-if="doctor.short_bio"
                class="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm backdrop-blur"
              >
                <p class="text-base leading-8 text-slate-600 md:text-lg">
                  {{ getLocalizedText(doctor.short_bio) }}
                </p>
              </div>

              <!-- Spoken Languages -->
              <div
                v-if="doctor.spoken_languages?.length"
                class="mt-8"
              >
                <p class="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {{ $t('doctorPage.spokenLanguagesTitle') }}
                </p>

                <div class="flex flex-wrap gap-3">
                  <span
                    v-for="language in doctor.spoken_languages"
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
              <div class="absolute inset-0 rounded-full bg-sky-200/30 blur-3xl" />

              <div class="relative overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-100 shadow-xl">
                <img
                  :src="doctor.image"
                  :alt="doctor.name"
                  class="h-[420px] w-full object-cover md:h-[520px]"
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- BIOGRAPHY -->
      <section
        v-if="doctor.bio_paragraphs?.length"
        class="py-16"
      >
        <div class="mx-auto max-w-7xl px-4">
          <h2 class="mb-6 text-3xl font-bold tracking-tight text-slate-900">
            {{ $t('doctorPage.biographyTitle') }}
          </h2>

          <div class="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            <div
              v-for="(paragraph, index) in doctor.bio_paragraphs"
              :key="index"
              class="text-lg leading-8 text-slate-600"
              :class="{
                'mb-6': index !== doctor.bio_paragraphs.length - 1
              }"
            >
              {{ getLocalizedText(paragraph) }}
            </div>
          </div>
        </div>
      </section>

      <!-- CONTENT -->
      <section class="py-20 md:py-24">
        <div class="mx-auto max-w-7xl px-4">
          <div class="grid items-start gap-10 lg:grid-cols-[1fr_360px]">
            <!-- MAIN INFO -->
            <div class="space-y-10">
              <!-- EXPERTISE -->
              <div v-if="doctor.expertise_areas?.length">
                <h2 class="mb-6 text-3xl font-bold tracking-tight text-slate-900">
                  {{ $t('doctorPage.expertiseTitle') }}
                </h2>

                <div class="grid gap-5 sm:grid-cols-2">
                  <div
                    v-for="(item, index) in doctor.expertise_areas"
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
                <h2 class="mb-6 text-3xl font-bold tracking-tight text-slate-900">
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

              <!-- CERTIFICATES -->
              <div v-if="doctor.certificates?.length">
                <h2 class="mb-6 text-3xl font-bold tracking-tight text-slate-900">
                  {{ $t('doctorPage.certificatesTitle') }}
                </h2>

                <div class="space-y-4">
                  <div
                    v-for="(item, index) in doctor.certificates"
                    :key="index"
                    class="rounded-2xl border border-slate-100 bg-slate-50/70 p-6"
                  >
                    <div class="flex items-center gap-4">
                      <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
                        <Icon name="lucide:award" class="h-5 w-5 text-sky-500" />
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
              <h3 class="mb-5 text-xl font-semibold text-slate-900">
                {{ $t('doctorPage.contactTitle') }}
              </h3>

              <div class="space-y-4 text-sm">
                <div class="flex items-center gap-3">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50">
                    <Icon name="lucide:user-round" class="h-5 w-5 text-sky-500" />
                  </div>

                  <div>
                    <p class="text-slate-400">
                      {{ $t('doctorPage.titleLabel') }}
                    </p>

                    <p class="font-medium text-slate-800">
                      {{ getLocalizedText(doctor.title) }}
                    </p>
                  </div>
                </div>

                <div
                  v-if="doctor.show_contact && doctor.contact?.email"
                  class="flex items-center gap-3"
                >
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50">
                    <Icon name="lucide:mail" class="h-5 w-5 text-sky-500" />
                  </div>

                  <div>
                    <p class="text-slate-400">
                      {{ $t('doctorPage.emailLabel') }}
                    </p>

                    <a
                      :href="`mailto:${doctor.contact.email}`"
                      class="font-medium text-slate-800 hover:text-sky-600"
                    >
                      {{ doctor.contact.email }}
                    </a>
                  </div>
                </div>

                <div
                  v-if="doctor.show_contact && doctor.contact?.phone"
                  class="flex items-center gap-3"
                >
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-50">
                    <Icon name="lucide:phone" class="h-5 w-5 text-sky-500" />
                  </div>

                  <div>
                    <p class="text-slate-400">
                      {{ $t('doctorPage.phoneLabel') }}
                    </p>

                    <a
                      :href="`tel:${doctor.contact.phone}`"
                      class="font-medium text-slate-800 hover:text-sky-600"
                    >
                      {{ doctor.contact.phone }}
                    </a>
                  </div>
                </div>

                <NuxtLink
                  :to="localePath('/#contact')"
                  class="btn-clinic mt-6 w-full"
                >
                  <span>{{ $t('doctorPage.appointmentButton') }}</span>
                </NuxtLink>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </template>
  </main>
</template>