export type LocaleText = {
  tr: string
  en: string
}

export type SocialLinks = {
  instagram?: string
  linkedin?: string
  website?: string
}

export type ContactInfo = {
  email?: string
  phone?: string
  socials?: SocialLinks
}

export type TeamMemberRole = 'doctor' | 'admin' | 'clinic'

export type SpokenLanguageCode = 'tr' | 'en' | 'ar'

export type TeamMemberRow = {
  id: string
  slug: string
  name: string
  role: TeamMemberRole

  title: LocaleText
  specialty: LocaleText

  short_bio: LocaleText | null
  bio_paragraphs: LocaleText[]
  expertise_areas: LocaleText[]
  education: LocaleText[]
  certificates: LocaleText[]
  spoken_languages: SpokenLanguageCode[]

  image: string
  contact: ContactInfo | null

  show_contact: boolean
  featured: boolean
  display_order: number
  is_active: boolean

  created_at: string
  updated_at: string
}