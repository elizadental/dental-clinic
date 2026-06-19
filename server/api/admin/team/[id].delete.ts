import { createError, getRouterParam } from 'h3'
import { requireAdmin } from '../../../utils/requireAdmin'

export default defineEventHandler(async (event) => {
  const { supabase } = await requireAdmin(event)

  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Team member ID is required.'
    })
  }

  const { data, error } = await supabase
    .from('team_members')
    .delete()
    .eq('id', id)
    .select('id, name')
    .maybeSingle()

  if (error) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    })
  }

  if (!data) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Team member not found.'
    })
  }

  return {
    deletedId: data.id,
    deletedName: data.name
  }
})