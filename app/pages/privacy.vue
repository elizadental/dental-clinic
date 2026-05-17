<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => locale.value === 'en' ? 'Privacy Policy | Eliza Dental Clinic' : 'Gizlilik Politikası | Eliza Dental Clinic',
  description: () =>
    locale.value === 'en'
      ? 'Privacy Policy for Eliza Dental Clinic website.'
      : 'Eliza Dental Clinic web sitesi gizlilik politikası.'
})

const updatedAt = '2026'

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      title: 'Privacy Policy',
      subtitle:
        'This Privacy Policy explains how Eliza Dental Clinic handles personal data in relation to this website.',
      updated: `Last updated: ${updatedAt}`,
      intro:
        'Eliza Dental Clinic respects your privacy. This website is currently designed as an informational clinic website. It does not currently include a contact form, appointment form, newsletter form, payment form, or patient portal.',
      sections: [
        {
          title: '1. Data Controller',
          body: [
            'Trade name: Eliza Dental Clinic',
            'Address: Atatürk Mahallesi Nazım Hikmet Ran Caddesi No:21/1 Samandağ/Hatay',
            'Phone: +90 501 266 31 31',
            'Email: info@elizadent.com'
          ]
        },
        {
          title: '2. Information We Currently Collect',
          body: [
            'At this stage, this website does not directly collect personal data through contact or appointment forms.',
            'If you contact us through phone, WhatsApp, email, or social media links, the information you share is processed through the relevant communication channel.'
          ]
        },
        {
          title: '3. Third-Party Services',
          body: [
            'This website may include Google Maps to show the clinic location. When you interact with the map, Google may process certain technical information according to its own policies.',
            'The website is hosted through Vercel. Technical data such as IP address, browser type, device information, request logs, and security-related records may be processed by hosting infrastructure.',
            'Social media links such as Instagram, LinkedIn, Facebook, and X may redirect you to third-party platforms. Those platforms process data according to their own privacy policies.'
          ]
        },
        {
          title: '4. Cookies and Analytics',
          body: [
            'We do not currently set our own analytics or marketing cookies knowingly.',
            'If analytics tools such as Google Analytics, Meta Pixel, or similar technologies are added later, this Privacy Policy and cookie information should be updated accordingly.'
          ]
        },
        {
          title: '5. Doctor, Staff, and Clinic Images',
          body: [
            'Doctor and staff images, names, titles, and professional information are published only for clinic presentation purposes.',
            'Such content should be used only with the relevant person’s approval and only to the extent necessary for the website.'
          ]
        },
        {
          title: '6. Before & After Patient Images',
          body: [
            'Before and after images may be published only if the relevant patient has given appropriate consent.',
            'Patient images and treatment-related visuals may reveal health-related information. Therefore, they should be handled carefully and only within the scope of the consent provided.'
          ]
        },
        {
          title: '7. Your Rights',
          body: [
            'You may contact us to request information about personal data processed in relation to this website, to request correction, deletion, or restriction where applicable, or to raise privacy-related questions.',
            'For privacy-related requests, you can contact us at info@elizadent.com.'
          ]
        },
        {
          title: '8. Updates',
          body: [
            'This Privacy Policy may be updated when new website features are added, such as appointment forms, analytics tools, patient image galleries, or database-backed services.'
          ]
        }
      ]
    }
  }

  return {
    title: 'Gizlilik Politikası',
    subtitle:
      'Bu Gizlilik Politikası, Eliza Dental Clinic web sitesiyle bağlantılı kişisel verilerin nasıl ele alındığını açıklar.',
    updated: `Son güncelleme: ${updatedAt}`,
    intro:
      'Eliza Dental Clinic gizliliğinize önem verir. Bu web sitesi şu anda bilgilendirme amaçlı bir klinik web sitesi olarak tasarlanmıştır. Sitede şu aşamada iletişim formu, randevu formu, bülten formu, ödeme formu veya hasta paneli bulunmamaktadır.',
    sections: [
      {
        title: '1. Veri Sorumlusu',
        body: [
          'Ticari ad: Eliza Dental Clinic',
          'Adres: Atatürk Mahallesi Nazım Hikmet Ran Caddesi No:21/1 Samandağ/Hatay',
          'Telefon: +90 501 266 31 31',
          'E-posta: info@elizadent.com'
        ]
      },
      {
        title: '2. Şu Anda Toplanan Bilgiler',
        body: [
          'Bu aşamada web sitesi, iletişim veya randevu formları aracılığıyla doğrudan kişisel veri toplamamaktadır.',
          'Telefon, WhatsApp, e-posta veya sosyal medya bağlantıları üzerinden bizimle iletişime geçmeniz halinde paylaştığınız bilgiler ilgili iletişim kanalı üzerinden işlenebilir.'
        ]
      },
      {
        title: '3. Üçüncü Taraf Hizmetler',
        body: [
          'Web sitesinde kliniğin konumunu göstermek için Google Haritalar kullanılabilir. Harita ile etkileşime geçtiğinizde Google, kendi politikaları kapsamında bazı teknik bilgileri işleyebilir.',
          'Web sitesi Vercel altyapısı üzerinde barındırılmaktadır. IP adresi, tarayıcı türü, cihaz bilgisi, erişim kayıtları ve güvenlikle ilgili teknik kayıtlar barındırma altyapısı tarafından işlenebilir.',
          'Instagram, LinkedIn, Facebook ve X gibi sosyal medya bağlantıları sizi üçüncü taraf platformlara yönlendirebilir. Bu platformlar verileri kendi gizlilik politikalarına göre işler.'
        ]
      },
      {
        title: '4. Çerezler ve Analitik',
        body: [
          'Şu anda kendi tarafımızdan bilerek eklenmiş analitik veya pazarlama çerezi kullanılmamaktadır.',
          'İleride Google Analytics, Meta Pixel veya benzeri teknolojiler eklenirse bu Gizlilik Politikası ve çerez bilgilendirmesi buna göre güncellenmelidir.'
        ]
      },
      {
        title: '5. Doktor, Personel ve Klinik Görselleri',
        body: [
          'Doktor ve personel görselleri, isimleri, unvanları ve mesleki bilgileri klinik tanıtımı amacıyla yayınlanır.',
          'Bu içerikler ilgili kişinin onayıyla ve yalnızca web sitesi için gerekli kapsamda kullanılmalıdır.'
        ]
      },
      {
        title: '6. Hasta Öncesi & Sonrası Görselleri',
        body: [
          'Öncesi ve sonrası hasta görselleri yalnızca ilgili hastanın uygun rızası alınarak yayınlanmalıdır.',
          'Hasta görselleri ve tedaviye ilişkin görseller sağlık bilgisi ortaya çıkarabileceğinden dikkatli şekilde ve verilen rızanın kapsamı içinde kullanılmalıdır.'
        ]
      },
      {
        title: '7. Haklarınız',
        body: [
          'Bu web sitesiyle bağlantılı olarak işlenen kişisel veriler hakkında bilgi talep etmek, düzeltme, silme veya ilgili durumlarda kısıtlama talep etmek ya da gizlilikle ilgili soru iletmek için bizimle iletişime geçebilirsiniz.',
          'Gizlilikle ilgili talepleriniz için info@elizadent.com adresinden bize ulaşabilirsiniz.'
        ]
      },
      {
        title: '8. Güncellemeler',
        body: [
          'Bu Gizlilik Politikası; randevu formları, analitik araçları, hasta görsel galerileri veya veritabanı destekli hizmetler gibi yeni özellikler eklendiğinde güncellenebilir.'
        ]
      }
    ]
  }
})
</script>

