import { createError } from 'h3'
import type {
  ContactInfo,
  LocaleText,
  SpokenLanguageCode,
  TeamMemberPayload,
  TeamMemberRole
} from '~~/shared/types/team-member'

const allowedRoles: TeamMemberRole[] = ['doctor', 'admin', 'clinic']
const allowedLanguages: SpokenLanguageCode[] = ['tr', 'en', 'ar']

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function asText(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function asBoolean(value: unknown, fallback = false) {
  return typeof value === 'boolean' ? value : fallback
}

function normalizeLocaleText(
  value: unknown,
  fieldName: string,
  required = false
): LocaleText {
  if (!isObject(value)) {
    if (required) {
      throw createError({
        statusCode: 400,
        statusMessage: `${fieldName} is required.`
      })
    }

    return {
      tr: '',
      en: ''
    }
  }

  const text = {
    tr: asText(value.tr),
    en: asText(value.en)
  }

  if (required && !text.tr && !text.en) {
    throw createError({
      statusCode: 400,
      statusMessage: `${fieldName} must include Turkish or English text.`
    })
  }

  return text
}

function normalizeLocaleTextArray(value: unknown): LocaleText[] {
  if (!Array.isArray(value)) {
    return []
  }

  return value
    .map((item) => normalizeLocaleText(item, 'array item'))
    .filter((item) => item.tr || item.en)
}

function normalizeLanguages(value: unknown): SpokenLanguageCode[] {
  if (!Array.isArray(value)) {
    return ['tr']
  }

  const languages = value.filter((item): item is SpokenLanguageCode => {
    return allowedLanguages.includes(item as SpokenLanguageCode)
  })

  return languages.length ? languages : ['tr']
}

function normalizeContact(value: unknown): ContactInfo | null {
  if (!isObject(value)) {
    return null
  }

  const contact: ContactInfo = {}

  const email = asText(value.email)
  const phone = asText(value.phone)

  if (email) {
    contact.email = email
  }

  if (phone) {
    contact.phone = phone
  }

  if (isObject(value.socials)) {
    contact.socials = {}

    const instagram = asText(value.socials.instagram)
    const linkedin = asText(value.socials.linkedin)
    const website = asText(value.socials.website)

    if (instagram) {
      contact.socials.instagram = instagram
    }

    if (linkedin) {
      contact.socials.linkedin = linkedin
    }

    if (website) {
      contact.socials.website = website
    }

    if (!Object.keys(contact.socials).length) {
      delete contact.socials
    }
  }

  return Object.keys(contact).length ? contact : null
}

export function normalizeTeamMemberPayload(body: unknown): TeamMemberPayload {
  if (!isObject(body)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Request body must be an object.'
    })
  }

  const slug = asText(body.slug)
  const name = asText(body.name)
  const role = asText(body.role) as TeamMemberRole
  const image = asText(body.image)

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Slug is required.'
    })
  }

  if (!name) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name is required.'
    })
  }

  if (!allowedRoles.includes(role)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid role.'
    })
  }

  if (!image) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Image path is required.'
    })
  }

  const displayOrder = Number(body.display_order ?? 0)

  if (Number.isNaN(displayOrder)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Display order must be a number.'
    })
  }

  const shortBio = normalizeLocaleText(body.short_bio, 'short_bio')

  return {
    slug,
    name,
    role,

    title: normalizeLocaleText(body.title, 'title', true),
    specialty: normalizeLocaleText(body.specialty, 'specialty', true),

    short_bio: shortBio.tr || shortBio.en ? shortBio : null,
    bio_paragraphs: normalizeLocaleTextArray(body.bio_paragraphs),
    expertise_areas: normalizeLocaleTextArray(body.expertise_areas),
    education: normalizeLocaleTextArray(body.education),
    certificates: normalizeLocaleTextArray(body.certificates),
    spoken_languages: normalizeLanguages(body.spoken_languages),

    image,
    contact: normalizeContact(body.contact),

    show_contact: asBoolean(body.show_contact),
    featured: asBoolean(body.featured),
    display_order: displayOrder,
    is_active: asBoolean(body.is_active, true)
  }
}