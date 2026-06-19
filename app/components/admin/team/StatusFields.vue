<script setup lang="ts">
import type { SpokenLanguageCode } from '~~/shared/types/team-member'

const props = defineProps<{
  spokenLanguages: SpokenLanguageCode[]
  showContact: boolean
  featured: boolean
  isActive: boolean
}>()

const emit = defineEmits<{
  'update:spokenLanguages': [value: SpokenLanguageCode[]]
  'update:showContact': [value: boolean]
  'update:featured': [value: boolean]
  'update:isActive': [value: boolean]
}>()

const languageOptions: { label: string; value: SpokenLanguageCode }[] = [
  {
    label: 'Türkçe',
    value: 'tr'
  },
  {
    label: 'English',
    value: 'en'
  },
  {
    label: 'Arapça',
    value: 'ar'
  }
]

function toggleLanguage(language: SpokenLanguageCode) {
  if (props.spokenLanguages.includes(language)) {
    const nextLanguages = props.spokenLanguages.filter((item) => item !== language)

    emit('update:spokenLanguages', nextLanguages.length ? nextLanguages : ['tr'])
    return
  }

  emit('update:spokenLanguages', [...props.spokenLanguages, language])
}
</script>

<template>
  <section class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
    <h2 class="text-lg font-semibold text-slate-950">
      Dil, Görünürlük ve Durum
    </h2>

    <div class="mt-6">
      <p class="mb-3 text-sm font-semibold text-slate-700">
        Konuşulan Diller
      </p>

      <div class="flex flex-wrap gap-3">
        <label
          v-for="language in languageOptions"
          :key="language.value"
          class="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
        >
          <input
            type="checkbox"
            class="h-4 w-4 rounded border-slate-300 text-sky-600"
            :checked="spokenLanguages.includes(language.value)"
            @change="toggleLanguage(language.value)"
          >

          {{ language.label }}
        </label>
      </div>
    </div>

    <div class="mt-6 grid gap-3 sm:grid-cols-3">
      <label class="admin-checkbox-card">
        <input
          type="checkbox"
          :checked="showContact"
          @change="emit('update:showContact', ($event.target as HTMLInputElement).checked)"
        >

        <span>İletişimi göster</span>
      </label>

      <label class="admin-checkbox-card">
        <input
          type="checkbox"
          :checked="featured"
          @change="emit('update:featured', ($event.target as HTMLInputElement).checked)"
        >

        <span>Öne çıkan</span>
      </label>

      <label class="admin-checkbox-card">
        <input
          type="checkbox"
          :checked="isActive"
          @change="emit('update:isActive', ($event.target as HTMLInputElement).checked)"
        >

        <span>Aktif</span>
      </label>
    </div>
  </section>
</template>

<style scoped>
.admin-checkbox-card {
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 0.7rem;
  border-radius: 1rem;
  border: 1px solid rgb(226 232 240);
  background: rgb(248 250 252);
  padding: 0.9rem 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: rgb(71 85 105);
  transition: all 0.2s ease;
}

.admin-checkbox-card:hover {
  border-color: rgb(186 230 253);
  background: rgb(240 249 255);
  color: rgb(2 132 199);
}
</style>