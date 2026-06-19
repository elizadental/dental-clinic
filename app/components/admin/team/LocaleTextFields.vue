<script setup lang="ts">
import type { LocaleText } from '~~/shared/types/team-member'

const props = withDefaults(defineProps<{
  modelValue: LocaleText
  title: string
  trLabel?: string
  enLabel?: string
  trPlaceholder?: string
  enPlaceholder?: string
  required?: boolean
  textarea?: boolean
  rows?: number
}>(), {
  trLabel: 'Türkçe',
  enLabel: 'English',
  trPlaceholder: '',
  enPlaceholder: '',
  required: false,
  textarea: false,
  rows: 4
})

const emit = defineEmits<{
  'update:modelValue': [value: LocaleText]
}>()

function updateField(locale: keyof LocaleText, value: string) {
  emit('update:modelValue', {
    ...props.modelValue,
    [locale]: value
  })
}
</script>

<template>
  <section class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
    <h2 class="text-lg font-semibold text-slate-950">
      {{ title }}
    </h2>

    <div class="mt-6 grid gap-5 md:grid-cols-2">
      <label class="block">
        <span class="mb-2 block text-sm font-semibold text-slate-700">
          {{ trLabel }}
        </span>

        <textarea
          v-if="textarea"
          :value="modelValue.tr"
          :rows="rows"
          :required="required"
          class="admin-input resize-y"
          :placeholder="trPlaceholder"
          @input="updateField('tr', ($event.target as HTMLTextAreaElement).value)"
        />

        <input
          v-else
          :value="modelValue.tr"
          type="text"
          :required="required"
          class="admin-input"
          :placeholder="trPlaceholder"
          @input="updateField('tr', ($event.target as HTMLInputElement).value)"
        >
      </label>

      <label class="block">
        <span class="mb-2 block text-sm font-semibold text-slate-700">
          {{ enLabel }}
        </span>

        <textarea
          v-if="textarea"
          :value="modelValue.en"
          :rows="rows"
          :required="required"
          class="admin-input resize-y"
          :placeholder="enPlaceholder"
          @input="updateField('en', ($event.target as HTMLTextAreaElement).value)"
        />

        <input
          v-else
          :value="modelValue.en"
          type="text"
          :required="required"
          class="admin-input"
          :placeholder="enPlaceholder"
          @input="updateField('en', ($event.target as HTMLInputElement).value)"
        >
      </label>
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
</style>