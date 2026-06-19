import { createError } from 'h3'

type SupabaseLikeClient = {
  from: (table: string) => {
    select: (columns?: string) => any
  }
}

const publicTeamSelect = `
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
`

export async function getPublicTeamMembers(supabase: SupabaseLikeClient) {
  const { data, error } = await supabase
    .from('team_members')
    .select(publicTeamSelect)
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    })
  }

  return data || []
}

export async function getAdminTeamMembers(supabase: SupabaseLikeClient) {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    })
  }

  return data || []
}