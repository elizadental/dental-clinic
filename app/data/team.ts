export type TeamMemberRole = 'doctor' | 'admin' | 'clinic'

export type TeamMember = {
  id: string
  slug: string
  name: string
  role: TeamMemberRole
  specialty: {
    tr: string
    en: string
  }
  image: string
  featured: boolean
  order: number
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    slug: 'ahmet-yilmaz',
    name: 'Dr. Ahmet Yılmaz',
    role: 'doctor',
    specialty: {
      tr: 'Estetik Diş Hekimliği ve Gülüş Tasarımı',
      en: 'Aesthetic Dentistry & Smile Design'
    },
    image: '/doctors/doctor-1.png',
    featured: true,
    order: 1
  },
  {
    id: '2',
    slug: 'elif-kaya',
    name: 'Dr. Elif Kaya',
    role: 'doctor',
    specialty: {
      tr: 'İmplantoloji ve Ağız Cerrahisi',
      en: 'Implantology & Oral Surgery'
    },
    image: '/doctors/doctor-2.png',
    featured: true,
    order: 2
  },
  {
    id: '3',
    slug: 'mehmet-demir',
    name: 'Dr. Mehmet Demir',
    role: 'doctor',
    specialty: {
      tr: 'Ortodonti',
      en: 'Orthodontics'
    },
    image: '/doctors/doctor-3.png',
    featured: true,
    order: 3
  }
]