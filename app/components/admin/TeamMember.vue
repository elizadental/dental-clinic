<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'

import type {
  ContactInfo,
  LocaleText,
  SpokenLanguageCode,
  TeamMemberRole
} from '~~/shared/types/team-member'

type TeamMemberFormState = {
  slug: string
  name: string
  role: TeamMemberRole
  title: LocaleText
  specialty: LocaleText
  short_bio: LocaleText
  bio_paragraphs: LocaleText[]
  expertise_areas: LocaleText[]
  education: LocaleText[]
  certificates: LocaleText[]
  spoken_languages: SpokenLanguageCode[]
  image: string
  contact: ContactInfo
  show_contact: boolean
  featured: boolean
  display_order: number
  is_active: boolean
}

const props = defineProps<{
  modelValue: TeamMemberFormState
  submitLabel: string
  isSubmitting?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: TeamMemberFormState]
  submit: []
}>()
const { uploadTeamMemberImage } = useAdminTeam()

const imageFileInput = ref<HTMLInputElement | null>(null)
const selectedImageFile = ref<File | null>(null)
const selectedImagePreviewUrl = ref('')
const isUploadingImage = ref(false)
const imageUploadError = ref('')
const imageUploadSuccess = ref('')

const allowedImageMimeTypes = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif'
]

const maxImageFileSize = 5 * 1024 * 1024 // 5 MB

const form = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
const imagePreviewSrc = computed(() => {
  return selectedImagePreviewUrl.value || form.value.image
})

const roleOptions: { label: string; value: TeamMemberRole }[] = [
  { label: 'Doktor', value: 'doctor' },
  { label: 'Yönetim', value: 'admin' },
  { label: 'Klinik', value: 'clinic' }
]

const languageOptions: { label: string; value: SpokenLanguageCode }[] = [
  { label: 'Türkçe', value: 'tr' },
  { label: 'English', value: 'en' },
  { label: 'Arapça', value: 'ar' }
]

function updateField<Key extends keyof TeamMemberFormState>(
  key: Key,
  value: TeamMemberFormState[Key]
) {
  form.value = {
    ...form.value,
    [key]: value
  }
}

function updateLocaleField(
  key: 'title' | 'specialty' | 'short_bio',
  locale: keyof LocaleText,
  value: string
) {
  form.value = {
    ...form.value,
    [key]: {
      ...form.value[key],
      [locale]: value
    }
  }
}

function updateContactField(key: keyof ContactInfo, value: string) {
  form.value = {
    ...form.value,
    contact: {
      ...form.value.contact,
      [key]: value || undefined
    }
  }
}

function addLocaleItem(
  key: 'bio_paragraphs' | 'expertise_areas' | 'education' | 'certificates'
) {
  form.value = {
    ...form.value,
    [key]: [
      ...form.value[key],
      {
        tr: '',
        en: ''
      }
    ]
  }
}

function updateLocaleItem(
  key: 'bio_paragraphs' | 'expertise_areas' | 'education' | 'certificates',
  index: number,
  locale: keyof LocaleText,
  value: string
) {
  const items = [...form.value[key]]

  items[index] = {
    ...items[index],
    [locale]: value
  }

  form.value = {
    ...form.value,
    [key]: items
  }
}

function removeLocaleItem(
  key: 'bio_paragraphs' | 'expertise_areas' | 'education' | 'certificates',
  index: number
) {
  const items = [...form.value[key]]
  items.splice(index, 1)

  form.value = {
    ...form.value,
    [key]: items
  }
}

function toggleLanguage(language: SpokenLanguageCode) {
  const currentLanguages = form.value.spoken_languages

  if (currentLanguages.includes(language)) {
    form.value = {
      ...form.value,
      spoken_languages: currentLanguages.filter((item) => item !== language)
    }

    return
  }

  form.value = {
    ...form.value,
    spoken_languages: [...currentLanguages, language]
  }
}
function releaseSelectedImagePreview() {
  if (!selectedImagePreviewUrl.value) {
    return
  }

  URL.revokeObjectURL(selectedImagePreviewUrl.value)
  selectedImagePreviewUrl.value = ''
}

function getUploadErrorMessage(error: unknown) {
  if (typeof error === 'object' && error !== null) {
    if ('statusMessage' in error && typeof error.statusMessage === 'string') {
      return error.statusMessage
    }

    if ('message' in error && typeof error.message === 'string') {
      return error.message
    }
  }

  return 'Görsel yüklenemedi. Lütfen tekrar deneyin.'
}

function handleImageFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]

  imageUploadError.value = ''
  imageUploadSuccess.value = ''

  if (!file) {
    return
  }

  if (!allowedImageMimeTypes.includes(file.type)) {
    imageUploadError.value = 'Sadece JPG, PNG, WEBP veya AVIF görsel yükleyebilirsiniz.'
    input.value = ''
    return
  }

  if (file.size > maxImageFileSize) {
    imageUploadError.value = 'Görsel 5 MB’den küçük olmalı.'
    input.value = ''
    return
  }

  selectedImageFile.value = file

  releaseSelectedImagePreview()
  selectedImagePreviewUrl.value = URL.createObjectURL(file)
}

function clearSelectedImageFile() {
  selectedImageFile.value = null
  imageUploadError.value = ''
  imageUploadSuccess.value = ''

  releaseSelectedImagePreview()

  if (imageFileInput.value) {
    imageFileInput.value.value = ''
  }
}

async function uploadSelectedImage() {
  if (isUploadingImage.value) {
    return
  }

  if (!selectedImageFile.value) {
    imageUploadError.value = 'Önce bir görsel seçin.'
    return
  }

  if (!form.value.slug.trim()) {
    imageUploadError.value = 'Görsel yüklemeden önce slug alanını doldurun.'
    return
  }

  imageUploadError.value = ''
  imageUploadSuccess.value = ''
  isUploadingImage.value = true

  try {
    const result = await uploadTeamMemberImage(
      selectedImageFile.value,
      form.value.slug,
      form.value.role
    )

    updateField('image', result.publicUrl)

    imageUploadSuccess.value = 'Görsel Supabase Storage üzerine yüklendi.'
    clearSelectedImageFile()
  } catch (error) {
    imageUploadError.value = getUploadErrorMessage(error)
  } finally {
    isUploadingImage.value = false
  }
}

onBeforeUnmount(() => {
  releaseSelectedImagePreview()
})
function submitForm() {
  emit('submit')
}
</script>

<template>
  <form
    class="space-y-6"
    @submit.prevent="submitForm"
  >
    <!-- Main info -->
    <section class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <h2 class="text-lg font-semibold text-slate-950">
        Temel Bilgiler
      </h2>

      <div class="mt-6 grid gap-5 md:grid-cols-2">
        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            İsim
          </span>

          <input
            :value="form.name"
            type="text"
            required
            class="admin-input"
            placeholder="Dt. Ad Soyad"
            @input="updateField('name', ($event.target as HTMLInputElement).value)"
          >
        </label>

        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            Slug
          </span>

          <input
            :value="form.slug"
            type="text"
            required
            class="admin-input"
            placeholder="ad-soyad"
            @input="updateField('slug', ($event.target as HTMLInputElement).value)"
          >
        </label>

        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            Rol
          </span>

          <select
            :value="form.role"
            class="admin-input"
            @change="updateField('role', ($event.target as HTMLSelectElement).value as TeamMemberRole)"
          >
            <option
              v-for="option in roleOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </label>

        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            Sıra
          </span>

          <input
            :value="form.display_order"
            type="number"
            min="0"
            class="admin-input"
            @input="updateField('display_order', Number(($event.target as HTMLInputElement).value))"
          >
        </label>

        <div class="md:col-span-2 rounded-2xl border border-slate-100 bg-slate-50 p-5">
  <div class="grid gap-5 lg:grid-cols-[180px_1fr]">
    <div
      class="overflow-hidden rounded-2xl border border-slate-200 bg-white"
    >
      <img
        v-if="imagePreviewSrc"
        :src="imagePreviewSrc"
        alt="Ekip üyesi görsel önizleme"
        class="h-56 w-full object-cover"
      >

      <div
        v-else
        class="flex h-56 items-center justify-center text-slate-400"
      >
        <Icon name="lucide:image" class="h-10 w-10" />
      </div>
    </div>

    <div>
      <h3 class="text-sm font-bold text-slate-800">
        Profil görseli
      </h3>

      <p class="mt-1 text-sm leading-6 text-slate-500">
        Görseli Supabase Storage üzerine yükleyin. Yükleme tamamlanınca aşağıdaki görsel URL alanı otomatik güncellenir.
      </p>

      <div class="mt-5 grid gap-4 lg:grid-cols-[1fr_auto]">
        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            Görsel seç
          </span>

          <input
            ref="imageFileInput"
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            class="admin-input file:mr-4 file:rounded-full file:border-0 file:bg-sky-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-sky-700"
            @change="handleImageFileChange"
          >
        </label>

        <div class="flex items-end">
          <button
            type="button"
            :disabled="!selectedImageFile || isUploadingImage"
            class="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-sky-600 px-5 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60"
            @click="uploadSelectedImage()"
          >
            <Icon
              v-if="isUploadingImage"
              name="lucide:loader-circle"
              class="h-4 w-4 animate-spin"
            />

            <Icon
              v-else
              name="lucide:upload"
              class="h-4 w-4"
            />

            {{ isUploadingImage ? 'Yükleniyor...' : 'Yükle' }}
          </button>
        </div>
      </div>

      <div
        v-if="selectedImageFile"
        class="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-600"
      >
        <span>
          Seçilen dosya: <strong>{{ selectedImageFile.name }}</strong>
        </span>

        <button
          type="button"
          class="font-semibold text-red-600"
          @click="clearSelectedImageFile"
        >
          Seçimi kaldır
        </button>
      </div>

      <p
        v-if="imageUploadError"
        class="mt-3 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
      >
        {{ imageUploadError }}
      </p>

      <p
        v-if="imageUploadSuccess"
        class="mt-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
      >
        {{ imageUploadSuccess }}
      </p>

      <label class="mt-5 block">
        <span class="mb-2 block text-sm font-semibold text-slate-700">
          Görsel URL / yolu
        </span>

        <input
          :value="form.image"
          type="text"
          required
          class="admin-input"
          placeholder="https://... veya /doctors/doctor-1.png"
          @input="updateField('image', ($event.target as HTMLInputElement).value)"
        >
      </label>
    </div>
  </div>
