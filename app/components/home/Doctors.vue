<!-- /components/Doctors.vue -->
<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const { doctors, getLocalizedText, getDoctorBioLink } = useDoctors()

const carouselRef = ref<HTMLElement | null>(null)

const loopedDoctors = computed(() => [
  ...doctors.value,
  ...doctors.value,
  ...doctors.value,
])

let groupWidth = 0
let isAdjusting = false
let scrollEndTimer: ReturnType<typeof setTimeout> | null = null

function isMobileCarousel() {
  return window.innerWidth < 1024
}

function setupMobileLoop() {
  const el = carouselRef.value

  if (!el || !isMobileCarousel()) return

  groupWidth = el.scrollWidth / 3

  el.classList.add('is-loop-jumping')
  el.scrollLeft = groupWidth

  requestAnimationFrame(() => {
    el.classList.remove('is-loop-jumping')
  })
}

function correctMobileLoopPosition() {
  const el = carouselRef.value

  if (!el || !groupWidth || isAdjusting || !isMobileCarousel()) return

  const leftBoundary = groupWidth * 0.5
  const rightBoundary = groupWidth * 1.5

  let targetScrollLeft: number | null = null

  if (el.scrollLeft < leftBoundary) {
    targetScrollLeft = el.scrollLeft + groupWidth
  }

  if (el.scrollLeft > rightBoundary) {
    targetScrollLeft = el.scrollLeft - groupWidth
  }

  if (targetScrollLeft === null) return

  isAdjusting = true

  el.classList.add('is-loop-jumping')

  const previousScrollBehavior = el.style.scrollBehavior
  el.style.scrollBehavior = 'auto'

  el.scrollLeft = targetScrollLeft

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.scrollBehavior = previousScrollBehavior
      el.classList.remove('is-loop-jumping')
      isAdjusting = false
    })
  })
}

function handleMobileScroll() {
  if (!isMobileCarousel() || isAdjusting) return

  if (scrollEndTimer) {
    clearTimeout(scrollEndTimer)
  }

  scrollEndTimer = setTimeout(() => {
    correctMobileLoopPosition()
  }, 120)
}

onMounted(async () => {
  await nextTick()
  setupMobileLoop()

  window.addEventListener('resize', setupMobileLoop)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', setupMobileLoop)

  if (scrollEndTimer) {
    clearTimeout(scrollEndTimer)
  }
})
</script>

<template>
  <section id="doctors" class="overflow-hidden bg-slate-50 py-24">
    <div class="mx-auto max-w-7xl px-4">
      <div class="mb-14 text-center">
        <h2 class="mb-4 text-3xl font-bold md:text-4xl">
          {{ $t('home.doctors.title') }}
        </h2>

        <p class="mx-auto max-w-2xl text-gray-500">
          {{ $t('home.doctors.subtitle') }}
        </p>
      </div>
    </div>

    <div
      ref="carouselRef"
      class="doctors-window scrollbar-hide overflow-x-auto snap-x snap-mandatory lg:overflow-hidden"
      @scroll.passive="handleMobileScroll"
    >
      <div class="doctors-track flex w-max">
        <article
          v-for="(doctor, index) in loopedDoctors"
          :key="`${doctor.name}-${index}`"
          class="doctor-card group"
        >
          <img
            :src="doctor.image"
            :alt="doctor.name"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
          ></div>

          <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div
              class="rounded-xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur-md md:p-6"
            >
              <p class="mb-2 text-sm uppercase tracking-wider text-sky-300">
                {{ getLocalizedText(doctor.specialty) }}
              </p>

              <h3 class="mb-5 text-2xl font-semibold leading-tight">
                {{ doctor.name }}
              </h3>

              <NuxtLink
                :to="getDoctorBioLink(doctor.slug)"
                class="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-sky-100"
              >
                {{ $t('home.doctors.viewMore') }}

                <Icon name="lucide:arrow-right" class="h-4 w-4" />
              </NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.doctor-card {
  position: relative;
  width: 100vw;
  height: 520px;
  overflow: hidden;
  flex-shrink: 0;
  scroll-snap-align: center;
}

@media (min-width: 1024px) {
  .doctors-window {
    width: 80vw;
    max-width: 1180px;
    margin-inline: auto;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 8%,
      black 92%,
      transparent 100%
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 8%,
      black 92%,
      transparent 100%
    );
  }

  .doctors-track {
    animation: doctors-marquee 36s linear infinite;
    will-change: transform;
  }

  .doctors-track:hover {
    animation-play-state: paused;
  }

  .doctor-card {
    width: calc((80vw - 3rem) / 3);
    max-width: 380px;
    height: 540px;
    margin-right: 1.5rem;
    border-radius: 1.5rem;
    scroll-snap-align: none;
  }
}

@keyframes doctors-marquee {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(calc(-100% / 3), 0, 0);
  }
}

@media (max-width: 1023px) {
  .doctors-window {
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
    touch-action: pan-x;
  }

  .doctors-window.is-loop-jumping {
    scroll-snap-type: none;
  }

  .doctors-track {
    animation: none;
    transform: translate3d(0, 0, 0);
    will-change: transform;
  }

  .doctor-card {
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
  }

  .doctor-card img {
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
  }
}
</style>