import type { TeamMemberRow } from '~~/shared/types/team-member'

type PublicTeamListResponse = {
  members: TeamMemberRow[]
}

export function usePublicTeam() {
  async function getPublicTeamMembers() {
    const response = await $fetch<PublicTeamListResponse>('/api/team')

    return response.members
  }

  async function getPublicDoctors() {
    const members = await getPublicTeamMembers()

    return members.filter((member) => member.role === 'doctor')
  }

  async function getPublicDoctorBySlug(slug: string) {
    const doctors = await getPublicDoctors()

    return doctors.find((doctor) => doctor.slug === slug) || null
  }

  async function getPublicStaffMembers() {
    const members = await getPublicTeamMembers()

    return members.filter((member) => member.role !== 'doctor')
  }

  return {
    getPublicTeamMembers,
    getPublicDoctors,
    getPublicDoctorBySlug,
    getPublicStaffMembers
  }
}