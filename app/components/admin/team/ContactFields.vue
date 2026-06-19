<script setup lang="ts">
import type { ContactInfo, SocialLinks } from '~~/shared/types/team-member'

const props = defineProps<{
  modelValue: ContactInfo
}>()

const emit = defineEmits<{
  'update:modelValue': [value: ContactInfo]
}>()

type ContactKey = 'email' | 'phone'
type SocialKey = keyof SocialLinks

function updateContactField(key: ContactKey, value: string) {
  emit('update:modelValue', {
    ...props.modelValue,
    [key]: value
  })
}

function updateSocialField(key: SocialKey, value: string) {
  const nextSocials: SocialLinks = {
    ...(props.modelValue.socials || {}),
    [key]: value
  }

  emit('update:modelValue', {
    ...props.modelValue,
    socials: nextSocials
  })
}
</script>

<template>
  <section class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
    <h2 class="text-lg font-semibold text-slate-950">
      İletişim Bilgileri
    </h2>

    <p class="mt-2 text-sm leading-6 text-slate-500">
      Bu bilgiler sadece gerekli olduğunda gösterilecek. Görünürlük ayarını ayrıca kontrol edeceğiz.
    </p>

    <div class="mt-6 grid gap-5 md:grid-cols-2">
      <label class="block">
        <span class="mb-2 block text-sm font-semibold text-slate-700">
          Email
        </span>

        <input
          :value="modelValue.email || ''"
          type="email"
          class="admin-input"
          placeholder="info@elizadent.com"
          @input="updateContactField('email', ($event.target as HTMLInputElement).value)"
        >
      </label>

      <label class="block">
        <span class="mb-2 block text-sm font-semibold text-slate-700">
          Telefon
        </span>

        <input
          :value="modelValue.phone || ''"
          type="text"
          class="admin-input"
          placeholder="+905012663131"
          @input="updateContactField('phone', ($event.target as HTMLInputElement).value)"
        >
      </label>
    </div>

    <div class="mt-8 border-t border-slate-100 pt-6">
      <h3 class="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
        Sosyal Bağlantılar
      </h3>

      <div class="mt-5 grid gap-5 md:grid-cols-3">
        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            Instagram
          </span>

          <input
            :value="modelValue.socials?.instagram || ''"
            type="url"
            class="admin-input"
            placeholder="https://instagram.com/..."
            @input="updateSocialField('instagram', ($event.target as HTMLInputElement).value)"
          >
        </label>

        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            LinkedIn
          </span>

          <input
            :value="modelValue.socials?.linkedin || ''"
            type="url"
            class="admin-input"
            placeholder="https://linkedin.com/..."
            @input="updateSocialField('linkedin', ($event.target as HTMLInputElement).value)"
          >
        </label>

        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            Website
          </span>

          <input
            :value="modelValue.socials?.website || ''"
            type="url"
            class="admin-input"
            placeholder="https://..."
            @input="updateSocialField('website', ($event.target as HTMLInputElement).value)"
          >
        </label>
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
</style>