import { computed } from 'vue'
import { teamMembers } from '~/data/team'

type LocaleCode = 'tr' | 'en'
type SpokenLanguageCode = 'tr' | 'en' | 'ar'

export function useDoctors() {
  const { locale, t } = useI18n()
  const localePath = useLocalePath()

  const currentLocale = computed<LocaleCode>(() => {
    return locale.value === 'en' ? 'en' : 'tr'
  })

  const doctors = computed(() => {
    return teamMembers
      .filter((member) => member.role === 'doctor')
      .sort((a, b) => a.order - b.order)
  })

  function getDoctorBySlug(slug: string) {
    return doctors.value.find((doctor) => doctor.slug === slug)
  }

  function getLocalizedText(text: { tr: string; en: string }) {
    return text[currentLocale.value]
  }

  function getDoctorBioLink(slug: string) {
    return localePath(`/doctors/${slug}`)
  }

  function getSpokenLanguageLabel(code: SpokenLanguageCode) {
    return t(`common.languages.${code}`)
  }

  return {
    doctors,
    getDoctorBySlug,
    getLocalizedText,
    getDoctorBioLink,
    getSpokenLanguageLabel
  }
}