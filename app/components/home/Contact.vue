<template>
  <section id="contact" class="py-24 bg-gradient-to-b from-white to-sky-50/60">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          {{ $t('home.contact.title') }}
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8 items-stretch">
        <!-- Info -->
        <div class="rounded-3xl bg-white border border-slate-100 shadow-sm p-6 md:p-8 space-y-6">
          <div class="flex gap-4">
            <div class="h-12 w-12 shrink-0 rounded-full bg-sky-50 flex items-center justify-center">
             
              <Icon name="lucide:map-pin" class="h-6 w-6 text-sky-500" />
              
            </div>

            <div>
              <h3 class="font-semibold text-slate-900 mb-1">
               
                {{ $t('home.contact.addressLabel') }}
              </h3>
              <p class="text-slate-600 leading-7">
                 <a href=" https://maps.app.goo.gl/Qx3oFsYytPyJEn5FA?g_st=iw" class="hover:text-sky-500 tracking-wide leading-tight ">
                {{ $t('home.contact.address') }}
                </a>
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="h-12 w-12 shrink-0 rounded-full bg-sky-50 flex items-center justify-center">
              <Icon name="lucide:phone-call" class="h-6 w-6 text-sky-500" />
            </div>

            <div>
              <h3 class="font-semibold text-slate-900 mb-1">
                {{ $t('home.contact.phoneLabel') }}
              </h3>
              <a href="tel:+905012663131" class="text-slate-600  tracking-wide leading-relaxed hover:text-sky-500 transition">
                +90 501 266 31 31
              </a>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="h-12 w-12 shrink-0 rounded-full bg-sky-50 flex items-center justify-center">
              <Icon name="lucide:mail" class="h-6 w-6 text-sky-500" />
            </div>

            <div>
              <h3 class="font-semibold text-slate-900 mb-1">
                {{ $t('home.contact.emailLabel') }}
              </h3>
              <a href="mailto:info@elizadent.com" class="text-slate-600 tracking-wide leading-tight  hover:text-sky-500 transition">
                info@elizadent.com
              </a>
            </div>
          </div>
        </div>

        <!-- Map -->
        <div class="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm min-h-[360px]">
          <!-- <div class="absolute top-4 left-4 z-10 rounded-full bg-white/90 backdrop-blur px-4 py-2 shadow-sm flex items-center gap-2 text-sm font-medium text-slate-700">
            <Icon name="lucide:navigation" class="h-4 w-4 text-sky-500" />
            {{ $t('home.contact.mapLabel') }}
          </div> -->

          <iframe
            class="w-full h-full min-h-[360px]"
src="https://www.google.com/maps?q=Atatürk+Mahallesi+Nazım+Hikmet+Ran+Caddesi+No:21/1+Samandağ+Hatay+Türkiye&output=embed"            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>