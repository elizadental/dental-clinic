// utils/teamMemberForm.ts
import type {
  ContactInfo,
  LocaleText,
  TeamMemberPayload,
  TeamMemberRow
} from '~~/shared/types/team-member'

export type TeamMemberFormState = Omit<TeamMemberPayload, 'contact' | 'short_bio'> & {
  short_bio: LocaleText
  contact: ContactInfo
}

function emptyLocaleText(): LocaleText {
  return {
    tr: '',
    en: ''
  }
}

export function createEmptyTeamMemberForm(): TeamMemberFormState {
  return {
    slug: '',
    name: '',
    role: 'doctor',

    title: emptyLocaleText(),
    specialty: emptyLocaleText(),

    short_bio: emptyLocaleText(),
    bio_paragraphs: [],
    expertise_areas: [],
    education: [],
    certificates: [],
    spoken_languages: ['tr'],

    image: '',
    contact: {},

    show_contact: false,
    featured: false,
    display_order: 0,
    is_active: true
  }
}

function cleanLocaleText(value: LocaleText): LocaleText {
  return {
    tr: value.tr.trim(),
    en: value.en.trim()
  }
}

function cleanLocaleTextArray(items: LocaleText[]): LocaleText[] {
  return items
    .map(cleanLocaleText)
    .filter((item) => item.tr || item.en)
}

function cleanContact(contact: ContactInfo): ContactInfo | null {
  const cleaned: ContactInfo = {}

  if (contact.email?.trim()) {
    cleaned.email = contact.email.trim()
  }

  if (contact.phone?.trim()) {
    cleaned.phone = contact.phone.trim()
  }

  if (contact.socials) {
    const socials = {
      instagram: contact.socials.instagram?.trim() || undefined,
      linkedin: contact.socials.linkedin?.trim() || undefined,
      website: contact.socials.website?.trim() || undefined
    }

    const hasSocials = Object.values(socials).some(Boolean)

    if (hasSocials) {
      cleaned.socials = socials
    }
  }

  return Object.keys(cleaned).length ? cleaned : null
}

export function createTeamMemberPayloadFromForm(
  form: TeamMemberFormState
): TeamMemberPayload {
  const shortBio = cleanLocaleText(form.short_bio)

  return {
    slug: form.slug.trim(),
    name: form.name.trim(),
    role: form.role,

    title: cleanLocaleText(form.title),
    specialty: cleanLocaleText(form.specialty),

    short_bio: shortBio.tr || shortBio.en ? shortBio : null,
    bio_paragraphs: cleanLocaleTextArray(form.bio_paragraphs),
    expertise_areas: cleanLocaleTextArray(form.expertise_areas),
    education: cleanLocaleTextArray(form.education),
    certificates: cleanLocaleTextArray(form.certificates),
    spoken_languages: form.spoken_languages,

    image: form.image.trim(),
    contact: cleanContact(form.contact),

    show_contact: form.show_contact,
    featured: form.featured,
    display_order: form.display_order,
    is_active: form.is_active
  }
}
export function createTeamMemberFormFromRow(
  row: TeamMemberRow
): TeamMemberFormState {
  return {
    slug: row.slug,
    name: row.name,
    role: row.role,

    title: row.title || emptyLocaleText(),
    specialty: row.specialty || emptyLocaleText(),

    short_bio: row.short_bio || emptyLocaleText(),
    bio_paragraphs: row.bio_paragraphs || [],
    expertise_areas: row.expertise_areas || [],
    education: row.education || [],
    certificates: row.certificates || [],
    spoken_languages: row.spoken_languages?.length
      ? row.spoken_languages
      : ['tr'],

    image: row.image || '',
    contact: row.contact || {},

    show_contact: row.show_contact,
    featured: row.featured,
    display_order: row.display_order,
    is_active: row.is_active
  }
}