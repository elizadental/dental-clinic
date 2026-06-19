<script setup lang="ts">
import type {
  ContactInfo,
  LocaleText,
  TeamMemberRow
} from '~~/shared/types/team-member'

definePageMeta({
  layout: 'admin',
  middleware: 'admin-auth'
})

const { getAdminTeamMembers } = useAdminTeam()

const roleLabels: Record<TeamMemberRow['role'], string> = {
  doctor: 'Doktor',
  admin: 'Yönetim',
  clinic: 'Klinik'
}

const {
  data: members,
  status,
  error,
  refresh
} = await useAsyncData<TeamMemberRow[]>(
  'admin-team-members',
  () => getAdminTeamMembers(),
  {
    default: () => []
  }
)

const isLoading = computed(() => status.value === 'pending')

const totalMembers = computed(() => members.value.length)

function getText(value: LocaleText | null | undefined) {
  return value?.tr || value?.en || '—'
}

function getContactEmail(contact: ContactInfo | null | undefined) {
  return contact?.email || ''
}

function getRoleLabel(role: TeamMemberRow['role']) {
  return roleLabels[role]
}

async function refreshMembers() {
  await refresh()
}

useSeoMeta({
  title: 'Ekip Yönetimi | Elizadent Admin',
  robots: 'noindex, nofollow'
})
</script>

<template>
  <section>
    <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p class="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
          Ekip
        </p>

        <h1 class="text-3xl font-bold tracking-tight text-slate-950">
          Ekip Yönetimi
        </h1>

        <p class="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
          Doktor, yönetici ve klinik ekibi üyelerini buradan yöneteceğiz.
        </p>
      </div>

      <NuxtLink
        to="/admin/team/new"
        class="btn-clinic"
      >
        <Icon name="lucide:plus" class="h-4 w-4" />
        <span>Yeni ekip üyesi</span>
      </NuxtLink>
    </div>

    <div class="mb-6 grid gap-4 sm:grid-cols-3">
      <article class="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
        <p class="text-sm font-medium text-slate-500">
          Toplam kayıt
        </p>

        <p class="mt-2 text-3xl font-bold text-slate-950">
          {{ totalMembers }}
        </p>
      </article>

      <article class="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
        <p class="text-sm font-medium text-slate-500">
          Veri yolu
        </p>

        <p class="mt-2 text-lg font-bold text-slate-950">
          Composable → API
        </p>
      </article>

      <article class="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
        <p class="text-sm font-medium text-slate-500">
          Durum
        </p>

        <p class="mt-2 text-lg font-bold text-emerald-600">
          Server kontrollü
        </p>
      </article>
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
        Ekip üyeleri yükleniyor...
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
            Ekip üyeleri yüklenemedi
          </h2>

          <p class="mt-2 text-sm leading-6 text-red-600">
            {{ error.message }}
          </p>

          <button
            type="button"
            class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-700"
            @click="refreshMembers"
          >
            <Icon name="lucide:refresh-cw" class="h-4 w-4" />
            Tekrar dene
          </button>
        </div>
      </div>
    </div>

    <div
      v-else-if="!members.length"
      class="rounded-3xl border border-dashed border-slate-200 bg-white p-10 text-center shadow-sm"
    >
      <Icon
        name="lucide:users-round"
        class="mx-auto mb-4 h-10 w-10 text-sky-600"
      />

      <h2 class="text-lg font-semibold text-slate-900">
        Henüz ekip üyesi yok
      </h2>

      <p class="mx-auto mt-2 max-w-xl text-sm leading-7 text-slate-500">
        Supabase tablosunda ekip üyesi bulunamadı.
      </p>
    </div>

    <div
      v-else
      class="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm"
    >
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-slate-100">
          <thead class="bg-slate-50">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Sıra
              </th>

              <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Üye
              </th>

              <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Rol
              </th>

              <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Ünvan
              </th>

              <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                İletişim
              </th>

              <th class="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                Durum
              </th>

              <th class="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                İşlem
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-slate-100 bg-white">
            <tr
              v-for="member in members"
              :key="member.id"
              class="transition hover:bg-slate-50/70"
            >
              <td class="whitespace-nowrap px-6 py-5 text-sm font-semibold text-slate-700">
                {{ member.display_order }}
              </td>

              <td class="px-6 py-5">
                <div class="flex items-center gap-4">
                  <img
                    :src="member.image"
                    :alt="member.name"
                    class="h-14 w-14 rounded-2xl object-cover ring-1 ring-slate-100"
                  >

                  <div>
                    <p class="font-semibold text-slate-950">
                      {{ member.name }}
                    </p>

                    <p class="mt-1 text-xs text-slate-500">
                      {{ member.slug }}
                    </p>
                  </div>
                </div>
              </td>

              <td class="whitespace-nowrap px-6 py-5">
                <span class="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-700">
                  {{ getRoleLabel(member.role) }}
                </span>
              </td>

              <td class="px-6 py-5">
                <p class="text-sm font-medium text-slate-800">
                  {{ getText(member.title) }}
                </p>

                <p class="mt-1 max-w-xs text-xs leading-5 text-slate-500">
                  {{ getText(member.specialty) }}
                </p>
              </td>

              <td class="px-6 py-5">
                <p
                  v-if="getContactEmail(member.contact)"
                  class="text-sm text-slate-600"
                >
                  {{ getContactEmail(member.contact) }}
                </p>

                <p
                  v-else
                  class="text-sm text-slate-400"
                >
                  —
                </p>
              </td>

              <td class="whitespace-nowrap px-6 py-5">
                <div class="flex flex-wrap gap-2">
                  <span
                    class="rounded-full px-3 py-1.5 text-xs font-bold"
                    :class="
                      member.is_active
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-slate-100 text-slate-500'
                    "
                  >
                    {{ member.is_active ? 'Aktif' : 'Pasif' }}
                  </span>

                  <span
                    v-if="member.featured"
                    class="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700"
                  >
                    Öne çıkan
                  </span>
                </div>
              </td>

              <td class="whitespace-nowrap px-6 py-5 text-right">
                <NuxtLink
                  :to="`/admin/team/${member.id}/edit`"
                  class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
                >
                  <Icon name="lucide:pencil-line" class="h-4 w-4" />
                  Düzenle
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>