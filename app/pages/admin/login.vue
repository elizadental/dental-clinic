<!-- pages/admin/login.vue -->
 <script setup lang="ts">
definePageMeta({
  layout: false
})

const supabase = useSupabaseClient()

const isLoading = ref(false)
const errorMessage = ref('')

async function signInWithGoogle() {
  errorMessage.value = ''
  isLoading.value = true

  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',

      options: {
        redirectTo: `${window.location.origin}/auth/callback`,

        queryParams: {
          prompt: 'select_account',
          hd: 'elizadent.com'
        }
      }
    })

    if (error) {
      errorMessage.value = error.message
      isLoading.value = false
    }
  } catch {
    errorMessage.value = 'Google ile giriş başlatılamadı.'
    isLoading.value = false
  }
}

useSeoMeta({
  title: 'Yönetici Girişi | Elizadent',
  description: 'Elizadent yönetim paneli giriş sayfası.',
  robots: 'noindex, nofollow'
})
</script>

<template>
  <main
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-100 px-4 py-12"
  >
    <!-- Background decoration -->
    <div
      class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl"
    />

    <div
      class="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-teal-200/20 blur-3xl"
    />

    <div class="relative w-full max-w-md">
      <!-- Home link -->
      <NuxtLink
        to="/"
        class="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-sky-600"
      >
        <Icon name="lucide:arrow-left" class="h-4 w-4" />
        Ana sayfaya dön
      </NuxtLink>

      <!-- Login card -->
      <section
        class="overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 p-7 shadow-2xl shadow-sky-100/70 backdrop-blur md:p-9"
      >
        <div
          class="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50"
        >
          <Icon
            name="lucide:shield-check"
            class="h-7 w-7 text-sky-600"
          />
        </div>

        <p
          class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600"
        >
          Yönetim Paneli
        </p>

        <h1
          class="text-3xl font-bold tracking-tight text-slate-950"
        >
          Yönetici Girişi
        </h1>

        <p class="mt-4 text-sm leading-7 text-slate-600">
          Yönetim paneline erişmek için yetkili Elizadent Google
          Workspace hesabınızla giriş yapın.
        </p>

        <button
          type="button"
          :disabled="isLoading"
          class="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
          @click="signInWithGoogle"
        >
          <Icon
            v-if="!isLoading"
            name="logos:google-icon"
            class="h-5 w-5"
          />

          <Icon
            v-else
            name="lucide:loader-circle"
            class="h-5 w-5 animate-spin text-sky-600"
          />

          <span>
            {{
              isLoading
                ? 'Google’a yönlendiriliyor...'
                : 'Google ile giriş yap'
            }}
          </span>
        </button>

        <div
          v-if="errorMessage"
          class="mt-5 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-700"
        >
          <Icon
            name="lucide:triangle-alert"
            class="mt-0.5 h-5 w-5 shrink-0"
          />

          <span>{{ errorMessage }}</span>
        </div>

        <p class="mt-6 text-center text-xs leading-6 text-slate-400">
          Yalnızca yetkili Elizadent hesapları yönetim paneline
          erişebilir.
        </p>
      </section>
    </div>
  </main>
</template>