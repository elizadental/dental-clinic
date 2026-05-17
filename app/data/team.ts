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

export type TeamMember = {
  id: string
  slug: string

  name: string
  role: TeamMemberRole

  title: LocaleText
  specialty: LocaleText

  shortBio?: LocaleText

  expertiseAreas?: LocaleText[]
  education?: LocaleText[]

  spokenLanguages?: SpokenLanguageCode[]

  image: string

  contact?: ContactInfo

  showContact: boolean

  featured: boolean

  order: number
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',

    slug: 'ahmet-yilmaz',

    name: 'Dr. Ahmet Yılmaz',

    role: 'doctor',

    title: {
      tr: 'Diş Hekimi',
      en: 'Dentist'
    },

    specialty: {
      tr: 'Estetik Diş Hekimliği ve Gülüş Tasarımı',
      en: 'Aesthetic Dentistry & Smile Design'
    },

    shortBio: {
      tr: 'Dr. Ahmet Yılmaz, Eliza Dental Clinic bünyesinde estetik diş hekimliği ve gülüş tasarımı alanlarında hasta odaklı bir yaklaşımla hizmet vermektedir.',
      en: 'Dr. Ahmet Yılmaz provides patient-focused care at Eliza Dental Clinic with a focus on aesthetic dentistry and smile design.'
    },

    expertiseAreas: [
      {
        tr: 'Estetik Diş Hekimliği',
        en: 'Aesthetic Dentistry'
      },
      {
        tr: 'Gülüş Tasarımı',
        en: 'Smile Design'
      },
      {
        tr: 'Diş Beyazlatma',
        en: 'Teeth Whitening'
      }
    ],

    education: [
      {
        tr: 'Diş Hekimliği Fakültesi',
        en: 'Faculty of Dentistry'
      },
      {
        tr: 'Estetik diş hekimliği alanında klinik deneyim',
        en: 'Clinical experience in aesthetic dentistry'
      }
    ],

    spokenLanguages: ['tr', 'en'],

    image: '/doctors/doctor-1.png',

    contact: {
      email: 'ahmetyilmaz@elizadent.com'
    },

    showContact: true,

    featured: true,

    order: 1
  },

  {
    id: '2',

    slug: 'elif-kaya',

    name: 'Dr. Elif Kaya',

    role: 'doctor',

    title: {
      tr: 'Diş Hekimi',
      en: 'Dentist'
    },

    specialty: {
      tr: 'İmplantoloji ve Ağız Cerrahisi',
      en: 'Implantology & Oral Surgery'
    },

    shortBio: {
      tr: 'Dr. Elif Kaya, implant tedavisi ve ağız cerrahisi uygulamalarında modern tedavi planlaması ve hasta konforunu ön planda tutmaktadır.',
      en: 'Dr. Elif Kaya focuses on implant treatment and oral surgery with modern treatment planning and patient comfort in mind.'
    },

    expertiseAreas: [
      {
        tr: 'İmplant Tedavisi',
        en: 'Implant Treatment'
      },
      {
        tr: 'Ağız ve Çene Cerrahisi',
        en: 'Oral & Maxillofacial Surgery'
      }
    ],

    education: [
      {
        tr: 'Diş Hekimliği Fakültesi',
        en: 'Faculty of Dentistry'
      },
      {
        tr: 'İmplantoloji alanında klinik uygulama deneyimi',
        en: 'Clinical experience in implantology'
      }
    ],

    spokenLanguages: ['tr', 'en'],

    image: '/doctors/doctor-2.png',

    contact: {
      email: 'elifkaya@elizadent.com'
    },

    showContact: true,

    featured: true,

    order: 2
  },

  {
    id: '3',

    slug: 'mehmet-demir',

    name: 'Dr. Mehmet Demir',

    role: 'doctor',

    title: {
      tr: 'Diş Hekimi',
      en: 'Dentist'
    },

    specialty: {
      tr: 'Ortodonti',
      en: 'Orthodontics'
    },

    shortBio: {
      tr: 'Dr. Mehmet Demir, ortodontik tedavilerde diş dizilimi, çene kapanışı ve kişiye özel tedavi planlaması üzerine çalışmaktadır.',
      en: 'Dr. Mehmet Demir focuses on orthodontic treatments, teeth alignment, bite correction, and personalized treatment planning.'
    },

    expertiseAreas: [
      {
        tr: 'Ortodonti',
        en: 'Orthodontics'
      },
      {
        tr: 'Diş Dizilimi',
        en: 'Teeth Alignment'
      },
      {
        tr: 'Çene Kapanış Problemleri',
        en: 'Bite Correction'
      },
      {
        tr: 'Şeffaf Plak Tedavileri',
        en: 'Clear Aligner Treatments'
      }
    ],

    education: [
      {
        tr: 'Diş Hekimliği Fakültesi',
        en: 'Faculty of Dentistry'
      },
      {
        tr: 'Ortodonti alanında klinik uygulama deneyimi',
        en: 'Clinical experience in orthodontics'
      }
    ],

    spokenLanguages: ['tr', 'en'],

    image: '/doctors/doctor-3.png',

    contact: {
      email: 'mehmetdemir@elizadent.com',
      phone: '+905012663131'
    },

    showContact: true,

    featured: true,

    order: 3
  },
{
  id: '4',

  slug: 'ayse-karaca',

  name: 'Ayşe Karaca',

  role: 'admin',

  title: {
    tr: 'Klinik Koordinatörü',
    en: 'Clinic Coordinator'
  },

  specialty: {
    tr: 'Hasta Kabul ve Klinik Koordinasyonu',
    en: 'Patient Reception & Clinic Coordination'
  },

  shortBio: {
    tr: 'Hasta kabul, randevu planlaması ve klinik içi süreçlerin düzenli ilerlemesine destek olur.',
    en: 'Supports patient reception, appointment planning, and smooth daily clinic operations.'
  },

  expertiseAreas: [],

  education: [],

  spokenLanguages: ['tr'],

  image: '/team/admin-1.png',

  contact: {
    email: 'info@elizadent.com',
    phone: '+905012663131'
  },

  showContact: false,

  featured: false,

  order: 4
},
{
  id: '5',

  slug: 'zeynep-arslan',

  name: 'Zeynep Arslan',

  role: 'clinic',

  title: {
    tr: 'Klinik Asistanı',
    en: 'Clinical Assistant'
  },

  specialty: {
    tr: 'Klinik Destek ve Hasta Konforu',
    en: 'Clinical Support & Patient Comfort'
  },

  shortBio: {
    tr: 'Tedavi süreçlerinde klinik ekibe destek olur ve hastaların konforlu bir deneyim yaşamasına yardımcı olur.',
    en: 'Supports the clinical team during treatment processes and helps patients have a comfortable experience.'
  },

  expertiseAreas: [],

  education: [],

  spokenLanguages: ['tr'],

  image: '/team/clinic-1.png',

  showContact: false,

  featured: false,

  order: 5
},
{
  id: '6',

  slug: 'murat-demir',

  name: 'Murat Demir',

  role: 'admin',

  title: {
    tr: 'Hasta İlişkileri Sorumlusu',
    en: 'Patient Relations Specialist'
  },

  specialty: {
    tr: 'Hasta İletişimi ve Bilgilendirme',
    en: 'Patient Communication & Guidance'
  },

  shortBio: {
    tr: 'Hasta iletişimi, bilgilendirme ve klinik deneyiminin düzenli ilerlemesi konusunda destek sağlar.',
    en: 'Supports patient communication, guidance, and a smooth clinic experience.'
  },

  expertiseAreas: [],

  education: [],

  spokenLanguages: ['tr'],

  image: '/team/admin-2.png',

  contact: {
    email: 'info@elizadent.com'
  },

  showContact: false,

  featured: false,

  order: 6
}
]