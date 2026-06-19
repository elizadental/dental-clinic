import type {
  TeamMemberPayload,
  TeamMemberRole,
  TeamMemberRow
} from '~~/shared/types/team-member'

type AdminTeamListResponse = {
  members: TeamMemberRow[]
}

type AdminTeamSingleResponse = {
  member: TeamMemberRow
}

type AdminTeamDeleteResponse = {
  deletedId: string
  deletedName: string
}

type AdminTeamImageUploadResponse = {
  path: string
  publicUrl: string
}

export function useAdminTeam() {
  const requestFetch = useRequestFetch()

  async function getAdminTeamMembers() {
    const response = await requestFetch<AdminTeamListResponse>('/api/admin/team')

    return response.members
  }

  async function getAdminTeamMember(id: string) {
    const response = await requestFetch<AdminTeamSingleResponse>(`/api/admin/team/${id}`)

    return response.member
  }

  async function createTeamMember(payload: TeamMemberPayload) {
    const response = await requestFetch<AdminTeamSingleResponse>('/api/admin/team', {
      method: 'POST',
      body: payload
    })

    return response.member
  }

  async function updateTeamMember(id: string, payload: TeamMemberPayload) {
    const response = await requestFetch<AdminTeamSingleResponse>(`/api/admin/team/${id}`, {
      method: 'PATCH',
      body: payload
    })

    return response.member
  }

  async function deleteTeamMember(id: string) {
    return await requestFetch<AdminTeamDeleteResponse>(`/api/admin/team/${id}`, {
      method: 'DELETE'
    })
  }

  async function uploadTeamMemberImage(
    file: File,
    slug: string,
    role: TeamMemberRole
  ) {
    const formData = new FormData()

    formData.append('file', file)
    formData.append('slug', slug)
    formData.append('role', role)

    return await requestFetch<AdminTeamImageUploadResponse>('/api/admin/team/upload-image', {
      method: 'POST',
      body: formData
    })
  }

  return {
    getAdminTeamMembers,
    getAdminTeamMember,
    createTeamMember,
    updateTeamMember,
    deleteTeamMember,
    uploadTeamMemberImage
  }
}