// data/services.ts

export type ServiceLocale = 'tr' | 'en'

export type ServiceDetail = {
  slug: string
  image: string
  icon: string
  related?: string[]
  content: {
    tr: ServiceContent
    en: ServiceContent
  }
}

export type ServiceContent = {
  title: string
  eyebrow: string
  shortDescription: string
  introTitle: string
  intro: string
  whoTitle: string
  who: string[]
  processTitle: string
  process: {
    title: string
    desc: string
  }[]
  benefitsTitle: string
  benefits: string[]
  faqTitle: string
  faq: {
    q: string
    a: string
  }[]
}

export const services: ServiceDetail[] = [
  {
    slug: 'esthetic-dentistry',
    image: '/images/services/esthetic-dentistry.jpg',
    icon: 'lucide:sparkles',
    related: ['smile-design', 'teeth-whitening', 'dental-prosthetics'],
    content: {
      tr: {
        eyebrow: 'Estetik Diş Hekimliği',
        title: 'Estetik Diş Hekimliği',
        shortDescription:
          'Dişlerin görünümünü, yüz hatlarını ve gülüş estetiğini birlikte değerlendiren modern diş hekimliği uygulamalarıdır.',
        introTitle: 'Doğal ve dengeli bir gülüş için estetik yaklaşım',
        intro:
          'Estetik diş hekimliği yalnızca daha beyaz dişlere sahip olmak anlamına gelmez. Dişlerin rengi, şekli, dizilimi, diş eti görünümü ve yüz yapısıyla uyumu birlikte değerlendirilir. Amaç, kişinin yüz ifadesine doğal görünen, sağlıklı ve dengeli bir gülüş kazandırmaktır.',
        whoTitle: 'Kimler için uygundur?',
        who: [
          'Diş renginden, şeklinden veya görünümünden memnun olmayan kişiler',
          'Gülüşünde daha dengeli ve estetik bir görünüm isteyenler',
          'Kırık, aşınmış veya formu bozulmuş dişlere sahip olanlar',
          'Diş eti görünümü veya diş boyları nedeniyle gülüşünden rahatsız olanlar'
        ],
        processTitle: 'Tedavi süreci nasıl ilerler?',
        process: [
          {
            title: 'Muayene ve değerlendirme',
            desc: 'Diş yapısı, diş eti sağlığı, kapanış ilişkisi ve gülüş hattı detaylı şekilde değerlendirilir.'
          },
          {
            title: 'Estetik planlama',
            desc: 'Kişinin yüz yapısı, beklentileri ve ağız sağlığı dikkate alınarak uygun tedavi seçenekleri belirlenir.'
          },
          {
            title: 'Uygulama aşaması',
            desc: 'İhtiyaca göre bonding, porselen lamina, zirkonyum, beyazlatma veya diş eti düzenlemeleri uygulanabilir.'
          },
          {
            title: 'Kontrol ve son dokunuşlar',
            desc: 'Tedavi sonrası uyum, konfor ve estetik görünüm kontrol edilerek gerekli küçük düzenlemeler yapılır.'
          }
        ],
        benefitsTitle: 'Sağladığı avantajlar',
        benefits: [
          'Daha doğal ve estetik bir gülüş görünümü sağlar.',
          'Yüz ifadesini daha canlı ve dengeli gösterebilir.',
          'Dişlerdeki renk, şekil ve form problemlerini iyileştirebilir.',
          'Kişiye özel planlandığı için daha uyumlu sonuçlar elde edilir.'
        ],
        faqTitle: 'Sık sorulan sorular',
        faq: [
          {
            q: 'Estetik diş hekimliği ağrılı bir işlem midir?',
            a: 'Uygulanacak tedaviye göre değişir. Çoğu estetik işlem konforlu şekilde yapılır. Gerekli durumlarda lokal anestezi uygulanarak işlem sırasında ağrı hissi azaltılır.'
          },
          {
            q: 'Sonuçlar doğal görünür mü?',
            a: 'Doğru planlama yapıldığında amaç yapay bir görünüm değil, kişinin yüzüne ve diş yapısına uyumlu doğal bir gülüş elde etmektir.'
          },
          {
            q: 'Estetik tedavi kalıcı mıdır?',
            a: 'Kalıcılık; uygulanan yönteme, ağız bakımına ve düzenli kontrollere bağlıdır. İyi bakım ile sonuçlar uzun süre korunabilir.'
          }
        ]
      },
      en: {
        eyebrow: 'Aesthetic Dentistry',
        title: 'Aesthetic Dentistry',
        shortDescription:
          'Modern dental treatments focused on improving the appearance, harmony, and natural beauty of your smile.',
        introTitle: 'Aesthetic care for a natural and balanced smile',
        intro:
          'Aesthetic dentistry is not only about having whiter teeth. Tooth color, shape, alignment, gum appearance, and facial harmony are evaluated together. The aim is to create a healthy, natural-looking, and balanced smile that suits the person’s facial features.',
        whoTitle: 'Who is it suitable for?',
        who: [
          'People who are not satisfied with the color, shape, or appearance of their teeth',
          'Those who want a more balanced and aesthetic smile',
          'Patients with chipped, worn, or irregularly shaped teeth',
          'People concerned about gum visibility or uneven tooth proportions'
        ],
        processTitle: 'How does the treatment process work?',
        process: [
          {
            title: 'Examination and evaluation',
            desc: 'Tooth structure, gum health, bite relationship, and smile line are carefully evaluated.'
          },
          {
            title: 'Aesthetic planning',
            desc: 'Treatment options are planned according to facial features, expectations, and oral health.'
          },
          {
            title: 'Treatment phase',
            desc: 'Depending on the need, bonding, porcelain veneers, zirconium crowns, whitening, or gum contouring may be applied.'
          },
          {
            title: 'Final checks',
            desc: 'After treatment, comfort, harmony, and aesthetic appearance are reviewed, and small refinements are made if necessary.'
          }
        ],
        benefitsTitle: 'Key benefits',
        benefits: [
          'Creates a more natural and aesthetic smile appearance.',
          'Can make the facial expression look brighter and more balanced.',
          'Improves color, shape, and form-related concerns.',
          'Personalized planning helps achieve more harmonious results.'
        ],
        faqTitle: 'Frequently asked questions',
        faq: [
          {
            q: 'Is aesthetic dentistry painful?',
            a: 'It depends on the treatment. Most aesthetic procedures are comfortable. When needed, local anesthesia can be used to reduce discomfort during the procedure.'
          },
          {
            q: 'Will the result look natural?',
            a: 'With proper planning, the goal is not an artificial look but a natural smile that fits the person’s face and tooth structure.'
          },
          {
            q: 'Are aesthetic dental treatments permanent?',
            a: 'Longevity depends on the method used, oral hygiene, and regular dental check-ups. With good care, results can last for many years.'
          }
        ]
      }
    }
  },
 {
  slug: 'dental-implant',
  image: '/images/services/dental-implant.jpg',
  icon: 'lucide:badge-plus',
  related: ['esthetic-dentistry', 'dental-prosthetics', 'periodontology'],
  content: {
    tr: {
      eyebrow: 'İmplant Tedavisi',
      title: 'İmplant Tedavisi',
      shortDescription:
        'Eksik dişlerin yerine sabit, doğal görünümlü ve çiğneme konforunu destekleyen modern bir tedavi seçeneğidir.',
      introTitle: 'Eksik dişlerde güven veren, uzun vadeli bir çözüm',
      intro:
        'İmplant tedavisi, eksik dişlerin yerine çene kemiğine yerleştirilen titanyum implantlar üzerine sabit dişler hazırlanmasıyla uygulanır. Bu tedavide amaç yalnızca boşluğu kapatmak değildir; çiğneme gücünü, konuşma rahatlığını, yüz desteğini ve gülüş estetiğini birlikte iyileştirmektir. Doğru planlandığında implantlar günlük yaşamda doğal dişe yakın bir konfor sunabilir ve kişinin daha rahat gülümsemesine yardımcı olur.',
      whoTitle: 'Kimler için uygundur?',
      who: [
        'Bir veya birden fazla diş eksikliği bulunan kişiler',
        'Eksik diş nedeniyle çiğneme sırasında zorlanan hastalar',
        'Hareketli protez kullanmak istemeyen veya sabit bir çözüm arayan kişiler',
        'Diş eksikliği nedeniyle konuşma, gülme veya sosyal hayatta özgüven kaybı yaşayanlar',
        'Çene kemiği ve diş eti sağlığı implant uygulaması için uygun olan hastalar',
        'Uzun vadeli, estetik ve fonksiyonel bir diş çözümü isteyen kişiler'
      ],
      processTitle: 'Tedavi süreci nasıl ilerler?',
      process: [
        {
          title: 'Detaylı muayene',
          desc: 'Öncelikle ağız içi muayene yapılır. Eksik diş bölgesi, diş eti sağlığı, kapanış ilişkisi ve genel ağız yapısı değerlendirilir.'
        },
        {
          title: 'Görüntüleme ve kemik değerlendirmesi',
          desc: 'Röntgen veya gerekli durumlarda tomografi ile çene kemiğinin hacmi, yoğunluğu ve implant için uygunluğu incelenir.'
        },
        {
          title: 'Kişiye özel planlama',
          desc: 'Kaç implant uygulanacağı, hangi bölgeye yerleştirileceği ve üst yapının nasıl hazırlanacağı hastanın ihtiyacına göre planlanır.'
        },
        {
          title: 'İmplantın yerleştirilmesi',
          desc: 'İmplant lokal anestezi altında çene kemiğine yerleştirilir. İşlem genellikle kontrollü ve konforlu şekilde tamamlanır.'
        },
        {
          title: 'İyileşme ve kemikle uyum süreci',
          desc: 'İmplantın çene kemiğiyle bütünleşmesi için belirli bir iyileşme süresi beklenir. Bu süreç kişiye ve kemik yapısına göre değişebilir.'
        },
        {
          title: 'Kalıcı dişin hazırlanması',
          desc: 'İyileşme tamamlandıktan sonra implant üzerine estetik ve fonksiyonel protez diş hazırlanır. Renk, form ve kapanış uyumu kontrol edilir.'
        },
        {
          title: 'Son kontrol ve bakım önerileri',
          desc: 'Tedavi tamamlandıktan sonra implantın uyumu, çiğneme konforu ve estetik görünümü kontrol edilir. Uzun ömürlü kullanım için bakım önerileri paylaşılır.'
        }
      ],
      benefitsTitle: 'İmplant tedavisinin avantajları',
      benefits: [
        'Eksik dişlerin yerine sabit ve konforlu bir çözüm sunar.',
        'Doğal dişe yakın çiğneme hissi sağlayabilir.',
        'Gülüş estetiğini ve yüz ifadesini destekleyebilir.',
        'Hareketli protezlere göre daha güvenli ve rahat bir kullanım hissi verebilir.',
        'Komşu sağlıklı dişlerin kesilmesine gerek kalmadan eksik diş bölgesi tamamlanabilir.',
        'Uygun bakım ve düzenli kontrollerle uzun yıllar kullanılabilir.',
        'Konuşma ve gülümseme sırasında daha doğal bir his oluşturabilir.'
      ],
      faqTitle: 'Sık sorulan sorular',
      faq: [
        {
          q: 'İmplant tedavisi ağrılı mıdır?',
          a: 'İmplant uygulaması genellikle lokal anestezi altında yapılır. Bu nedenle işlem sırasında ağrı hissedilmesi beklenmez. İşlem sonrasında hafif hassasiyet, şişlik veya baskı hissi olabilir; bunlar çoğu zaman hekimin önerileriyle kontrol altına alınabilir.'
        },
        {
          q: 'İmplant herkese uygulanabilir mi?',
          a: 'Her hasta için önce çene kemiği, diş eti sağlığı ve genel sağlık durumu değerlendirilmelidir. Bazı hastalarda kemik desteği yeterliyken, bazı durumlarda ek hazırlık işlemleri gerekebilir.'
        },
        {
          q: 'İmplant tedavisi ne kadar sürer?',
          a: 'Tedavi süresi kişiye göre değişir. İmplantın yerleştirilmesi kısa sürebilir; ancak implantın kemikle uyum sağlaması için belirli bir iyileşme dönemi gerekir. Bu süre kemik yapısına ve tedavi planına göre değişebilir.'
        },
        {
          q: 'İmplant doğal diş gibi görünür mü?',
          a: 'Üst yapı doğru planlandığında implant üzerine hazırlanan diş, renk ve form açısından doğal dişlerle uyumlu görünebilir. Estetik sonuç, implantın konumu, diş eti yapısı ve protez tasarımıyla birlikte değerlendirilir.'
        },
        {
          q: 'İmplantların bakımı nasıl yapılır?',
          a: 'İmplantlar da doğal dişler gibi düzenli bakım ister. Günlük fırçalama, ara yüz temizliği ve düzenli diş hekimi kontrolleri uzun ömürlü kullanım için önemlidir.'
        },
        {
          q: 'Diş çekildikten hemen sonra implant yapılabilir mi?',
          a: 'Bazı durumlarda diş çekimiyle aynı seansta implant uygulanabilir. Ancak bu karar çekim bölgesindeki kemik yapısı, enfeksiyon durumu ve genel tedavi planına göre verilir.'
        }
      ]
    },
    en: {
      eyebrow: 'Implant Treatment',
      title: 'Implant Treatment',
      shortDescription:
        'A modern treatment option for replacing missing teeth with stable, natural-looking restorations that support chewing comfort.',
      introTitle: 'A reliable long-term solution for missing teeth',
      intro:
        'Implant treatment replaces missing teeth with fixed restorations supported by titanium implants placed into the jawbone. The goal is not only to close the empty space, but also to restore chewing strength, speech comfort, facial support, and smile aesthetics. When properly planned, implants can provide a level of comfort close to natural teeth and help patients smile with greater confidence.',
      whoTitle: 'Who is it suitable for?',
      who: [
        'People with one or more missing teeth',
        'Patients who have difficulty chewing because of missing teeth',
        'Those who do not want removable dentures and prefer a fixed solution',
        'People who feel less confident speaking, smiling, or eating due to tooth loss',
        'Patients with suitable jawbone and gum health for implant placement',
        'Those looking for a long-term, aesthetic, and functional tooth replacement option'
      ],
      processTitle: 'How does the treatment process work?',
      process: [
        {
          title: 'Detailed examination',
          desc: 'The mouth is examined carefully. The missing tooth area, gum health, bite relationship, and general oral condition are evaluated.'
        },
        {
          title: 'Imaging and bone assessment',
          desc: 'X-rays or, when needed, tomography are used to assess the volume, density, and suitability of the jawbone for implant placement.'
        },
        {
          title: 'Personalized planning',
          desc: 'The number of implants, their position, and the type of final restoration are planned according to the patient’s needs.'
        },
        {
          title: 'Implant placement',
          desc: 'The implant is placed into the jawbone under local anesthesia. The procedure is usually completed in a controlled and comfortable way.'
        },
        {
          title: 'Healing and bone integration',
          desc: 'A healing period is needed for the implant to integrate with the jawbone. This period may vary depending on the person’s bone structure and treatment plan.'
        },
        {
          title: 'Final tooth restoration',
          desc: 'After healing, an aesthetic and functional restoration is prepared over the implant. Tooth color, shape, and bite harmony are carefully checked.'
        },
        {
          title: 'Final check and care guidance',
          desc: 'Once treatment is completed, comfort, appearance, and chewing function are reviewed. Care instructions are shared for long-term use.'
        }
      ],
      benefitsTitle: 'Benefits of implant treatment',
      benefits: [
        'Provides a fixed and comfortable solution for missing teeth.',
        'Can offer a chewing sensation close to natural teeth.',
        'Supports smile aesthetics and facial appearance.',
        'May feel more secure and comfortable than removable dentures.',
        'Can replace a missing tooth without cutting neighboring healthy teeth.',
        'Can be used for many years with proper care and regular check-ups.',
        'May create a more natural feeling while speaking and smiling.'
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Is implant treatment painful?',
          a: 'Implant placement is usually performed under local anesthesia, so pain is not expected during the procedure. Mild sensitivity, swelling, or pressure may occur afterward, and these are usually managed with the dentist’s recommendations.'
        },
        {
          q: 'Can everyone have dental implants?',
          a: 'Jawbone structure, gum health, and general health condition need to be evaluated first. Some patients have enough bone support, while others may need additional preparation before implant treatment.'
        },
        {
          q: 'How long does implant treatment take?',
          a: 'The duration varies from person to person. Implant placement itself may be completed in a short time, but a healing period is usually needed for the implant to integrate with the bone.'
        },
        {
          q: 'Will the implant tooth look natural?',
          a: 'When the final restoration is planned correctly, the implant-supported tooth can look harmonious with natural teeth in color and shape. The result depends on implant position, gum structure, and prosthetic design.'
        },
        {
          q: 'How should implants be cared for?',
          a: 'Implants need regular care just like natural teeth. Daily brushing, interdental cleaning, and regular dental check-ups are important for long-term use.'
        },
        {
          q: 'Can an implant be placed immediately after tooth extraction?',
          a: 'In some cases, an implant can be placed during the same appointment as the extraction. This depends on bone condition, infection status, and the overall treatment plan.'
        }
      ]
    }
  }
},{
  slug: 'teeth-whitening',
  image: '/images/services/teeth-whitening.jpg',
  icon: 'lucide:sun',
  related: ['esthetic-dentistry', 'smile-design', 'dental-prosthetics'],
  content: {
    tr: {
      eyebrow: 'Diş Beyazlatma',
      title: 'Diş Beyazlatma',
      shortDescription:
        'Dişlerde zamanla oluşan renklenmeleri azaltarak daha parlak, temiz ve canlı bir gülüş görünümü elde etmeye yardımcı olan estetik bir uygulamadır.',
      introTitle: 'Daha aydınlık ve canlı bir gülüş için profesyonel beyazlatma',
      intro:
        'Diş beyazlatma, çay, kahve, sigara, renkli gıdalar, yaş alma veya farklı nedenlerle diş yüzeyinde ve diş dokusunda oluşan renk değişimlerini azaltmaya yönelik uygulanan estetik bir işlemdir. Profesyonel olarak planlandığında amaç yapay bir beyazlık oluşturmak değil, kişinin doğal diş rengine uygun, daha temiz ve daha canlı bir görünüm elde etmektir. Uygulama öncesinde diş ve diş eti sağlığı değerlendirilir; böylece beyazlatma işlemi daha güvenli, kontrollü ve kişiye uygun şekilde yapılır.',
      whoTitle: 'Kimler için uygundur?',
      who: [
        'Diş renginin zamanla koyulaştığını veya sarardığını düşünen kişiler',
        'Çay, kahve, sigara veya renkli gıdalara bağlı lekelenmeler yaşayanlar',
        'Özel bir gün, fotoğraf çekimi, düğün veya önemli bir dönem öncesi daha parlak bir gülüş isteyenler',
        'Dişlerinde doğal bir beyazlık ve daha temiz bir görünüm elde etmek isteyen hastalar',
        'Diş taşı temizliği sonrası gülüş estetiğini bir adım daha iyileştirmek isteyenler',
        'Diş ve diş eti sağlığı beyazlatma için uygun olan kişiler'
      ],
      processTitle: 'Beyazlatma süreci nasıl ilerler?',
      process: [
        {
          title: 'Muayene ve renk değerlendirmesi',
          desc: 'Dişlerin mevcut rengi, renklenmenin nedeni, diş eti sağlığı ve varsa hassasiyet durumu değerlendirilir.'
        },
        {
          title: 'Temizlik ve hazırlık',
          desc: 'Gerekli görülürse beyazlatma öncesinde diş taşı temizliği veya yüzey lekelerinin giderilmesi yapılır. Bu adım sonucun daha dengeli görünmesine yardımcı olur.'
        },
        {
          title: 'Diş etlerinin korunması',
          desc: 'Beyazlatma sırasında diş etlerinin zarar görmemesi için koruyucu bariyer uygulanır ve işlem bölgesi kontrollü hale getirilir.'
        },
        {
          title: 'Beyazlatma jelinin uygulanması',
          desc: 'Profesyonel beyazlatma jeli diş yüzeylerine uygulanır. İşlem, kullanılan yönteme göre belirli seanslar halinde ilerleyebilir.'
        },
        {
          title: 'Renk kontrolü',
          desc: 'Uygulama sonrasında diş rengi tekrar değerlendirilir. Hedeflenen doğal parlaklık ve ton değişimi kontrol edilir.'
        },
        {
          title: 'Bakım önerileri',
          desc: 'Beyazlatma sonrası ilk günlerde dikkat edilmesi gereken yiyecek, içecek ve bakım alışkanlıkları hakkında bilgi verilir.'
        }
      ],
      benefitsTitle: 'Diş beyazlatmanın avantajları',
      benefits: [
        'Gülüşün daha temiz, parlak ve canlı görünmesine yardımcı olur.',
        'Dişlerdeki sararma ve renklenme görünümünü azaltabilir.',
        'Kısa sürede fark edilir bir estetik iyileşme sağlayabilir.',
        'Doğru planlandığında doğal diş rengini koruyarak daha aydınlık bir görünüm sunar.',
        'Gülüş estetiğini destekler ve kişinin kendini daha rahat ifade etmesine yardımcı olabilir.',
        'Diş taşı temizliği ve düzenli bakımla birlikte daha etkili bir görünüm elde edilebilir.'
      ],
      faqTitle: 'Sık sorulan sorular',
      faq: [
        {
          q: 'Diş beyazlatma dişlere zarar verir mi?',
          a: 'Profesyonel olarak, diş ve diş eti sağlığı değerlendirilerek yapılan beyazlatma işlemleri genellikle güvenli kabul edilir. Önemli olan işlemin kontrolsüz ürünlerle değil, hekim planlamasıyla uygulanmasıdır.'
        },
        {
          q: 'Beyazlatma işlemi ağrılı mıdır?',
          a: 'İşlem sırasında genellikle ağrı beklenmez. Ancak bazı kişilerde geçici hassasiyet oluşabilir. Bu hassasiyet çoğu zaman kısa sürelidir ve uygun bakım önerileriyle azalır.'
        },
        {
          q: 'Dişler ne kadar beyazlar?',
          a: 'Elde edilecek sonuç kişinin doğal diş rengine, renklenmenin nedenine ve diş yapısına göre değişir. Amaç her zaman doğal ve kişinin yüz ifadesiyle uyumlu bir beyazlık elde etmektir.'
        },
        {
          q: 'Beyazlatmanın etkisi kalıcı mıdır?',
          a: 'Beyazlatma etkisi kalıcı değildir; ancak iyi ağız bakımı, düzenli kontroller ve renklenmeye neden olan alışkanlıkların azaltılmasıyla sonuç daha uzun süre korunabilir.'
        },
        {
          q: 'Dolgu, kaplama veya porselen dişler de beyazlar mı?',
          a: 'Beyazlatma işlemi doğal diş dokusu üzerinde etkilidir. Dolgu, kaplama, zirkonyum veya porselen restorasyonların rengi beyazlatma ile değişmez. Bu nedenle işlem öncesinde ağızdaki restorasyonlar da değerlendirilmelidir.'
        },
        {
          q: 'Beyazlatma sonrası nelere dikkat edilmelidir?',
          a: 'İlk günlerde çay, kahve, kırmızı şarap, sigara ve yoğun renkli gıdalardan uzak durmak önerilebilir. Düzenli fırçalama ve hekim kontrolleri sonucun korunmasına yardımcı olur.'
        }
      ]
    },
    en: {
      eyebrow: 'Teeth Whitening',
      title: 'Teeth Whitening',
      shortDescription:
        'An aesthetic treatment that helps reduce discoloration and creates a brighter, cleaner, and more vibrant smile appearance.',
      introTitle: 'Professional whitening for a brighter and fresher smile',
      intro:
        'Teeth whitening is an aesthetic treatment designed to reduce discoloration caused by tea, coffee, smoking, colored foods, aging, or other factors. When professionally planned, the goal is not an artificial white look, but a cleaner, brighter, and more natural shade that suits the person’s smile. Before whitening, tooth and gum health are evaluated so the treatment can be performed in a controlled, safer, and more personalized way.',
      whoTitle: 'Who is it suitable for?',
      who: [
        'People who feel their teeth have become darker or more yellow over time',
        'Patients with stains caused by tea, coffee, smoking, or colored foods',
        'Those who want a brighter smile before a special event, photo shoot, wedding, or important period',
        'People who want a cleaner and naturally brighter tooth appearance',
        'Patients who want to improve smile aesthetics after professional dental cleaning',
        'People whose tooth and gum health are suitable for whitening treatment'
      ],
      processTitle: 'How does the whitening process work?',
      process: [
        {
          title: 'Examination and shade assessment',
          desc: 'The current tooth shade, cause of discoloration, gum health, and any sensitivity concerns are evaluated.'
        },
        {
          title: 'Cleaning and preparation',
          desc: 'If needed, professional cleaning or removal of surface stains may be performed before whitening. This helps create a more even result.'
        },
        {
          title: 'Gum protection',
          desc: 'A protective barrier is applied to help protect the gums and keep the treatment area controlled during the procedure.'
        },
        {
          title: 'Application of whitening gel',
          desc: 'Professional whitening gel is applied to the tooth surfaces. Depending on the method, the treatment may be completed in stages.'
        },
        {
          title: 'Shade control',
          desc: 'After the procedure, the tooth shade is checked again. The achieved brightness and natural tone change are reviewed.'
        },
        {
          title: 'Aftercare guidance',
          desc: 'The dentist explains which foods, drinks, and habits to avoid in the first days and how to maintain the result.'
        }
      ],
      benefitsTitle: 'Benefits of teeth whitening',
      benefits: [
        'Helps the smile look cleaner, brighter, and more vibrant.',
        'Can reduce the appearance of yellowing and discoloration.',
        'May provide a noticeable aesthetic improvement in a short time.',
        'When properly planned, it brightens the natural tooth shade without creating an artificial look.',
        'Supports smile aesthetics and may help the person feel more confident.',
        'Can create a more effective result when combined with regular cleaning and oral care.'
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Does teeth whitening damage the teeth?',
          a: 'When performed professionally after evaluating tooth and gum health, whitening is generally considered safe. The important point is that it should be planned by a dentist rather than done with uncontrolled products.'
        },
        {
          q: 'Is teeth whitening painful?',
          a: 'Pain is usually not expected during the procedure. Some patients may experience temporary sensitivity, which is generally short-lived and can be reduced with proper aftercare.'
        },
        {
          q: 'How white will my teeth become?',
          a: 'The result depends on the natural tooth shade, the reason for discoloration, and the tooth structure. The goal is always a natural brightness that fits the person’s smile and facial expression.'
        },
        {
          q: 'Is the whitening result permanent?',
          a: 'Whitening results are not permanent, but they can last longer with good oral hygiene, regular check-ups, and reducing habits that cause staining.'
        },
        {
          q: 'Do fillings, crowns, or porcelain teeth whiten too?',
          a: 'Whitening works on natural tooth structure. Fillings, crowns, zirconium, or porcelain restorations do not change color with whitening, so existing restorations should be evaluated before treatment.'
        },
        {
          q: 'What should I avoid after whitening?',
          a: 'In the first days, it may be recommended to avoid tea, coffee, red wine, smoking, and strongly colored foods. Regular brushing and dental check-ups help maintain the result.'
        }
      ]
    }
  }
},
{
  slug: 'oral-surgery',
  image: '/images/services/oral-surgery.jpg',
  icon: 'lucide:scissors',
  related: ['dental-implant', 'root-canal-treatment', 'periodontology'],
  content: {
    tr: {
      eyebrow: 'Ağız, Diş ve Çene Cerrahisi',
      title: 'Ağız, Diş ve Çene Cerrahisi',
      shortDescription:
        'Diş çekimi, gömülü dişler, çene problemleri ve cerrahi müdahale gerektiren ağız sağlığı sorunları için planlanan ileri tedavi uygulamalarıdır.',
      introTitle: 'Cerrahi tedavilerde güvenli, kontrollü ve konforlu yaklaşım',
      intro:
        'Ağız, diş ve çene cerrahisi; diş çekimleri, gömülü yirmi yaş dişleri, çene kemiğiyle ilgili problemler, kist benzeri oluşumlar, implant öncesi hazırlıklar ve daha ileri cerrahi işlemleri kapsayan bir alandır. Cerrahi kelimesi çoğu hastada endişe oluşturabilir; bu nedenle süreçte yalnızca işlemin kendisi değil, hastanın konforu, işlem öncesi bilgilendirme, doğru görüntüleme ve iyileşme takibi de büyük önem taşır. Amaç, problemi kontrollü şekilde çözmek ve ağız sağlığını uzun vadede korumaktır.',
      whoTitle: 'Kimler için uygundur?',
      who: [
        'Gömülü veya yarı gömülü yirmi yaş dişi bulunan kişiler',
        'Çürük, kırık veya kurtarılamayacak durumda olan dişleri için çekim gereken hastalar',
        'Ağız içinde ağrı, şişlik, enfeksiyon veya tekrarlayan iltihap problemi yaşayanlar',
        'İmplant tedavisi öncesinde çene kemiği değerlendirmesi veya cerrahi hazırlık gereken kişiler',
        'Çene kemiğinde kist, lezyon veya benzeri oluşumlar açısından takip edilmesi gereken hastalar',
        'Diş eti, kemik veya ağız dokularında cerrahi müdahale gerektiren durumları olan kişiler',
        'Çene yapısı, kapanış veya travmaya bağlı ağız içi sorunlar için değerlendirme ihtiyacı duyanlar'
      ],
      processTitle: 'Cerrahi süreç nasıl ilerler?',
      process: [
        {
          title: 'Ön muayene ve şikâyetin dinlenmesi',
          desc: 'Öncelikle hastanın ağrı, şişlik, hassasiyet, çiğneme zorluğu veya estetik kaygı gibi şikâyetleri dinlenir. Ağız içi muayene ile sorunlu bölge değerlendirilir.'
        },
        {
          title: 'Röntgen veya tomografi değerlendirmesi',
          desc: 'Dişin kök yapısı, sinirlerle ilişkisi, kemik durumu ve çevre dokularla bağlantısı görüntüleme yöntemleriyle incelenir. Bu adım özellikle gömülü dişler ve implant öncesi planlamada önemlidir.'
        },
        {
          title: 'Tedavi planının açıklanması',
          desc: 'İşlemin nasıl yapılacağı, beklenen iyileşme süreci, dikkat edilmesi gerekenler ve varsa alternatif seçenekler hastaya sade şekilde anlatılır.'
        },
        {
          title: 'Lokal anestezi ve hazırlık',
          desc: 'Cerrahi işlem öncesinde bölge uyuşturulur. Amaç, işlem sırasında ağrı hissini en aza indirmek ve hastanın daha konforlu bir süreç geçirmesini sağlamaktır.'
        },
        {
          title: 'Cerrahi uygulama',
          desc: 'Planlanan işleme göre diş çekimi, gömülü diş operasyonu, kist temizliği, kemik düzenlemesi veya başka bir cerrahi müdahale uygulanır.'
        },
        {
          title: 'İyileşme dönemi',
          desc: 'İşlem sonrasında hafif şişlik, hassasiyet veya baskı hissi olabilir. Hekimin önerilerine uymak iyileşme sürecinin daha rahat ilerlemesine yardımcı olur.'
        },
        {
          title: 'Kontrol ve takip',
          desc: 'Gerekli durumlarda kontrol randevusu planlanır. Dikişlerin alınması, iyileşmenin değerlendirilmesi veya sonraki tedavi adımlarının belirlenmesi bu aşamada yapılabilir.'
        }
      ],
      benefitsTitle: 'Cerrahi tedavilerin sağladığı avantajlar',
      benefits: [
        'Ağrıya veya enfeksiyona neden olan sorunlu dişlerin kontrollü şekilde tedavi edilmesini sağlar.',
        'Gömülü dişlerin çevre dişlere ve diş etlerine zarar verme riskini azaltabilir.',
        'İmplant gibi ileri tedaviler için ağız ve çene yapısının hazırlanmasına yardımcı olur.',
        'Tekrarlayan şişlik, iltihap veya basınç hissi gibi şikâyetlerin önüne geçebilir.',
        'Doğru planlama ile cerrahi işlem daha güvenli ve öngörülebilir hale gelir.',
        'Ağız sağlığını uzun vadede korumaya katkı sağlayabilir.',
        'Hastanın çiğneme, konuşma ve günlük yaşam konforunu artırabilir.'
      ],
      faqTitle: 'Sık sorulan sorular',
      faq: [
        {
          q: 'Ağız cerrahisi işlemleri ağrılı mıdır?',
          a: 'Çoğu cerrahi işlem lokal anestezi altında yapılır. Bu nedenle işlem sırasında ağrı hissedilmesi beklenmez. İşlem sonrasında hafif ağrı, şişlik veya hassasiyet olabilir; bunlar genellikle hekimin önerileriyle kontrol altına alınabilir.'
        },
        {
          q: 'Yirmi yaş dişi her zaman çekilmeli midir?',
          a: 'Hayır. Yirmi yaş dişinin çekilip çekilmeyeceği dişin konumuna, çürük veya enfeksiyon durumuna, çevre dişlere baskı yapıp yapmadığına ve hastada şikâyet oluşturup oluşturmadığına göre değerlendirilir.'
        },
        {
          q: 'Gömülü diş operasyonu zor bir işlem midir?',
          a: 'Zorluk derecesi dişin konumuna, kök yapısına ve çevre dokularla ilişkisine göre değişir. Bu nedenle işlem öncesi görüntüleme yapılması ve operasyonun iyi planlanması önemlidir.'
        },
        {
          q: 'Cerrahi işlem sonrası şişlik normal midir?',
          a: 'Evet, bazı cerrahi işlemlerden sonra hafif veya orta düzeyde şişlik görülebilir. Bu durum genellikle iyileşme sürecinin doğal bir parçasıdır. Hekimin verdiği bakım önerilerine uymak önemlidir.'
        },
        {
          q: 'İşlemden sonra ne zaman normal beslenmeye dönebilirim?',
          a: 'İlk saatlerde ve ilk günlerde yumuşak, ılık ve tahriş etmeyen gıdalar önerilebilir. Sert, çok sıcak, baharatlı veya çekim bölgesini zorlayabilecek yiyeceklerden bir süre uzak durmak gerekebilir.'
        },
        {
          q: 'Dikiş atılırsa mutlaka alınması gerekir mi?',
          a: 'Kullanılan dikiş türüne göre değişir. Bazı dikişler kendiliğinden eriyebilir, bazıları ise kontrol randevusunda alınır. Hekim işlem sonrası hangi dikişin kullanıldığını ve takip sürecini açıklar.'
        },
        {
          q: 'Cerrahi işlemden sonra nelere dikkat etmeliyim?',
          a: 'İlk günlerde bölgeyi zorlamamak, hekimin önerdiği ilaçları düzenli kullanmak, sigaradan uzak durmak, ağız hijyenini dikkatli sürdürmek ve verilen kontrol randevusuna gitmek önemlidir.'
        }
      ]
    },
    en: {
      eyebrow: 'Oral & Maxillofacial Surgery',
      title: 'Oral & Maxillofacial Surgery',
      shortDescription:
        'Advanced dental procedures planned for tooth extractions, impacted teeth, jaw-related concerns, and oral health problems that require surgical care.',
      introTitle: 'A safe, controlled, and comfortable approach to surgical dental care',
      intro:
        'Oral and maxillofacial surgery covers tooth extractions, impacted wisdom teeth, jawbone-related problems, cyst-like formations, implant preparation, and more advanced surgical procedures. The word surgery can naturally make patients feel nervous, so the process is not only about the procedure itself. Clear explanation, proper imaging, patient comfort, and careful healing follow-up are all important parts of treatment. The goal is to solve the problem in a controlled way and support long-term oral health.',
      whoTitle: 'Who is it suitable for?',
      who: [
        'People with impacted or partially impacted wisdom teeth',
        'Patients who need extraction of teeth that are decayed, broken, or cannot be preserved',
        'Those experiencing pain, swelling, infection, or recurring inflammation in the mouth',
        'Patients who need jawbone evaluation or surgical preparation before implant treatment',
        'People who need monitoring or treatment for cysts, lesions, or similar formations in the jawbone',
        'Patients with gum, bone, or oral tissue conditions that require surgical intervention',
        'Those who need evaluation for jaw structure, bite-related issues, or trauma-related oral problems'
      ],
      processTitle: 'How does the surgical process work?',
      process: [
        {
          title: 'Initial examination and listening to concerns',
          desc: 'The patient’s symptoms such as pain, swelling, sensitivity, chewing difficulty, or aesthetic concerns are discussed. The problem area is then examined inside the mouth.'
        },
        {
          title: 'X-ray or tomography assessment',
          desc: 'The tooth roots, relation to nerves, bone condition, and surrounding tissues are evaluated with imaging. This is especially important for impacted teeth and implant planning.'
        },
        {
          title: 'Treatment explanation',
          desc: 'The procedure, expected healing period, aftercare instructions, and possible alternatives are explained in a clear and simple way.'
        },
        {
          title: 'Local anesthesia and preparation',
          desc: 'Before the surgical procedure, the area is numbed. The aim is to reduce pain during the procedure and help the patient feel more comfortable.'
        },
        {
          title: 'Surgical procedure',
          desc: 'Depending on the treatment plan, tooth extraction, impacted tooth surgery, cyst removal, bone contouring, or another surgical intervention is performed.'
        },
        {
          title: 'Healing period',
          desc: 'Mild swelling, sensitivity, or pressure may occur after the procedure. Following the dentist’s instructions helps the healing period progress more comfortably.'
        },
        {
          title: 'Follow-up and control',
          desc: 'When needed, a follow-up appointment is planned. Stitch removal, healing assessment, or planning of the next treatment step may be done at this stage.'
        }
      ],
      benefitsTitle: 'Benefits of surgical dental treatment',
      benefits: [
        'Helps treat problematic teeth that cause pain or infection in a controlled way.',
        'Can reduce the risk of impacted teeth damaging nearby teeth or gums.',
        'Supports preparation of the mouth and jaw structure for advanced treatments such as implants.',
        'May prevent recurring swelling, inflammation, or pressure-related discomfort.',
        'Proper planning makes surgical treatment safer and more predictable.',
        'Contributes to long-term oral health protection.',
        'Can improve chewing, speaking, and daily comfort.'
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Are oral surgery procedures painful?',
          a: 'Most surgical procedures are performed under local anesthesia, so pain is not expected during the procedure. Mild pain, swelling, or sensitivity may occur afterward and is usually managed with the dentist’s recommendations.'
        },
        {
          q: 'Does every wisdom tooth need to be removed?',
          a: 'No. Whether a wisdom tooth should be removed depends on its position, decay or infection status, whether it presses on nearby teeth, and whether it causes symptoms.'
        },
        {
          q: 'Is impacted tooth surgery difficult?',
          a: 'The difficulty depends on the position of the tooth, root structure, and relation to surrounding tissues. That is why imaging and careful planning before the procedure are important.'
        },
        {
          q: 'Is swelling normal after surgery?',
          a: 'Yes, mild or moderate swelling can occur after some surgical procedures. It is usually a natural part of healing. Following the dentist’s aftercare instructions is important.'
        },
        {
          q: 'When can I return to normal eating?',
          a: 'Soft, warm, and non-irritating foods may be recommended during the first hours and days. Hard, very hot, spicy, or pressure-causing foods may need to be avoided for a while.'
        },
        {
          q: 'Do stitches always need to be removed?',
          a: 'It depends on the type of stitch used. Some stitches dissolve on their own, while others are removed during a follow-up visit. Your dentist will explain which type was used.'
        },
        {
          q: 'What should I be careful about after surgery?',
          a: 'It is important not to disturb the area, to use prescribed medication as directed, to avoid smoking, to maintain oral hygiene carefully, and to attend follow-up appointments if scheduled.'
        }
      ]
    }
  }
},
{
  slug: 'root-canal-treatment',
  image: '/images/services/root-canal-treatment.jpg',
  icon: 'lucide:activity',
  related: ['esthetic-dentistry', 'dental-prosthetics', 'oral-surgery'],
  content: {
    tr: {
      eyebrow: 'Endodonti',
      title: 'Kanal Tedavisi',
      shortDescription:
        'İltihaplanmış veya hasar görmüş diş sinirlerinin temizlenerek doğal dişi korumayı amaçlayan, diş çekimine alternatif önemli bir tedavidir.',
      introTitle: 'Dişi çekmeden korumaya odaklanan hassas bir tedavi',
      intro:
        'Kanal tedavisi, dişin iç kısmında bulunan sinir ve damar dokusunun enfekte olduğu, iltihaplandığı veya zarar gördüğü durumlarda uygulanır. Amaç, ağrıya neden olan enfekte dokuyu temizlemek, kök kanallarını dezenfekte etmek ve dişi ağızda sağlıklı şekilde tutabilmektir. Pek çok hasta kanal tedavisinden endişe duysa da, doğru anestezi ve modern tekniklerle işlem genellikle konforlu şekilde tamamlanabilir. Tedavinin en önemli avantajı, doğal dişi mümkün olduğunca korumasıdır.',
      whoTitle: 'Kimler için uygundur?',
      who: [
        'Derin çürük nedeniyle dişinde ağrı veya hassasiyet yaşayan kişiler',
        'Sıcak, soğuk ya da çiğneme sırasında uzun süren ağrı hisseden hastalar',
        'Diş siniri enfekte olmuş veya iltihaplanmış kişiler',
        'Dişinde travma, çatlak veya kırık sonrası iç doku hasarı oluşan hastalar',
        'Diş kökü ucunda enfeksiyon veya apse bulgusu bulunan kişiler',
        'Doğal dişini çekim yerine korumak isteyen hastalar',
        'Daha önce kanal tedavisi görmüş ancak tekrar enfeksiyon gelişmiş dişleri olan kişiler'
      ],
      processTitle: 'Kanal tedavisi süreci nasıl ilerler?',
      process: [
        {
          title: 'Ağrı ve şikâyetlerin değerlendirilmesi',
          desc: 'Hastanın ağrı tipi, hassasiyet süresi, çiğneme sırasında oluşan şikâyetler ve dişin geçmiş durumu değerlendirilir.'
        },
        {
          title: 'Röntgen ve kök incelemesi',
          desc: 'Diş köklerinin yapısı, kanal sayısı, enfeksiyon durumu ve çevre kemik dokusu röntgen yardımıyla incelenir.'
        },
        {
          title: 'Lokal anestezi',
          desc: 'Tedavi öncesinde diş ve çevre dokular uyuşturulur. Böylece işlem sırasında hastanın daha rahat ve konforlu hissetmesi hedeflenir.'
        },
        {
          title: 'Enfekte dokunun temizlenmesi',
          desc: 'Dişin içindeki iltihaplı veya hasarlı sinir dokusu temizlenir. Kök kanalları özel aletlerle şekillendirilir.'
        },
        {
          title: 'Kanal dezenfeksiyonu',
          desc: 'Kök kanalları dikkatlice dezenfekte edilir. Amaç, enfeksiyonun uzaklaştırılması ve dişin yeniden sağlıklı hale gelmesidir.'
        },
        {
          title: 'Kanal dolgusu',
          desc: 'Temizlenen kanallar özel dolgu materyalleriyle kapatılır. Bu adım, dişin iç yapısının tekrar enfekte olmasını önlemeye yardımcı olur.'
        },
        {
          title: 'Üst dolgu veya kaplama planı',
          desc: 'Tedavi sonrası dişin dayanıklılığı değerlendirilir. Gerekli durumlarda dolgu, inley/onley veya kaplama ile dişin güçlendirilmesi planlanabilir.'
        },
        {
          title: 'Kontrol ve iyileşme takibi',
          desc: 'Tedavi sonrasında hassasiyetin azalması ve dişin fonksiyonunun normale dönmesi takip edilir. Gerekirse kontrol randevusu planlanır.'
        }
      ],
      benefitsTitle: 'Kanal tedavisinin avantajları',
      benefits: [
        'Doğal dişi çekmeden korumaya yardımcı olur.',
        'Diş kaynaklı ağrı ve enfeksiyonun giderilmesini sağlayabilir.',
        'Çiğneme fonksiyonunun devam etmesine katkı sağlar.',
        'Diş boşluğu oluşmasını ve buna bağlı estetik ya da fonksiyonel sorunları önleyebilir.',
        'Uygun restorasyonla diş uzun süre ağızda kalabilir.',
        'Apseli veya iltihaplı dişlerde enfeksiyonun kontrol altına alınmasına yardımcı olabilir.',
        'Diş çekimi ve sonrasında gerekebilecek protez ya da implant ihtiyacını geciktirebilir veya azaltabilir.'
      ],
      faqTitle: 'Sık sorulan sorular',
      faq: [
        {
          q: 'Kanal tedavisi ağrılı mıdır?',
          a: 'Kanal tedavisi lokal anestezi altında yapılır. Bu nedenle işlem sırasında ağrı hissedilmesi beklenmez. Tedavi sonrasında birkaç gün hafif hassasiyet veya çiğnerken rahatsızlık olabilir; bu durum genellikle zamanla azalır.'
        },
        {
          q: 'Kanal tedavisi yapılan diş tekrar ağrır mı?',
          a: 'Tedavi sonrası ilk günlerde hassasiyet normal olabilir. Ancak şiddetli veya uzun süren ağrı varsa dişin tekrar değerlendirilmesi gerekir. Bazen ek kanal, eski enfeksiyon veya restorasyon problemi gibi nedenler olabilir.'
        },
        {
          q: 'Kanal tedavisi kaç seans sürer?',
          a: 'Bazı dişlerde tedavi tek seansta tamamlanabilir. Enfeksiyonun durumuna, dişin kanal yapısına ve tedavi ihtiyacına göre birden fazla seans gerekebilir.'
        },
        {
          q: 'Kanal tedavisi yapılan dişe kaplama gerekir mi?',
          a: 'Her zaman gerekmez. Ancak madde kaybı fazla olan, kırılma riski taşıyan veya arka bölgede çiğneme yükü alan dişlerde kaplama ya da güçlendirici restorasyon önerilebilir.'
        },
        {
          q: 'Kanal tedavisi yerine dişi çektirmek daha mı iyi?',
          a: 'Doğal dişin korunması çoğu zaman önemli bir avantajdır. Dişin kurtarılma şansı varsa kanal tedavisi, çekime göre daha koruyucu bir seçenek olabilir. Karar dişin durumuna göre verilir.'
        },
        {
          q: 'Kanal tedavisi yapılan diş kararır mı?',
          a: 'Bazı durumlarda zaman içinde renk değişimi görülebilir. Bu durum estetik olarak rahatsızlık verirse uygun restoratif veya estetik çözümler değerlendirilebilir.'
        },
        {
          q: 'Tedavi sonrası nelere dikkat etmeliyim?',
          a: 'Dişin üst restorasyonu tamamlanana kadar sert gıdalarla zorlamamak önemlidir. Ağız bakımına devam etmek, hekimin önerilerini uygulamak ve kontrol randevularını aksatmamak gerekir.'
        }
      ]
    },
    en: {
      eyebrow: 'Endodontics',
      title: 'Root Canal Treatment',
      shortDescription:
        'An important treatment that cleans infected or damaged tooth nerves and aims to preserve the natural tooth instead of removing it.',
      introTitle: 'A precise treatment focused on saving the natural tooth',
      intro:
        'Root canal treatment is performed when the nerve and blood vessel tissue inside the tooth becomes infected, inflamed, or damaged. The goal is to remove the infected tissue causing pain, disinfect the root canals, and keep the tooth healthy in the mouth. Many patients feel nervous about root canal treatment, but with proper anesthesia and modern techniques, the procedure can usually be completed comfortably. Its biggest advantage is that it helps preserve the natural tooth whenever possible.',
      whoTitle: 'Who is it suitable for?',
      who: [
        'People with tooth pain or sensitivity caused by deep decay',
        'Patients who feel lingering pain with hot, cold, or chewing pressure',
        'Those with infected or inflamed tooth nerves',
        'Patients with internal tooth damage after trauma, cracks, or fractures',
        'People with signs of infection or abscess around the root tip',
        'Patients who want to save their natural tooth instead of having it extracted',
        'Those with a previously treated tooth that has developed reinfection'
      ],
      processTitle: 'How does root canal treatment work?',
      process: [
        {
          title: 'Pain and symptom assessment',
          desc: 'The type of pain, duration of sensitivity, chewing discomfort, and the tooth’s history are carefully evaluated.'
        },
        {
          title: 'X-ray and root examination',
          desc: 'The root structure, number of canals, infection status, and surrounding bone tissue are examined with X-rays.'
        },
        {
          title: 'Local anesthesia',
          desc: 'The tooth and surrounding tissues are numbed before treatment. The aim is to help the patient feel comfortable during the procedure.'
        },
        {
          title: 'Removal of infected tissue',
          desc: 'The inflamed or damaged nerve tissue inside the tooth is removed. The root canals are shaped with special instruments.'
        },
        {
          title: 'Canal disinfection',
          desc: 'The root canals are carefully disinfected to help remove infection and restore a healthier inner tooth environment.'
        },
        {
          title: 'Root canal filling',
          desc: 'The cleaned canals are sealed with special filling materials. This helps reduce the risk of reinfection inside the tooth.'
        },
        {
          title: 'Final filling or crown planning',
          desc: 'After treatment, the strength of the tooth is evaluated. A filling, inlay/onlay, or crown may be planned if the tooth needs extra support.'
        },
        {
          title: 'Follow-up and healing check',
          desc: 'Sensitivity reduction and return of normal chewing function are monitored. A follow-up appointment may be scheduled when needed.'
        }
      ],
      benefitsTitle: 'Benefits of root canal treatment',
      benefits: [
        'Helps preserve the natural tooth instead of extracting it.',
        'Can relieve tooth-related pain and infection.',
        'Supports continued chewing function.',
        'May prevent tooth gaps and related aesthetic or functional problems.',
        'With proper restoration, the tooth can remain in the mouth for a long time.',
        'Helps control infection in abscessed or inflamed teeth.',
        'May delay or reduce the need for extraction followed by implants or prosthetic replacements.'
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Is root canal treatment painful?',
          a: 'Root canal treatment is performed under local anesthesia, so pain is not expected during the procedure. Mild sensitivity or discomfort while chewing may occur for a few days afterward and usually decreases over time.'
        },
        {
          q: 'Can a root canal treated tooth hurt again?',
          a: 'Some sensitivity in the first days can be normal. However, severe or long-lasting pain should be evaluated. Possible causes may include additional canals, old infection, or a restoration-related issue.'
        },
        {
          q: 'How many appointments does root canal treatment take?',
          a: 'Some teeth can be treated in a single appointment. Depending on the infection, canal anatomy, and treatment needs, more than one appointment may be required.'
        },
        {
          q: 'Does a root canal treated tooth need a crown?',
          a: 'Not always. However, if the tooth has lost a lot of structure, carries heavy chewing forces, or has a higher risk of fracture, a crown or stronger restoration may be recommended.'
        },
        {
          q: 'Is it better to extract the tooth instead of having root canal treatment?',
          a: 'Keeping the natural tooth is often an important advantage. If the tooth can be saved, root canal treatment may be a more conservative option than extraction. The decision depends on the tooth’s condition.'
        },
        {
          q: 'Can a root canal treated tooth darken?',
          a: 'In some cases, color change may occur over time. If it becomes an aesthetic concern, restorative or cosmetic options can be considered.'
        },
        {
          q: 'What should I be careful about after treatment?',
          a: 'Until the final restoration is completed, it is important not to overload the tooth with hard foods. Continue oral care, follow your dentist’s instructions, and attend recommended check-ups.'
        }
      ]
    }
  }
},
{
  slug: 'smile-design',
  image: '/images/services/smile-design.jpg',
  icon: 'lucide:smile',
  related: ['esthetic-dentistry', 'teeth-whitening', 'dental-prosthetics'],
  content: {
    tr: {
      eyebrow: 'Gülüş Tasarımı',
      title: 'Gülüş Tasarımı',
      shortDescription:
        'Dişlerin, diş etlerinin, dudak yapısının ve yüz hatlarının birlikte değerlendirilerek daha dengeli, doğal ve kişiye özel bir gülüş planlanmasıdır.',
      introTitle: 'Yüzünüzle uyumlu, size özel bir gülüş planı',
      intro:
        'Gülüş tasarımı, yalnızca dişleri güzelleştirmeye odaklanan tek bir işlem değildir. Diş rengi, diş formu, diş eti görünümü, dudak hareketleri, yüz şekli, yaş, cinsiyet ve kişinin beklentileri birlikte değerlendirilir. Amaç herkese aynı görünen bir gülüş yapmak değil; kişinin yüzüne, ifadesine ve karakterine doğal şekilde uyum sağlayan estetik bir sonuç oluşturmaktır. Bu nedenle süreç, detaylı bir analiz ve kişiye özel planlama ile ilerler.',
      whoTitle: 'Kimler için uygundur?',
      who: [
        'Gülüşünün genel görünümünden memnun olmayan kişiler',
        'Dişlerinde renk, form, boyut veya dizilim açısından estetik kaygı yaşayanlar',
        'Diş eti görünümü fazla olan veya diş eti seviyelerinde düzensizlik bulunan hastalar',
        'Fotoğraflarda veya konuşurken gülüşünü saklama ihtiyacı hisseden kişiler',
        'Özel bir dönem öncesinde daha özgüvenli bir gülüş isteyenler',
        'Diş beyazlatma, lamina, zirkonyum, bonding veya diş eti düzenlemesi gibi işlemleri birlikte değerlendirmek isteyen hastalar',
        'Doğal görünümü koruyarak daha canlı ve estetik bir ifade kazanmak isteyen kişiler'
      ],
      processTitle: 'Gülüş tasarımı süreci nasıl ilerler?',
      process: [
        {
          title: 'Gülüş analizi',
          desc: 'Dişlerin görünümü, diş eti seviyesi, dudak hattı, yüz oranları ve gülüş sırasında ortaya çıkan detaylar birlikte değerlendirilir.'
        },
        {
          title: 'Beklentilerin anlaşılması',
          desc: 'Hastanın nasıl bir gülüş istediği, doğal mı daha belirgin mi bir sonuç beklediği ve estetik öncelikleri dinlenir.'
        },
        {
          title: 'Fotoğraf ve ölçü değerlendirmesi',
          desc: 'Gerekli durumlarda fotoğraf, dijital kayıt veya ağız içi ölçüler üzerinden dişlerin ve gülüş hattının planlaması yapılır.'
        },
        {
          title: 'Kişiye özel tasarım planı',
          desc: 'Diş rengi, diş formu, diş boyu, diş eti görünümü ve yüzle uyum dikkate alınarak uygulanabilecek tedaviler belirlenir.'
        },
        {
          title: 'Uygun tedavilerin seçilmesi',
          desc: 'Beyazlatma, bonding, porselen lamina, zirkonyum, diş eti düzenlemesi veya ortodontik destek gibi seçenekler ihtiyaca göre planlanabilir.'
        },
        {
          title: 'Uygulama aşaması',
          desc: 'Planlanan işlemler, ağız sağlığı ve estetik hedefler dikkate alınarak kontrollü şekilde uygulanır.'
        },
        {
          title: 'Son dokunuşlar ve uyum kontrolü',
          desc: 'Tedavi sonunda gülüşün yüzle uyumu, kapanış konforu, renk ve form dengesi kontrol edilir. Gerekirse küçük düzenlemeler yapılır.'
        }
      ],
      benefitsTitle: 'Gülüş tasarımının avantajları',
      benefits: [
        'Kişinin yüz hatlarıyla daha uyumlu bir gülüş görünümü sağlar.',
        'Diş rengi, formu ve dizilimiyle ilgili estetik kaygıları azaltabilir.',
        'Gülüş sırasında daha dengeli ve canlı bir ifade oluşturabilir.',
        'Tek bir işlem yerine ihtiyaçlara göre bütüncül bir tedavi planı sunar.',
        'Doğal görünümü koruyarak estetik bir yenilenme sağlayabilir.',
        'Fotoğraf, konuşma ve sosyal hayat sırasında özgüveni artırabilir.',
        'Diş eti ve diş oranlarının daha düzenli görünmesine yardımcı olabilir.'
      ],
      faqTitle: 'Sık sorulan sorular',
      faq: [
        {
          q: 'Gülüş tasarımı herkese aynı şekilde mi yapılır?',
          a: 'Hayır. Gülüş tasarımı kişiye özel planlanır. Yüz şekli, dudak hattı, diş yapısı, diş eti görünümü ve kişinin beklentileri birlikte değerlendirilir.'
        },
        {
          q: 'Gülüş tasarımı tek bir işlem midir?',
          a: 'Genellikle tek bir işlem değildir. Kişinin ihtiyacına göre beyazlatma, bonding, porselen lamina, zirkonyum, diş eti düzenlemesi veya ortodontik tedaviler birlikte planlanabilir.'
        },
        {
          q: 'Sonuç doğal görünür mü?',
          a: 'Doğru planlama yapıldığında amaç yapay veya abartılı bir görünüm değil, kişinin yüz ifadesiyle uyumlu doğal ve estetik bir gülüş elde etmektir.'
        },
        {
          q: 'Gülüş tasarımı ne kadar sürer?',
          a: 'Süre uygulanacak işlemlere göre değişir. Sadece beyazlatma veya bonding gibi işlemler daha kısa sürebilirken, lamina, zirkonyum veya diş eti düzenlemesi içeren planlar daha fazla seans gerektirebilir.'
        },
        {
          q: 'Gülüş tasarımı öncesinde diş sağlığı önemli midir?',
          a: 'Evet. Estetik işlemlerden önce çürük, diş eti hastalığı, enfeksiyon veya kapanış problemleri değerlendirilmelidir. Sağlıklı bir temel, daha başarılı ve uzun ömürlü sonuçlar için önemlidir.'
        },
        {
          q: 'Gülüş tasarımı kalıcı mıdır?',
          a: 'Kalıcılık kullanılan tedavi yöntemine, ağız bakımına ve düzenli kontrollere bağlıdır. İyi bakım ve doğru alışkanlıklarla estetik sonuçlar uzun süre korunabilir.'
        }
      ]
    },
    en: {
      eyebrow: 'Smile Design',
      title: 'Smile Design',
      shortDescription:
        'A personalized smile planning approach that evaluates teeth, gums, lip structure, and facial features together for a balanced and natural result.',
      introTitle: 'A personalized smile plan that harmonizes with your face',
      intro:
        'Smile design is not a single treatment focused only on making teeth look better. Tooth color, tooth shape, gum appearance, lip movement, facial proportions, age, gender, and personal expectations are evaluated together. The aim is not to create the same smile for everyone, but to design a natural-looking result that suits the person’s face, expression, and character. That is why the process begins with detailed analysis and personalized planning.',
      whoTitle: 'Who is it suitable for?',
      who: [
        'People who are not satisfied with the overall appearance of their smile',
        'Patients with concerns about tooth color, shape, size, or alignment',
        'Those with excessive gum display or uneven gum levels',
        'People who feel the need to hide their smile in photos or while speaking',
        'Patients who want a more confident smile before a special period or event',
        'Those who want to evaluate whitening, veneers, zirconium, bonding, or gum contouring together',
        'People who want a more vibrant and aesthetic expression while preserving a natural look'
      ],
      processTitle: 'How does the smile design process work?',
      process: [
        {
          title: 'Smile analysis',
          desc: 'Tooth appearance, gum level, lip line, facial proportions, and details visible during smiling are evaluated together.'
        },
        {
          title: 'Understanding expectations',
          desc: 'The patient’s desired smile style, preference for a natural or more noticeable result, and aesthetic priorities are discussed.'
        },
        {
          title: 'Photo and measurement assessment',
          desc: 'When needed, photographs, digital records, or intraoral measurements are used to plan the teeth and smile line.'
        },
        {
          title: 'Personalized design planning',
          desc: 'Tooth shade, shape, length, gum visibility, and facial harmony are considered when creating the treatment plan.'
        },
        {
          title: 'Choosing suitable treatments',
          desc: 'Whitening, bonding, porcelain veneers, zirconium crowns, gum contouring, or orthodontic support may be planned depending on the need.'
        },
        {
          title: 'Treatment phase',
          desc: 'The planned procedures are carried out in a controlled way, considering both oral health and aesthetic goals.'
        },
        {
          title: 'Final refinements and harmony check',
          desc: 'At the end of treatment, facial harmony, bite comfort, shade, and tooth form are reviewed. Small refinements can be made when needed.'
        }
      ],
      benefitsTitle: 'Benefits of smile design',
      benefits: [
        'Creates a smile appearance that is more harmonious with facial features.',
        'Can reduce aesthetic concerns related to tooth color, shape, and alignment.',
        'May create a more balanced and vibrant facial expression while smiling.',
        'Offers a comprehensive treatment plan rather than a single isolated procedure.',
        'Can provide an aesthetic renewal while preserving a natural appearance.',
        'May improve confidence in photos, conversations, and social life.',
        'Helps gum and tooth proportions appear more balanced.'
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Is smile design the same for everyone?',
          a: 'No. Smile design is planned individually. Facial shape, lip line, tooth structure, gum appearance, and personal expectations are evaluated together.'
        },
        {
          q: 'Is smile design a single treatment?',
          a: 'Usually not. Depending on the patient’s needs, whitening, bonding, porcelain veneers, zirconium crowns, gum contouring, or orthodontic treatments may be planned together.'
        },
        {
          q: 'Will the result look natural?',
          a: 'With proper planning, the goal is not an artificial or exaggerated look, but a natural and aesthetic smile that suits the person’s facial expression.'
        },
        {
          q: 'How long does smile design take?',
          a: 'The duration depends on the treatments involved. Whitening or bonding may take less time, while plans involving veneers, zirconium, or gum contouring may require more appointments.'
        },
        {
          q: 'Is dental health important before smile design?',
          a: 'Yes. Cavities, gum disease, infections, and bite problems should be evaluated before aesthetic procedures. A healthy foundation supports better and longer-lasting results.'
        },
        {
          q: 'Is smile design permanent?',
          a: 'Longevity depends on the treatment methods used, oral hygiene, and regular dental check-ups. With good care and proper habits, aesthetic results can be maintained for a long time.'
        }
      ]
    }
  }
},
{
  slug: 'dental-prosthetics',
  image: '/images/services/dental-prosthetics.jpg',
  icon: 'lucide:layers',
  related: ['dental-implant', 'esthetic-dentistry', 'smile-design'],
  content: {
    tr: {
      eyebrow: 'Diş Protezleri',
      title: 'Diş Protezleri',
      shortDescription:
        'Eksik, aşınmış veya ciddi madde kaybı olan dişlerin estetik ve fonksiyonel olarak yeniden düzenlenmesini sağlayan kişiye özel restoratif çözümlerdir.',
      introTitle: 'Çiğneme konforunu ve gülüş estetiğini yeniden destekleyen çözümler',
      intro:
        'Diş protezleri, eksik dişlerin tamamlanması, zayıflamış dişlerin güçlendirilmesi veya estetik görünümün iyileştirilmesi amacıyla planlanan restoratif tedavilerdir. Protez denildiğinde yalnızca takılıp çıkarılan dişler akla gelmemelidir; sabit kaplamalar, köprüler, implant üstü protezler, zirkonyum restorasyonlar ve hareketli protezler bu alanın içinde değerlendirilebilir. Amaç, kişinin ağız yapısına uygun, doğal görünümlü, rahat kullanılan ve günlük yaşamda güven veren bir diş yapısı oluşturmaktır.',
      whoTitle: 'Kimler için uygundur?',
      who: [
        'Bir veya birden fazla diş eksikliği bulunan kişiler',
        'Dişlerinde kırık, aşınma veya ciddi madde kaybı olan hastalar',
        'Eski kaplama, köprü veya protezlerinden memnun olmayan kişiler',
        'Çiğneme sırasında zorlanan veya tek taraflı çiğnemeye başlayan hastalar',
        'Dişlerinin formu, rengi veya dizilimi nedeniyle estetik kaygı yaşayanlar',
        'İmplant tedavisi sonrası implant üstü protez ihtiyacı olan kişiler',
        'Hareketli protez kullanan ancak daha konforlu veya daha sabit bir çözüm arayan hastalar',
        'Ağız yapısına uygun, fonksiyonel ve estetik bir restorasyon isteyen kişiler'
      ],
      processTitle: 'Protez tedavisi süreci nasıl ilerler?',
      process: [
        {
          title: 'Ağız yapısının değerlendirilmesi',
          desc: 'Dişlerin durumu, eksik diş bölgeleri, diş eti sağlığı, kapanış ilişkisi ve çiğneme fonksiyonu birlikte değerlendirilir.'
        },
        {
          title: 'İhtiyacın belirlenmesi',
          desc: 'Hastanın sabit köprü, kaplama, implant üstü protez, zirkonyum restorasyon veya hareketli protez gibi hangi çözüme ihtiyaç duyduğu belirlenir.'
        },
        {
          title: 'Estetik ve fonksiyon planlaması',
          desc: 'Diş rengi, diş formu, yüzle uyum, konuşma rahatlığı ve çiğneme dengesi dikkate alınarak kişiye özel bir plan oluşturulur.'
        },
        {
          title: 'Ölçü ve prova aşamaları',
          desc: 'Ağız yapısına uygun ölçüler alınır. Gerektiğinde prova aşamalarıyla protezin uyumu, kapanışı ve görünümü kontrol edilir.'
        },
        {
          title: 'Restorasyonun hazırlanması',
          desc: 'Planlanan protez veya kaplama laboratuvar süreciyle hazırlanır. Malzeme seçimi estetik beklentiye, dayanıklılık ihtiyacına ve bölgenin fonksiyonuna göre yapılır.'
        },
        {
          title: 'Uygulama ve uyum kontrolü',
          desc: 'Hazırlanan restorasyon ağıza uygulanır. Kapanış, temas noktaları, konuşma rahatlığı ve estetik görünüm kontrol edilir.'
        },
        {
          title: 'Alışma süreci ve bakım önerileri',
          desc: 'Yeni proteze alışma süreci takip edilir. Temizlik, kullanım ve düzenli kontrol önerileri hastaya aktarılır.'
        }
      ],
      benefitsTitle: 'Diş protezlerinin avantajları',
      benefits: [
        'Eksik dişlerin oluşturduğu boşlukları estetik ve fonksiyonel olarak tamamlar.',
        'Çiğneme konforunu ve beslenme rahatlığını artırabilir.',
        'Konuşma sırasında oluşabilecek bazı zorlukların azalmasına yardımcı olabilir.',
        'Yüz desteğini ve gülüş görünümünü iyileştirebilir.',
        'Aşınmış veya zayıflamış dişlerin daha güçlü hale gelmesini sağlayabilir.',
        'Kişiye özel planlandığında daha doğal ve uyumlu bir görünüm sunar.',
        'İmplant tedavisiyle birlikte sabit ve daha konforlu çözümler oluşturulabilir.',
        'Eski, uyumsuz veya estetik olarak rahatsız eden restorasyonların yenilenmesine imkân sağlar.'
      ],
      faqTitle: 'Sık sorulan sorular',
      faq: [
        {
          q: 'Diş protezi sadece takıp çıkarılan protez anlamına mı gelir?',
          a: 'Hayır. Diş protezleri sabit kaplamaları, köprüleri, implant üstü protezleri, zirkonyum restorasyonları ve hareketli protezleri kapsayabilir. Hangi seçeneğin uygun olduğu ağız yapısına ve diş eksikliğine göre belirlenir.'
        },
        {
          q: 'Protez dişler doğal görünür mü?',
          a: 'Doğru renk, form ve ölçü planlamasıyla protez dişler doğal dişlerle uyumlu görünebilir. Estetik sonuç; kullanılan malzeme, diş eti yapısı ve yüzle uyum dikkate alınarak planlanır.'
        },
        {
          q: 'Protezlere alışmak zor olur mu?',
          a: 'Sabit protezlere alışmak çoğu zaman daha kolaydır. Hareketli protezlerde ise ilk günlerde konuşma, çiğneme veya ağızda doluluk hissi olabilir. Düzenli kullanım ve gerekli kontrollerle alışma süreci daha rahat ilerler.'
        },
        {
          q: 'Sabit protez mi hareketli protez mi daha iyidir?',
          a: 'Bu tamamen hastanın ağız yapısına, kemik desteğine, diş eksikliğinin durumuna ve beklentisine göre değişir. Uygun hastalarda sabit çözümler daha konforlu olabilir; ancak bazı durumlarda hareketli protezler daha doğru seçenek olabilir.'
        },
        {
          q: 'İmplant üstü protez nedir?',
          a: 'İmplant üstü protez, çene kemiğine yerleştirilen implantlardan destek alan protez türüdür. Bu yöntem, uygun hastalarda daha sabit ve konforlu bir kullanım sağlayabilir.'
        },
        {
          q: 'Protezlerin bakımı nasıl yapılır?',
          a: 'Sabit protezlerde düzenli fırçalama, ara yüz temizliği ve diş hekimi kontrolleri önemlidir. Hareketli protezlerde ise protezin günlük temizliği, gece kullanımı ve saklama koşulları hekimin önerilerine göre düzenlenmelidir.'
        },
        {
          q: 'Eski protezim yenilenebilir mi?',
          a: 'Evet. Eski protezlerde uyum kaybı, estetik sorun, kırık, renk değişimi veya çiğneme rahatsızlığı varsa yeniden değerlendirme yapılabilir ve daha uygun bir restorasyon planlanabilir.'
        }
      ]
    },
    en: {
      eyebrow: 'Dental Prosthetics',
      title: 'Dental Prosthetics',
      shortDescription:
        'Personalized restorative solutions designed to rebuild missing, worn, or heavily damaged teeth with both function and aesthetics in mind.',
      introTitle: 'Restorative solutions that support chewing comfort and smile aesthetics',
      intro:
        'Dental prosthetics are restorative treatments planned to replace missing teeth, strengthen weakened teeth, or improve the appearance of the smile. Prosthetic dentistry does not only mean removable dentures. Fixed crowns, bridges, implant-supported prosthetics, zirconium restorations, and removable dentures can all be part of this field. The goal is to create a tooth structure that fits the patient’s mouth, looks natural, feels comfortable, and gives confidence in daily life.',
      whoTitle: 'Who is it suitable for?',
      who: [
        'People with one or more missing teeth',
        'Patients with broken, worn, or heavily damaged teeth',
        'Those who are not satisfied with old crowns, bridges, or dentures',
        'Patients who have difficulty chewing or have started chewing mostly on one side',
        'People with aesthetic concerns about tooth shape, color, or alignment',
        'Patients who need implant-supported restorations after implant treatment',
        'Those who use removable dentures but want a more comfortable or more stable option',
        'People looking for a functional and aesthetic restoration planned specifically for their mouth'
      ],
      processTitle: 'How does prosthetic treatment work?',
      process: [
        {
          title: 'Evaluation of oral structure',
          desc: 'The condition of the teeth, missing tooth areas, gum health, bite relationship, and chewing function are evaluated together.'
        },
        {
          title: 'Determining the need',
          desc: 'The most suitable option is identified, such as a fixed bridge, crown, implant-supported prosthesis, zirconium restoration, or removable denture.'
        },
        {
          title: 'Aesthetic and functional planning',
          desc: 'Tooth shade, shape, facial harmony, speech comfort, and chewing balance are considered when creating a personalized plan.'
        },
        {
          title: 'Impressions and try-in stages',
          desc: 'Measurements are taken according to the mouth structure. Try-in appointments may be used to check fit, bite, and appearance.'
        },
        {
          title: 'Preparation of the restoration',
          desc: 'The planned prosthesis or restoration is prepared through a laboratory process. Material selection depends on aesthetic goals, durability needs, and the function of the area.'
        },
        {
          title: 'Placement and fit control',
          desc: 'The prepared restoration is placed in the mouth. Bite, contact points, speech comfort, and aesthetic appearance are checked.'
        },
        {
          title: 'Adaptation and care guidance',
          desc: 'The adaptation process is followed. Cleaning, usage, and regular check-up recommendations are explained to the patient.'
        }
      ],
      benefitsTitle: 'Benefits of dental prosthetics',
      benefits: [
        'Restores missing tooth spaces both aesthetically and functionally.',
        'Can improve chewing comfort and eating ability.',
        'May help reduce some speech difficulties caused by missing teeth.',
        'Can improve facial support and smile appearance.',
        'Helps strengthen worn or weakened teeth.',
        'Provides a more natural and harmonious appearance when planned individually.',
        'Can create fixed and more comfortable solutions when combined with implant treatment.',
        'Allows old, uncomfortable, or aesthetically unsatisfying restorations to be renewed.'
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Does dental prosthetics only mean removable dentures?',
          a: 'No. Dental prosthetics can include fixed crowns, bridges, implant-supported prosthetics, zirconium restorations, and removable dentures. The suitable option depends on the mouth structure and the type of tooth loss.'
        },
        {
          q: 'Will prosthetic teeth look natural?',
          a: 'With proper shade, shape, and measurement planning, prosthetic teeth can look harmonious with natural teeth. The aesthetic result is planned by considering material choice, gum structure, and facial harmony.'
        },
        {
          q: 'Is it difficult to get used to prosthetic teeth?',
          a: 'Fixed restorations are usually easier to adapt to. With removable dentures, there may be a feeling of fullness, speech changes, or chewing adjustment in the first days. Regular use and follow-up adjustments help the adaptation process.'
        },
        {
          q: 'Is a fixed prosthesis better than a removable denture?',
          a: 'It depends on the patient’s mouth structure, bone support, tooth loss pattern, and expectations. Fixed options may be more comfortable in suitable patients, but removable dentures may be the better choice in some cases.'
        },
        {
          q: 'What is an implant-supported prosthesis?',
          a: 'An implant-supported prosthesis is a restoration supported by implants placed in the jawbone. In suitable patients, this option can provide a more stable and comfortable use.'
        },
        {
          q: 'How should prosthetic teeth be cared for?',
          a: 'For fixed prosthetics, regular brushing, interdental cleaning, and dental check-ups are important. For removable dentures, daily cleaning, nighttime use, and storage should follow the dentist’s instructions.'
        },
        {
          q: 'Can my old prosthesis be renewed?',
          a: 'Yes. If an old prosthesis has lost its fit, causes discomfort, looks unaesthetic, is broken, or affects chewing, it can be evaluated and replaced with a more suitable restoration.'
        }
      ]
    }
  }
},
{
  slug: 'pediatric-dentistry',
  image: '/images/services/pediatric-dentistry.jpg',
  icon: 'lucide:baby',
  related: ['esthetic-dentistry', 'orthodontics', 'periodontology'],
  content: {
    tr: {
      eyebrow: 'Pedodonti',
      title: 'Pedodonti',
      shortDescription:
        'Çocukların süt dişleri, kalıcı diş gelişimi, ağız hijyeni ve diş hekimiyle güvenli bağ kurması için planlanan nazik ve koruyucu diş hekimliği alanıdır.',
      introTitle: 'Çocuklar için sakin, güven veren ve koruyucu diş bakımı',
      intro:
        'Pedodonti, bebeklikten ergenlik dönemine kadar çocukların ağız ve diş sağlığını takip eden diş hekimliği alanıdır. Bu süreç yalnızca çürük tedavisi yapmakla sınırlı değildir; çocuğun diş hekimine alışması, korku geliştirmemesi, doğru fırçalama alışkanlığı kazanması ve süt dişlerinden kalıcı dişlere geçişin sağlıklı ilerlemesi de önemlidir. Çocuklarda tedavi yaklaşımı yetişkinlerden farklıdır. Daha sabırlı, açıklayıcı, oyunlaştırılmış ve güven duygusunu koruyan bir iletişim gerekir.',
      whoTitle: 'Kimler için uygundur?',
      who: [
        'İlk dişleri çıkmaya başlayan bebekler ve küçük çocuklar',
        'Süt dişlerinde çürük, renklenme, kırık veya hassasiyet bulunan çocuklar',
        'Diş hekimi korkusu yaşayan veya ilk kez muayeneye gelecek çocuklar',
        'Diş fırçalama alışkanlığı kazanmakta zorlanan çocuklar',
        'Süt dişi erken kaybı, yer darlığı veya diş dizilimi takibi gereken hastalar',
        'Okul döneminde düzenli diş kontrolü ve koruyucu uygulamalara ihtiyaç duyan çocuklar',
        'Diş sıkma, parmak emme, uzun süre emzik kullanımı gibi alışkanlıkları olan çocuklar',
        'Kalıcı dişleri çıkmaya başlayan ve gelişimi takip edilmesi gereken çocuklar'
      ],
      processTitle: 'Çocuk diş tedavisi süreci nasıl ilerler?',
      process: [
        {
          title: 'Tanışma ve güven oluşturma',
          desc: 'Çocuğun kliniğe ve hekime alışması için sakin bir iletişim kurulur. İlk görüşmede amaç yalnızca tedavi değil, güven duygusunu güçlendirmektir.'
        },
        {
          title: 'Yaşa uygun muayene',
          desc: 'Süt dişleri, kalıcı dişlerin gelişimi, diş eti sağlığı, çene gelişimi ve ağız hijyeni çocuğun yaşına uygun şekilde değerlendirilir.'
        },
        {
          title: 'Aileden bilgi alınması',
          desc: 'Beslenme alışkanlıkları, fırçalama düzeni, gece beslenmesi, emzik veya parmak emme gibi alışkanlıklar ve varsa ağrı şikâyetleri dinlenir.'
        },
        {
          title: 'Koruyucu planlama',
          desc: 'Çürük riskine göre flor uygulaması, fissür örtücü, beslenme önerileri ve fırçalama eğitimi gibi koruyucu adımlar planlanabilir.'
        },
        {
          title: 'Gerekli tedavilerin uygulanması',
          desc: 'Çürük, kırık, ağrı veya enfeksiyon varsa çocuğun yaşı ve uyumu dikkate alınarak uygun tedavi seçenekleri uygulanır.'
        },
        {
          title: 'Alışkanlık takibi',
          desc: 'Parmak emme, diş sıkma, ağız solunumu veya uzun süreli emzik kullanımı gibi durumlar takip edilerek gerekli yönlendirmeler yapılabilir.'
        },
        {
          title: 'Düzenli kontrol sistemi',
          desc: 'Çocuğun diş gelişimi ve ağız hijyeni belirli aralıklarla takip edilir. Böylece problemler büyümeden fark edilebilir.'
        }
      ],
      benefitsTitle: 'Pedodontinin sağladığı avantajlar',
      benefits: [
        'Çocukların diş hekimiyle daha güvenli ve olumlu bir ilişki kurmasına yardımcı olur.',
        'Süt dişlerindeki çürük ve enfeksiyonların erken fark edilmesini sağlar.',
        'Kalıcı dişlerin sağlıklı gelişimini destekler.',
        'Doğru fırçalama ve ağız bakım alışkanlıklarının erken yaşta kazanılmasına yardımcı olur.',
        'Koruyucu uygulamalarla çürük oluşma riskini azaltabilir.',
        'Diş hekimi korkusunun ilerlemesini önleyebilir.',
        'Süt dişi erken kaybına bağlı yer problemlerinin takip edilmesine yardımcı olur.',
        'Ailenin beslenme, bakım ve kontrol süreci konusunda daha bilinçli hareket etmesini sağlar.'
      ],
      faqTitle: 'Sık sorulan sorular',
      faq: [
        {
          q: 'Çocuklar ilk ne zaman diş hekimine götürülmelidir?',
          a: 'İlk dişlerin çıkmasıyla birlikte veya en geç bir yaş civarında ilk diş hekimi kontrolü önerilir. Bu ziyaret, sorun olmasa bile aileyi bilgilendirmek ve çocuğun diş hekimine alışmasını sağlamak açısından değerlidir.'
        },
        {
          q: 'Süt dişleri zaten düşecekse tedavi edilmeli mi?',
          a: 'Evet. Süt dişleri çocuğun çiğnemesi, konuşması, çene gelişimi ve kalıcı dişlere yer tutması açısından önemlidir. Tedavi edilmeyen süt dişi problemleri ağrıya, enfeksiyona ve ileride dizilim sorunlarına yol açabilir.'
        },
        {
          q: 'Çocuklarda diş tedavisi ağrılı olur mu?',
          a: 'Tedavi çocuğun yaşına, ihtiyacına ve uyumuna göre planlanır. Gerekli durumlarda lokal anestezi uygulanabilir. Amaç işlemi çocuğa mümkün olduğunca konforlu ve korkutmadan tamamlamaktır.'
        },
        {
          q: 'Flor uygulaması çocuklar için gerekli midir?',
          a: 'Flor uygulaması çürük riskine göre önerilebilir. Diş minesinin güçlenmesine ve çürük oluşum riskinin azalmasına yardımcı olabilir. Uygunluk çocuğun ağız yapısı ve çürük riskine göre değerlendirilir.'
        },
        {
          q: 'Fissür örtücü nedir?',
          a: 'Fissür örtücü, özellikle azı dişlerinin çiğneme yüzeylerindeki derin girintileri kapatmaya yardımcı olan koruyucu bir uygulamadır. Amaç gıda birikimini azaltmak ve çürük riskini düşürmektir.'
        },
        {
          q: 'Çocuğum diş hekiminden korkuyorsa ne yapılmalı?',
          a: 'Çocuğa baskı yapmak yerine yavaş, sakin ve güven veren bir yaklaşım tercih edilmelidir. İlk randevunun tanışma ve alışma amacıyla geçmesi, ilerleyen tedavilerin daha rahat yapılmasına yardımcı olabilir.'
        },
        {
          q: 'Çocuklarda diş fırçalama ne zaman başlamalıdır?',
          a: 'İlk dişlerin çıkmasıyla ağız bakımına başlanabilir. Yaşa uygun fırça ve macun seçimi önemlidir. Küçük çocuklarda fırçalama mutlaka aile desteğiyle yapılmalıdır.'
        },
        {
          q: 'Parmak emme veya uzun süre emzik kullanımı dişleri etkiler mi?',
          a: 'Uzun süre devam eden alışkanlıklar diş dizilimini, çene gelişimini ve kapanışı etkileyebilir. Bu nedenle alışkanlığın süresi ve şiddeti değerlendirilerek gerekirse yönlendirme yapılmalıdır.'
        }
      ]
    },
    en: {
      eyebrow: 'Pediatric Dentistry',
      title: 'Pediatric Dentistry',
      shortDescription:
        'Gentle and preventive dental care focused on children’s baby teeth, permanent tooth development, oral hygiene, and building trust with the dentist.',
      introTitle: 'Calm, reassuring, and preventive dental care for children',
      intro:
        'Pediatric dentistry follows children’s oral and dental health from infancy through adolescence. It is not limited to treating cavities. Helping the child feel safe at the dentist, preventing fear, building proper brushing habits, and supporting the healthy transition from baby teeth to permanent teeth are all part of the process. Children need a different approach than adults: more patience, simple explanations, gentle communication, and a sense of trust.',
      whoTitle: 'Who is it suitable for?',
      who: [
        'Babies and young children whose first teeth have started to erupt',
        'Children with cavities, discoloration, fractures, or sensitivity in baby teeth',
        'Children who are visiting the dentist for the first time or feel afraid of dental care',
        'Children who struggle to build regular brushing habits',
        'Patients who need monitoring for early baby tooth loss, spacing, or tooth alignment',
        'School-age children who need regular check-ups and preventive dental applications',
        'Children with habits such as teeth grinding, thumb sucking, or long-term pacifier use',
        'Children whose permanent teeth are erupting and need development follow-up'
      ],
      processTitle: 'How does pediatric dental care work?',
      process: [
        {
          title: 'Introduction and trust-building',
          desc: 'A calm connection is created so the child can get used to the clinic and the dentist. The first visit is not only about treatment, but also about building trust.'
        },
        {
          title: 'Age-appropriate examination',
          desc: 'Baby teeth, permanent tooth development, gum health, jaw growth, and oral hygiene are evaluated according to the child’s age.'
        },
        {
          title: 'Listening to the family',
          desc: 'Eating habits, brushing routine, night feeding, pacifier or thumb-sucking habits, and any pain complaints are discussed with the family.'
        },
        {
          title: 'Preventive planning',
          desc: 'Depending on cavity risk, fluoride application, fissure sealants, nutrition advice, and brushing education may be planned.'
        },
        {
          title: 'Necessary treatments',
          desc: 'If cavities, fractures, pain, or infection are present, suitable treatments are performed according to the child’s age and cooperation.'
        },
        {
          title: 'Habit monitoring',
          desc: 'Thumb sucking, teeth grinding, mouth breathing, or long-term pacifier use can be monitored, and guidance can be provided when needed.'
        },
        {
          title: 'Regular follow-up system',
          desc: 'Tooth development and oral hygiene are checked at regular intervals so problems can be noticed before they become more serious.'
        }
      ],
      benefitsTitle: 'Benefits of pediatric dentistry',
      benefits: [
        'Helps children build a safer and more positive relationship with dental care.',
        'Allows cavities and infections in baby teeth to be noticed early.',
        'Supports healthy development of permanent teeth.',
        'Helps children gain proper brushing and oral care habits at an early age.',
        'Preventive applications may reduce the risk of cavities.',
        'Can help prevent dental fear from becoming stronger.',
        'Supports monitoring of spacing problems caused by early baby tooth loss.',
        'Helps families make more informed decisions about nutrition, care, and regular check-ups.'
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'When should children first visit the dentist?',
          a: 'A first dental visit is recommended when the first teeth erupt or around the age of one at the latest. Even if there is no problem, this visit is valuable for guiding the family and helping the child get used to the dentist.'
        },
        {
          q: 'Do baby teeth need treatment if they will fall out anyway?',
          a: 'Yes. Baby teeth are important for chewing, speech, jaw development, and holding space for permanent teeth. Untreated problems can lead to pain, infection, and future alignment issues.'
        },
        {
          q: 'Is dental treatment painful for children?',
          a: 'Treatment is planned according to the child’s age, needs, and cooperation. Local anesthesia can be used when needed. The aim is to make the procedure as comfortable and non-frightening as possible.'
        },
        {
          q: 'Is fluoride application necessary for children?',
          a: 'Fluoride may be recommended depending on cavity risk. It can help strengthen tooth enamel and reduce the risk of cavities. Suitability is evaluated according to the child’s oral condition.'
        },
        {
          q: 'What is a fissure sealant?',
          a: 'A fissure sealant is a preventive application that helps cover the deep grooves on the chewing surfaces of molars. The goal is to reduce food accumulation and lower cavity risk.'
        },
        {
          q: 'What if my child is afraid of the dentist?',
          a: 'Instead of pressure, a slow, calm, and reassuring approach is preferred. A first appointment focused on meeting and getting used to the clinic can make future treatments easier.'
        },
        {
          q: 'When should children start brushing their teeth?',
          a: 'Oral care can begin when the first teeth erupt. Age-appropriate toothbrush and toothpaste selection is important. Young children should brush with family support.'
        },
        {
          q: 'Can thumb sucking or long-term pacifier use affect teeth?',
          a: 'Long-lasting habits may affect tooth alignment, jaw development, and bite. The duration and intensity of the habit should be evaluated, and guidance may be needed.'
        }
      ]
    }
  }
},
{
  slug: 'periodontology',
  image: '/images/services/periodontology.jpg',
  icon: 'lucide:heart-pulse',
  related: ['dental-implant', 'esthetic-dentistry', 'teeth-whitening'],
  content: {
    tr: {
      eyebrow: 'Periodontoloji',
      title: 'Periodontoloji',
      shortDescription:
        'Diş eti hastalıklarının, dişi destekleyen kemik dokusunun ve ağız sağlığını etkileyen çevre dokuların teşhis ve tedavisine odaklanan diş hekimliği alanıdır.',
      introTitle: 'Sağlıklı dişlerin temeli sağlıklı diş etleridir',
      intro:
        'Periodontoloji, diş etleri ve dişleri çevreleyen destek dokularla ilgilenir. Diş eti kanaması, kızarıklık, şişlik, diş eti çekilmesi, ağız kokusu, dişlerde sallanma veya diş taşı birikimi gibi sorunlar bu alanın içinde değerlendirilir. Diş eti hastalıkları bazen sessiz ilerleyebilir; ağrı olmadan da kemik kaybı ve diş desteğinde zayıflama gelişebilir. Bu nedenle erken teşhis, düzenli temizlik ve kişiye uygun bakım alışkanlıkları uzun vadeli ağız sağlığı için oldukça önemlidir.',
      whoTitle: 'Kimler için uygundur?',
      who: [
        'Diş eti kanaması yaşayan kişiler',
        'Diş etlerinde kızarıklık, şişlik veya hassasiyet bulunan hastalar',
        'Diş eti çekilmesi fark eden veya diş kökleri görünür hale gelen kişiler',
        'Ağız kokusu, kötü tat veya sürekli plak birikimi problemi yaşayanlar',
        'Diş taşı temizliğine düzenli ihtiyaç duyan hastalar',
        'Dişlerinde sallanma, yer değiştirme veya aralanma fark eden kişiler',
        'İmplant tedavisi öncesinde diş eti ve kemik sağlığı değerlendirilmesi gereken hastalar',
        'Diş eti sağlığını koruyarak doğal dişlerini uzun süre ağızda tutmak isteyen kişiler'
      ],
      processTitle: 'Periodontal tedavi süreci nasıl ilerler?',
      process: [
        {
          title: 'Diş eti muayenesi',
          desc: 'Diş etlerinin rengi, kanama durumu, çekilme seviyesi, diş taşı birikimi ve dişlerin destek dokuları detaylı şekilde değerlendirilir.'
        },
        {
          title: 'Cep ölçümü ve destek dokuların incelenmesi',
          desc: 'Diş eti cepleri ölçülerek hastalığın derinliği anlaşılmaya çalışılır. Gerekli durumlarda kemik desteği röntgenle değerlendirilir.'
        },
        {
          title: 'Diş taşı ve plak temizliği',
          desc: 'Diş yüzeylerinde ve diş eti çevresinde biriken plak ve diş taşları temizlenir. Bu adım diş eti iyileşmesinin temelini oluşturur.'
        },
        {
          title: 'Derin temizlik planı',
          desc: 'Diş eti hastalığı ilerlemişse kök yüzeyi temizliği ve diş eti altı bölgelerin daha detaylı temizlenmesi gerekebilir.'
        },
        {
          title: 'Ağız bakım eğitimi',
          desc: 'Fırçalama tekniği, ara yüz fırçası, diş ipi veya ağız duşu gibi yardımcı bakım araçları hastanın ihtiyacına göre anlatılır.'
        },
        {
          title: 'İyileşme takibi',
          desc: 'Tedavi sonrası diş eti kanaması, şişlik ve cep derinlikleri takip edilir. İyileşme durumuna göre ek tedavi gerekebilir.'
        },
        {
          title: 'Koruyucu bakım dönemi',
          desc: 'Diş eti hastalıkları tekrar edebileceği için düzenli kontrol ve profesyonel temizlik aralıkları kişiye özel planlanır.'
        }
      ],
      benefitsTitle: 'Diş eti tedavisinin avantajları',
      benefits: [
        'Diş eti kanaması, şişlik ve hassasiyetin azalmasına yardımcı olabilir.',
        'Dişleri destekleyen kemik ve çevre dokuların korunmasını destekler.',
        'Diş taşı ve plak birikimini kontrol altına almaya yardımcı olur.',
        'Ağız kokusu ve kötü tat gibi şikâyetlerin azalmasına katkı sağlayabilir.',
        'Diş eti çekilmesi ve dişlerde sallanma gibi problemlerin ilerlemesini yavaşlatabilir.',
        'İmplant, estetik veya protez tedavileri öncesinde daha sağlıklı bir ağız zemini oluşturur.',
        'Doğal dişlerin uzun süre korunmasına katkı sağlar.',
        'Kişiye özel bakım eğitimiyle günlük ağız hijyenini daha etkili hale getirir.'
      ],
      faqTitle: 'Sık sorulan sorular',
      faq: [
        {
          q: 'Diş eti kanaması normal midir?',
          a: 'Diş eti kanaması genellikle normal kabul edilmez. Fırçalama sırasında kanama, diş eti iltihabı veya plak birikimi gibi sorunların belirtisi olabilir. Düzenli devam ediyorsa diş hekimi tarafından değerlendirilmelidir.'
        },
        {
          q: 'Diş taşı temizliği dişlere zarar verir mi?',
          a: 'Profesyonel şekilde yapılan diş taşı temizliği dişlere zarar vermez. Aksine diş eti sağlığını korumaya ve plak birikimini azaltmaya yardımcı olur.'
        },
        {
          q: 'Diş eti çekilmesi geri düzelir mi?',
          a: 'Diş eti çekilmesinin nedeni ve seviyesi önemlidir. Bazı durumlarda ilerlemesi durdurulabilir veya estetik/cerrahi seçenekler değerlendirilebilir. Erken değerlendirme bu nedenle önemlidir.'
        },
        {
          q: 'Diş eti hastalığı ağrı yapar mı?',
          a: 'Her zaman ağrı yapmayabilir. Diş eti hastalıkları bazen kanama, ağız kokusu, diş eti çekilmesi veya dişlerde sallanma gibi belirtilerle sessiz ilerleyebilir.'
        },
        {
          q: 'Periodontal tedavi ne kadar sürer?',
          a: 'Süre hastalığın seviyesine göre değişir. Basit temizlik tek seansta tamamlanabilirken, ilerlemiş diş eti hastalıklarında birkaç seans ve düzenli takip gerekebilir.'
        },
        {
          q: 'Diş eti hastalığı tekrar eder mi?',
          a: 'Evet, bakım yetersiz kalırsa veya düzenli kontroller aksatılırsa tekrar edebilir. Bu nedenle tedavi sonrası koruyucu bakım ve kişiye uygun temizlik alışkanlıkları önemlidir.'
        },
        {
          q: 'İmplant yaptırmadan önce diş eti sağlığı önemli midir?',
          a: 'Evet. İmplant tedavisinde diş eti ve kemik sağlığı çok önemlidir. Sağlıklı çevre dokular, implantın uzun vadeli başarısını destekleyen temel faktörlerdendir.'
        }
      ]
    },
    en: {
      eyebrow: 'Periodontology',
      title: 'Periodontology',
      shortDescription:
        'A dental specialty focused on diagnosing and treating gum disease, supporting bone tissue, and the surrounding structures that affect oral health.',
      introTitle: 'Healthy gums are the foundation of healthy teeth',
      intro:
        'Periodontology focuses on the gums and the supporting tissues around the teeth. Gum bleeding, redness, swelling, gum recession, bad breath, tooth mobility, or tartar buildup are all evaluated within this field. Gum disease can sometimes progress silently; bone loss and weakened tooth support may develop even without pain. That is why early diagnosis, regular cleaning, and personalized oral care habits are essential for long-term oral health.',
      whoTitle: 'Who is it suitable for?',
      who: [
        'People who experience gum bleeding',
        'Patients with redness, swelling, or sensitivity in the gums',
        'Those who notice gum recession or exposed tooth roots',
        'People with bad breath, unpleasant taste, or frequent plaque buildup',
        'Patients who need regular professional tartar cleaning',
        'Those who notice tooth mobility, shifting, or spacing between teeth',
        'Patients who need gum and bone health evaluation before implant treatment',
        'People who want to protect their natural teeth by maintaining healthy gums'
      ],
      processTitle: 'How does periodontal treatment work?',
      process: [
        {
          title: 'Gum examination',
          desc: 'Gum color, bleeding, recession level, tartar buildup, and the supporting tissues around the teeth are carefully evaluated.'
        },
        {
          title: 'Pocket measurement and tissue assessment',
          desc: 'Gum pockets are measured to understand the depth of the disease. When needed, bone support is evaluated with X-rays.'
        },
        {
          title: 'Tartar and plaque removal',
          desc: 'Plaque and tartar buildup around the teeth and gumline are removed. This step forms the basis of gum healing.'
        },
        {
          title: 'Deep cleaning plan',
          desc: 'If gum disease is more advanced, root surface cleaning and more detailed cleaning below the gumline may be needed.'
        },
        {
          title: 'Oral care guidance',
          desc: 'Brushing technique, interdental brushes, dental floss, or oral irrigators are explained according to the patient’s needs.'
        },
        {
          title: 'Healing follow-up',
          desc: 'After treatment, gum bleeding, swelling, and pocket depths are monitored. Additional treatment may be needed depending on healing.'
        },
        {
          title: 'Maintenance phase',
          desc: 'Because gum disease can recur, regular check-ups and professional cleaning intervals are planned individually.'
        }
      ],
      benefitsTitle: 'Benefits of gum treatment',
      benefits: [
        'May help reduce gum bleeding, swelling, and sensitivity.',
        'Supports the protection of bone and tissues that hold the teeth in place.',
        'Helps control tartar and plaque buildup.',
        'Can contribute to reducing bad breath and unpleasant taste.',
        'May slow the progression of gum recession and tooth mobility.',
        'Creates a healthier foundation before implant, aesthetic, or prosthetic treatments.',
        'Supports long-term preservation of natural teeth.',
        'Makes daily oral hygiene more effective through personalized care guidance.'
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Is gum bleeding normal?',
          a: 'Gum bleeding is generally not considered normal. Bleeding while brushing may be a sign of gum inflammation or plaque buildup. If it continues regularly, it should be evaluated by a dentist.'
        },
        {
          q: 'Does tartar cleaning damage the teeth?',
          a: 'Professional tartar cleaning does not damage the teeth. On the contrary, it helps protect gum health and reduce plaque accumulation.'
        },
        {
          q: 'Can gum recession be reversed?',
          a: 'The cause and level of gum recession are important. In some cases, progression can be stopped or aesthetic/surgical options may be considered. Early evaluation is important.'
        },
        {
          q: 'Does gum disease cause pain?',
          a: 'Not always. Gum disease can progress silently with signs such as bleeding, bad breath, gum recession, or tooth mobility, even without significant pain.'
        },
        {
          q: 'How long does periodontal treatment take?',
          a: 'The duration depends on the severity of the disease. Simple cleaning may be completed in one visit, while advanced gum disease may require several sessions and regular follow-up.'
        },
        {
          q: 'Can gum disease come back?',
          a: 'Yes. If oral care is insufficient or regular check-ups are missed, gum disease can recur. Maintenance care and personalized hygiene habits are important after treatment.'
        },
        {
          q: 'Is gum health important before implant treatment?',
          a: 'Yes. Gum and bone health are very important for implant treatment. Healthy surrounding tissues are one of the key factors supporting long-term implant success.'
        }
      ]
    }
  }
},
{
  slug: 'orthodontics',
  image: '/images/services/orthodontics.jpg',
  icon: 'lucide:align-justify',
  related: ['smile-design', 'pediatric-dentistry', 'esthetic-dentistry'],
  content: {
    tr: {
      eyebrow: 'Ortodonti',
      title: 'Ortodonti',
      shortDescription:
        'Diş dizilimi, kapanış problemleri ve çene ilişkilerini değerlendirerek daha düzenli, sağlıklı ve dengeli bir ağız yapısı oluşturmayı amaçlayan tedavi alanıdır.',
      introTitle: 'Daha düzgün bir diş dizilimi ve dengeli kapanış için planlı tedavi',
      intro:
        'Ortodonti, çapraşık dişler, aralıklı dişler, kapanış bozuklukları ve çene ilişkilerindeki uyumsuzluklarla ilgilenir. Tedavinin amacı yalnızca daha estetik bir gülüş elde etmek değildir; dişlerin daha doğru konumlanması, çiğneme fonksiyonunun desteklenmesi, diş temizliğinin kolaylaşması ve uzun vadeli ağız sağlığının korunması da önemlidir. Ortodontik tedavi çocukluk döneminde başlayabileceği gibi yetişkin yaşlarda da planlanabilir. Her hastada süreç; diş yapısı, çene gelişimi, yaş, beklenti ve kullanılacak yönteme göre kişiye özel ilerler.',
      whoTitle: 'Kimler için uygundur?',
      who: [
        'Dişlerinde çapraşıklık veya düzensiz dizilim bulunan kişiler',
        'Dişleri arasında belirgin boşluklar olan hastalar',
        'Alt ve üst dişleri düzgün kapanmayan kişiler',
        'Çiğneme sırasında zorlanan veya kapanışında rahatsızlık hisseden hastalar',
        'Çene gelişimi takip edilmesi gereken çocuklar ve gençler',
        'Gülüş estetiğini daha düzenli bir diş dizilimiyle iyileştirmek isteyen yetişkinler',
        'Diş temizliğini zorlaştıran sıkışık diş yapısına sahip kişiler',
        'Şeffaf plak veya tel tedavisi gibi ortodontik seçenekleri değerlendirmek isteyen hastalar'
      ],
      processTitle: 'Ortodontik tedavi süreci nasıl ilerler?',
      process: [
        {
          title: 'İlk muayene ve kapanış analizi',
          desc: 'Dişlerin dizilimi, alt-üst çene ilişkisi, kapanış şekli, yüz oranları ve gülüş hattı birlikte değerlendirilir.'
        },
        {
          title: 'Görüntüleme ve ölçü alma',
          desc: 'Röntgen, fotoğraf, dijital tarama veya ölçüler yardımıyla dişlerin ve çene yapısının detaylı analizi yapılır.'
        },
        {
          title: 'Tedavi seçeneğinin belirlenmesi',
          desc: 'Hastanın ihtiyacına göre metal braket, estetik braket, şeffaf plak veya farklı ortodontik yaklaşımlar değerlendirilebilir.'
        },
        {
          title: 'Kişiye özel tedavi planı',
          desc: 'Dişlerin hangi yönde hareket edeceği, tedavinin yaklaşık süresi, kontrol aralıkları ve hedeflenen sonuç hastaya açıklanır.'
        },
        {
          title: 'Tedavinin başlatılması',
          desc: 'Seçilen yönteme göre braketler uygulanır veya şeffaf plaklar teslim edilir. Hastaya kullanım ve bakım kuralları anlatılır.'
        },
        {
          title: 'Düzenli kontroller',
          desc: 'Tedavi boyunca diş hareketleri takip edilir. Gerektiğinde tel aktivasyonları, plak değişimleri veya küçük düzenlemeler yapılır.'
        },
        {
          title: 'Son hizalama ve kapanış kontrolü',
          desc: 'Tedavinin son aşamasında dişlerin dizilimi, kapanış dengesi ve gülüş estetiği detaylı şekilde kontrol edilir.'
        },
        {
          title: 'Pekiştirme dönemi',
          desc: 'Dişlerin yeni konumunu koruması için pekiştirme apareyleri veya plakları kullanılabilir. Bu aşama tedavinin kalıcılığı için önemlidir.'
        }
      ],
      benefitsTitle: 'Ortodontinin avantajları',
      benefits: [
        'Dişlerin daha düzenli ve estetik görünmesine yardımcı olur.',
        'Çapraşık dişlerin temizliğini kolaylaştırarak ağız hijyenini destekleyebilir.',
        'Kapanış problemlerinin düzeltilmesine katkı sağlayabilir.',
        'Çiğneme fonksiyonunun daha dengeli hale gelmesine yardımcı olabilir.',
        'Dişlerde düzensiz aşınma veya bazı baskı problemlerinin azalmasını destekleyebilir.',
        'Gülüş estetiğini doğal ve kalıcı bir şekilde iyileştirebilir.',
        'Çocuklarda çene gelişiminin doğru yönde takip edilmesine imkân sağlar.',
        'Şeffaf plak gibi seçeneklerle bazı hastalarda daha konforlu ve estetik bir tedavi süreci sunabilir.'
      ],
      faqTitle: 'Sık sorulan sorular',
      faq: [
        {
          q: 'Ortodontik tedavi sadece çocuklara mı yapılır?',
          a: 'Hayır. Ortodontik tedavi çocuklarda, gençlerde ve yetişkinlerde uygulanabilir. Yetişkinlerde diş ve diş eti sağlığı uygun olduğu sürece tedavi planlanabilir.'
        },
        {
          q: 'Tel tedavisi ağrılı mıdır?',
          a: 'Braketler takıldıktan veya teller aktive edildikten sonra birkaç gün baskı ve hassasiyet hissedilebilir. Bu durum genellikle geçicidir ve dişlerin hareket etmeye başlamasıyla ilgilidir.'
        },
        {
          q: 'Ortodontik tedavi ne kadar sürer?',
          a: 'Tedavi süresi çapraşıklığın seviyesine, kapanış problemine, kullanılan yönteme ve hastanın tedaviye uyumuna göre değişir. Bazı basit vakalar daha kısa sürebilirken, daha kapsamlı tedaviler daha uzun zaman alabilir.'
        },
        {
          q: 'Şeffaf plak mı tel tedavisi mi daha iyidir?',
          a: 'Bu hastanın diş yapısına, tedavi ihtiyacına ve beklentisine göre değişir. Şeffaf plaklar bazı hastalar için estetik ve konforlu bir seçenek olabilir; ancak her vaka için uygun olmayabilir.'
        },
        {
          q: 'Ortodonti sonrası dişler tekrar bozulur mu?',
          a: 'Pekiştirme dönemi ihmal edilirse dişler zamanla eski konumlarına dönme eğilimi gösterebilir. Bu nedenle tedavi sonrası verilen plak veya apareylerin düzenli kullanılması önemlidir.'
        },
        {
          q: 'Ortodontik tedavi sırasında yemek yerken nelere dikkat etmeliyim?',
          a: 'Tel tedavisinde çok sert, yapışkan veya braketlere zarar verebilecek yiyeceklerden kaçınmak gerekir. Şeffaf plak kullanımında ise plaklar genellikle yemek sırasında çıkarılır ve dişler temizlendikten sonra tekrar takılır.'
        },
        {
          q: 'Diş teli varken diş temizliği zor olur mu?',
          a: 'Braketler nedeniyle temizlik daha dikkatli yapılmalıdır. Ortodontik fırça, ara yüz fırçası ve uygun bakım araçlarıyla hijyen sağlanabilir.'
        },
        {
          q: 'Ortodontik tedavi gülüş tasarımıyla birlikte planlanabilir mi?',
          a: 'Evet. Bazı hastalarda önce diş dizilimi ortodontik olarak düzenlenir, ardından beyazlatma, bonding veya estetik restorasyonlarla gülüş tasarımı tamamlanabilir.'
        }
      ]
    },
    en: {
      eyebrow: 'Orthodontics',
      title: 'Orthodontics',
      shortDescription:
        'A treatment field focused on tooth alignment, bite problems, and jaw relationships to create a more balanced, healthy, and well-organized oral structure.',
      introTitle: 'Planned treatment for straighter teeth and a balanced bite',
      intro:
        'Orthodontics deals with crowded teeth, gaps, bite problems, and jaw relationship irregularities. The goal is not only to create a more aesthetic smile. Better tooth positioning can also support chewing function, make oral hygiene easier, and help protect long-term dental health. Orthodontic treatment can begin in childhood, but it can also be planned for adults. For every patient, the process is shaped according to tooth structure, jaw development, age, expectations, and the treatment method used.',
      whoTitle: 'Who is it suitable for?',
      who: [
        'People with crowded or irregularly aligned teeth',
        'Patients with noticeable gaps between teeth',
        'Those whose upper and lower teeth do not close properly',
        'Patients who feel discomfort while chewing or notice bite imbalance',
        'Children and teenagers whose jaw development needs monitoring',
        'Adults who want to improve smile aesthetics through better tooth alignment',
        'People whose crowded teeth make proper cleaning difficult',
        'Patients who want to evaluate orthodontic options such as clear aligners or braces'
      ],
      processTitle: 'How does orthodontic treatment work?',
      process: [
        {
          title: 'Initial examination and bite analysis',
          desc: 'Tooth alignment, upper-lower jaw relationship, bite pattern, facial proportions, and smile line are evaluated together.'
        },
        {
          title: 'Imaging and measurements',
          desc: 'X-rays, photographs, digital scans, or impressions are used to analyze the teeth and jaw structure in detail.'
        },
        {
          title: 'Choosing the treatment option',
          desc: 'Depending on the patient’s needs, metal braces, aesthetic braces, clear aligners, or other orthodontic approaches may be considered.'
        },
        {
          title: 'Personalized treatment planning',
          desc: 'The planned tooth movements, estimated treatment duration, control intervals, and expected result are explained to the patient.'
        },
        {
          title: 'Starting treatment',
          desc: 'Depending on the chosen method, braces are placed or clear aligners are delivered. Usage and care instructions are explained.'
        },
        {
          title: 'Regular follow-ups',
          desc: 'Tooth movements are monitored throughout treatment. Wire activations, aligner changes, or minor adjustments are made when needed.'
        },
        {
          title: 'Final alignment and bite check',
          desc: 'In the final stage, tooth alignment, bite balance, and smile aesthetics are carefully reviewed.'
        },
        {
          title: 'Retention phase',
          desc: 'Retainers or retention aligners may be used to help preserve the new tooth positions. This phase is important for long-term stability.'
        }
      ],
      benefitsTitle: 'Benefits of orthodontics',
      benefits: [
        'Helps teeth look straighter and more aesthetic.',
        'Can make crowded teeth easier to clean and support oral hygiene.',
        'Contributes to correction of bite problems.',
        'May help chewing function become more balanced.',
        'Can reduce uneven tooth wear or pressure-related issues in some cases.',
        'Improves smile aesthetics in a natural and long-lasting way.',
        'Allows jaw development to be monitored properly in children.',
        'Options such as clear aligners may offer a more comfortable and aesthetic treatment experience for some patients.'
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        {
          q: 'Is orthodontic treatment only for children?',
          a: 'No. Orthodontic treatment can be applied to children, teenagers, and adults. In adults, treatment can be planned as long as tooth and gum health are suitable.'
        },
        {
          q: 'Is braces treatment painful?',
          a: 'After braces are placed or wires are activated, pressure and sensitivity may be felt for a few days. This is usually temporary and related to the beginning of tooth movement.'
        },
        {
          q: 'How long does orthodontic treatment take?',
          a: 'Treatment duration depends on the level of crowding, bite problem, method used, and the patient’s cooperation. Simple cases may take less time, while more comprehensive treatments may take longer.'
        },
        {
          q: 'Are clear aligners better than braces?',
          a: 'It depends on the tooth structure, treatment need, and patient expectations. Clear aligners can be an aesthetic and comfortable option for some patients, but they may not be suitable for every case.'
        },
        {
          q: 'Can teeth shift back after orthodontic treatment?',
          a: 'If the retention phase is neglected, teeth may tend to move back over time. That is why using retainers or retention aligners as recommended is important.'
        },
        {
          q: 'What should I avoid eating during braces treatment?',
          a: 'With braces, very hard, sticky, or bracket-damaging foods should be avoided. With clear aligners, the aligners are usually removed during meals and worn again after cleaning the teeth.'
        },
        {
          q: 'Is it difficult to clean teeth with braces?',
          a: 'Cleaning requires more care because of the brackets. Orthodontic brushes, interdental brushes, and suitable hygiene tools can help maintain oral cleanliness.'
        },
        {
          q: 'Can orthodontics be planned together with smile design?',
          a: 'Yes. In some patients, tooth alignment is corrected first with orthodontics, and then smile design can be completed with whitening, bonding, or aesthetic restorations.'
        }
      ]
    }
  }
}
]