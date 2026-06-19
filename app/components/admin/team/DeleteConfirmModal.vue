<script setup lang="ts">
withDefaults(defineProps<{
  open: boolean
  title?: string
  message?: string
  itemName?: string
  confirmLabel?: string
  cancelLabel?: string
  isDeleting?: boolean
}>(), {
  title: 'Kalıcı olarak silinsin mi?',
  message: 'Bu işlem geri alınamaz. Kayıt veritabanından kalıcı olarak silinecek.',
  itemName: '',
  confirmLabel: 'Evet, kalıcı olarak sil',
  cancelLabel: 'Vazgeç',
  isDeleting: false
})

const emit = defineEmits<{
  close: []
  confirm: []
}>()

function closeModal() {
  emit('close')
}

function confirmDelete() {
  emit('confirm')
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
      role="dialog"
      aria-modal="true"
    >
      <!-- Overlay -->
      <button
        type="button"
        class="absolute inset-0 bg-slate-950/50 backdrop-blur-sm"
        aria-label="Modalı kapat"
        :disabled="isDeleting"
        @click="closeModal"
      />

      <!-- Modal card -->
      <section
        class="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-red-100 bg-white p-7 shadow-2xl shadow-slate-950/20"
      >
        <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
          <Icon name="lucide:trash-2" class="h-7 w-7 text-red-600" />
        </div>

        <h2 class="text-2xl font-bold tracking-tight text-slate-950">
          {{ title }}
        </h2>

        <p
          v-if="itemName"
          class="mt-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
        >
          {{ itemName }}
        </p>

        <p class="mt-4 text-sm leading-7 text-slate-600">
          {{ message }}
        </p>

        <div class="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            :disabled="isDeleting"
            class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            @click="closeModal"
          >
            {{ cancelLabel }}
          </button>

          <button
            type="button"
            :disabled="isDeleting"
            class="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            @click="confirmDelete"
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

            {{ isDeleting ? 'Siliniyor...' : confirmLabel }}
          </button>
        </div>
      </section>
    </div>
  </Teleport>
</template>