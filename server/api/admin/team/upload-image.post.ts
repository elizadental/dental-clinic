
import { createError, readMultipartFormData } from 'h3'
import { requireAdmin } from '../../../utils/requireAdmin'

const bucketName = 'team-images'

const allowedMimeTypes = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif'
]

const maxFileSize = 5 * 1024 * 1024 // 5 MB

function getExtensionFromMimeType(mimeType: string) {
  if (mimeType === 'image/jpeg') {
    return 'jpg'
  }

  if (mimeType === 'image/png') {
    return 'png'
  }

  if (mimeType === 'image/webp') {
    return 'webp'
  }

  if (mimeType === 'image/avif') {
    return 'avif'
  }

  return 'bin'
}

function cleanSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function getFolderFromRole(role: string) {
  return role === 'doctor' ? 'doctors' : 'staff'
}

export default defineEventHandler(async (event) => {
  const { supabase } = await requireAdmin(event)

  const formData = await readMultipartFormData(event)

  if (!formData) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Form data is required.'
    })
  }

  const filePart = formData.find((part) => part.name === 'file')
  const slugPart = formData.find((part) => part.name === 'slug')
  const rolePart = formData.find((part) => part.name === 'role')

  if (!filePart || !filePart.filename) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Image file is required.'
    })
  }

  const mimeType = filePart.type || ''

  if (!allowedMimeTypes.includes(mimeType)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Only JPG, PNG, WEBP, and AVIF images are allowed.'
    })
  }

  if (filePart.data.length > maxFileSize) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Image must be smaller than 5 MB.'
    })
  }

  const slug = cleanSlug(slugPart?.data.toString() || 'team-member')
  const role = rolePart?.data.toString() || 'staff'

  const folder = getFolderFromRole(role)
  const extension = getExtensionFromMimeType(mimeType)
 const uniqueId = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`

  const filePath = `${folder}/${slug}-${uniqueId}.${extension}`

  const { error: uploadError } = await supabase.storage
    .from(bucketName)
    .upload(filePath, filePart.data, {
      contentType: mimeType,
      upsert: false
    })

  if (uploadError) {
    throw createError({
      statusCode: 500,
      statusMessage: uploadError.message
    })
  }

  const { data } = supabase.storage
    .from(bucketName)
    .getPublicUrl(filePath)

  return {
    path: filePath,
    publicUrl: data.publicUrl
  }
})