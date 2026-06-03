<script setup lang="ts">
const { locale } = useI18n()

useSeoMeta({
  title: () =>
    locale.value === 'en'
      ? 'Elizadent Dental Clinic | Hatay Samandağ'
      : 'Özel Hatay Elizadent | Samandağ Diş Polikliniği',

  description: () =>
    locale.value === 'en'
      ? 'Elizadent Dental Clinic provides modern dental treatments in Hatay Samandağ with an experienced team and patient-focused care.'
      : 'Özel Hatay Elizadent, Hatay Samandağ’da deneyimli hekim kadrosu ve modern tedavi yaklaşımlarıyla ağız ve diş sağlığı hizmetleri sunar.',

  ogTitle: () =>
    locale.value === 'en'
      ? 'Elizadent Dental Clinic | Hatay Samandağ'
      : 'Özel Hatay Elizadent | Samandağ Diş Polikliniği',

  ogDescription: () =>
    locale.value === 'en'
      ? 'Modern dental treatments, experienced dentists, and patient-focused care in Hatay Samandağ.'
      : 'Hatay Samandağ’da modern diş tedavileri, deneyimli hekim kadrosu ve hasta odaklı hizmet.'
})
</script>

<template>
  <div>
    <!-- HEADER -->
      
      <HomeHero />
      <HomeServices  />
      <HomeDoctors  />
      <!-- <HomeGallery /> -->
       <HomeBlogPreview />
      <HomeCta />
      <HomeContact />
       
    </div>
</template>