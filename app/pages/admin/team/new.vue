<script setup lang="ts">
import AdminTeamMemberForm from '~/components/admin/team/TeamMemberForm.vue'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

const router = useRouter()
const { createTeamMember } = useAdminTeam()

const form = ref(createEmptyTeamMemberForm())

const isSubmitting = ref(false)
const errorMessage = ref('')

function getErrorMessage(error: unknown) {
  if (typeof error === 'object' && error !== null) {
    if ('statusMessage' in error && typeof error.statusMessage === 'string') {
      return error.statusMessage
    }

    if ('message' in error && typeof error.message === 'string') {
      return error.message
    }
  }

  return 'Ekip üyesi kaydedilemedi. Lütfen tekrar deneyin.'
}

async function submitNewMember() {
  if (isSubmitting.value) {
    return
  }

  errorMessage.value = ''
  isSubmitting.value = true

  try {
    const payload = createTeamMemberPayloadFromForm(form.value)

    await createTeamMember(payload)
    await router.push('/admin/team')
  } catch (error) {
    errorMessage.value = getErrorMessage(error)
  } finally {
    isSubmitting.value = false
  }
}

useSeoMeta({
  title: 'Yeni Ekip Üyesi | Elizadent Admin',
  robots: 'noindex, nofollow'
})
</script>

<template>
  <section>
    <div class="mb-8">
      <NuxtLink
        to="/admin/team"
        class="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-sky-600"
      >
        <Icon name="lucide:arrow-left" class="h-4 w-4" />
        Ekip yönetimine dön
      </NuxtLink>

      <p class="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
        Yeni kayıt
      </p>

      <h1 class="text-3xl font-bold tracking-tight text-slate-950">
        Yeni Ekip Üyesi
      </h1>

      <p class="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
        Yeni doktor, yönetici veya klinik asistanı kaydı oluşturun.
      </p>
    </div>

    <div
      v-if="errorMessage"
      class="mb-6 rounded-3xl border border-red-100 bg-red-50 p-5 text-sm font-medium text-red-700"
    >
      {{ errorMessage }}
    </div>

    <AdminTeamMemberForm
      v-model="form"
      submit-label="Ekip üyesini kaydet"
      :is-submitting="isSubmitting"
      @submit="submitNewMember"
    />
  </section>
</template>