<template>
  <main class="bg-white">
    <section class="bg-gradient-to-br from-sky-50 via-white to-slate-100 py-20 md:py-24">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h1 class="mb-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          {{ content.title }}
        </h1>

        <p class="mx-auto max-w-2xl text-slate-600 leading-7">
          {{ content.subtitle }}
        </p>

        <p class="mt-6 text-sm font-medium text-slate-500">
          {{ content.updated }}
        </p>
      </div>
    </section>

    <section class="py-16 md:py-20">
      <div class="mx-auto max-w-4xl px-4">
        <div class="mb-10 rounded-3xl border border-slate-100 bg-sky-50/50 p-6 text-slate-700 leading-8">
          {{ content.intro }}
        </div>

        <div class="space-y-8">
          <article
            v-for="section in content.sections"
            :key="section.title"
            class="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <h2 class="mb-4 text-xl font-semibold tracking-tight text-slate-900">
              {{ section.title }}
            </h2>

            <div class="space-y-3 text-slate-600 leading-8">
              <p
                v-for="paragraph in section.body"
                :key="paragraph"
              >
                {{ paragraph }}
              </p>
            </div>
          </article>
        </div>

        <div class="mt-12 flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="font-semibold text-slate-900">
              Eliza Dental Clinic
            </h3>
            <p class="mt-1 text-sm text-slate-500">
              info@elizadent.com · +90 501 266 31 31
            </p>
          </div>

          <NuxtLink :to="localePath('/terms')" class="btn-clinic">
            <span>{{ locale === 'en' ? 'View Terms' : 'Kullanım Şartlarını Gör' }}</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>