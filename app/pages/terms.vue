<script setup lang="ts">
const { locale } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () =>
    locale.value === 'en'
      ? 'Terms of Use | Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği'
      : 'Kullanım Şartları | Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği',
  description: () =>
    locale.value === 'en'
      ? 'Terms of Use for the Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği website.'
      : 'Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği web sitesi kullanım şartları.'
})

const updatedAt = '2026'

const content = computed(() => {
  if (locale.value === 'en') {
    return {
      title: 'Terms of Use',
      subtitle:
        'These Terms of Use explain the conditions for using the Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği website.',
      updated: `Last updated: ${updatedAt}`,
      intro:
        'By accessing this website, you agree to use it only for lawful, informational, and personal purposes. If you do not agree with these terms, please do not use the website.',
      sections: [
        {
          title: '1. Website Owner',
          body: [
            'This website belongs to Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği.',
            'Address: Atatürk Mahallesi Nazım Hikmet Ran Caddesi No:21/1 Samandağ/Hatay',
            'Phone: +90 501 266 31 31',
            'Email: info@elizadent.com'
          ]
        },
        {
          title: '2. Informational Purpose Only',
          body: [
            'The content on this website is provided for general information about the clinic, dental services, doctors, team members, and contact details.',
            'The information on this website does not replace a dental examination, diagnosis, treatment plan, or professional medical advice.',
            'For diagnosis and treatment decisions, you should consult a qualified dentist in person.'
          ]
        },
        {
          title: '3. Services and Appointments',
          body: [
            'Dental services listed on the website are presented for informational purposes.',
            'The availability, suitability, duration, and pricing of any treatment may vary depending on the patient’s individual condition and clinical examination.',
            'Contact through phone, WhatsApp, email, or social media does not automatically create an appointment unless confirmed by the clinic.'
          ]
        },
        {
          title: '4. Before & After Images',
          body: [
            'Before and after images, if published, are shown to demonstrate examples of treatment outcomes.',
            'Such images do not guarantee identical or similar results for every patient.',
            'Patient images should only be published with appropriate consent.'
          ]
        },
        {
          title: '5. Doctor and Team Information',
          body: [
            'Doctor and staff information is provided to introduce the clinic team.',
            'Names, titles, images, areas of expertise, and short biographies are published for clinic presentation purposes.',
            'This information may be updated, corrected, or removed when necessary.'
          ]
        },
        {
          title: '6. External Links',
          body: [
            'This website may include links to third-party platforms such as Google Maps, Instagram, LinkedIn, Facebook, X, WhatsApp, or similar services.',
            'When you click these links, you leave the clinic website and the relevant third-party platform may apply its own terms and privacy policy.',
            'Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği is not responsible for the content, security, or data practices of third-party platforms.'
          ]
        },
        {
          title: '7. Website Availability',
          body: [
            'We aim to keep the website accessible and up to date, but we do not guarantee uninterrupted, error-free, or always-current access.',
            'The website may be updated, suspended, or changed without prior notice.'
          ]
        },
        {
          title: '8. Intellectual Property',
          body: [
            'Texts, images, design elements, logos, and other website content belong to Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği or are used with permission unless otherwise stated.',
            'You may not copy, reproduce, distribute, or use website content for commercial purposes without written permission.'
          ]
        },
        {
          title: '9. Limitation of Responsibility',
          body: [
            'Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği is not responsible for decisions made solely based on website content without professional dental consultation.',
            'The website does not provide emergency dental services. In urgent situations, please contact the clinic directly or seek appropriate medical assistance.'
          ]
        },
        {
          title: '10. Changes to These Terms',
          body: [
            'These Terms of Use may be updated when website features, services, third-party tools, or legal requirements change.',
            'Continued use of the website after updates means that you accept the updated terms.'
          ]
        }
      ]
    }
  }

  return {
    title: 'Kullanım Şartları',
    subtitle:
      'Bu Kullanım Şartları, Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği web sitesinin kullanım koşullarını açıklar.',
    updated: `Son güncelleme: ${updatedAt}`,
    intro:
      'Bu web sitesine erişerek siteyi yalnızca hukuka uygun, bilgilendirme ve kişisel kullanım amaçlarıyla kullanmayı kabul etmiş olursunuz. Bu şartları kabul etmiyorsanız lütfen web sitesini kullanmayınız.',
    sections: [
      {
        title: '1. Web Sitesi Sahibi',
        body: [
          'Bu web sitesi Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği’ne aittir.',
          'Adres: Atatürk Mahallesi Nazım Hikmet Ran Caddesi No:21/1 Samandağ/Hatay',
          'Telefon: +90 501 266 31 31',
          'E-posta: info@elizadent.com'
        ]
      },
      {
        title: '2. Yalnızca Bilgilendirme Amaçlıdır',
        body: [
          'Bu web sitesindeki içerikler; klinik, diş tedavileri, doktorlar, ekip üyeleri ve iletişim bilgileri hakkında genel bilgilendirme amacıyla sunulur.',
          'Web sitesindeki bilgiler; diş hekimi muayenesi, teşhis, tedavi planı veya profesyonel tıbbi tavsiyenin yerine geçmez.',
          'Teşhis ve tedavi kararları için yetkili bir diş hekimine yüz yüze danışmanız gerekir.'
        ]
      },
      {
        title: '3. Hizmetler ve Randevular',
        body: [
          'Web sitesinde yer alan diş tedavileri bilgilendirme amacıyla sunulmaktadır.',
          'Her tedavinin uygunluğu, süresi, kapsamı ve fiyatlandırması hastanın bireysel durumuna ve klinik muayeneye göre değişebilir.',
          'Telefon, WhatsApp, e-posta veya sosyal medya üzerinden iletişime geçilmesi, klinik tarafından onaylanmadıkça otomatik olarak randevu oluşturmaz.'
        ]
      },
      {
        title: '4. Öncesi & Sonrası Görselleri',
        body: [
          'Yayınlanması halinde öncesi ve sonrası görselleri, tedavi sonuçlarına ilişkin örnekleri göstermek amacıyla paylaşılır.',
          'Bu görseller her hasta için aynı veya benzer sonucun garanti edildiği anlamına gelmez.',
          'Hasta görselleri yalnızca uygun rıza alınarak yayınlanmalıdır.'
        ]
      },
      {
        title: '5. Doktor ve Ekip Bilgileri',
        body: [
          'Doktor ve personel bilgileri, klinik ekibini tanıtmak amacıyla sunulur.',
          'İsimler, unvanlar, görseller, uzmanlık alanları ve kısa biyografiler klinik tanıtımı amacıyla yayınlanır.',
          'Bu bilgiler gerekli görüldüğünde güncellenebilir, düzeltilebilir veya kaldırılabilir.'
        ]
      },
      {
        title: '6. Harici Bağlantılar',
        body: [
          'Bu web sitesinde Google Haritalar, Instagram, LinkedIn, Facebook, X, WhatsApp veya benzeri üçüncü taraf platformlara bağlantılar bulunabilir.',
          'Bu bağlantılara tıkladığınızda klinik web sitesinden ayrılırsınız ve ilgili üçüncü taraf platformun kendi kullanım şartları ve gizlilik politikası geçerli olabilir.',
          'Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği, üçüncü taraf platformların içeriklerinden, güvenliğinden veya veri işleme uygulamalarından sorumlu değildir.'
        ]
      },
      {
        title: '7. Web Sitesinin Kullanılabilirliği',
        body: [
          'Web sitesinin erişilebilir ve güncel kalması amaçlanır; ancak kesintisiz, hatasız veya her zaman güncel erişim garanti edilmez.',
          'Web sitesi önceden bildirim yapılmadan güncellenebilir, değiştirilebilir veya geçici olarak erişime kapatılabilir.'
        ]
      },
      {
        title: '8. Fikri Mülkiyet',
        body: [
          'Metinler, görseller, tasarım unsurları, logolar ve diğer web sitesi içerikleri aksi belirtilmedikçe Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği’e aittir veya izinli olarak kullanılmaktadır.',
          'Web sitesi içerikleri yazılı izin olmadan kopyalanamaz, çoğaltılamaz, dağıtılamaz veya ticari amaçla kullanılamaz.'
        ]
      },
      {
        title: '9. Sorumluluğun Sınırlandırılması',
        body: [
          'Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği, profesyonel diş hekimi danışmanlığı alınmadan yalnızca web sitesi içeriğine dayanılarak verilen kararlardan sorumlu değildir.',
          'Web sitesi acil diş sağlığı hizmeti sunmaz. Acil durumlarda doğrudan klinikle iletişime geçmeniz veya uygun sağlık desteği almanız gerekir.'
        ]
      },
      {
        title: '10. Şartlarda Değişiklik',
        body: [
          'Bu Kullanım Şartları; web sitesi özellikleri, hizmetler, üçüncü taraf araçlar veya yasal gereklilikler değiştiğinde güncellenebilir.',
          'Güncellemelerden sonra web sitesini kullanmaya devam etmeniz, güncel şartları kabul ettiğiniz anlamına gelir.'
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

        <div
  class="mt-12 overflow-hidden rounded-3xl border border-slate-100 bg-gradient-to-br from-sky-50 via-white to-slate-50 p-6 shadow-sm"
>
  <div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
    <!-- Clinic Info -->
    <div class="flex items-start gap-4">
      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-sky-100"
      >
        <Icon name="lucide:lock-keyhole" class="h-6 w-6 text-sky-600" />
      </div>

      <div>
        <p class="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
          {{ locale === 'en' ? 'Privacy Contact' : 'Gizlilik İletişimi' }}
        </p>

        <h3 class="max-w-2xl text-base font-semibold leading-7 text-slate-950 md:text-lg">
          Özel Hatay Elizadent Ağız ve Diş Sağlığı Polikliniği
        </h3>

        <div class="mt-3 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href="mailto:info@elizadent.com"
            class="inline-flex items-center gap-2 transition hover:text-sky-600"
          >
            <Icon name="lucide:mail" class="h-4 w-4 text-sky-500" />
            info@elizadent.com
          </a>

          <a
            href="tel:+905012663131"
            class="inline-flex items-center gap-2 transition hover:text-sky-600"
          >
            <Icon name="lucide:phone" class="h-4 w-4 text-sky-500" />
            +90 501 266 31 31
          </a>
        </div>
      </div>
    </div>

    <!-- Action -->
    <NuxtLink
      :to="localePath('/privacy')"
      class="btn-clinic shrink-0"
    >
      <span>{{ locale === 'en' ? 'View Privacy Policy' : 'Gizlilik Politikasını Gör' }}</span>
      <Icon name="lucide:arrow-right" class="h-4 w-4" />
    </NuxtLink>
  </div>
</div>
      </div>
    </section>
  </main>
</template>