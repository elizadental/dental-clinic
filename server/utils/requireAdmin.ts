import type { H3Event } from 'h3'
import { createError } from 'h3'
import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'

export async function requireAdmin(event: H3Event) {
  const config = useRuntimeConfig(event)

  const adminEmail = config.public.adminEmail

  if (!adminEmail) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Admin email is not configured.'
    })
  }

  const user = await serverSupabaseUser(event)

  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'You must be logged in.'
    })
  }

  if (user.email !== adminEmail) {
    throw createError({
      statusCode: 403,
      statusMessage: 'You are not allowed to access this admin resource.'
    })
  }

  const supabase = await serverSupabaseClient(event)

  return {
    user,
    supabase
  }
}