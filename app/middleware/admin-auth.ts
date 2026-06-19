export default defineNuxtRouteMiddleware(async () => {
  const config = useRuntimeConfig()
  const user = useSupabaseUser()
  const supabase = useSupabaseClient()

  const adminEmail = config.public.adminEmail

  if (!user.value) {
    return navigateTo('/admin/login')
  }

  if (user.value.email !== adminEmail) {
    await supabase.auth.signOut()

    return navigateTo('/admin/login')
  }
})