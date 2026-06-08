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
  bioParagraphs?: LocaleText[]
  expertiseAreas?: LocaleText[]
  education?: LocaleText[]
  certificates?: LocaleText[]
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

  slug: 'eyup-micoogullari',

  name: 'Dt. Eyüp Miçooğulları',

  role: 'doctor',

  title: {
    tr: 'Diş Hekimi',
    en: 'Dentist'
  },

  specialty: {
    tr: 'Diş Hekimi',
    en: 'Dentist'
  },

  shortBio: {
    tr: 'Dt. Eyüp Miçooğulları, implantoloji, cerrahi tedaviler, protez ve estetik diş hekimliği uygulamalarında modern ve hasta odaklı çözümler sunmaktadır.',
    en: 'Dt. Eyüp Miçooğulları provides modern, patient-focused solutions in implantology, surgical treatments, prosthetics, and aesthetic dentistry.'
  },

  bioParagraphs: [
    {
      tr: '1995 yılında Hatay’da doğan Dt. Eyüp Miçooğulları, lisans eğitimini Yakın Doğu Üniversitesi Diş Hekimliği Fakültesi’nde başarıyla tamamlamıştır. Mezuniyetinin ardından farklı kliniklerde görev yaparak hem yerli hem de yabancı hastaların tedavi süreçlerinde geniş bir klinik deneyim ve vizyon kazanmıştır.',
      en: 'Born in Hatay in 1995, Dt. Eyüp Miçooğulları successfully completed his undergraduate education at Near East University Faculty of Dentistry. After graduation, he worked in different clinics and gained broad clinical experience and perspective through the treatment processes of both local and international patients.'
    },
    {
      tr: 'Mesleki çalışmalarında özellikle implantoloji, cerrahi müdahaleler, protez ve estetik diş hekimliği uygulamalarına odaklanan Dt. Miçooğulları, sektördeki global gelişmeleri ve yenilikçi tedavi yaklaşımlarını yakından takip etmektedir. Dijital diş hekimliğinin sunduğu ileri teknolojik imkânlardan yararlanarak hastalarına fonksiyonellik ve yüksek estetiği bir arada sunmayı amaçlamaktadır.',
      en: 'In his professional practice, Dt. Miçooğulları focuses especially on implantology, surgical procedures, prosthetic treatments, and aesthetic dentistry. He closely follows global developments and innovative treatment approaches in the field. By using the advanced technological possibilities offered by digital dentistry, he aims to provide both functionality and high aesthetics together.'
    },
    {
      tr: 'Her hastanın benzersiz ihtiyaçlarına yönelik kişiselleştirilmiş, konforlu ve modern çözümler üreten Dt. Eyüp Miçooğulları, genel diş hekimliği hizmetlerini yüksek kalite standartlarında, güven ve hasta memnuniyeti esasıyla sunmaya devam etmektedir.',
      en: 'Producing personalized, comfortable, and modern solutions for each patient’s unique needs, Dt. Eyüp Miçooğulları continues to provide general dentistry services with high quality standards, trust, and patient satisfaction at the center.'
    }
  ],

  expertiseAreas: [
    {
      tr: 'Estetik Diş Hekimliği',
      en: 'Aesthetic Dentistry'
    },
    {
      tr: 'İmplant Üstü ve Protez Uygulamaları',
      en: 'Implant-Supported Prosthetic Treatments'
    },
    {
      tr: 'İmplant Operasyonları ve Cerrahi Tedaviler',
      en: 'Implant Operations & Surgical Treatments'
    },
    {
      tr: 'Gülüş Tasarımı',
      en: 'Smile Design'
    },
    {
      tr: 'Zirkonyum Kronlar',
      en: 'Zirconium Crowns'
    },
    {
      tr: 'Kompozit Lamina',
      en: 'Composite Laminate Veneers'
    },
    {
      tr: 'Sabit Protezler',
      en: 'Fixed Prosthetics'
    }
  ],

  education: [
    {
      tr: 'Yakın Doğu Üniversitesi Diş Hekimliği Fakültesi',
      en: 'Near East University Faculty of Dentistry'
    }
  ],

