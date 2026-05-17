<script setup lang="ts">
import HomeHeader from '~/components/home/Header.vue'
import HomeFooter from '~/components/home/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <HomeHeader />

    <main class="flex-1">
      <slot />
    </main>

    <HomeFooter />
  </div>
</template>