</div>
      </div>
    </section>

    <!-- Title and specialty -->
    <section class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <h2 class="text-lg font-semibold text-slate-950">
        Ünvan ve Uzmanlık Alanı
      </h2>

      <div class="mt-6 grid gap-5 md:grid-cols-2">
        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            Ünvan TR
          </span>

          <input
            :value="form.title.tr"
            type="text"
            required
            class="admin-input"
            @input="updateLocaleField('title', 'tr', ($event.target as HTMLInputElement).value)"
          >
        </label>

        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            Ünvan EN
          </span>

          <input
            :value="form.title.en"
            type="text"
            required
            class="admin-input"
            @input="updateLocaleField('title', 'en', ($event.target as HTMLInputElement).value)"
          >
        </label>

        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            Uzmanlık / Açıklama TR
          </span>

          <input
            :value="form.specialty.tr"
            type="text"
            required
            class="admin-input"
            @input="updateLocaleField('specialty', 'tr', ($event.target as HTMLInputElement).value)"
          >
        </label>

        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            Uzmanlık / Açıklama EN
          </span>

          <input
            :value="form.specialty.en"
            type="text"
            required
            class="admin-input"
            @input="updateLocaleField('specialty', 'en', ($event.target as HTMLInputElement).value)"
          >
        </label>
      </div>
    </section>

    <!-- Short bio -->
    <section class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <h2 class="text-lg font-semibold text-slate-950">
        Kısa Bio
      </h2>

      <div class="mt-6 grid gap-5 md:grid-cols-2">
        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            Kısa Bio TR
          </span>

          <textarea
            :value="form.short_bio.tr"
            rows="5"
            class="admin-input resize-y"
            @input="updateLocaleField('short_bio', 'tr', ($event.target as HTMLTextAreaElement).value)"
          />
        </label>

        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            Kısa Bio EN
          </span>

          <textarea
            :value="form.short_bio.en"
            rows="5"
            class="admin-input resize-y"
            @input="updateLocaleField('short_bio', 'en', ($event.target as HTMLTextAreaElement).value)"
          />
        </label>
      </div>
    </section>

    <!-- Repeating sections -->
    <section class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <div class="mb-6 flex items-center justify-between gap-4">
        <h2 class="text-lg font-semibold text-slate-950">
          Bio Paragrafları
        </h2>

        <button
          type="button"
          class="admin-secondary-button"
          @click="addLocaleItem('bio_paragraphs')"
        >
          <Icon name="lucide:plus" class="h-4 w-4" />
          Paragraf ekle
        </button>
      </div>

      <div class="space-y-5">
        <div
          v-for="(item, index) in form.bio_paragraphs"
          :key="index"
          class="rounded-2xl border border-slate-100 bg-slate-50 p-4"
        >
          <div class="mb-4 flex items-center justify-between">
            <p class="text-sm font-bold text-slate-700">
              Paragraf {{ index + 1 }}
            </p>

            <button
              type="button"
              class="text-sm font-semibold text-red-600"
              @click="removeLocaleItem('bio_paragraphs', index)"
            >
              Sil
            </button>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <textarea
              :value="item.tr"
              rows="5"
              class="admin-input resize-y"
              placeholder="TR"
              @input="updateLocaleItem('bio_paragraphs', index, 'tr', ($event.target as HTMLTextAreaElement).value)"
            />

            <textarea
              :value="item.en"
              rows="5"
              class="admin-input resize-y"
              placeholder="EN"
              @input="updateLocaleItem('bio_paragraphs', index, 'en', ($event.target as HTMLTextAreaElement).value)"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      v-for="section in [
        { key: 'expertise_areas', title: 'Uzmanlık Alanları', button: 'Alan ekle' },
        { key: 'education', title: 'Eğitim', button: 'Eğitim ekle' },
        { key: 'certificates', title: 'Sertifikalar', button: 'Sertifika ekle' }
      ]"
      :key="section.key"
      class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
    >
      <div class="mb-6 flex items-center justify-between gap-4">
        <h2 class="text-lg font-semibold text-slate-950">
          {{ section.title }}
        </h2>

        <button
          type="button"
          class="admin-secondary-button"
          @click="addLocaleItem(section.key as 'expertise_areas' | 'education' | 'certificates')"
        >
          <Icon name="lucide:plus" class="h-4 w-4" />
          {{ section.button }}
        </button>
      </div>

      <div class="space-y-4">
        <div
          v-for="(item, index) in form[section.key as 'expertise_areas' | 'education' | 'certificates']"
          :key="index"
          class="grid gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 md:grid-cols-[1fr_1fr_auto]"
        >
          <input
            :value="item.tr"
            type="text"
            class="admin-input"
            placeholder="TR"
            @input="updateLocaleItem(section.key as 'expertise_areas' | 'education' | 'certificates', index, 'tr', ($event.target as HTMLInputElement).value)"
          >

          <input
            :value="item.en"
            type="text"
            class="admin-input"
            placeholder="EN"
            @input="updateLocaleItem(section.key as 'expertise_areas' | 'education' | 'certificates', index, 'en', ($event.target as HTMLInputElement).value)"
          >

          <button
            type="button"
            class="rounded-full px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-50"
            @click="removeLocaleItem(section.key as 'expertise_areas' | 'education' | 'certificates', index)"
          >
            Sil
          </button>
        </div>
      </div>
    </section>

    <!-- Contact and settings -->
    <section class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <h2 class="text-lg font-semibold text-slate-950">
        İletişim ve Durum
      </h2>

      <div class="mt-6 grid gap-5 md:grid-cols-2">
        <label class="block">
          <span class="mb-2 block text-sm font-semibold text-slate-700">
            Email
          </span>

          <input
            :value="form.contact.email || ''"
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
            :value="form.contact.phone || ''"
            type="text"
            class="admin-input"
            placeholder="+905012663131"
            @input="updateContactField('phone', ($event.target as HTMLInputElement).value)"
          >
        </label>
      </div>

      <div class="mt-6 flex flex-wrap gap-3">
        <label
          v-for="language in languageOptions"
          :key="language.value"
          class="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600"
        >
          <input
            type="checkbox"
            class="h-4 w-4 rounded border-slate-300 text-sky-600"
            :checked="form.spoken_languages.includes(language.value)"
            @change="toggleLanguage(language.value)"
          >
          {{ language.label }}
        </label>
      </div>

      <div class="mt-6 grid gap-3 sm:grid-cols-3">
        <label class="admin-checkbox-card">
          <input
            type="checkbox"
            :checked="form.show_contact"
            @change="updateField('show_contact', ($event.target as HTMLInputElement).checked)"
          >
          <span>İletişimi göster</span>
        </label>

        <label class="admin-checkbox-card">
          <input
            type="checkbox"
            :checked="form.featured"
            @change="updateField('featured', ($event.target as HTMLInputElement).checked)"
          >
          <span>Öne çıkan</span>
        </label>

        <label class="admin-checkbox-card">
          <input
            type="checkbox"
            :checked="form.is_active"
            @change="updateField('is_active', ($event.target as HTMLInputElement).checked)"
          >
          <span>Aktif</span>
        </label>
      </div>
    </section>

    <!-- Submit -->
    <div class="sticky bottom-4 z-10 flex justify-end">
      <button
        type="submit"
        :disabled="isSubmitting"
        class="btn-clinic shadow-xl shadow-sky-100 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Icon
          v-if="isSubmitting"
          name="lucide:loader-circle"
          class="h-4 w-4 animate-spin"
        />

        <Icon
          v-else
          name="lucide:save"
          class="h-4 w-4"
        />

        <span>{{ isSubmitting ? 'Kaydediliyor...' : submitLabel }}</span>
      </button>
    </div>
  </form>
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
}
</style>