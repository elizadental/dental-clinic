<template>
  <footer class="bg-slate-950 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Top Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-10">
        <!-- Brand -->
        <div>
          <h3 class="font-semibold text-xl mb-4 tracking-wide">
            {{ $t('home.footer.brand') }}
          </h3>

          <p class="text-sm text-slate-400 leading-relaxed">
            {{ $t('home.footer.desc') }}
          </p>

          <!-- Social -->
          <div class="flex gap-4 mt-6 text-slate-400 items-center">
            <a href="https://www.instagram.com/elizadentpoliklinik?igsh=cWt3NHJ4NmdkemV4&utm_source=qr" 
              target="_blank" 
              rel="noopener" 
              aria-label="Instagram" 
              class="footer-social">
              <Icon name="lucide:instagram" class="w-5 h-5" />
            </a>

            <a href="https://www.linkedin.com/in/özel-hatay-elizadent-ağız-ve-diş-sağlığı-polikliniği-956804409" 
            aria-label="LinkedIn" 
            class="footer-social"
             target="_blank" 
              rel="noopener" 
            >
              <Icon name="lucide:linkedin" class="w-5 h-5" />
            </a>

            <a href="#" aria-label="Facebook" class="footer-social">
              <Icon name="lucide:facebook" class="w-5 h-5" />
            </a>

            <a href="#" aria-label="Twitter" class="footer-social">
              <Icon name="lucide:twitter" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider mb-4 text-slate-300">
            {{ $t('home.footer.links') }}
          </h4>

          <ul class="space-y-3 text-sm text-slate-400">
            <li><NuxtLink to="/" class="footer-link">{{ $t('home.nav.home') }}</NuxtLink></li>
            <li><NuxtLink to="/#services" class="footer-link">{{ $t('home.nav.services') }}</NuxtLink></li>
            <li><NuxtLink to="/#gallery" class="footer-link">{{ $t('home.nav.gallery') }}</NuxtLink></li>
            <li><NuxtLink to="/#doctors" class="footer-link">{{ $t('home.nav.doctors') }}</NuxtLink></li>
            <li><NuxtLink to="/#contact" class="footer-link">{{ $t('home.nav.contact') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider mb-4 text-slate-300">
            {{ $t('home.footer.contact') }}
          </h4>

          <div class="text-sm text-slate-400 space-y-3">
            <p>{{ $t('home.footer.address') }}</p>

            <a href="tel:+905xxxxxxxxx" class="footer-link block">
              {{ $t('home.footer.phone') }}
            </a>

            <a href="mailto:info@elizadent.com" class="footer-link block">
              info@elizadent.com
            </a>
          </div>
        </div>

        <!-- CTA -->
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider mb-4 text-slate-300">
            {{ $t('home.footer.ctaTitle') }}
          </h4>

          <p class="text-sm text-slate-400 mb-5 leading-relaxed">
            {{ $t('home.footer.ctaDesc') }}
          </p>

          <a
            :href="$t('home.footer.whatsappLink')"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50 hover:text-sky-700 hover:shadow-lg"
          >
            <Icon name="logos:whatsapp-icon" class="w-5 h-5" />
            {{ $t('home.footer.whatsapp') }}
          </a>
        </div>
      </div>

      <!-- Bottom -->
<div
  class="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between"
>
  <!-- Left: Copyright + Created By -->
  <div class="text-center md:text-left">
    <p>
      {{ $t('home.footer.copyright') }}
    </p>

    <p class="mt-1 text-xs text-slate-400">
     
      <!-- <a
        href="https://seleuciapieria.com"
        target="_blank"
        rel="noopener noreferrer"
        class="font-normal text-slate-400 transition font- hover:text-sky-300"
      >
       <code class="font-bold tracking-tight leading-tight"> {{ $t('home.footer.createdBy') }} </code>
      </a> -->
    </p>
  </div>

  <!-- Right: Legal Links -->
  <div class="flex justify-center gap-4 md:justify-end">
    <NuxtLink to="/privacy" class="footer-link">
      {{ $t('home.footer.privacy') }}
    </NuxtLink>

    <NuxtLink to="/terms" class="footer-link">
      {{ $t('home.footer.terms') }}
    </NuxtLink>
  </div>
</div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply transition-colors duration-200 hover:text-sky-400;
}

.footer-social {
  @apply flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-500/10 hover:text-sky-400;
}
</style>