<script setup lang="ts">
import AdminTeamMemberForm from '~/components/admin/team/TeamMemberForm.vue'
import type { TeamMemberFormState } from '~/utils/teamMemberForm'
import DeleteConfirmModal from '~/components/admin/team/DeleteConfirmModal.vue'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

const route = useRoute()
const router = useRouter()
const isDeleting = ref(false)
const deleteMessage = ref('')
const isDeleteModalOpen = ref(false)

const {
  getAdminTeamMember,
  updateTeamMember,
  deleteTeamMember
} = useAdminTeam()

const memberId = computed(() => route.params.id as string)

const form = ref<TeamMemberFormState>(createEmptyTeamMemberForm())

const isSubmitting = ref(false)
const errorMessage = ref('')

const {
  data: member,
  status,
  error,
  refresh
} = await useAsyncData(
  () => `admin-team-member-${memberId.value}`,
  () => getAdminTeamMember(memberId.value),
  {
    watch: [memberId]
  }
)

if (member.value) {
  form.value = createTeamMemberFormFromRow(member.value)
}

watch(member, (newMember) => {
  if (newMember) {
    form.value = createTeamMemberFormFromRow(newMember)
  }
})

const isLoading = computed(() => status.value === 'pending')

function getErrorMessage(error: unknown) {
  if (typeof error === 'object' && error !== null) {
    if ('statusMessage' in error && typeof error.statusMessage === 'string') {
      return error.statusMessage
    }

    if ('message' in error && typeof error.message === 'string') {
      return error.message
    }
  }

  return 'Ekip üyesi güncellenemedi. Lütfen tekrar deneyin.'
}

async function submitUpdateMember() {
  if (isSubmitting.value) {
    return
  }

  errorMessage.value = ''
  isSubmitting.value = true

  try {
    const payload = createTeamMemberPayloadFromForm(form.value)

    await updateTeamMember(memberId.value, payload)
    await router.push('/admin/team')
  } catch (error) {
    errorMessage.value = getErrorMessage(error)
  } finally {
    isSubmitting.value = false
  }
}
async function deleteCurrentMember() {
  if (isDeleting.value) {
    return
  }

  const confirmed = window.confirm(
    'Bu ekip üyesini kalıcı olarak silmek istediğinize emin misiniz?'
  )

  if (!confirmed) {
    return
  }

  errorMessage.value = ''
  deleteMessage.value = ''
  isDeleting.value = true

  try {
    const result = await deleteTeamMember(memberId.value)

    deleteMessage.value = `${result.deletedName} silindi.`
    await router.push('/admin/team')
  } catch (error) {
    errorMessage.value = getErrorMessage(error)
  } finally {
    isDeleting.value = false
  }
}

useSeoMeta({
  title: 'Ekip Üyesi Düzenle | Elizadent Admin',
  robots: 'noindex, nofollow'
})
function openDeleteModal() {
  isDeleteModalOpen.value = true
}

function closeDeleteModal() {
  if (isDeleting.value) {
    return
  }

  isDeleteModalOpen.value = false
}

async function confirmDeleteCurrentMember() {
  if (isDeleting.value) {
    return
  }

  errorMessage.value = ''
  isDeleting.value = true

  try {
    await deleteTeamMember(memberId.value)
    isDeleteModalOpen.value = false
    await router.push('/admin/team')
  } catch (error) {
    errorMessage.value = getErrorMessage(error)
  } finally {
    isDeleting.value = false
  }
}
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
        Düzenle
      </p>

      <h1 class="text-3xl font-bold tracking-tight text-slate-950">
        Ekip Üyesi Düzenle
      </h1>

      <p class="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
        Seçili ekip üyesinin bilgilerini güncelleyin.
      </p>
    </div>

    <div
      v-if="isLoading"
      class="rounded-3xl border border-slate-100 bg-white p-10 text-center shadow-sm"
    >
      <Icon
        name="lucide:loader-circle"
        class="mx-auto mb-4 h-9 w-9 animate-spin text-sky-600"
      />

      <p class="text-sm font-medium text-slate-600">
        Ekip üyesi yükleniyor...
      </p>
    </div>

    <div
      v-else-if="error"
      class="rounded-3xl border border-red-100 bg-red-50 p-8 shadow-sm"
    >
      <div class="flex items-start gap-4">
        <Icon
          name="lucide:triangle-alert"
          class="mt-1 h-6 w-6 shrink-0 text-red-500"
        />

        <div>
          <h2 class="font-semibold text-red-700">
            Ekip üyesi yüklenemedi
          </h2>

          <p class="mt-2 text-sm leading-6 text-red-600">
            {{ error.message }}
          </p>

          <button
            type="button"
            class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-700"
            @click="refresh"
          >
            <Icon name="lucide:refresh-cw" class="h-4 w-4" />
            Tekrar dene
          </button>
        </div>
      </div>
    </div>

    <template v-else>
      <div
        v-if="errorMessage"
        class="mb-6 rounded-3xl border border-red-100 bg-red-50 p-5 text-sm font-medium text-red-700"
      >
        {{ errorMessage }}
      </div>

      <AdminTeamMemberForm
  v-model="form"
  submit-label="Değişiklikleri kaydet"
  :is-submitting="isSubmitting"
  @submit="submitUpdateMember"
/>

<section class="mt-8 rounded-3xl border border-red-100 bg-red-50 p-6">
  <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h2 class="text-lg font-semibold text-red-700">
        Ekip üyesini sil
      </h2>

      <p class="mt-2 text-sm leading-6 text-red-600">
        Bu işlem ekip üyesini veritabanından kalıcı olarak siler.
      </p>
      
    </div>

    <button
      type="button"
      :disabled="isDeleting"
      class="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
     @click="openDeleteModal"
    >
      <Icon
        v-if="isDeleting"
        name="lucide:loader-circle"
        class="h-4 w-4 animate-spin"
      />

      <Icon
        v-else
        name="lucide:trash-2"
        class="h-4 w-4"
      />

      {{ isDeleting ? 'Siliniyor...' : 'Kalıcı olarak sil' }}
    </button>
    
  </div>
  
</section>
  <DeleteConfirmModal
  :open="isDeleteModalOpen"
  :item-name="member?.name || form.name"
  :is-deleting="isDeleting"
  title="Ekip üyesi kalıcı olarak silinsin mi?"
  message="Bu işlem geri alınamaz. Ekip üyesi veritabanından kalıcı olarak silinecek."
  confirm-label="Evet, kalıcı olarak sil"
  cancel-label="Vazgeç"
  @close="closeDeleteModal"
  @confirm="confirmDeleteCurrentMember"
/>
    </template>
    
  </section>
</template>