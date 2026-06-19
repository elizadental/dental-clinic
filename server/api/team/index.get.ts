import { createError } from 'h3'
import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event)

  const { data, error } = await supabase
    .from('team_members')
    .select(`
      id,
      slug,
      name,
      role,
      title,
      specialty,
      short_bio,
      bio_paragraphs,
      expertise_areas,
      education,
      certificates,
      spoken_languages,
      image,
      contact,
      show_contact,
      featured,
      display_order,
      is_active
    `)
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    })
  }

  return {
    members: data || []
  }
})