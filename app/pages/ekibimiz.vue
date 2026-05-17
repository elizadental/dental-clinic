<script setup lang="ts">
import { computed } from 'vue'
import { teamMembers } from '~/data/team'

const { doctors, getLocalizedText, getDoctorBioLink } = useDoctors()

const staffMembers = computed(() => {
  return teamMembers
    .filter((member) => member.role !== 'doctor')
    .sort((a, b) => a.order - b.order)
})
</script>

<template>
  <main>
    <!-- PAGE HERO -->
    <section class="py-24 bg-gradient-to-br from-sky-50 via-white to-slate-100">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-5">
          {{ $t('teamPage.hero.title') }}
        </h1>

        <p class="max-w-2xl mx-auto text-slate-600 leading-7">
          {{ $t('teamPage.hero.subtitle') }}
        </p>
      </div>
    </section>

    <!-- DOCTORS -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            {{ $t('teamPage.doctors.title') }}
          </h2>

          <p class="max-w-2xl mx-auto text-slate-600 leading-7">
            {{ $t('teamPage.doctors.subtitle') }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              />
            </div>

            <div class="p-6">
              <p class="text-sm uppercase tracking-wider text-sky-500 mb-2">
                {{ getLocalizedText(doctor.specialty) }}
              </p>

              <h3 class="text-xl font-semibold text-slate-900 mb-4">
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
      class="py-24 bg-gradient-to-b from-white to-sky-50/60"
    >
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            {{ $t('teamPage.staff.title') }}
          </h2>

          <p class="max-w-2xl mx-auto text-slate-600 leading-7">
            {{ $t('teamPage.staff.subtitle') }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              />
            </div>

            <div class="p-6">
              <p class="text-sm uppercase tracking-wider text-sky-500 mb-2">
                {{ getLocalizedText(member.title) }}
              </p>

              <h3 class="text-xl font-semibold text-slate-900 mb-3">
                {{ member.name }}
              </h3>

              <p class="text-sm font-medium text-slate-600 mb-3">
                {{ getLocalizedText(member.specialty) }}
              </p>

              <p
                v-if="member.shortBio"
                class="text-sm text-slate-500 leading-7"
              >
                {{ getLocalizedText(member.shortBio) }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
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