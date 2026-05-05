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
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <article class="team-card">
            <div class="team-image bg-slate-200">
              <img src="/doctors/doctor-1.png" alt="Dr. Ahmet Yılmaz" class="h-full w-full object-cover" />
            </div>
            <div class="p-6">
              <p class="text-sm uppercase tracking-wider text-sky-500 mb-2">
                {{ $t('teamPage.doctors.ahmet.expertise') }}
              </p>
              <h3 class="text-xl font-semibold text-slate-900">Dr. Ahmet Yılmaz</h3>
            </div>
          </article>

          <article class="team-card">
            <div class="team-image bg-slate-200">
              <img src="/doctors/doctor-2.png" alt="Dr. Elif Kaya" class="h-full w-full object-cover" />
            </div>
            <div class="p-6">
              <p class="text-sm uppercase tracking-wider text-sky-500 mb-2">
                {{ $t('teamPage.doctors.elif.expertise') }}
              </p>
              <h3 class="text-xl font-semibold text-slate-900">Dr. Elif Kaya</h3>
            </div>
          </article>

          <article class="team-card">
            <div class="team-image bg-slate-200">
              <img src="/doctors/doctor-3.png" alt="Dr. Mehmet Demir" class="h-full w-full object-cover" />
            </div>
            <div class="p-6">
              <p class="text-sm uppercase tracking-wider text-sky-500 mb-2">
                {{ $t('teamPage.doctors.mehmet.expertise') }}
              </p>
              <h3 class="text-xl font-semibold text-slate-900">Dr. Mehmet Demir</h3>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ADMINISTRATIVE TEAM -->
    <section class="py-24 bg-gradient-to-b from-white to-sky-50/60">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            {{ $t('teamPage.admin.title') }}
          </h2>

          <p class="max-w-2xl mx-auto text-slate-600 leading-7">
            {{ $t('teamPage.admin.subtitle') }}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <article class="team-card">
            <div class="team-image bg-slate-200 flex items-center justify-center text-slate-400">
              Image
            </div>
            <div class="p-6">
              <p class="text-sm uppercase tracking-wider text-sky-500 mb-2">
                {{ $t('teamPage.admin.member1.role') }}
              </p>
              <h3 class="text-xl font-semibold text-slate-900">
                {{ $t('teamPage.admin.member1.name') }}
              </h3>
            </div>
          </article>

          <article class="team-card">
            <div class="team-image bg-slate-200 flex items-center justify-center text-slate-400">
              Image
            </div>
            <div class="p-6">
              <p class="text-sm uppercase tracking-wider text-sky-500 mb-2">
                {{ $t('teamPage.admin.member2.role') }}
              </p>
              <h3 class="text-xl font-semibold text-slate-900">
                {{ $t('teamPage.admin.member2.name') }}
              </h3>
            </div>
          </article>

          <article class="team-card">
            <div class="team-image bg-slate-200 flex items-center justify-center text-slate-400">
              Image
            </div>
            <div class="p-6">
              <p class="text-sm uppercase tracking-wider text-sky-500 mb-2">
                {{ $t('teamPage.admin.member3.role') }}
              </p>
              <h3 class="text-xl font-semibold text-slate-900">
                {{ $t('teamPage.admin.member3.name') }}
              </h3>
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