
<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'

const whatsappLink = "https://wa.me/905xxxxxxxxx"
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()

const isOpen = ref(false)
const isMobileOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const currentLang = computed(() => {
  return locale.value === 'tr'
    ? { code: 'TR', icon: 'flagpack:tr' }
    : { code: 'EN', icon: 'flagpack:gb' }
})

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function closeDropdown() {
  isOpen.value = false
}

function toggleMobile() {
  isMobileOpen.value = !isMobileOpen.value
}

function closeMobile() {
  isMobileOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  if (!dropdownRef.value) return

  if (!dropdownRef.value.contains(event.target as Node)) {
    closeDropdown()
  }
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscape)
})
</script>
<template>
<header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b">
  <!-- DESKTOP TOP BAR -->
  <div class="hidden md:block border-b bg-slate-50/80">
    <div class="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between text-xs text-gray-500">
      <div class="flex items-center gap-6">
        <span class="flex items-center gap-2">
          <Icon name="lucide:clock-3" class="w-4 h-4 text-sky-500" />
          {{ $t('home.topBar.hours') }}
        </span>

        <a
  href="https://www.google.com/maps?q=Atatürk+Mahallesi+Nazım+Hikmet+Ran+Caddesi+No:21/1+Samandağ+Hatay+Türkiye"
  target="_blank"
  rel="noopener noreferrer"
  class="flex items-center gap-2 hover:text-sky-500 transition"
>
  <Icon name="lucide:map-pin" class="w-4 h-4 text-sky-500" />
  {{ $t('home.topBar.location') }}
