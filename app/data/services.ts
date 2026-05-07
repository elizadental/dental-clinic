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
}
]