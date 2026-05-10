
<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'

const whatsappLink = 'https://wa.me/905xxxxxxxxx'

const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()

const isOpen = ref(false)
const isMobileOpen = ref(false)
const isMobileServicesOpen = ref(false)

const dropdownRef = ref<HTMLElement | null>(null)

const serviceLinks = [
  {
    labelKey: 'home.services.items.esthetic.title',
    to: '/services/esthetic-dentistry'
  },
  {
    labelKey: 'home.services.items.implant.title',
    to: '/services/dental-implant'
  },
  {
    labelKey: 'home.services.items.whitening.title',
    to: '/services/teeth-whitening'
  },
  {
    labelKey: 'home.services.items.surgery.title',
    to: '/services/oral-surgery'
  },
  {
    labelKey: 'home.services.items.endo.title',
    to: '/services/root-canal-treatment'
  },
  {
    labelKey: 'home.services.items.smile.title',
    to: '/services/smile-design'
  },
  {
    labelKey: 'home.services.items.prosthesis.title',
    to: '/services/dental-prosthetics'
  },
  {
    labelKey: 'home.services.items.pedodonti.title',
    to: '/services/pediatric-dentistry'
  },
  {
    labelKey: 'home.services.items.periodontoloji.title',
    to: '/services/periodontology'
  },
  {
    labelKey: 'home.services.items.ortho.title',
    to: '/services/orthodontics'
  }
]

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

  if (!isMobileOpen.value) {
    isMobileServicesOpen.value = false
  }
}

function closeMobile() {
  isMobileOpen.value = false
  isMobileServicesOpen.value = false
}

function toggleMobileServices() {
  isMobileServicesOpen.value = !isMobileServicesOpen.value
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
    isMobileServicesOpen.value = false
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
  href=" https://maps.app.goo.gl/Qx3oFsYytPyJEn5FA?g_st=iw"
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
        src="/elizadentpng.png"
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

        <div class="relative group">
  <NuxtLink
    :to="localePath('/#services')"
    class="relative inline-flex items-center gap-1 transition-colors duration-200 hover:text-sky-500"
  >
    {{ $t('home.nav.services') }}

    <Icon
      name="lucide:chevron-down"
      class="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
    />

    <span class="absolute left-1/2 -bottom-1 h-[1px] w-0 bg-sky-400 transition-all duration-300 group-hover:left-0 group-hover:w-full" />
  </NuxtLink>

  <!-- Desktop services dropdown -->
  <div
    class="invisible absolute left-1/2 top-full z-50 mt-5 w-[680px] -translate-x-1/2 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
  >
    <div
      class="overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-4 shadow-2xl shadow-slate-200/70 backdrop-blur-xl"
    >
      <div class="grid grid-cols-2 gap-2">
        <NuxtLink
          v-for="service in serviceLinks"
          :key="service.to"
          :to="localePath(service.to)"
          class="group/item flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-sky-50 hover:text-sky-600"
        >
          <span>{{ $t(service.labelKey) }}</span>

          <Icon
            name="lucide:arrow-right"
            class="h-4 w-4 opacity-0 transition duration-200 group-hover/item:translate-x-1 group-hover/item:opacity-100"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</div>

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

      <div>
  <button
    type="button"
    class="flex w-full items-center justify-between text-left transition hover:text-sky-500"
    @click="isMobileServicesOpen = !isMobileServicesOpen"
  >
    <span>{{ $t('home.nav.services') }}</span>

    <Icon
      name="lucide:chevron-down"
      class="h-4 w-4 transition-transform duration-300"
      :class="isMobileServicesOpen ? 'rotate-180 text-sky-500' : ''"
    />
  </button>

  <!-- Mobile expandable services -->
  <div
    class="grid overflow-hidden transition-all duration-300 ease-out"
    :class="isMobileServicesOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'"
  >
    <div class="min-h-0 overflow-hidden">
      <div class="space-y-1 rounded-2xl border border-slate-100 bg-sky-50/60 p-2">
        <NuxtLink
          :to="localePath('/#services')"
          @click="closeMobile"
          class="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-white hover:text-sky-600"
        >
          <span>{{ locale === 'en' ? 'All Services' : 'Tüm Hizmetler' }}</span>
          <Icon name="lucide:list" class="h-4 w-4 text-sky-500" />
        </NuxtLink>

        <NuxtLink
          v-for="service in serviceLinks"
          :key="service.to"
          :to="localePath(service.to)"
          @click="closeMobile"
          class="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-white hover:text-sky-600"
        >
          <span>{{ $t(service.labelKey) }}</span>
          <Icon name="lucide:arrow-right" class="h-4 w-4 text-sky-500" />
        </NuxtLink>
      </div>
    </div>
  </div>
</div>

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
          href=" https://maps.app.goo.gl/Qx3oFsYytPyJEn5FA?g_st=iw"
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