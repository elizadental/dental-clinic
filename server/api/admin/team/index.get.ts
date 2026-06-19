import { requireAdmin } from '../../../utils/requireAdmin'
import { getAdminTeamMembers } from '../../../utils/teamQueries'

export default defineEventHandler(async (event) => {
  const { supabase } = await requireAdmin(event)
  const members = await getAdminTeamMembers(supabase)

  return {
    members
  }
})