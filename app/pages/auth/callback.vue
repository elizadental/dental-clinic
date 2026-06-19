<script setup lang="ts">
definePageMeta({
  layout: false
})

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const isLoading = ref(true)
const errorMessage = ref('')

const config = useRuntimeConfig()
const adminEmail = config.public.adminEmail

watch(
  user,
  async (currentUser) => {
    if (!currentUser) {
      return
    }

    if (currentUser.email !== adminEmail) {
      await supabase.auth.signOut()

      isLoading.value = false
      errorMessage.value = 'Bu hesap yönetim paneline erişim için yetkili değildir.'

      return
    }

    await navigateTo('/admin', {
      replace: true
    })
  },
  {
    immediate: true
  }
)

onMounted(() => {
  setTimeout(() => {
    if (!user.value && isLoading.value) {
      isLoading.value = false
      errorMessage.value = 'Giriş doğrulaması tamamlanamadı. Lütfen tekrar giriş yapın.'
    }
  }, 7000)
})
</script>

<template>
  <main
    class="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-100 px-4 py-12"
  >
    <div class="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
    <div class="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-teal-200/20 blur-3xl" />

    <section
      class="relative w-full max-w-md rounded-[2rem] border border-white/80 bg-white/90 p-8 text-center shadow-2xl shadow-sky-100/70 backdrop-blur"
    >
      <div
        class="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50"
      >
        <Icon
          v-if="isLoading"
          name="lucide:loader-circle"
          class="h-7 w-7 animate-spin text-sky-600"
        />

        <Icon
          v-else
          name="lucide:triangle-alert"
          class="h-7 w-7 text-red-500"
        />
      </div>

      <h1 class="text-2xl font-bold tracking-tight text-slate-950">
        {{
          isLoading
            ? 'Giriş kontrol ediliyor'
            : 'Giriş tamamlanamadı'
        }}
      </h1>

      <p class="mt-4 text-sm leading-7 text-slate-600">
        {{
          isLoading
            ? 'Google hesabınız doğrulanıyor. Lütfen bekleyin.'
            : errorMessage
        }}
      </p>

      <NuxtLink
        v-if="!isLoading"
        to="/admin/login"
        class="btn-clinic mt-7"
      >
        <span>Tekrar giriş yap</span>
      </NuxtLink>
    </section>
  </main>
</template>