certificates: [
  {
    tr: 'Anterior Kompozit Restorasyonlar: Kırık, Diastema ve Lamina Uygulamaları Hands-On Eğitimi',
    en: 'Anterior Composite Restorations: Fracture, Diastema, Laminate Hands-On'
  },
  {
    tr: 'İmplantoloji Temelleri - Cerrahi Eğitimi',
    en: 'Basic Of Implantology - Surgery Course'
  }
],

  spokenLanguages: ['tr'],

  image: '/doctors/doctor-1.png',

  contact: {
    email: 'eyupmico@elizadent.com'
  },

  showContact: true,

  featured: true,

  order: 1
},
{
  id: '2',

  slug: 'hasan-huseyin-demir',

  name: 'Dt. Hasan Hüseyin Demir',

  role: 'doctor',

  title: {
    tr: 'Diş Hekimi',
    en: 'Dentist'
  },

 specialty: {
    tr: 'Diş Hekimi',
    en: ' Dentist'
  },

  shortBio: {
    tr: 'Dt. Hasan Hüseyin Demir, genel diş hekimliği uygulamalarında hasta konforunu, güvenli tedavi sürecini ve güncel klinik yaklaşımları ön planda tutmaktadır.',
    en: 'Dt. Hasan Hüseyin Demir focuses on patient comfort, safe treatment processes, and current clinical approaches in general dentistry.'
  },

  bioParagraphs: [
    {
      tr: 'Ege Üniversitesi Diş Hekimliği Fakültesi’nden başarıyla mezun olan Dt. Hasan Hüseyin Demir, lisans eğitimi süresince edindiği güçlü teorik altyapıyı yoğun klinik staj dönemiyle pekiştirmiştir. Bu süreçte kanal tedavisi, kompozit dolgu uygulamaları, diş çekimi ve protez planlama gibi temel klinik uygulamalarda kapsamlı deneyim kazanmıştır.',
      en: 'Dt. Hasan Hüseyin Demir successfully graduated from Ege University Faculty of Dentistry. During his undergraduate education, he strengthened his solid theoretical foundation through an intensive clinical internship period. In this process, he gained comprehensive experience in essential clinical practices such as root canal treatment, composite fillings, tooth extraction, and prosthetic planning.'
    },
    {
      tr: 'Hasta memnuniyetini ve konforunu her zaman ön planda tutan, sorumluluk sahibi ve dikkatli bir hekim olarak klinik çalışma disiplinine büyük önem vermektedir. Takım çalışmasına uyumlu yapısı ve güçlü hasta iletişimi sayesinde, tedavi süreçlerini hastaları için güvenli ve huzurlu bir deneyime dönüştürmeyi amaçlamaktadır. Öğrenmeye ve mesleki gelişime açık vizyonuyla güncel diş hekimliği teknolojilerini ve tedavi yöntemlerini yakından takip etmektedir.',
      en: 'As a responsible and attentive dentist who always prioritizes patient satisfaction and comfort, he places great importance on clinical working discipline. With his team-oriented approach and strong patient communication skills, he aims to turn treatment processes into a safe and comfortable experience for his patients. With a vision open to learning and professional development, he closely follows current dental technologies and treatment methods.'
    }
  ],

  expertiseAreas: [
    {
      tr: 'Kanal Tedavisi',
      en: 'Root Canal Treatment'
    },
    {
      tr: 'Kompozit Dolgu Uygulamaları',
      en: 'Composite Filling Applications'
    },
    {
      tr: 'Diş Çekimi',
      en: 'Tooth Extraction'
    },
    {
      tr: 'Protez Planlama',
      en: 'Prosthetic Planning'
    },
    {
      tr: 'Genel Diş Hekimliği',
      en: 'General Dentistry'
    }
  ],

  education: [
    {
      tr: 'Ege Üniversitesi Diş Hekimliği Fakültesi',
      en: 'Ege University Faculty of Dentistry'
    }
  ],

  certificates: [],

  spokenLanguages: ['tr'],

  image: '/doctors/doctor-3.png',

    contact: {
    email: 'hasanhuseyindemir@elizadent.com'
  },

  showContact: true,

  featured: true,

  order: 3
},
 {
  id: '7',

  slug: 'zehra-pasa',

  name: 'Dt. Zehra Paşa',

  role: 'doctor',

  title: {
    tr: 'Diş Hekimi',
    en: 'Dentist'
  },

  specialty: {
    tr: 'Diş Hekimi',
    en: ' Dentist'
  },

  shortBio: {
    tr: 'Dt. Zehra Paşa, koruyucu ve restoratif diş hekimliği alanlarında modern, güvenilir ve hasta odaklı tedavi yaklaşımı sunmaktadır.',
    en: 'Dt. Zehra Paşa provides modern, reliable, and patient-focused care in preventive and restorative dentistry.'
  },

  bioParagraphs: [
    {
      tr: "Diş Hekimi Zehra Paşa, İzmir Katip Çelebi Üniversitesi Diş Hekimliği Fakültesi'nden 2025 yılında başarıyla mezun olmuştur. Lisans eğitimi boyunca teorik bilgisini yoğun klinik uygulamalarla pekiştirmiş; hasta iletişimi, teşhis ve tedavi planlamasında güçlü bir temel kazanmıştır. Koruyucu ve restoratif diş hekimliğine odaklanarak, özellikle güncel estetik yaklaşımlar ve kompozit restorasyonlar alanındaki klinik becerilerini geliştirmiştir.",
      en: "Dentist Zehra Paşa graduated successfully from İzmir Katip Çelebi University Faculty of Dentistry in 2025. During her undergraduate education, she strengthened her theoretical knowledge through intensive clinical practice and built a strong foundation in patient communication, diagnosis, and treatment planning. With a focus on preventive and restorative dentistry, she developed her clinical skills especially in current aesthetic approaches and composite restorations."
    },
    {
      tr: "Mesleki gelişiminde bilimsel araştırmaları ve güncel dental teknolojileri yakından takip etmeye önem veren Zehra Paşa, e-sigara kullanımının ağız sağlığı üzerindeki etkilerini inceleyen çalışmada araştırmacı olarak yer almıştır. Etik değerlere bağlılığı ve sürekli öğrenme motivasyonuyla öne çıkan Paşa, hastalarına modern, güvenilir ve konforlu bir sağlık hizmeti sunmayı amaçlamaktadır.",
      en: "Zehra Paşa places importance on following scientific research and current dental technologies as part of her professional development. She also took part as a researcher in a study examining the effects of e-cigarette use on oral health. Standing out with her commitment to ethical values and motivation for continuous learning, Paşa aims to provide modern, reliable, and comfortable healthcare services to her patients."
    }
  ],

 expertiseAreas: [
  {
    tr: 'Restoratif Diş Hekimliği',
    en: 'Restorative Dentistry'
  },
  {
    tr: 'Kompozit Restorasyonlar',
    en: 'Composite Restorations'
  },
  {
    tr: 'Estetik Diş Hekimliği',
    en: 'Aesthetic Dentistry'
  },
  {
    tr: 'Anterior Estetik Restorasyonlar',
    en: 'Anterior Aesthetic Restorations'
  },
  {
    tr: 'Süt Dişi Tedavileri',
    en: 'Primary Tooth Treatments'
  },
  {
    tr: 'Kanal Tedavisi',
    en: 'Root Canal Treatment'
  }
],

  education: [
    {
      tr: 'İzmir Katip Çelebi Üniversitesi Diş Hekimliği Fakültesi, 2025',
      en: 'İzmir Katip Çelebi University Faculty of Dentistry, 2025'
    }
  ],

  certificates: [
    {
      tr: 'Tüm Detaylarıyla Kompozit Restorasyonlar Eğitimi',
      en: 'Composite Restorations in Detail Training'
    },
    {
      tr: 'İZDO Öğrenci Kongresi – İzmir Diş Hekimleri Odası, Ekim 2024',
      en: 'İZDO Student Congress – İzmir Chamber of Dentists, October 2024'
    },
    {
      tr: 'World Dental Congress – FDI Dünya Dişhekimliği Federasyonu, Eylül 2024',
      en: 'World Dental Congress – FDI World Dental Federation, September 2024'
    },
    {
      tr: '17. Diş Hekimliği Etkinliği – MEDYATEAM, Nisan 2024',
      en: '17th Dentistry Event – MEDYATEAM, April 2024'
    },
    {
      tr: 'Endodontide Acil Tedavi ve Sistemik İlaç Kullanımı Semineri – Prof. Dr. Bilge Hakan Şen, Mart 2024',
      en: 'Emergency Treatment in Endodontics and Systemic Drug Use Seminar – Prof. Dr. Bilge Hakan Şen, March 2024'
    },
    {
      tr: '30. Uluslararası Bilimsel Kongre – İzmir Diş Hekimleri Odası, Kasım 2023',
      en: '30th International Scientific Congress – İzmir Chamber of Dentists, November 2023'
    },
    {
      tr: '29. Uluslararası Bilimsel Kongre – İzmir Diş Hekimleri Odası, Kasım 2022',
      en: '29th International Scientific Congress – İzmir Chamber of Dentists, November 2022'
    }
  ],

  spokenLanguages: ['tr'],

  image: '/doctors/doctor-2.png',

  contact: {
    email: 'zehrapasa@elizadent.com'
  },

  showContact: true,

  featured: true,

  order: 2
},

  // {
  //   id: '3',

  //   slug: 'mehmet-kucuk',

  //   name: 'Dt. Mehmet Küçük',

  //   role: 'doctor',

  //   title: {
  //     tr: 'Diş Hekimi',
  //     en: 'Dentist'
  //   },

  //   specialty: {
  //     tr: 'Ortodonti',
  //     en: 'Orthodontics'
  //   },

  //   shortBio: {
  //     en: 'Dt. Mehmet Küçük focuses on orthodontic treatments, teeth alignment, bite correction, and personalized treatment planning.',
  //     tr: 'Dt. Mehmet Küçük, ortodontik tedavilerde diş dizilimi, çene kapanışı ve kişiye özel tedavi planlaması üzerine çalışmaktadır.',
  //   },

  //   expertiseAreas: [
  //     {
  //       tr: 'Ortodonti',
  //       en: 'Orthodontics'
  //     },
  //     {
  //       tr: 'Diş Dizilimi',
  //       en: 'Teeth Alignment'
  //     },
  //     {
  //       tr: 'Çene Kapanış Problemleri',
  //       en: 'Bite Correction'
  //     },
  //     {
  //       tr: 'Şeffaf Plak Tedavileri',
  //       en: 'Clear Aligner Treatments'
  //     }
  //   ],

  //   education: [
  //     {
  //       tr: 'Diş Hekimliği Fakültesi',
  //       en: 'Faculty of Dentistry'
  //     },
  //     {
  //       tr: 'Ortodonti alanında klinik uygulama deneyimi',
  //       en: 'Clinical experience in orthodontics'
  //     }
  //   ],

  //   spokenLanguages: ['tr', 'en'],

  //   image: '/doctors/doctor-3.png',

  //   contact: {
  //     email: 'mehmetkucuk@elizadent.com',
  //     phone: '+905012663131'
  //   },

  //   showContact: true,

  //   featured: true,

  //   order: 3
  // },
{
  id: '4',

  slug: 'ahmet-micoogullari',

  name: 'Ahmet Miçooğulları',

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

  slug: 'idil-Temizkan',

  name: 'İdil Temizkan',

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

  slug: 'dilan-saglam',

  name: 'Dilan Sağlam',

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

  image: '/team/admin-2.png',

  contact: {
    email: 'info@elizadent.com'
  },

  showContact: false,

  featured: false,

  order: 6
}
]