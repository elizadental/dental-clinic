<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const doctors = [
  {
    name: 'Dr. Ahmet Yılmaz',
    expertiseKey: 'home.doctors.items.ahmet.expertise',
    image: '/doctors/doctor-1.png',
    bioLink: '/doctors/ahmet-yilmaz'
  },
  {
    name: 'Dr. Elif Kaya',
    expertiseKey: 'home.doctors.items.elif.expertise',
    image: '/doctors/doctor-2.png',
    bioLink: '/doctors/elif-kaya'
  },
  {
    name: 'Dr. Mehmet Demir',
    expertiseKey: 'home.doctors.items.mehmet.expertise',
    image: '/doctors/doctor-3.png',
    bioLink: '/doctors/mehmet-demir'
  }
]

const carouselRef = ref<HTMLElement | null>(null)
const loopedDoctors = computed(() => [...doctors, ...doctors, ...doctors])

let groupWidth = 0
let isAdjusting = false

function setupMobileLoop() {
  const el = carouselRef.value
  if (!el) return

  groupWidth = el.scrollWidth / 3
  el.scrollLeft = groupWidth
}

function handleMobileScroll() {
  const el = carouselRef.value
  if (!el || !groupWidth || isAdjusting) return

  const leftBoundary = groupWidth * 0.35
  const rightBoundary = groupWidth * 1.65

  if (el.scrollLeft < leftBoundary) {
    isAdjusting = true
    el.scrollLeft += groupWidth
    requestAnimationFrame(() => {
      isAdjusting = false
    })
  }

  if (el.scrollLeft > rightBoundary) {
    isAdjusting = true
    el.scrollLeft -= groupWidth
    requestAnimationFrame(() => {
      isAdjusting = false
    })
  }
}

onMounted(async () => {
  await nextTick()
  setupMobileLoop()
  window.addEventListener('resize', setupMobileLoop)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', setupMobileLoop)
})
</script>

<template>
  <section id="doctors" class="py-24 bg-slate-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          {{ $t('home.doctors.title') }}
        </h2>

        <p class="text-gray-500 max-w-2xl mx-auto">
          {{ $t('home.doctors.subtitle') }}
        </p>
      </div>
    </div>

    <div
      ref="carouselRef"
      class="doctors-window overflow-x-auto lg:overflow-hidden scrollbar-hide snap-x snap-mandatory"
      @scroll="handleMobileScroll"
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
           class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

          <div class="absolute bottom-0 left-0 right-0 p-6 md:p-8">
  <div class="bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 text-white border border-white/10">
            <p class="text-sm uppercase tracking-wider text-sky-300 mb-2">
             {{ $t(doctor.expertiseKey) }}
            </p>

            <h3 class="text-2xl font-semibold mb-5 leading  ">
              {{ doctor.name }}
            </h3>

            <NuxtLink
              :to="doctor.bioLink"
class="inline-flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-sky-100 hover:scale-105 transition-all duration-300"            >
              {{ $t('home.doctors.viewMore') }}
              <Icon name="lucide:arrow-right" class="w-4 h-4" />
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
  .doctors-track {
    animation: none;
  }

  .doctor-card:active {
    transform: scale(0.98);
  }
}
</style>