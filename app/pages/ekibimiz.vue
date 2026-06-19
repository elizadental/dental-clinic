<script setup lang="ts">
const {
  doctors,
  staffMembers,
  isLoadingDoctors,
  error,
  refresh,
  getLocalizedText,
  getDoctorBioLink
} = useDoctors()
async function refreshTeamPage() {
  await refresh()
}
</script>

<template>
  <main>
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
          Ekip bilgileri yükleniyor...
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
          Ekip bilgileri yüklenemedi
        </h1>

        <p class="mt-3 text-sm leading-6 text-red-600">
          {{ error.message }}
        </p>

        <button
          type="button"
          class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-red-700"
          @click="refreshTeamPage"
        >
          <Icon name="lucide:refresh-cw" class="h-4 w-4" />
          Tekrar dene
        </button>
      </div>
    </section>

    <template v-else>
      <!-- PAGE HERO -->
      <section class="bg-gradient-to-br from-sky-50 via-white to-slate-100 py-24">
        <div class="mx-auto max-w-7xl px-4 text-center">
          <h1 class="mb-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {{ $t('teamPage.hero.title') }}
          </h1>

          <p class="mx-auto max-w-2xl leading-7 text-slate-600">
            {{ $t('teamPage.hero.subtitle') }}
          </p>
        </div>
      </section>

      <!-- DOCTORS -->
      <section class="bg-white py-24">
        <div class="mx-auto max-w-7xl px-4">
          <div class="mb-16 text-center">
            <h2 class="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {{ $t('teamPage.doctors.title') }}
            </h2>

            <p class="mx-auto max-w-2xl leading-7 text-slate-600">
              {{ $t('teamPage.doctors.subtitle') }}
            </p>
          </div>

          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <NuxtLink
              v-for="doctor in doctors"
              :key="doctor.id"
              :to="getDoctorBioLink(doctor.slug)"
              class="team-card group"
            >
              <div class="team-image bg-slate-200">
                <img
                  :src="doctor.image"
                  :alt="doctor.name"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                >
              </div>

              <div class="p-6">
                <p
                  v-if="getLocalizedText(doctor.specialty)"
                  class="mb-2 text-sm uppercase tracking-wider text-sky-500"
                >
                  {{ getLocalizedText(doctor.specialty) }}
                </p>

                <h3 class="mb-4 text-xl font-semibold text-slate-900">
                  {{ doctor.name }}
                </h3>

                <span class="inline-flex items-center gap-2 text-sm font-semibold text-sky-600">
                  {{ $t('teamPage.doctors.viewProfile') }}
                  <Icon
                    name="lucide:arrow-right"
                    class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- STAFF MEMBERS -->
      <section
        v-if="staffMembers.length"
        class="bg-gradient-to-b from-white to-sky-50/60 py-24"
      >
        <div class="mx-auto max-w-7xl px-4">
          <div class="mb-16 text-center">
            <h2 class="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {{ $t('teamPage.staff.title') }}
            </h2>

            <p class="mx-auto max-w-2xl leading-7 text-slate-600">
              {{ $t('teamPage.staff.subtitle') }}
            </p>
          </div>

          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article
              v-for="member in staffMembers"
              :key="member.id"
              class="team-card"
            >
              <div class="team-image bg-slate-200">
                <img
                  :src="member.image"
                  :alt="member.name"
                  class="h-full w-full object-cover"
                >
              </div>

              <div class="p-6">
                <p class="mb-2 text-sm uppercase tracking-wider text-sky-500">
                  {{ getLocalizedText(member.title) }}
                </p>

                <h3 class="mb-3 text-xl font-semibold text-slate-900">
                  {{ member.name }}
                </h3>

                <p
                  v-if="getLocalizedText(member.specialty)"
                  class="mb-3 text-sm font-medium text-slate-600"
                >
                  {{ getLocalizedText(member.specialty) }}
                </p>

                <p
                  v-if="member.short_bio"
                  class="text-sm leading-7 text-slate-500"
                >
                  {{ getLocalizedText(member.short_bio) }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </template>
  </main>
</template>

<style scoped>
.team-card {
  @apply overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-100/60;
}

.team-image {
  @apply h-[360px] overflow-hidden;
}
</style>