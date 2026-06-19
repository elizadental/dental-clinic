import type {
  LocaleText,
  SpokenLanguageCode,
  TeamMemberRow
} from '~~/shared/types/team-member'

type LocaleCode = 'tr' | 'en'

export function useDoctors() {
  const { locale, t } = useI18n()
  const localePath = useLocalePath()
  const { getPublicTeamMembers } = usePublicTeam()

  const currentLocale = computed<LocaleCode>(() => {
    return locale.value === 'en' ? 'en' : 'tr'
  })

  const {
    data: teamMembers,
    status,
    error,
    refresh
  } = useAsyncData<TeamMemberRow[]>(
    'public-team-members-for-doctors',
    () => getPublicTeamMembers(),
    {
      default: () => []
    }
  )

  const doctors = computed(() => {
    return teamMembers.value
      .filter((member) => member.role === 'doctor')
      .sort((a, b) => a.display_order - b.display_order)
  })

  const staffMembers = computed(() => {
    return teamMembers.value
      .filter((member) => member.role !== 'doctor')
      .sort((a, b) => a.display_order - b.display_order)
  })

  const isLoadingDoctors = computed(() => {
    return status.value === 'pending'
  })

  function getDoctorBySlug(slug: string) {
    return doctors.value.find((doctor) => doctor.slug === slug) || null
  }

  function getLocalizedText(text: LocaleText | null | undefined) {
    if (!text) {
      return ''
    }

    return text[currentLocale.value] || text.tr || text.en || ''
  }

  function getDoctorBioLink(slug: string) {
    return localePath(`/doctors/${slug}`)
  }

  function getSpokenLanguageLabel(code: SpokenLanguageCode) {
    return t(`common.languages.${code}`)
  }

  return {
    teamMembers,
    doctors,
    staffMembers,
    isLoadingDoctors,
    error,
    refresh,

    getDoctorBySlug,
    getLocalizedText,
    getDoctorBioLink,
    getSpokenLanguageLabel
  }
}