</a>
      </div>

      <div class="flex items-center gap-5">
        <a href="tel:+905012663131" class="hover:text-sky-500 transition">
          +90 501 266 31 31
        </a>

        <!-- LANGUAGE DESKTOP -->
        <div ref="dropdownRef" class="relative">
          <button
            @click.stop="toggleDropdown"
            class="h-8 flex items-center gap-2 px-2 rounded hover:bg-white transition"
          >
            <Icon :name="currentLang.icon" class="w-5 h-5" />
            <span class="font-medium text-gray-700">{{ currentLang.code }}</span>
            <Icon name="mdi:chevron-down" class="w-4 h-4" />
          </button>

          <div
            v-if="isOpen"
            class="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border overflow-hidden z-50 text-sm"
          >
            <NuxtLink
              :to="switchLocalePath('tr')"
              @click="closeDropdown"
              class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
            >
              <Icon name="flagpack:tr" class="w-5 h-5" />
              TR
            </NuxtLink>

            <NuxtLink
              :to="switchLocalePath('en')"
              @click="closeDropdown"
              class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
            >
              <Icon name="flagpack:gb" class="w-5 h-5" />
              EN
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MAIN HEADER -->
  <div class="max-w-7xl mx-auto px-4 py-2 flex items-center">
    <!-- LOGO -->
    <div class="flex items-center">
      <img
        src="/elizadent.jpeg"
        alt="Eliza Dental Clinic"
        class="h-14 md:h-20 w-auto object-contain"
      />
    </div>

    <!-- DESKTOP NAV -->
    <nav class="hidden md:flex flex-1 justify-center">
      <div class="flex items-center gap-8 text-sm font-medium tracking-wide text-gray-600">
        <NuxtLink to="/" class="relative group transition-colors duration-200 hover:text-sky-500">
          {{ $t('home.nav.home') }}
          <span class="absolute left-1/2 -bottom-1 h-[1px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NuxtLink>

        <NuxtLink to="/#services" class="relative group transition-colors duration-200 hover:text-sky-500">
          {{ $t('home.nav.services') }}
          <span class="absolute left-1/2 -bottom-1 h-[1px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NuxtLink>

        <NuxtLink to="/#gallery" class="relative group transition-colors duration-200 hover:text-sky-500">
          {{ $t('home.nav.gallery') }}
          <span class="absolute left-1/2 -bottom-1 h-[1px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NuxtLink>

        <NuxtLink to="/#doctors" class="relative group transition-colors duration-200 hover:text-sky-500">
          {{ $t('home.nav.doctors') }}
          <span class="absolute left-1/2 -bottom-1 h-[1px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NuxtLink>
        <NuxtLink to="/ekibimiz" class="relative group transition-colors duration-200 hover:text-sky-500">
          {{ $t('home.nav.team') }}
          <span class="absolute left-1/2 -bottom-1 h-[1px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NuxtLink>
        <NuxtLink to="/#contact" class="relative group transition-colors duration-200 hover:text-sky-500">
          {{ $t('home.nav.contact') }}
          <span class="absolute left-1/2 -bottom-1 h-[1px] w-0 bg-sky-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </NuxtLink>
      </div>
    </nav>

    <!-- RIGHT ACTIONS -->
    <div class="flex items-center gap-2 ml-auto">
      <!-- WHATSAPP -->
      <a
        :href="whatsappLink"
        target="_blank"
        class="h-10 w-10 flex items-center justify-center rounded hover:bg-green-50 transition text-gray-600 hover:text-green-500"
        aria-label="WhatsApp"
      >
        <Icon name="logos:whatsapp-icon" class="w-6 h-6" />
      </a>

      <!-- HAMBURGER -->
      <button
        @click="toggleMobile"
        class="md:hidden h-10 w-10 flex flex-col items-center justify-center gap-1"
        aria-label="Toggle mobile menu"
      >
        <span
          class="w-6 h-[2px] bg-gray-700 transition-transform duration-300"
          :class="isMobileOpen ? 'rotate-45 translate-y-1.5' : ''"
        />
        <span
          class="w-6 h-[2px] bg-gray-700 transition-opacity duration-300"
          :class="isMobileOpen ? 'opacity-0' : ''"
        />
        <span
          class="w-6 h-[2px] bg-gray-700 transition-transform duration-300"
          :class="isMobileOpen ? '-rotate-45 -translate-y-1.5' : ''"
        />
      </button>
    </div>
  </div>

  <!-- MOBILE MENU -->
  <div v-if="isMobileOpen" class="md:hidden border-t bg-white/95 backdrop-blur-md">
    <div class="flex flex-col px-6 py-5 gap-4 text-sm font-medium text-gray-600">
      <NuxtLink @click="closeMobile" to="/" class="hover:text-sky-500 transition">
        {{ $t('home.nav.home') }}
      </NuxtLink>

      <NuxtLink @click="closeMobile" to="/#services" class="hover:text-sky-500 transition">
        {{ $t('home.nav.services') }}
      </NuxtLink>

      <NuxtLink @click="closeMobile" to="/#gallery" class="hover:text-sky-500 transition">
        {{ $t('home.nav.gallery') }}
      </NuxtLink>

      <NuxtLink @click="closeMobile" to="/#doctors" class="hover:text-sky-500 transition">
        {{ $t('home.nav.doctors') }}
      </NuxtLink>
      <NuxtLink @click="closeMobile" to="/ekibimiz" class="hover:text-sky-500 transition">
        {{ $t('home.nav.team') }}
      </NuxtLink>
      <NuxtLink @click="closeMobile" to="/#contact" class="hover:text-sky-500 transition">
        {{ $t('home.nav.contact') }}
      </NuxtLink>

      <!-- MOBILE INFO -->
      <div class="pt-4 mt-2 border-t space-y-3 text-gray-500">
        <p class="flex items-center gap-2">
          <Icon name="lucide:clock-3" class="w-4 h-4 text-sky-500" />
          {{ $t('home.topBar.hours') }}
        </p>

        <a
          href="https://www.google.com/maps?q=Hatay+Samandag"
          target="_blank"
          class="flex items-center gap-2 hover:text-sky-500 transition"
        >
          <Icon name="lucide:map-pin" class="w-4 h-4 text-sky-500" />
          {{ $t('home.topBar.location') }}
        </a>

        <a href="tel:+905012663131" class="flex items-center gap-2 hover:text-sky-500 transition">
          <Icon name="lucide:phone" class="w-4 h-4 text-sky-500" />
          +90 501 266 31 31
        </a>
      </div>

      <!-- MOBILE LANGUAGE SWITCH -->
      <div class="flex gap-3 pt-4 border-t">
        <NuxtLink
          :to="switchLocalePath('tr')"
          @click="closeMobile"
          class="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
          :class="locale === 'tr' ? 'bg-gray-100 text-sky-600' : ''"
        >
          <Icon name="flagpack:tr" class="w-5 h-5" />
          TR
        </NuxtLink>

        <NuxtLink
          :to="switchLocalePath('en')"
          @click="closeMobile"
          class="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
          :class="locale === 'en' ? 'bg-gray-100 text-sky-600' : ''"
        >
          <Icon name="flagpack:gb" class="w-5 h-5" />
          EN
        </NuxtLink>
      </div>
    </div>
  </div>
</header>
</template>