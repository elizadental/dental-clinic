<script setup lang="ts">
import type { LocaleText } from '~~/shared/types/team-member'

const props = withDefaults(defineProps<{
  modelValue: LocaleText[]
  title: string
  addLabel: string
  itemLabel?: string
  trPlaceholder?: string
  enPlaceholder?: string
  textarea?: boolean
  rows?: number
}>(), {
  itemLabel: 'Kayıt',
  trPlaceholder: 'Türkçe',
  enPlaceholder: 'English',
  textarea: false,
  rows: 4
})

const emit = defineEmits<{
  'update:modelValue': [value: LocaleText[]]
}>()

function addItem() {
  emit('update:modelValue', [
    ...props.modelValue,
    {
      tr: '',
      en: ''
    }
  ])
}

function updateItem(index: number, locale: keyof LocaleText, value: string) {
  const nextItems = [...props.modelValue]

  const currentItem = nextItems[index] || {
    tr: '',
    en: ''
  }

  const updatedItem: LocaleText = {
    tr: locale === 'tr' ? value : currentItem.tr,
    en: locale === 'en' ? value : currentItem.en
  }

  nextItems[index] = updatedItem

  emit('update:modelValue', nextItems)
}

function removeItem(index: number) {
  const nextItems = [...props.modelValue]
  nextItems.splice(index, 1)

  emit('update:modelValue', nextItems)
}
</script>

<template>
  <section class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
    <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <h2 class="text-lg font-semibold text-slate-950">
        {{ title }}
      </h2>

      <button
        type="button"
        class="admin-secondary-button"
        @click="addItem"
      >
        <Icon name="lucide:plus" class="h-4 w-4" />
        {{ addLabel }}
      </button>
    </div>

    <div
      v-if="!modelValue.length"
      class="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5 text-center text-sm text-slate-500"
    >
      Henüz kayıt eklenmedi.
    </div>

    <div
      v-else
      class="space-y-5"
    >
      <div
        v-for="(item, index) in modelValue"
        :key="index"
        class="rounded-2xl border border-slate-100 bg-slate-50 p-4"
      >
        <div class="mb-4 flex items-center justify-between gap-4">
          <p class="text-sm font-bold text-slate-700">
            {{ itemLabel }} {{ index + 1 }}
          </p>

          <button
            type="button"
            class="rounded-full px-3 py-1.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            @click="removeItem(index)"
          >
            Sil
          </button>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <textarea
            v-if="textarea"
            :value="item.tr"
            :rows="rows"
            class="admin-input resize-y"
            :placeholder="trPlaceholder"
            @input="updateItem(index, 'tr', ($event.target as HTMLTextAreaElement).value)"
          />

          <input
            v-else
            :value="item.tr"
            type="text"
            class="admin-input"
            :placeholder="trPlaceholder"
            @input="updateItem(index, 'tr', ($event.target as HTMLInputElement).value)"
          >

          <textarea
            v-if="textarea"
            :value="item.en"
            :rows="rows"
            class="admin-input resize-y"
            :placeholder="enPlaceholder"
            @input="updateItem(index, 'en', ($event.target as HTMLTextAreaElement).value)"
          />

          <input
            v-else
            :value="item.en"
            type="text"
            class="admin-input"
            :placeholder="enPlaceholder"
            @input="updateItem(index, 'en', ($event.target as HTMLInputElement).value)"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.admin-input {
  width: 100%;
  border-radius: 1rem;
  border: 1px solid rgb(226 232 240);
  background: white;
  padding: 0.8rem 1rem;
  font-size: 0.875rem;
  color: rgb(15 23 42);
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.admin-input:focus {
  border-color: rgb(14 165 233);
  box-shadow: 0 0 0 4px rgb(14 165 233 / 0.12);
}

.admin-secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 9999px;
  border: 1px solid rgb(226 232 240);
  background: white;
  padding: 0.55rem 0.9rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: rgb(71 85 105);
  transition: all 0.2s ease;
}

.admin-secondary-button:hover {
  border-color: rgb(186 230 253);
  background: rgb(240 249 255);
  color: rgb(2 132 199);
}
</style>