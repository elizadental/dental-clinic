import { createError, getRouterParam, readBody } from 'h3'
import { requireAdmin } from '../../../utils/requireAdmin'
import { normalizeTeamMemberPayload } from '../../../utils/teamPayload'

export default defineEventHandler(async (event) => {
  const { supabase } = await requireAdmin(event)

  const id = getRouterParam(event, 'id')

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Team member ID is required.'
    })
  }

  const body = await readBody(event)
  const payload = normalizeTeamMemberPayload(body)

  const { data, error } = await supabase
    .from('team_members')
    .update(payload)
    .eq('id', id)
    .select('*')
    .single()

  if (error) {
    if (error.code === '23505') {
      throw createError({
        statusCode: 409,
        statusMessage: 'A team member with this slug already exists.'
      })
    }

    throw createError({
      statusCode: 500,
      statusMessage: error.message
    })
  }

  return {
    member: data
  }
})