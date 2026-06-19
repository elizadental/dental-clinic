<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const route = useRoute()
const router = useRouter()

const navItems = [
  {
    label: 'Dashboard',
    to: '/admin',
    icon: 'lucide:layout-dashboard'
  },
  {
    label: 'Team',
    to: '/admin/team',
    icon: 'lucide:users-round'
  }
]

function isActive(path: string) {
  if (path === '/admin') {
    return route.path === '/admin'
  }

  return route.path.startsWith(path)
}

async function signOut() {
  await supabase.auth.signOut()
  await router.replace('/admin/login')
}
</script>

<template>
  <main class="min-h-screen bg-slate-50">
    <div class="flex min-h-screen">
      <!-- Sidebar -->
      <aside class="hidden w-72 shrink-0 border-r border-slate-200 bg-white px-5 py-6 lg:block">
        <NuxtLink to="/" class="mb-8 flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50">
            <Icon name="lucide:shield-check" class="h-6 w-6 text-sky-600" />
          </div>

          <div>
            <p class="text-sm font-bold text-slate-950">
              Elizadent
            </p>
            <p class="text-xs text-slate-500">
              Admin Panel
            </p>
          </div>
        </NuxtLink>

        <nav class="space-y-2">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition"
            :class="
              isActive(item.to)
                ? 'bg-sky-50 text-sky-700'
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
            "
          >
            <Icon :name="item.icon" class="h-5 w-5" />
            {{ item.label }}
          </NuxtLink>
        </nav>
      </aside>

      <!-- Main area -->
      <section class="flex min-w-0 flex-1 flex-col">
        <!-- Top bar -->
        <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/90 px-4 py-4 backdrop-blur lg:px-8">
          <div class="flex items-center justify-between gap-4">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
                Yönetim Paneli
              </p>
              <p class="mt-1 text-sm text-slate-500">
                {{ user?.email }}
              </p>
            </div>

            <div class="flex items-center gap-3">
              <NuxtLink
                to="/"
                class="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 sm:inline-flex"
              >
                Siteye dön
              </NuxtLink>

              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-red-100 hover:bg-red-50 hover:text-red-600"
                @click="signOut"
              >
                <Icon name="lucide:log-out" class="h-4 w-4" />
                Çıkış
              </button>
            </div>
          </div>

          <!-- Mobile nav -->
          <nav class="mt-4 flex gap-2 overflow-x-auto lg:hidden">
            <NuxtLink
              v-for="item in navItems"
              :key="item.to"
              :to="item.to"
              class="flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
              :class="
                isActive(item.to)
                  ? 'bg-sky-50 text-sky-700'
                  : 'bg-slate-50 text-slate-600'
              "
            >
              <Icon :name="item.icon" class="h-4 w-4" />
              {{ item.label }}
            </NuxtLink>
          </nav>
        </header>

        <!-- Page content -->
        <div class="flex-1 px-4 py-8 lg:px-8">
          <slot />
        </div>
      </section>
    </div>
  </main>
</template>