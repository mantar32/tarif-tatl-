import { Category, Recipe, RecipeVideo } from '../types/recipe';

export const CATEGORIES: Category[] = [
  {
    id: 'cat-1',
    slug: 'kekler',
    name: 'Kekler',
    recipeCount: 12,
    description: 'Kabaran dokusu, mis kokusu ve çikolatalıdan meyveliye uzanan ev yapımı kek tarifleri.',
    image: '/images/cat-kekler.png',
    fallbackImage: '/images/recipes/islak-kek.jpg',
    bgColor: '#FCE8EE',
    accentColor: '#E25B87',
    badgeText: 'En Popüler'
  },
  {
    id: 'cat-2',
    slug: 'kurabiyeler',
    name: 'Kurabiyeler',
    recipeCount: 18,
    description: 'Çay ve kahve yanına eşlik eden kıyır kıyır, ağızda dağılan taze fırın kurabiyeleri.',
    image: '/images/cat-kurabiyeler.png',
    fallbackImage: '/images/recipes/elmali-kurabiye.jpg',
    bgColor: '#F9EFE6',
    accentColor: '#C87D55'
  },
  {
    id: 'cat-3',
    slug: 'sutlu-tatlilar',
    name: 'Sütlü Tatlılar',
    recipeCount: 15,
    description: 'Hafif, ipeksi kıvamlı, geleneksel ve modern dokunuşlu sütlü tatlı çeşitleri.',
    image: '/images/cat-sutlu.png',
    fallbackImage: '/images/recipes/firin-sutlac.jpg',
    bgColor: '#F3E8F6',
    accentColor: '#9C6ADE'
  },
  {
    id: 'cat-4',
    slug: 'meyveli-tatlilar',
    name: 'Meyveli Tatlılar',
    recipeCount: 10,
    description: 'Mevsimin en taze çilek, frambuaz, elma ve orman meyveleriyle hazırlanan ferah tatlılar.',
    image: '/images/cat-meyveli.png',
    fallbackImage: '/images/recipes/cilekli-tart.jpg',
    bgColor: '#EBF3F9',
    accentColor: '#4A90E2'
  },
  {
    id: 'cat-5',
    slug: 'cikolatali-tatlilar',
    name: 'Çikolatalı Tatlılar',
    recipeCount: 14,
    description: 'Yoğun Belçika çikolatası, akışkan soslar ve gerçek kakao tutkunlarına özel tarifler.',
    image: '/images/cat-cikolatali.png',
    fallbackImage: '/images/recipes/lava-kek.jpg',
    bgColor: '#F5EDE6',
    accentColor: '#7A4936',
    badgeText: 'Çikolata Aşkı'
  },
  {
    id: 'cat-6',
    slug: 'dondurmalar',
    name: 'Dondurmalar',
    recipeCount: 8,
    description: 'Katkısız, doğal meyve püreleri ve gerçek sahlep/krema ile ev yapımı serin lezzetler.',
    image: '/images/cat-dondurmalar.png',
    fallbackImage: '/images/recipes/dondurma.jpg',
    bgColor: '#E6F2EA',
    accentColor: '#4E9F6E'
  },
  {
    id: 'cat-7',
    slug: 'serbetli-tatlilar',
    name: 'Şerbetli Tatlılar',
    recipeCount: 9,
    description: 'Bayram sofralarının ve özel davetlerin vazgeçilmezi çıtır katmanlı geleneksel şerbetli tatlılar.',
    image: '/images/recipes/baklava.jpg',
    fallbackImage: '/images/recipes/baklava.jpg',
    bgColor: '#FBF0E4',
    accentColor: '#D9822B'
  },
  {
    id: 'cat-8',
    slug: 'cheesecake',
    name: 'Cheesecake',
    recipeCount: 11,
    description: 'San Sebastian’dan karamelli Lotus’a, çatlamayan tam kıvamında kremsi cheesecake tarifleri.',
    image: '/images/recipes/san-sebastian.jpg',
    fallbackImage: '/images/recipes/lotus-cheesecake.jpg',
    bgColor: '#FAF2E6',
    accentColor: '#C46D5E'
  },
  {
    id: 'cat-9',
    slug: 'tartlar-ve-turtalar',
    name: 'Tartlar ve Turtalar',
    recipeCount: 7,
    description: 'Tereyağlı kıyır pate sablée tabanı ve pastacı kremasıyla vitrin şıklığında tartlar.',
    image: '/images/recipes/cilekli-tart.jpg',
    fallbackImage: '/images/recipes/cilekli-tart.jpg',
    bgColor: '#FDECEF',
    accentColor: '#D94E73'
  },
  {
    id: 'cat-10',
    slug: 'pratik-tatlilar',
    name: 'Pratik Tatlılar',
    recipeCount: 16,
    description: 'Fırın gerektirmeyen veya 15-20 dakikada zahmetsizce hazırlanan kurtarıcı tatlılar.',
    image: '/images/recipes/truffle.jpg',
    fallbackImage: '/images/recipes/cilekli-magnolia.jpg',
    bgColor: '#F7EBF6',
    accentColor: '#B5589A',
    badgeText: '15 Dakika'
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 'rec-1',
    slug: 'sicak-cikolatali-lava-kek',
    title: 'Sıcak Çikolatalı Lava Kek',
    shortDescription: 'Dışı yumuşacık kek dokusunda, kaşığı vurduğunuz anda içinden sıcak ve akışkan bitter çikolata şelalesi akan efsanevi Fransız sufle-kek.',
    fullDescription:
      'Dışı yumuşacık, içi akışkan çikolata dolu bu lava kek tarifi, misafirlerinizi ilk kaşıkta büyüleyecek. Fransız pastacılığında "Moelleux au Chocolat" olarak bilinen bu tatlıda başarı; kaliteli bitter çikolata oranı, yumurtaların doğru çırpılması ve dakika hassasiyetinde yüksek ısıda pişirmede gizlidir.',
    categorySlug: 'cikolatali-tatlilar',
    categoryName: 'Çikolatalı Tatlılar',
    secondaryCategories: ['kekler', 'pratik-tatlilar'],
    image: '/images/recipes/lava-kek.jpg',
    galleryImages: [
      '/images/recipes/lava-kek.jpg',
      '/images/lava-kek-ref.png',
      '/images/recipes/step-chocolate.jpg',
      '/images/recipes/step-batter.jpg'
    ],
    prepTimeMinutes: 15,
    cookTimeMinutes: 12,
    totalTimeMinutes: 27,
    difficulty: 'Kolay',
    servings: 4,
    rating: 4.9,
    reviewCount: 234,
    likesCount: 1240,
    isFeatured: true,
    isSpotlight: true,
    createdAt: '2026-10-15',
    caloriesPerServing: 410,
    bakingTemp: '200°C (Alt-Üst Fanlı/Fansız)',
    ingredients: [
      { id: 'ing-1', name: 'Bitter çikolata (%60-%70 kakao, ince kıyılmış)', amount: 160, unit: 'g', secondaryMeasure: '(yaklaşık 2 paket)', group: 'Çikolata Bazı' },
      { id: 'ing-2', name: 'Tuzsuz tereyağı (küp doğranmış)', amount: 120, unit: 'g', secondaryMeasure: '(8 yemek kaşığı)', group: 'Çikolata Bazı' },
      { id: 'ing-3', name: 'Tam yumurta (oda sıcaklığında)', amount: 150, unit: 'ml', secondaryMeasure: '(3 adet büyük boy)', group: 'Yumurta & Şeker Karışımı' },
      { id: 'ing-4', name: 'Yumurta sarısı (ekstra akışkan merkez için)', amount: 35, unit: 'ml', secondaryMeasure: '(2 adet)', group: 'Yumurta & Şeker Karışımı' },
      { id: 'ing-5', name: 'Toz şeker', amount: 85, unit: 'g', secondaryMeasure: '(yarım su bardağından 1 parmak fazla)', group: 'Yumurta & Şeker Karışımı' },
      { id: 'ing-6', name: 'Saf vanilya özütü', amount: 5, unit: 'ml', secondaryMeasure: '(1 tatlı kaşığı)', group: 'Yumurta & Şeker Karışımı' },
      { id: 'ing-7', name: 'Buğday unu (elenmiş)', amount: 45, unit: 'g', secondaryMeasure: '(3 silme yemek kaşığı)', group: 'Kuru Malzemeler' },
      { id: 'ing-8', name: 'Ham kakao (elenmiş)', amount: 15, unit: 'g', secondaryMeasure: '(1.5 yemek kaşığı)', group: 'Kuru Malzemeler' },
      { id: 'ing-9', name: 'Deniz tuzu', amount: 1, unit: 'g', secondaryMeasure: '(1 çimdik)', group: 'Kuru Malzemeler' },
      { id: 'ing-10', name: 'Kalıpları yağlamak için tereyağı ve kakao', amount: 15, unit: 'g', secondaryMeasure: '(10 g tereyağı + 5 g kakao)', group: 'Kalıp Hazırlığı' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Kalıpların Hazırlanması ve Fırının Isıtılması',
        description:
          'Fırınınızı önceden 200°C alt-üst ayarda ısıtmaya başlayın. 4 adet seramik sufle veya porsiyonluk lava kek kalıbının (180 ml hacimli) iç yüzeyini oda sıcaklığındaki 10 g tereyağı ile fırça yardımıyla hiç boşluk kalmayacak şekilde yağlayın. Ardından kalıplara 5 g kakaoyu serpiştirip döndürerek tüm duvarların ince bir kakao tabakasıyla kaplanmasını sağlayın; fazlasını silkeleyin.',
        tip: 'Kalıpları un yerine kakao ile kaplamak, kekinizi ters çevirdiğinizde üzerinde beyaz un lekeleri kalmasını önler ve zengin koyu çikolata rengini korur.',
        durationMinutes: 4,
        temperature: '200°C Ön Isıtma',
        image: '/images/recipes/step-baking.jpg'
      },
      {
        stepNumber: 2,
        title: 'Çikolata ve Tereyağının Benmari Usulü Eritilmesi',
        description:
          'Küçük bir sos tenceresine 3-4 cm su koyup kısık ateşte ısıtın. Üzerine tabanı suya değmeyecek şekilde ısıya dayanıklı cam veya çelik bir kase yerleştirin. 160 g ince kıyılmış bitter çikolata ve 120 g küp tereyağını kaseye alın. Spatula ile yavaşça karıştırarak pürüzsüz, parlak bir ganaj kıvamı alana dek eritin ve ocaktan alıp 3-4 dakika ılımaya bırakın.',
        tip: 'Çikolatanın sıcaklığı 55°C’yi geçmemelidir; çok sıcak çikolata bir sonraki aşamada yumurtaları pişirip kesilmesine yol açar.',
        durationMinutes: 5,
        temperature: '45°C - 50°C Benmari',
        image: '/images/recipes/step-chocolate.jpg'
      },
      {
        stepNumber: 3,
        title: 'Yumurtaların ve Şekerin Hazırlanması',
        description:
          'Geniş bir karıştırma kabına 3 tam yumurta (150 ml), 2 yumurta sarısı (35 ml), 85 g toz şeker ve 5 ml vanilya özütünü ekleyin. Mikserin orta-yüksek devrinde yaklaşık 3-4 dakika boyunca karışımın rengi açılıp hacmi iki katına çıkana ve hafif köpüksü-kremsi bir doku kazanana kadar çırpın.',
        tip: 'Yumurtaları aşırı sert mereng gibi çırpmayın; amacımız şekerin tamamen erimesi ve kekin dış kabuğunu tutacak ince hava kabarcıklarının oluşmasıdır.',
        durationMinutes: 4,
        image: '/images/recipes/step-whisking.jpg'
      },
      {
        stepNumber: 4,
        title: 'Karışımın Birleştirilmesi (Katlama Tekniği)',
        description:
          'Ilımış olan eritilmiş çikolata-tereyağı karışımını, çırpılmış yumurtalı karışıma ince bir akışla ekleyin ve silikon spatula ile alttan üste doğru nazikçe katlayarak homojenleştirin. Ardından 45 g elenmiş un, 15 g kakao ve 1 g deniz tuzunu eleyerek ilave edin. Sadece un topakları kaybolana kadar spatula ile 15-20 saniye katlayın.',
        tip: 'Un eklendikten sonra mikser kullanmayın veya fazla karıştırmayın; aksi halde gluten aktifleşir ve lava kekin içi akışkan olmak yerine süngerimsi keke dönüşür.',
        durationMinutes: 2,
        image: '/images/recipes/step-batter.jpg'
      },
      {
        stepNumber: 5,
        title: 'Kalıpların Doldurulması ve Pişirme Aşaması',
        description:
          'Hazırladığınız parlak harcı 4 kalıba eşit şekilde (üstten yaklaşık 1 cm pay kalacak biçimde) paylaştırın. Önceden tam 200°C’ye ısınmış fırının orta rafına sürün ve 10 ile 12 dakika arasında pişirin. Keklerin kenarları sabitlenip matlaşmalı, ancak orta kısmı kalıbı hafifçe salladığınızda jöle gibi titremelidir. Fırından çıkarıp yalnızca 60 saniye dinlendirin, kenarlarını ince bir bıçakla gevşetip servis tabağına ters çevirin.',
        tip: 'Dışının pişmiş, içinin akışkan olması için altın kural: Fırından çıktıktan sonra kalıpta 1 dakikadan fazla bekletmeyin; sıcak seramik kalıp içteki çikolatayı pişirmeye devam eder!',
        durationMinutes: 12,
        temperature: '200°C / 10-12 Dk',
        image: '/images/recipes/lava-kek.jpg'
      }
    ],
    proTips: [
      'Gerçek kakao yağı içeren %60-%70 kakao oranlı kuvertür veya kaliteli bitter çikolata kullanın; kokolin (fildişi/pastacılık kaplama) çikolatalar istediğiniz akışkanlığı vermez.',
      'Kalıplarınızı harçla doldurduktan sonra streç filmle kapatıp buzdolabında 24 saate kadar bekletebilirsiniz. Dolaptan çıkan soğuk kalıpları pişirirken süreyi sadece +1.5 dakika (toplam 12-13 dk) uzatmanız yeterlidir.',
      'Kekin dışının pişmiş, içinin akışkan olması için fırınınızın önceden tam 200°C’ye ulaşmış olması şarttır; soğuk veya 170°C fırına koyarsanız dışı kabuk bağlamadan içi tamamen pişer.',
      'Ters çevirmeden önce servis tabağını kalıbın üzerine kapatıp tek ve kararlı bir hareketle çevirin, 10 saniye bekleyip kalıbı yukarı kaldırın.'
    ],
    commonMistakes: [
      'Fırında 13-14 dakikadan fazla tutmak: Lava kekin akışkan merkezi hızla katılaşır ve normal kakaolu muffin dokusuna döner.',
      'Çikolatayı çok sıcakken yumurtaya dökmek: Yumurtalar anında pıhtılaşır ve harçta pütürlü bir doku oluşur.',
      'Fırından çıkınca kalıpta 5-10 dakika bekletmek: Seramik kalıplar ısıyı tuttuğu için kek kalıp içinde pişmeye devam eder.',
      'Kalıbın taban ve kenarlarını eksik yağlamak: Ters çevirirken kekin yan duvarları kalıba yapışır ve lava merkezi tabağa geçmeden dağılır.'
    ],
    substitutions: [
      {
        original: 'Buğday Unu (45 g)',
        alternative: 'Glutensiz Yulaf Unu veya Badem Unu (45 g)',
        note: 'Lava kek çok az un içerdiği için glutensiz unlarla birebir ölçüde mükemmel sonuç verir.'
      },
      {
        original: 'Bitter Çikolata (160 g)',
        alternative: '110 g Bitter + 50 g Sütlü Çikolata',
        note: 'Daha yumuşak ve tatlı bir çikolata aroması sevenler için şeker miktarını 70 grama düşürerek uygulanabilir.'
      },
      {
        original: 'Tereyağı (120 g)',
        alternative: 'Hindistan Cevizi Yağı (110 g)',
        note: 'Süt ürünü tüketmeyenler için hafif egzotik aromalı harika bir alternatiftir.'
      }
    ],
    storageTips:
      'Pişmemiş lava kek harcını yağlanmış kalıplarda üzeri kapalı olarak buzdolabında 2 gün, derin dondurucuda 1 ay saklayabilirsiniz. Pişmiş lava kek ise en iyi sıcak servis edilir; artan kekleri hava geçirmez kapta buzdolabında 2 gün tutabilir, servis öncesi mikrodalgada 20 saniye ısıtabilirsiniz.',
    servingSuggestions: [
      'Üzerine ince bir süzgeçle pudra şekeri serpiştirin ve taze frambuaz, çilek ve nane yaprağı ile renk kontrastı oluşturun.',
      'Sıcak kekin hemen yanına 1 top gerçek Madagaskar vanilyalı dondurma veya soğuk mascarpone kreması ekleyin.',
      'Servis tabağına fırça darbesiyle frambuaz kulis (coulis) veya tuzlu karamel sos çekerek restoran sunumu yakalayın.'
    ],
    allergens: ['Gluten (Buğday)', 'Yumurta', 'Süt ve Süt Ürünleri (Tereyağı, Çikolata soya lesitini içerebilir)'],
    youtubeVideo: {
      title: 'Sıcak Çikolatalı Lava Kek / Sufle Tarifi (Yemek.com)',
      youtubeId: 'A8RMgdVmhq4',
      embedUrl: 'https://www.youtube.com/embed/A8RMgdVmhq4',
      watchUrl: 'https://www.youtube.com/watch?v=A8RMgdVmhq4',
      duration: '03:45',
      thumbnail: '/images/video-lava-ref.png'
    },
    sampleReviews: [
      {
        id: 'rev-1',
        author: 'Zeynep Kaya',
        avatarBg: '#FCE8EE',
        rating: 5,
        date: '2 gün önce',
        comment: 'Gramajlar o kadar net ki ilk denememde dış kısmı tam pişmiş, içi şelale gibi akan bir lava kek oldu! 200 derecede tam 11 dakika benim fırınımda harika çalıştı.',
        isSample: true
      },
      {
        id: 'rev-2',
        author: 'Mert Demir',
        avatarBg: '#EBF3F9',
        rating: 5,
        date: '1 hafta önce',
        comment: 'Kalıpları un yerine kakao ile kaplama püf noktası hayat kurtardı. Yanında vanilyalı dondurma ile misafirlerim pastaneden aldığımı sandı.',
        isSample: true
      },
      {
        id: 'rev-3',
        author: 'Elif Şahin',
        avatarBg: '#F3E8F6',
        rating: 5,
        date: '2 hafta önce',
        comment: 'Porsiyon hesaplayıcı ile 6 kişilik yaptım, ölçüler otomatik güncellendiği için hiç zorlanmadım. Kesinlikle favori tarifim!',
        isSample: true
      }
    ]
  },
  {
    id: 'rec-2',
    slug: 'san-sebastian-cheesecake',
    title: 'San Sebastian Cheesecake',
    shortDescription: 'İspanya’nın Bask bölgesinden dünyaya yayılan, karamelize yanık üst yüzeyi ve kremsi, akışkan iç dokusuyla büyüleyen efsane cheesecake.',
    fullDescription:
      'Tabansız yapısı, yüksek ısıda karamelize olan karakteristik üst kabuğu ve ortasındaki kadifemsi akışkan kremasıyla San Sebastian Cheesecake, ev mutfağında pastane kalitesini yakalamanın en zarif yoludur.',
    categorySlug: 'cheesecake',
    categoryName: 'Cheesecake',
    secondaryCategories: ['sutlu-tatlilar'],
    image: '/images/recipes/san-sebastian.jpg',
    prepTimeMinutes: 20,
    cookTimeMinutes: 30,
    totalTimeMinutes: 50,
    difficulty: 'Orta',
    servings: 8,
    rating: 4.9,
    reviewCount: 198,
    likesCount: 980,
    isFeatured: true,
    createdAt: '2026-10-14',
    caloriesPerServing: 385,
    bakingTemp: '230°C (Alt-Üst Fansız)',
    ingredients: [
      { id: 'ss-1', name: 'Taze sürülebilir beyaz peynir / Labne (suyu süzülmüş)', amount: 600, unit: 'g', secondaryMeasure: '(3 paket)', group: 'Peynir Bazı' },
      { id: 'ss-2', name: 'Sıvı krema (%35 yağlı)', amount: 400, unit: 'ml', secondaryMeasure: '(2 kutu)', group: 'Peynir Bazı' },
      { id: 'ss-3', name: 'Toz şeker', amount: 220, unit: 'g', secondaryMeasure: '(1.2 su bardağı)', group: 'Peynir Bazı' },
      { id: 'ss-4', name: 'Büyük boy yumurta (oda sıcaklığında)', amount: 200, unit: 'ml', secondaryMeasure: '(4 adet)', group: 'Bağlayıcılar' },
      { id: 'ss-5', name: 'Buğday unu veya mısır nişastası', amount: 30, unit: 'g', secondaryMeasure: '(2 yemek kaşığı)', group: 'Bağlayıcılar' },
      { id: 'ss-6', name: 'Saf vanilya özütü', amount: 5, unit: 'ml', secondaryMeasure: '(1 tatlı kaşığı)', group: 'Aroma' },
      { id: 'ss-7', name: 'Servis için eritilmiş Belçika çikolatası', amount: 120, unit: 'g', secondaryMeasure: '(isteğe bağlı)', group: 'Üzeri İçin' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Kalıbın Çift Kat Yağlı Kağıtla Hazırlanması',
        description: '20 cm çapındaki kelepçeli kalıbın içini ıslatıp buruşturduğunuz 2 kat pişirme kağıdı ile kenarlarından 5 cm taşacak şekilde kaplayın. Fırını 230°C’ye ısıtın.',
        durationMinutes: 5,
        image: '/images/recipes/step-baking.jpg'
      },
      {
        stepNumber: 2,
        title: 'Peynir ve Şekerin Krema Kıvamına Getirilmesi',
        description: 'Oda sıcaklığındaki 600 g peynir ve 220 g toz şekeri, mikserin en düşük devrinde veya tel çırpıcıyla hava kabarcığı oluşturmadan pürüzsüz olana dek 3 dakika karıştırın.',
        durationMinutes: 5,
        image: '/images/recipes/step-whisking.jpg'
      },
      {
        stepNumber: 3,
        title: 'Yumurta ve Kremanın Sırayla Eklenmesi',
        description: 'Yumurtaları teker teker ekleyip her birini 20 saniye karıştırın. Ardından 400 ml sıvı kremayı, vanilyayı ve elenmiş 30 g unu ilave edip pürüzsüz bir akışkan harç elde edin.',
        durationMinutes: 6,
        image: '/images/recipes/step-batter.jpg'
      },
      {
        stepNumber: 4,
        title: 'Yüksek Isıda Karamelize Pişirme ve Dinlendirme',
        description: 'Harcı kalıba dökün. 230°C fırında 26-30 dakika, üstü koyu kehribar rengi alıp ortası sallandığında dalgalanacak kıvama gelene dek pişirin. Oda sıcaklığına gelince en az 6 saat buzdolabında dinlendirin.',
        durationMinutes: 30,
        temperature: '230°C / 28 Dk',
        image: '/images/recipes/san-sebastian.jpg'
      }
    ],
    proTips: [
      'Tüm malzemeler mutlaka 2 saat önceden buzdolabından çıkarılmış ve oda sıcaklığında olmalıdır.',
      'Harcı yüksek devirde çırpmayın; içine giren fazla hava fırında aşırı kabarıp sönünce çatlamasına neden olur.',
      'Dilimlerken her seferinde bıçağınızı sıcak suya batırıp kurulayın.'
    ],
    commonMistakes: [
      'Soğuk labne kullanmak (topaklanma yapar).',
      'Ortasının sıvı görünmesinden korkup 40 dakika pişirmek (kremsi dokusunu kaybedip kuru lor peyniri gibi olur).'
    ],
    substitutions: [
      { original: 'Buğday Unu (30 g)', alternative: 'Mısır Nişastası (25 g)', note: 'Glutensiz ve daha ipeksi bir doku sağlar.' }
    ],
    storageTips: 'Buzdolabında üzeri kapalı olarak 4-5 gün tazeliğini korur. Servisten 20 dakika önce dolaptan çıkarıp sıcak çikolata sosuyla sunun.',
    servingSuggestions: ['Üzerine ılık sütlü veya bitter Belçika çikolatası gezdirin.', 'Taze çilek dilimleri ile servis edin.'],
    allergens: ['Süt ve Süt Ürünleri', 'Yumurta', 'Gluten'],
    youtubeVideo: {
      title: 'Tam Kıvamında Akışkan San Sebastian Cheesecake Tarifi',
      youtubeId: 'z0FD8er5ujQ',
      embedUrl: 'https://www.youtube.com/embed/z0FD8er5ujQ',
      watchUrl: 'https://www.youtube.com/results?search_query=san+sebastian+cheesecake+tarifi',
      duration: '05:12',
      thumbnail: '/images/recipes/san-sebastian.jpg'
    },
    sampleReviews: [
      { id: 'rev-ss-1', author: 'Selin Arslan', avatarBg: '#FAF2E6', rating: 5, date: '3 gün önce', comment: '230 derecede 28 dakika tam tuttu! Ertesi gün dolaptan çıkınca dokusu muhteşemdi.', isSample: true }
    ]
  },
  {
    id: 'rec-3',
    slug: 'tiramisu',
    title: 'Orijinal İtalyan Tiramisu',
    shortDescription: 'Gerçek mascarpone peyniri, taze demlenmiş espresso ile ıslatılmış kedidili bisküviler ve yoğun kakao katmanlarıyla klasik İtalyan lezzeti.',
    fullDescription:
      'İtalyanca "beni yukarı kaldır / neşelendir" anlamına gelen Tiramisu, doğru hazırlanmış pastörize yumurta sarılı mascarpone kreması ve sert espresso dengesiyle fırın gerektirmeyen en asil tatlılardan biridir.',
    categorySlug: 'sutlu-tatlilar',
    categoryName: 'Sütlü Tatlılar',
    secondaryCategories: ['cikolatali-tatlilar', 'pratik-tatlilar'],
    image: '/images/recipes/tiramisu.jpg',
    prepTimeMinutes: 25,
    cookTimeMinutes: 5,
    totalTimeMinutes: 30,
    difficulty: 'Kolay',
    servings: 6,
    rating: 4.8,
    reviewCount: 164,
    likesCount: 845,
    isFeatured: true,
    createdAt: '2026-10-12',
    caloriesPerServing: 360,
    ingredients: [
      { id: 'tir-1', name: 'Mascarpone peyniri (oda sıcaklığında)', amount: 500, unit: 'g', group: 'Krema İçin' },
      { id: 'tir-2', name: 'Yumurta sarısı', amount: 70, unit: 'ml', secondaryMeasure: '(4 adet)', group: 'Krema İçin' },
      { id: 'tir-3', name: 'Toz şeker', amount: 100, unit: 'g', group: 'Krema İçin' },
      { id: 'tir-4', name: 'Soğuk sıvı krema (%35 yağlı)', amount: 200, unit: 'ml', group: 'Krema İçin' },
      { id: 'tir-5', name: 'Kedidili (Savoiardi) bisküvi', amount: 200, unit: 'g', secondaryMeasure: '(24 adet)', group: 'Taban İçin' },
      { id: 'tir-6', name: 'Taze demlenmiş ve soğutulmuş sert filtre kahve / espresso', amount: 300, unit: 'ml', group: 'Kahve Şurubu' },
      { id: 'tir-7', name: 'Şekersiz ham kakao (servis öncesi)', amount: 25, unit: 'g', group: 'Üzeri İçin' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Benmari Usulü Sabayon (Yumurta & Şeker) Hazırlığı',
        description: '4 yumurta sarısı ve 100 g şekeri ısıya dayanıklı kasede benmari üzerinde sürekli çırparak 65°C’ye (şeker eriyip rengi açılana dek 4-5 dk) ısıtın ve soğumaya bırakın.',
        durationMinutes: 8,
        image: '/images/recipes/step-whisking.jpg'
      },
      {
        stepNumber: 2,
        title: 'Mascarpone ve Çırpılmış Kremanın Birleştirilmesi',
        description: '500 g mascarpone peynirini spatula ile yumuşatıp ılıyan yumurta karışımına yedirin. Ayrı kapta soğuk kremayı çırpıp karışıma alttan üste katlayın.',
        durationMinutes: 10,
        image: '/images/recipes/step-batter.jpg'
      },
      {
        stepNumber: 3,
        title: 'Kedidili Katmanlarının Dizilmesi',
        description: 'Kedidili bisküvileri soğuk espressoya yalnızca 1-2 saniye batırıp çıkarın. Borcama bir kat bisküvi, yarım ölçü krema, ikinci kat bisküvi ve kalan kremayı yayın.',
        durationMinutes: 10,
        image: '/images/recipes/tiramisu.jpg'
      },
      {
        stepNumber: 4,
        title: 'Soğutma ve Kakao Dokunuşu',
        description: 'En az 4 saat buzdolabında dinlendirin. Tam servis etmeden hemen önce üzerine ince süzgeçle bol kakao eleyin.',
        durationMinutes: 2,
        image: '/images/recipes/tiramisu.jpg'
      }
    ],
    proTips: [
      'Kedidili bisküvileri kahvede 2 saniyeden fazla tutmayın; aksi halde tatlı tabanda sulanır.',
      'Kakaoyu mutlaka servis anında eleyin, önceden elerseniz buzdolabı nemiyle ıslanır.'
    ],
    commonMistakes: ['Sıcak kahve kullanmak (bisküvileri anında hamurlaştırır ve kremayı eritir).'],
    substitutions: [
      { original: 'Mascarpone (500 g)', alternative: '400 g Süzme Labne + 100 g Kaymak', note: 'Evde mascarpone olmadığında en yakın yağ ve kıvam dengesini sağlar.' }
    ],
    storageTips: 'Buzdolabında hava almayan kapta 3 gün saklanabilir.',
    servingSuggestions: ['Üzerine ince rendelenmiş bitter çikolata bukleleri ekleyin.'],
    allergens: ['Süt ve Süt Ürünleri', 'Yumurta', 'Gluten'],
    youtubeVideo: {
      title: 'Gerçek İtalyan Tiramisu Nasıl Yapılır?',
      youtubeId: '2myJJ4-MTWc',
      embedUrl: 'https://www.youtube.com/embed/2myJJ4-MTWc',
      watchUrl: 'https://www.youtube.com/results?search_query=orijinal+tiramisu+tarifi',
      duration: '04:30',
      thumbnail: '/images/recipes/tiramisu.jpg'
    },
    sampleReviews: [
      { id: 'rev-tir-1', author: 'Burak Yılmaz', avatarBg: '#F5EDE6', rating: 5, date: '5 gün önce', comment: 'Yumurtaları benmari ile pastörize etme adımı çok güvenilir ve krema ipek gibi oldu.', isSample: true }
    ]
  },
  {
    id: 'rec-4',
    slug: 'firin-sutlac',
    title: 'Hamsiköy Usulü Fırın Sütlaç',
    shortDescription: 'Toprak güveç kaplarında fırınlanarak üzeri nar gibi kızarmış, tam kıvamında geleneksel Türk mutfağı klasiği.',
    fullDescription:
      'Tam yağlı günlük süt, kırık pirinç ve fırının üst ızgarasında oluşan karamelize kabuğuyla Hamsiköy usulü fırın sütlaç; üzerine bol kavrulmuş fındık serpildiğinde hafif ve unutulmaz bir lezzet sunar.',
    categorySlug: 'sutlu-tatlilar',
    categoryName: 'Sütlü Tatlılar',
    image: '/images/recipes/firin-sutlac.jpg',
    prepTimeMinutes: 10,
    cookTimeMinutes: 35,
    totalTimeMinutes: 45,
    difficulty: 'Kolay',
    servings: 6,
    rating: 4.9,
    reviewCount: 182,
    likesCount: 910,
    isFeatured: true,
    createdAt: '2026-10-10',
    caloriesPerServing: 275,
    bakingTemp: '220°C (Sadece Üst Izgara)',
    ingredients: [
      { id: 'fs-1', name: 'Tam yağlı günlük süt', amount: 1000, unit: 'ml', secondaryMeasure: '(5 su bardağı)', group: 'Ana Malzemeler' },
      { id: 'fs-2', name: 'Kırık veya Osmancık pirinç (yıkanmış)', amount: 90, unit: 'g', secondaryMeasure: '(yarım su bardağı)', group: 'Ana Malzemeler' },
      { id: 'fs-3', name: 'Pirinçleri haşlamak için içme suyu', amount: 400, unit: 'ml', secondaryMeasure: '(2 su bardağı)', group: 'Ana Malzemeler' },
      { id: 'fs-4', name: 'Toz şeker', amount: 180, unit: 'g', secondaryMeasure: '(1 su bardağı)', group: 'Ana Malzemeler' },
      { id: 'fs-5', name: 'Buğday nişastası', amount: 30, unit: 'g', secondaryMeasure: '(2 yemek kaşığı)', group: 'Kıvam Bağlayıcı' },
      { id: 'fs-6', name: 'Yumurta sarısı (üzerinin nar gibi kızarması için)', amount: 18, unit: 'ml', secondaryMeasure: '(1 adet)', group: 'Kıvam Bağlayıcı' },
      { id: 'fs-7', name: 'Kavrulmuş kıyılmış fındık içi', amount: 60, unit: 'g', group: 'Sunum İçin' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pirinçlerin Yumuşayana Dek Haşlanması',
        description: '90 g pirinci 400 ml su ile orta ateşte suyunu çekip pirinçler tamamen yumuşayana kadar (yaklaşık 12-15 dakika) haşlayın.',
        durationMinutes: 15,
        image: '/images/recipes/step-whisking.jpg'
      },
      {
        stepNumber: 2,
        title: 'Süt ve Nişastalı Yumurta Bağlaması',
        description: 'Haşlanan pirinçlere 900 ml sütü ve şekeri ekleyip kaynamaya bırakın. Kalan 100 ml soğuk sütte 30 g nişasta ve 1 yumurta sarısını çırpın, kaynayan sütten 1 kepçe alıp ılıştırarak tencereye ekleyin ve 5 dakika kıvam alana dek kaynatın.',
        durationMinutes: 10,
        image: '/images/recipes/step-batter.jpg'
      },
      {
        stepNumber: 3,
        title: 'Su Banyosunda Üst Izgarada Kızartma',
        description: 'Sütlacı 6 adet toprak güveç kabına paylaştırın. Güveçleri yarısına kadar soğuk su dolu derin fırın tepsisine dizin. 220°C sadece üst ızgara ayarında en üst rafa yakın olarak üzeri kızarana dek 10-12 dakika fırınlayın.',
        durationMinutes: 12,
        temperature: '220°C Üst Izgara',
        image: '/images/recipes/firin-sutlac.jpg'
      }
    ],
    proTips: [
      'Güveçleri koyduğunuz fırın tepsisine mutlaka soğuk su ekleyin; bu sayede sütlaç fırında taşmaz ve kuruyup kesilmez.',
      'Güveçleri fırına vermeden önce 5 dakika oda sıcaklığında bekletirseniz üstte ince bir kaymak tabakası oluşur ve çok daha homojen kızarır.'
    ],
    commonMistakes: ['Tepsiye su koymadan fırınlamak (sütlaç fokurdayıp taşar).'],
    substitutions: [{ original: 'Buğday Nişastası (30 g)', alternative: 'Pirinç Unu (35 g)', note: 'Daha geleneksel kıvam verir.' }],
    storageTips: 'Buzdolabında 3-4 gün saklanabilir.',
    servingSuggestions: ['Bol kavrulmuş Giresun fındığı veya toz Antep fıstığı ile soğuk servis yapın.'],
    allergens: ['Süt ve Süt Ürünleri', 'Yumurta', 'Sert Kabuklu Yemişler (Fındık)'],
    youtubeVideo: {
      title: 'Tam Kıvamında Hamsiköy Fırın Sütlaç Tarifi',
      youtubeId: 'O3wyuoEyEJ8',
      embedUrl: 'https://www.youtube.com/embed/O3wyuoEyEJ8',
      watchUrl: 'https://www.youtube.com/results?search_query=firin+sutlac+tarifi',
      duration: '04:10',
      thumbnail: '/images/recipes/firin-sutlac.jpg'
    },
    sampleReviews: [
      { id: 'rev-fs-1', author: 'Ayşe Çelik', avatarBg: '#F3E8F6', rating: 5, date: '4 gün önce', comment: 'Üzerindeki kızarmış katman tam istediğim gibi oldu!', isSample: true }
    ]
  },
  {
    id: 'rec-5',
    slug: 'cilekli-magnolia',
    title: 'İpeksi Kremasıyla Çilekli Magnolia',
    shortDescription: 'Pastacı kreması kıvamında ipeksi muhallebi, tereyağlı bisküvi kırıntıları ve taze çilek dilimleriyle 20 dakikada hazırlanan hafif kuplar.',
    fullDescription:
      'New York’un ünlü pastanesinden ilham alarak Türk mutfağının en sevilen kuplu tatlısına dönüşen Çilekli Magnolia; krema ve yumurta sarısıyla zenginleştirilmiş ipeksi muhallebisiyle hem göze hem damağa hitap eder.',
    categorySlug: 'meyveli-tatlilar',
    categoryName: 'Meyveli Tatlılar',
    secondaryCategories: ['sutlu-tatlilar', 'pratik-tatlilar'],
    image: '/images/recipes/cilekli-magnolia.jpg',
    prepTimeMinutes: 15,
    cookTimeMinutes: 10,
    totalTimeMinutes: 25,
    difficulty: 'Kolay',
    servings: 6,
    rating: 4.9,
    reviewCount: 215,
    likesCount: 1120,
    isFeatured: true,
    createdAt: '2026-10-13',
    caloriesPerServing: 295,
    ingredients: [
      { id: 'mag-1', name: 'Süt', amount: 1000, unit: 'ml', group: 'İpeksi Muhallebi' },
      { id: 'mag-2', name: 'Toz şeker', amount: 150, unit: 'g', group: 'İpeksi Muhallebi' },
      { id: 'mag-3', name: 'Buğday unu', amount: 40, unit: 'g', secondaryMeasure: '(2 dolu yemek kaşığı)', group: 'İpeksi Muhallebi' },
      { id: 'mag-4', name: 'Mısır nişastası', amount: 35, unit: 'g', secondaryMeasure: '(2 yemek kaşığı)', group: 'İpeksi Muhallebi' },
      { id: 'mag-5', name: 'Yumurta sarısı', amount: 35, unit: 'ml', secondaryMeasure: '(2 adet)', group: 'İpeksi Muhallebi' },
      { id: 'mag-6', name: 'Sıvı krema (%35 yağlı, muhallebi ılıyınca)', amount: 200, unit: 'ml', group: 'İpeksi Muhallebi' },
      { id: 'mag-7', name: 'Burçak veya bebe bisküvisi (rondodan çekilmiş)', amount: 250, unit: 'g', group: 'Katmanlar İçin' },
      { id: 'mag-8', name: 'Taze çilek (dilimlenmiş)', amount: 350, unit: 'g', group: 'Katmanlar İçin' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Muhallebi Bazının Pişirilmesi',
        description: 'Tencereye 1000 ml süt, şeker, un, nişasta ve yumurta sarılarını alıp pürüzsüz olana dek çırpın. Orta ateşte sürekli karıştırarak göz göz olup koyulaşana kadar pişirin.',
        durationMinutes: 10,
        image: '/images/recipes/step-whisking.jpg'
      },
      {
        stepNumber: 2,
        title: 'Krema ile İpeksi Kıvam Verme',
        description: 'Ocaktan alınan muhallebiyi kabuk tutmaması için ara sıra karıştırarak 15 dakika ılıtın. 200 ml sıvı kremayı ekleyip mikserle 3 dakika pürüzsüz olana dek çırpın.',
        durationMinutes: 5,
        image: '/images/recipes/step-batter.jpg'
      },
      {
        stepNumber: 3,
        title: 'Kupların Katmanlanması',
        description: 'Kupların tabanına 2 yemek kaşığı bisküvi kırıntısı koyun, kenarlarına çilek dilimlerini dizin. Ortasına magnolia kreması paylaştırıp üzerini bisküvi ve tüm çilekle süsleyin.',
        durationMinutes: 10,
        image: '/images/recipes/cilekli-magnolia.jpg'
      }
    ],
    proTips: [
      'Sıvı kremayı muhallebi kaynarken değil, ılıdıktan sonra ekleyin; böylece krema kesilmez ve pastacı kreması hafifliği kazanır.',
      'Çilekleri yıkadıktan sonra kağıt havluyla tamamen kurulayın ki kupların içinde sulanma yapmasın.'
    ],
    commonMistakes: ['Sıcak muhallebiyi hemen bisküvilerin üzerine dökmek (bisküvileri hamurlaştırır).'],
    substitutions: [{ original: 'Taze Çilek (350 g)', alternative: 'Muz ve Kivi Dilimleri (350 g)', note: 'Dört mevsim farklı meyvelerle hazırlanabilir.' }],
    storageTips: 'Buzdolabında 2-3 gün tazeliğini korur.',
    servingSuggestions: ['Üzerine beyaz çikolata rendesi veya toz Antep fıstığı serpiştirin.'],
    allergens: ['Süt ve Süt Ürünleri', 'Yumurta', 'Gluten'],
    youtubeVideo: {
      title: 'Pastane Usulü İpeksi Çilekli Magnolia Tarifi',
      youtubeId: 'UkTpTlTH-Gg',
      embedUrl: 'https://www.youtube.com/embed/UkTpTlTH-Gg',
      watchUrl: 'https://www.youtube.com/results?search_query=cilekli+magnolia+tarifi',
      duration: '03:55',
      thumbnail: '/images/recipes/cilekli-magnolia.jpg'
    },
    sampleReviews: [
      { id: 'rev-mag-1', author: 'Ceren Aydın', avatarBg: '#FCE8EE', rating: 5, date: '1 gün önce', comment: 'Kreması asla katılaşmıyor, tam pastanedeki gibi akışkan ve ipeksi!', isSample: true }
    ]
  },
  {
    id: 'rec-6',
    slug: 'islak-kek',
    title: 'Bol Soslu Brownie Tadında Islak Kek',
    shortDescription: 'Süngersi gözeneklerinden taşan parlak çikolatalı sosuyla, her dilimi nemli ve yoğun kakaolu anne usulü efsane ıslak kek.',
    fullDescription:
      'Çay saatlerinin tartışmasız yıldızı olan Islak Kek; gerçek bitter çikolata ile zenginleştirilmiş parlak sosunu sünger gibi çekerek brownie lezzetinde yumuşacık bir deneyim sunar.',
    categorySlug: 'kekler',
    categoryName: 'Kekler',
    secondaryCategories: ['cikolatali-tatlilar'],
    image: '/images/recipes/islak-kek.jpg',
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    totalTimeMinutes: 45,
    difficulty: 'Kolay',
    servings: 12,
    rating: 4.9,
    reviewCount: 310,
    likesCount: 1450,
    isFeatured: true,
    createdAt: '2026-10-11',
    caloriesPerServing: 340,
    bakingTemp: '180°C (Alt-Üst)',
    ingredients: [
      { id: 'ik-1', name: 'Yumurta (oda sıcaklığında)', amount: 200, unit: 'ml', secondaryMeasure: '(4 adet)', group: 'Kek Harcı' },
      { id: 'ik-2', name: 'Toz şeker', amount: 200, unit: 'g', secondaryMeasure: '(1 su bardağı)', group: 'Kek Harcı' },
      { id: 'ik-3', name: 'Süt', amount: 200, unit: 'ml', secondaryMeasure: '(1 su bardağı)', group: 'Kek Harcı' },
      { id: 'ik-4', name: 'Ayçiçek yağı', amount: 180, unit: 'ml', secondaryMeasure: '(1 su bardağından 1 parmak eksik)', group: 'Kek Harcı' },
      { id: 'ik-5', name: 'Ham kakao', amount: 40, unit: 'g', secondaryMeasure: '(3 yemek kaşığı)', group: 'Kek Harcı' },
      { id: 'ik-6', name: 'Buğday unu', amount: 180, unit: 'g', secondaryMeasure: '(1.5 su bardağı)', group: 'Kek Harcı' },
      { id: 'ik-7', name: 'Kabartma tozu ve vanilin', amount: 15, unit: 'g', secondaryMeasure: '(1’er paket)', group: 'Kek Harcı' },
      { id: 'ik-8', name: 'Sos için süt', amount: 400, unit: 'ml', secondaryMeasure: '(2 su bardağı)', group: 'Parlak Çikolata Sosu' },
      { id: 'ik-9', name: 'Sos için toz şeker', amount: 130, unit: 'g', group: 'Parlak Çikolata Sosu' },
      { id: 'ik-10', name: 'Sos için sıvı yağ', amount: 80, unit: 'ml', group: 'Parlak Çikolata Sosu' },
      { id: 'ik-11', name: 'Sos için kakao ve bitter çikolata', amount: 90, unit: 'g', secondaryMeasure: '(30 g kakao + 60 g bitter çikolata)', group: 'Parlak Çikolata Sosu' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Kek Harcının Hazırlanması ve Pişirilmesi',
        description: 'Yumurta ve şekeri 4 dakika köpürene dek çırpın. Süt ve yağı ekleyin. Elenmiş un, kakao, kabartma tozu ve vanilini katıp yağlanmış dikdörtgen borcamda 180°C’de 30 dakika pişirin.',
        durationMinutes: 30,
        temperature: '180°C',
        image: '/images/recipes/step-baking.jpg'
      },
      {
        stepNumber: 2,
        title: 'Parlak Çikolatalı Sosun Pişirilmesi',
        description: 'Süt, şeker, yağ ve kakaoyu sos tenceresinde bir taşım kaynatın. Ocaktan alıp içine 60 g bitter çikolatayı ekleyin ve eriyene kadar karıştırın.',
        durationMinutes: 8,
        image: '/images/recipes/step-chocolate.jpg'
      },
      {
        stepNumber: 3,
        title: 'Dilimleme ve Sosla Buluşturma',
        description: 'Fırından çıkan keki 5 dakika dinlendirip dilimleyin ve kürdanla delikler açın. Ilık kekin üzerine sıcak sosu her yerine eşit gelecek şekilde gezdirin.',
        durationMinutes: 5,
        image: '/images/recipes/islak-kek.jpg'
      }
    ],
    proTips: [
      'Kek harcından sosu ayırmak yerine sosu çiğ yumurta olmadan ayrı pişirmek hem hijyeniktir hem de keki asla yumurta kokutmaz!',
      'Kek ılık, sos sıcak olmalı; dilimledikten sonra sosu dökerseniz her dilimin içi eşit ıslanır.'
    ],
    commonMistakes: ['Keki dilimlemeden sosu dökmek (sos sadece üstte kalır, tabana inmez).'],
    substitutions: [{ original: 'Ayçiçek Yağı (80 ml sos için)', alternative: 'Tereyağı (60 g)', note: 'Sosa ekstra parlaklık ve lezzet katar.' }],
    storageTips: 'Buzdolabında üzeri kapalı olarak 4 gün boyunca nemini kaybetmeden saklanır.',
    servingSuggestions: ['Üzerine vişne taneleri veya Hindistan cevizi serperek servis edin.'],
    allergens: ['Gluten', 'Yumurta', 'Süt ve Süt Ürünleri'],
    youtubeVideo: {
      title: 'Yumurta Kokmayan Bol Soslu Islak Kek Tarifi',
      youtubeId: 'y3GQoKHTfd0',
      embedUrl: 'https://www.youtube.com/embed/y3GQoKHTfd0',
      watchUrl: 'https://www.youtube.com/results?search_query=bol+soslu+islak+kek+tarifi',
      duration: '04:05',
      thumbnail: '/images/recipes/islak-kek.jpg'
    },
    sampleReviews: [
      { id: 'rev-ik-1', author: 'Fatma Yıldız', avatarBg: '#FCE8EE', rating: 5, date: '2 gün önce', comment: 'Sosun içine bitter çikolata eklemek lezzeti bambaşka bir seviyeye taşımış.', isSample: true }
    ]
  },
  {
    id: 'rec-7',
    slug: 'cikolatali-brownie',
    title: 'Üstü Çatlak İçi Nemli Belçika Çikolatalı Brownie',
    shortDescription: 'Kağıt gibi ince ve parlak üst kabuğu, yoğun bitter çikolatalı nemli (fudgy) iç dokusuyla gerçek Amerikan brownie deneyimi.',
    fullDescription:
      'Kabartma tozu kullanılmadan, yüksek çikolata oranı ve yumurta-şeker çırpma tekniğiyle hazırlanan bu tarif; üstündeki ikonik parlak zar kabuğu ve nemli iç dokusuyla çikolata tutkunlarının vazgeçilmezidir.',
    categorySlug: 'cikolatali-tatlilar',
    categoryName: 'Çikolatalı Tatlılar',
    secondaryCategories: ['kekler'],
    image: '/images/recipes/brownie.jpg',
    prepTimeMinutes: 15,
    cookTimeMinutes: 25,
    totalTimeMinutes: 40,
    difficulty: 'Kolay',
    servings: 9,
    rating: 4.9,
    reviewCount: 176,
    likesCount: 930,
    isFeatured: true,
    createdAt: '2026-10-09',
    caloriesPerServing: 390,
    bakingTemp: '170°C (Alt-Üst Fansız)',
    ingredients: [
      { id: 'br-1', name: 'Bitter çikolata (%70 kakao)', amount: 200, unit: 'g', group: 'Çikolata Bazı' },
      { id: 'br-2', name: 'Tereyağı', amount: 150, unit: 'g', group: 'Çikolata Bazı' },
      { id: 'br-3', name: 'Yumurta (oda sıcaklığında)', amount: 150, unit: 'ml', secondaryMeasure: '(3 adet)', group: 'Hacim Bazı' },
      { id: 'br-4', name: 'Toz şeker (tercihen yarısı esmer şeker)', amount: 180, unit: 'g', group: 'Hacim Bazı' },
      { id: 'br-5', name: 'Buğday unu', amount: 75, unit: 'g', secondaryMeasure: '(yarım su bardağından biraz fazla)', group: 'Kuru Malzemeler' },
      { id: 'br-6', name: 'Kakao', amount: 20, unit: 'g', group: 'Kuru Malzemeler' },
      { id: 'br-7', name: 'Beyaz çikolata ve frambuaz (üzeri için)', amount: 80, unit: 'g', group: 'Üzeri İçin' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Tereyağı ve Çikolatanın Eritilmesi',
        description: '150 g tereyağı ve 200 g bitter çikolatayı benmari usulü eritip ılımaya bırakın.',
        durationMinutes: 5,
        image: '/images/recipes/step-chocolate.jpg'
      },
      {
        stepNumber: 2,
        title: 'Parlak Kabuk İçin Yumurta ve Şekerin Çırpılması',
        description: '3 yumurta ve 180 g şekeri tam 5 dakika boyunca şeker tamamen eriyip açık sarı krema olana dek çırpın. Üstteki tül gibi parlak kabuğun sırrı bu adımdadır.',
        durationMinutes: 5,
        image: '/images/recipes/step-whisking.jpg'
      },
      {
        stepNumber: 3,
        title: 'Katlama ve 170°C’de Pişirme',
        description: 'Ilık çikolatayı, ardından elenmiş 75 g un ve 20 g kakaoyu spatula ile katlayın. 20x20 cm kare kalıpta 170°C’de 24-26 dakika pişirin.',
        durationMinutes: 25,
        temperature: '170°C',
        image: '/images/recipes/brownie.jpg'
      }
    ],
    proTips: [
      'Brownie’de kesinlikle kabartma tozu kullanmayın; amacımız kabaran bir kek değil yoğun ve nemli (fudgy) bir dokudur.',
      'Fırının orta kısmına batırdığınız kürdan hafif nemli kırıntılarla çıkmalıdır; tertemiz çıkarsa fazla pişmiş demektir.'
    ],
    commonMistakes: ['Fazla un eklemek ve 30 dakikadan uzun pişirmek.'],
    substitutions: [{ original: 'Beyaz Çikolata (80 g)', alternative: 'Ceviz İçi veya Fındık (80 g)', note: 'Klasik cevizli brownie dokusu sağlar.' }],
    storageTips: 'Oda sıcaklığında hava geçirmez kapta 4 gün nemini korur.',
    servingSuggestions: ['Hafif ılıkken üzerine tuzlu karamel gezdirerek servis edin.'],
    allergens: ['Gluten', 'Yumurta', 'Süt ve Süt Ürünleri'],
    youtubeVideo: {
      title: 'Üstü Parlak Kabuklu Gerçek Fudgy Brownie Tarifi',
      youtubeId: 'Ry5UknvPPkE',
      embedUrl: 'https://www.youtube.com/embed/Ry5UknvPPkE',
      watchUrl: 'https://www.youtube.com/results?search_query=gercek+brownie+tarifi',
      duration: '04:45',
      thumbnail: '/images/recipes/brownie.jpg'
    },
    sampleReviews: [
      { id: 'rev-br-1', author: 'Kaan Özkan', avatarBg: '#F5EDE6', rating: 5, date: '6 gün önce', comment: 'Üstündeki ince parlak zar kabuk birebir oluştu!', isSample: true }
    ]
  },
  {
    id: 'rec-8',
    slug: 'profiterol',
    title: 'Pastane Usulü Çikolata Şelaleli Profiterol',
    shortDescription: 'İçi boş kabaran altın sarısı pâte à choux (şu) hamuru topları, vanilyalı pastacı kreması dolgusu ve yoğun bitter çikolata sosu.',
    fullDescription:
      'Fransız mutfağının zarif şu hamuru toplarının vanilyalı pastacı kremasıyla doldurulup üzerine parlak bitter çikolata sosu dökülmesiyle hazırlanan, sönmeyen tam ölçülü profiterol tarifi.',
    categorySlug: 'cikolatali-tatlilar',
    categoryName: 'Çikolatalı Tatlılar',
    secondaryCategories: ['sutlu-tatlilar'],
    image: '/images/recipes/profiterol.jpg',
    prepTimeMinutes: 30,
    cookTimeMinutes: 35,
    totalTimeMinutes: 65,
    difficulty: 'Orta',
    servings: 8,
    rating: 4.8,
    reviewCount: 145,
    likesCount: 790,
    isFeatured: true,
    createdAt: '2026-10-08',
    caloriesPerServing: 370,
    bakingTemp: '190°C (Alt-Üst Fansız)',
    ingredients: [
      { id: 'pr-1', name: 'İçme suyu (şu hamuru için)', amount: 200, unit: 'ml', group: 'Şu Hamuru (Pâte à Choux)' },
      { id: 'pr-2', name: 'Tereyağı', amount: 100, unit: 'g', group: 'Şu Hamuru (Pâte à Choux)' },
      { id: 'pr-3', name: 'Buğday unu', amount: 130, unit: 'g', group: 'Şu Hamuru (Pâte à Choux)' },
      { id: 'pr-4', name: 'Yumurta (oda sıcaklığında, tek tek eklenecek)', amount: 200, unit: 'ml', secondaryMeasure: '(4 adet orta boy)', group: 'Şu Hamuru (Pâte à Choux)' },
      { id: 'pr-5', name: 'Pastacı kreması için süt', amount: 500, unit: 'ml', group: 'İç Krema' },
      { id: 'pr-6', name: 'Toz şeker, un ve nişasta karışımı', amount: 160, unit: 'g', secondaryMeasure: '(100 g şeker + 35 g un + 25 g nişasta)', group: 'İç Krema' },
      { id: 'pr-7', name: 'Çikolata sosu için krema ve bitter çikolata', amount: 360, unit: 'g', secondaryMeasure: '(200 ml krema + 160 g bitter çikolata)', group: 'Çikolata Sosu' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Şu Hamurunun Pişirilmesi ve Soğutulması',
        description: 'Su ve tereyağını kaynatın. Unu tek seferde ekleyip tahta kaşıkla 2-3 dakika helva gibi toparlanana dek kavurun ve hamuru 10 dakika ılımaya bırakın.',
        durationMinutes: 12,
        image: '/images/recipes/step-batter.jpg'
      },
      {
        stepNumber: 2,
        title: 'Yumurtaların Teker Teker Yedirilmesi ve Fırınlama',
        description: 'Ilıyan hamura 4 yumurtayı teker teker kırıp her birini tamamen yedirin. Sıkma torbasıyla tepsiye ceviz büyüklüğünde sıkıp 190°C’de 30-35 dakika fırın kapağını hiç açmadan pişirin.',
        durationMinutes: 35,
        temperature: '190°C',
        image: '/images/recipes/step-baking.jpg'
      },
      {
        stepNumber: 3,
        title: 'Krema Dolgusu ve Ganaj Sosla Servis',
        description: 'Soğuyan profiterol toplarının altından krema sıkın ve üzerine ılık çikolatalı ganaj sos gezdirin.',
        durationMinutes: 15,
        image: '/images/recipes/profiterol.jpg'
      }
    ],
    proTips: [
      'İlk 25 dakika fırın kapağını kesinlikle açmayın; içeri giren soğuk hava kabaran hamurları anında söndürür.',
      'Pişme bitince fırını kapatıp kapağını hafif aralayın ve topları 10 dakika fırın içinde kurutun.'
    ],
    commonMistakes: ['Yumurtaları hamur çok sıcakken kırmak (yumurtalar pişer ve hamur kabarmaz).'],
    substitutions: [{ original: 'Su (200 ml)', alternative: '100 ml Su + 100 ml Süt', note: 'Kabuğun daha kızarmış ve yumuşak olmasını sağlar.' }],
    storageTips: 'Buzdolabında 2-3 gün saklanabilir. Boş pişmiş topları dondurucuda 1 ay tutabilirsiniz.',
    servingSuggestions: ['Üzerine toz Antep fıstığı veya file badem serpiştirin.'],
    allergens: ['Gluten', 'Yumurta', 'Süt ve Süt Ürünleri'],
    youtubeVideo: {
      title: 'Sönmeyen Tam Ölçülü Pastane Profiterolü Tarifi',
      youtubeId: 'Zz3iaw8d1_4',
      embedUrl: 'https://www.youtube.com/embed/Zz3iaw8d1_4',
      watchUrl: 'https://www.youtube.com/results?search_query=pastane+usulu+profiterol+tarifi',
      duration: '06:20',
      thumbnail: '/images/recipes/profiterol.jpg'
    },
    sampleReviews: [
      { id: 'rev-pr-1', author: 'Deniz Aksoy', avatarBg: '#EBF3F9', rating: 5, date: '1 hafta önce', comment: 'Toplar balon gibi kabardı ve içi tamamen boş oldu, harika tarif!', isSample: true }
    ]
  },
  {
    id: 'rec-9',
    slug: 'baklava',
    title: 'Gaziantep Usulü Çıtır Fıstıklı Ev Baklavası',
    shortDescription: 'İncecik açılmış 40 kat çıtır yufka, bol boz Antep fıstığı, sade tereyağı kokusu ve şekerlenmeyen tam kıvamında şerbetiyle geleneksel başyapıt.',
    fullDescription:
      'Geleneksel Türk mutfağının tacı olan fıstıklı baklava; köpüğü alınmış saf tereyağı ve limonlu-kıvamlı sıcak şerbetiyle her ısırıkta hışırtı sesi veren gerçek bir ustalık tarifidir.',
    categorySlug: 'serbetli-tatlilar',
    categoryName: 'Şerbetli Tatlılar',
    image: '/images/recipes/baklava.jpg',
    prepTimeMinutes: 60,
    cookTimeMinutes: 45,
    totalTimeMinutes: 105,
    difficulty: 'Zor',
    servings: 16,
    rating: 4.9,
    reviewCount: 205,
    likesCount: 1180,
    isFeatured: true,
    createdAt: '2026-10-07',
    caloriesPerServing: 440,
    bakingTemp: '170°C (Alt-Üst)',
    ingredients: [
      { id: 'bk-1', name: 'Baklavalık sert buğday unu', amount: 500, unit: 'g', group: 'Hamur İçin' },
      { id: 'bk-2', name: 'Yumurta (2 adet) + süt ve sıvı yağ karışımı', amount: 220, unit: 'ml', group: 'Hamur İçin' },
      { id: 'bk-3', name: 'Üzüm sirkesi (çıtırlık için)', amount: 15, unit: 'ml', secondaryMeasure: '(1 yemek kaşığı)', group: 'Hamur İçin' },
      { id: 'bk-4', name: 'Yufkaları açmak için buğday nişastası', amount: 250, unit: 'g', group: 'Açmak İçin' },
      { id: 'bk-5', name: 'Köpüğü alınmış sade tereyağı (eritilmiş)', amount: 250, unit: 'g', group: 'Yağlama ve İç' },
      { id: 'bk-6', name: 'İri çekilmiş boz Antep fıstığı içi', amount: 300, unit: 'g', group: 'Yağlama ve İç' },
      { id: 'bk-7', name: 'Şerbet için toz şeker', amount: 600, unit: 'g', secondaryMeasure: '(3.5 su bardağı)', group: 'Şerbet İçin' },
      { id: 'bk-8', name: 'Şerbet için su ve taze limon suyu', amount: 600, unit: 'ml', secondaryMeasure: '(3 su bardağı su + 10 ml limon)', group: 'Şerbet İçin' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Hamurun Yoğrulması ve Nişasta ile İnce Açılması',
        description: 'Un, yumurta, süt, yağ ve sirkeyle kulak memesinden biraz sert bir hamur yoğurun. 40 küçük bezeye ayırıp bol buğday nişastasıyla zar inceliğinde açın.',
        durationMinutes: 45,
        image: '/images/recipes/step-whisking.jpg'
      },
      {
        stepNumber: 2,
        title: 'Fıstık Katmanı, Dilimleme ve Sade Tereyağı',
        description: '20 kat yufkayı tepsiye serip ortasına 300 g Antep fıstığını yayın. Kalan 20 katı dizip baklava dilimi kesin ve köpüğü alınmış ılık tereyağını gezdirip 170°C’de 45 dakika altın sarısı olana dek pişirin.',
        durationMinutes: 45,
        temperature: '170°C',
        image: '/images/recipes/step-baking.jpg'
      },
      {
        stepNumber: 3,
        title: 'Sıcak Baklavaya Kıvamlı Sıcak Şerbet Dökülmesi',
        description: '20 dakika kaynatılıp kıvam almış sıcak şerbeti, fırından yeni çıkmış sıcak baklavanın üzerine kepçeyle gezdirin (cızırdayan ses çıtırlığın işaretidir).',
        durationMinutes: 15,
        image: '/images/recipes/baklava.jpg'
      }
    ],
    proTips: [
      'Tereyağını eritirken üzerindeki beyaz süt köpüklerini mutlaka kaşıkla alın; aksi halde fırında siyah yanık noktalar oluşturur.',
      'Yufkaları mısır nişastası yerine mutlaka buğday nişastasıyla açın.'
    ],
    commonMistakes: ['Şerbeti yeterince kaynatmadan sulu dökmek (baklavayı hamurlaştırır).'],
    substitutions: [{ original: 'Antep Fıstığı (300 g)', alternative: 'Ceviz İçi (300 g)', note: 'Ev baklavasında klasik cevizli alternatif.' }],
    storageTips: 'Buzdolabına koymayın (şerbeti şekerlenir); serin ve kuru oda sıcaklığında 1 hafta çıtırlığını korur.',
    servingSuggestions: ['Yanında kesme Maraş dondurması veya manda kaymağı ile servis edin.'],
    allergens: ['Gluten', 'Yumurta', 'Süt ve Süt Ürünleri', 'Sert Kabuklu Yemişler (Antep Fıstığı)'],
    youtubeVideo: {
      title: 'Çıtır Çıtır 40 Kat Ev Baklavası ve Şerbet Püf Noktaları',
      youtubeId: 'Ehf8igYTJVk',
      embedUrl: 'https://www.youtube.com/embed/Ehf8igYTJVk',
      watchUrl: 'https://www.youtube.com/results?search_query=fistikli+ev+baklavasi+tarifi',
      duration: '08:15',
      thumbnail: '/images/recipes/baklava.jpg'
    },
    sampleReviews: [
      { id: 'rev-bk-1', author: 'Hakan Güler', avatarBg: '#FBF0E4', rating: 5, date: '1 hafta önce', comment: 'Tereyağının köpüğünü alma detayı sayesinde yüzeyi altın gibi parladı.', isSample: true }
    ]
  },
  {
    id: 'rec-10',
    slug: 'lotus-cheesecake',
    title: 'Karamelize Bisküvili Lotus Cheesecake',
    shortDescription: 'Tarçınlı ve karamelize Biscoff bisküvi tabanı, kadifemsi peynir dolgusu ve üzerinde parlak Lotus ezmesi katmanıyla modern pastane favorisi.',
    fullDescription:
      'Karamel ve baharat notalarıyla öne çıkan Lotus Biscoff bisküvilerinin hem tabanda hem de üst sos katmanında kullanıldığı, çatlamayan su banyolu pişirme tekniğiyle hazırlanan lüks bir cheesecake.',
    categorySlug: 'cheesecake',
    categoryName: 'Cheesecake',
    image: '/images/recipes/lotus-cheesecake.jpg',
    prepTimeMinutes: 25,
    cookTimeMinutes: 50,
    totalTimeMinutes: 75,
    difficulty: 'Orta',
    servings: 10,
    rating: 4.9,
    reviewCount: 156,
    likesCount: 870,
    isFeatured: true,
    createdAt: '2026-10-06',
    caloriesPerServing: 430,
    bakingTemp: '160°C (Alt-Üst Fansız)',
    ingredients: [
      { id: 'lc-1', name: 'Karamelize Lotus Biscoff bisküvi', amount: 250, unit: 'g', group: 'Bisküvi Tabanı' },
      { id: 'lc-2', name: 'Eritilmiş tereyağı', amount: 90, unit: 'g', group: 'Bisküvi Tabanı' },
      { id: 'lc-3', name: 'Labne / krem peynir (suyu süzülmüş)', amount: 600, unit: 'g', group: 'Peynir Kreması' },
      { id: 'lc-4', name: 'Sıvı krema', amount: 200, unit: 'ml', group: 'Peynir Kreması' },
      { id: 'lc-5', name: 'Toz şeker', amount: 150, unit: 'g', group: 'Peynir Kreması' },
      { id: 'lc-6', name: 'Yumurta (3 adet) + mısır nişastası (25 g)', amount: 175, unit: 'g', group: 'Peynir Kreması' },
      { id: 'lc-7', name: 'Lotus Biscoff sürülebilir bisküvi kreması (benmari eritilmiş)', amount: 220, unit: 'g', group: 'Üst Katman' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Bisküvi Tabanının Sıkıştırılması',
        description: 'Rondodan çekilen 250 g bisküvi ve 90 g eritilmiş tereyağını karıştırıp kelepçeli kalıbın tabanına bardak arkasıyla bastırarak yayın, buzdolabında 15 dakika soğutun.',
        durationMinutes: 15,
        image: '/images/recipes/step-baking.jpg'
      },
      {
        stepNumber: 2,
        title: 'Peynir Harcının Su Banyosunda Pişirilmesi',
        description: 'Labne, krema, şeker, nişasta ve yumurtaları düşük devirde karıştırıp tabanın üzerine dökün. Fırın tabanına bir kase sıcak su koyarak 160°C’de 50 dakika pişirin.',
        durationMinutes: 50,
        temperature: '160°C',
        image: '/images/recipes/step-batter.jpg'
      },
      {
        stepNumber: 3,
        title: 'Eritilmiş Lotus Kreması ile Kaplama',
        description: 'Oda sıcaklığına gelen cheesecake’in üzerine benmari usulü akışkanlaştırılmış 220 g Lotus kremasını döküp yayın ve kenarlarını bisküvi kırıntısıyla süsleyin.',
        durationMinutes: 10,
        image: '/images/recipes/lotus-cheesecake.jpg'
      }
    ],
    proTips: [
      'Fırının tabanına ısıya dayanıklı bir kapla sıcak su koymak cheesecake yüzeyinin çatlamasını %100 önler.',
      'Lotus kremasını kavanozuyla sıcak su dolu kasede 5 dakika bekletirseniz ayna gibi pürüzsüz yayılır.'
    ],
    commonMistakes: ['Sıcak cheesecake üzerine Lotus kreması dökmek (yüzeyi eritir).'],
    substitutions: [{ original: 'Lotus Kreması (220 g)', alternative: 'Tuzlu Karamel Sos (200 ml)', note: 'Ev yapımı karamel sosla da harika uyum sağlar.' }],
    storageTips: 'Buzdolabında 5 gün tazeliğini korur.',
    servingSuggestions: ['Üzerine bütün bir Lotus bisküvisi dik olarak yerleştirip servis edin.'],
    allergens: ['Gluten', 'Süt ve Süt Ürünleri', 'Yumurta', 'Soya'],
    youtubeVideo: {
      title: 'Çatlamayan Tam Ölçülü Lotus Cheesecake Tarifi',
      youtubeId: '_-66ef2TH6s',
      embedUrl: 'https://www.youtube.com/embed/_-66ef2TH6s',
      watchUrl: 'https://www.youtube.com/results?search_query=lotus+cheesecake+tarifi',
      duration: '05:40',
      thumbnail: '/images/recipes/lotus-cheesecake.jpg'
    },
    sampleReviews: [
      { id: 'rev-lc-1', author: 'Melis Korkmaz', avatarBg: '#FAF2E6', rating: 5, date: '3 gün önce', comment: 'Hiç çatlamadı ve üstündeki karamelize bisküvi katmanı efsane oldu!', isSample: true }
    ]
  },
  {
    id: 'rec-11',
    slug: 'elmali-kurabiye',
    title: 'Kıyır Kıyır Tarçınlı ve Cevizli Elmalı Kurabiye',
    shortDescription: 'Ağızda dağılan tereyağlı kıyır hamuru, karamelize tarçınlı-cevizli elma dolgusu ve kar beyazı pudra şekeri örtüsüyle mutfağı saran nostaljik koku.',
    fullDescription:
      'Pişerken tüm evi tarçın ve tereyağı kokusuyla saran Elmalı Kurabiye; yumuşamayan özel hamur formülü ve suyunu tamamen çekmiş elmalı iç harcıyla günlerce kıyırlığını korur.',
    categorySlug: 'kurabiyeler',
    categoryName: 'Kurabiyeler',
     secondaryCategories: ['meyveli-tatlilar'],
    image: '/images/recipes/elmali-kurabiye.jpg',
    prepTimeMinutes: 25,
    cookTimeMinutes: 20,
    totalTimeMinutes: 45,
    difficulty: 'Kolay',
    servings: 10,
    rating: 4.9,
    reviewCount: 240,
    likesCount: 1050,
    isFeatured: true,
    createdAt: '2026-10-05',
    caloriesPerServing: 260,
    bakingTemp: '175°C (Alt-Üst)',
    ingredients: [
      { id: 'ek-1', name: 'Tereyağı (oda sıcaklığında yumuşamış)', amount: 200, unit: 'g', group: 'Kıyır Hamur' },
      { id: 'ek-2', name: 'Yoğurt (susuz kısmı) ve sıvı yağ', amount: 60, unit: 'ml', secondaryMeasure: '(1 yemek kaşığı yoğurt + 40 ml yağ)', group: 'Kıyır Hamur' },
      { id: 'ek-3', name: 'Pudra şekeri (hamur için) ve nişasta', amount: 80, unit: 'g', secondaryMeasure: '(50 g pudra şekeri + 30 g nişasta)', group: 'Kıyır Hamur' },
      { id: 'ek-4', name: 'Buğday unu', amount: 380, unit: 'g', secondaryMeasure: '(3.5 su bardağı kontrollü)', group: 'Kıyır Hamur' },
      { id: 'ek-5', name: 'Tatlı kırmızı elma (rendelenmiş)', amount: 450, unit: 'g', secondaryMeasure: '(4 adet orta boy)', group: 'Elmalı İç Harç' },
      { id: 'ek-6', name: 'Toz şeker ve toz tarçın', amount: 75, unit: 'g', secondaryMeasure: '(65 g şeker + 10 g tarçın)', group: 'Elmalı İç Harç' },
      { id: 'ek-7', name: 'İri kıyılmış ceviz içi', amount: 80, unit: 'g', group: 'Elmalı İç Harç' },
      { id: 'ek-8', name: 'Üzeri için pudra şekeri', amount: 40, unit: 'g', group: 'Servis İçin' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Elmalı Harcın Suyunu Çekene Dek Pişirilmesi',
        description: 'Rendelenmiş elmaları ve şekeri tavada suyunu salıp tamamen çekene kadar kavurun. Ocaktan alıp tarçın ve cevizi ekleyin, tamamen soğumaya bırakın.',
        durationMinutes: 10,
        image: '/images/recipes/step-whisking.jpg'
      },
      {
        stepNumber: 2,
        title: 'Kıyır Hamurun Yoğrulması ve Şekil Verilmesi',
        description: 'Tereyağı, yoğurt, yağ, pudra şekeri, nişasta ve unu ele yapışmayan yumuşak bir hamur olana dek yoğurun. Daire şeklinde açıp üçgen dilimlere elmalı harç koyarak rulo sarın.',
        durationMinutes: 15,
        image: '/images/recipes/step-baking.jpg'
      },
      {
        stepNumber: 3,
        title: 'Pembeleşene Dek Pişirme ve Pudra Şekeri',
        description: '175°C fırında kurabiyelerin altı hafif pembeleşip üstü beyaz kalacak şekilde 18-20 dakika pişirin. Ilıyınca bol pudra şekeri eleyin.',
        durationMinutes: 20,
        temperature: '175°C',
        image: '/images/recipes/elmali-kurabiye.jpg'
      }
    ],
    proTips: [
      'Elmalı iç harç mutlaka tamamen soğumuş ve suyunu çekmiş olmalıdır; sıcak veya sulu harç kurabiyeyi yumuşatır.',
      'Hamura 1 yemek kaşığı elma sirkesi ve nişasta eklemek kıyırlığını ikiye katlar.'
    ],
    commonMistakes: ['Kurabiyeleri fırında fazla kızartmak (sertleşmesine yol açar).'],
    substitutions: [{ original: 'Ceviz İçi (80 g)', alternative: 'Kavrulmuş Fındık İçi (80 g)', note: 'Elma ve tarçınla harika uyum sağlar.' }],
    storageTips: 'Cam kavanozda oda sıcaklığında 1 hafta kıyırlığını korur.',
    servingSuggestions: ['Taze demlenmiş bergamot aromalı siyah çay eşliğinde servis edin.'],
    allergens: ['Gluten', 'Süt ve Süt Ürünleri', 'Sert Kabuklu Yemişler (Ceviz)'],
    youtubeVideo: {
      title: 'Yumuşamayan Kıyır Kıyır Elmalı Kurabiye Sırrı',
      youtubeId: 'UYkyA6x0mOA',
      embedUrl: 'https://www.youtube.com/embed/UYkyA6x0mOA',
      watchUrl: 'https://www.youtube.com/results?search_query=elmali+kurabiye+tarifi',
      duration: '04:50',
      thumbnail: '/images/recipes/elmali-kurabiye.jpg'
    },
    sampleReviews: [
      { id: 'rev-ek-1', author: 'Seda Yalçın', avatarBg: '#F9EFE6', rating: 5, date: '4 gün önce', comment: '3 gün geçmesine rağmen ilk günkü gibi kıyır kıyır kaldı!', isSample: true }
    ]
  },
  {
    id: 'rec-12',
    slug: 'cilekli-tart',
    title: 'Fransız Usulü Pastacı Kremalı Taze Çilekli Tart',
    shortDescription: 'Soğuk tereyağıyla hazırlanan gevrek pâte sablée tart tabanı, gerçek vanilyalı pastacı kreması ve parlak taze çilek dizilimiyle vitrin şıklığı.',
    fullDescription:
      'Fransız pastanelerinin vitrinlerini süsleyen Tarte aux Fraises; dağılmayan gevrek tereyağlı tart hamuru, ipeksi vanilyalı pastacı kreması ve taze çileklerin uyumuyla özel günlerin en zarif tatlısıdır.',
    categorySlug: 'tartlar-ve-turtalar',
    categoryName: 'Tartlar ve Turtalar',
    secondaryCategories: ['meyveli-tatlilar'],
    image: '/images/recipes/cilekli-tart.jpg',
    prepTimeMinutes: 30,
    cookTimeMinutes: 22,
    totalTimeMinutes: 52,
    difficulty: 'Orta',
    servings: 8,
    rating: 4.9,
    reviewCount: 138,
    likesCount: 810,
    isFeatured: true,
    createdAt: '2026-10-04',
    caloriesPerServing: 330,
    bakingTemp: '180°C (Alt-Üst)',
    ingredients: [
      { id: 'ct-1', name: 'Soğuk tereyağı (küp doğranmış)', amount: 125, unit: 'g', group: 'Tart Hamuru (Pâte Sablée)' },
      { id: 'ct-2', name: 'Pudra şekeri', amount: 70, unit: 'g', group: 'Tart Hamuru (Pâte Sablée)' },
      { id: 'ct-3', name: 'Buğday unu', amount: 240, unit: 'g', group: 'Tart Hamuru (Pâte Sablée)' },
      { id: 'ct-4', name: 'Soğuk yumurta (1 adet)', amount: 50, unit: 'ml', group: 'Tart Hamuru (Pâte Sablée)' },
      { id: 'ct-5', name: 'Pastacı kreması için süt', amount: 400, unit: 'ml', group: 'Vanilyalı Pastacı Kreması' },
      { id: 'ct-6', name: 'Yumurta sarısı (3 adet) + şeker (80 g) + mısır nişastası (35 g)', amount: 165, unit: 'g', group: 'Vanilyalı Pastacı Kreması' },
      { id: 'ct-7', name: 'Taze seçme çilek', amount: 400, unit: 'g', group: 'Üzeri İçin' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Soğuk Tereyağlı Kumlama Tekniği ve Kör Pişirme',
        description: 'Un, pudra şekeri ve soğuk tereyağını parmak uçlarınızla kum haline getirin, yumurtayı ekleyip hamuru toparlayın. Tart kalıbına yayıp çatalla delin ve 180°C’de 22 dakika altın rengi olana dek pişirin.',
        durationMinutes: 25,
        temperature: '180°C',
        image: '/images/recipes/step-baking.jpg'
      },
      {
        stepNumber: 2,
        title: 'Vanilyalı Pastacı Kremasının Hazırlanması',
        description: 'Süt, yumurta sarısı, şeker ve nişastayı pişirip ocaktan alın, vanilya ve 20 g tereyağı ekleyip üzerini streç filmle temas edecek şekilde kapatarak soğutun.',
        durationMinutes: 15,
        image: '/images/recipes/step-batter.jpg'
      },
      {
        stepNumber: 3,
        title: 'Krema Dolgusu ve Çileklerin Gül Düzeninde Dizilmesi',
        description: 'Soğuyan tart tabanına çırpılmış pastacı kremasını yayın. Üzerine ikiye kesilmiş taze çilekleri dıştan içe doğru sıkıca dizin ve Antep fıstığı serpin.',
        durationMinutes: 12,
        image: '/images/recipes/cilekli-tart.jpg'
      }
    ],
    proTips: [
      'Tart hamurunu yoğururken elinizin ısısıyla tereyağını eritmeyin; sadece toparlanana kadar birleştirin ve pişirmeden önce kalıpta 20 dakika dondurucuda soğutun (böylece kenarları fırında çökmez).',
      'Kremayı mutlaka hem taban hem de krema tamamen soğuduktan sonra birleştirin.'
    ],
    commonMistakes: ['Tart hamurunu ekmek hamuru gibi uzun süre yoğurmak (sert ve bisküvi yerine kayış gibi olmasına neden olur).'],
    substitutions: [{ original: 'Taze Çilek (400 g)', alternative: 'Frambuaz, Böğürtlen ve Yaban Mersini Karışımı (400 g)', note: 'Orman meyveli tart olarak da mükemmel görünür.' }],
    storageTips: 'Buzdolabında 2 gün tazeliğini ve taban gevrekliğini korur.',
    servingSuggestions: ['Çileklerin parlaması için üzerine fırçayla 1 yemek kaşığı ılık bal veya kayısı marmeladı sürün.'],
    allergens: ['Gluten', 'Yumurta', 'Süt ve Süt Ürünleri'],
    youtubeVideo: {
      title: 'Kenarları Çökmeyen Fransız Usulü Çilekli Tart Tarifi',
      youtubeId: 'A7S0kPE4N48',
      embedUrl: 'https://www.youtube.com/embed/A7S0kPE4N48',
      watchUrl: 'https://www.youtube.com/results?search_query=cilekli+tart+tarifi',
      duration: '05:30',
      thumbnail: '/images/recipes/cilekli-tart.jpg'
    },
    sampleReviews: [
      { id: 'rev-ct-1', author: 'Pelin Doğan', avatarBg: '#FDECEF', rating: 5, date: '5 gün önce', comment: 'Dondurucuda 20 dakika bekletme tüyosu sayesinde tart kenarları milim bile çökmedi!', isSample: true }
    ]
  },
  {
    id: 'rec-13',
    slug: 'ev-yapimi-dondurma',
    title: 'Gerçek Meyveli & Vanilyalı Ev Yapımı Dondurma',
    shortDescription: 'Makinesiz, buzlanma yapmayan özel yoğunlaştırılmış süt ve taze çilek püresi tekniğiyle hazırlanan kadifemsi ev yapımı dondurma.',
    fullDescription:
      'Evde dondurma makinesi olmadan da buz kristalleri oluşturmayan, kaşıkla kolayca alınan kremsi dokuda çilekli ve Madagaskar vanilyalı doğal dondurma tarifi.',
    categorySlug: 'dondurmalar',
    categoryName: 'Dondurmalar',
    secondaryCategories: ['meyveli-tatlilar', 'sutlu-tatlilar'],
    image: '/images/recipes/dondurma.jpg',
    prepTimeMinutes: 20,
    cookTimeMinutes: 0,
    totalTimeMinutes: 20,
    difficulty: 'Kolay',
    servings: 6,
    rating: 4.8,
    reviewCount: 112,
    likesCount: 680,
    isFeatured: false,
    createdAt: '2026-10-03',
    caloriesPerServing: 250,
    ingredients: [
      { id: 'dn-1', name: 'Soğuk sıvı krema (%35 yağlı)', amount: 400, unit: 'ml', group: 'Dondurma Bazı' },
      { id: 'dn-2', name: 'Tatlandırılmış yoğunlaştırılmış süt (condensed milk)', amount: 350, unit: 'g', group: 'Dondurma Bazı' },
      { id: 'dn-3', name: 'Taze çilek püresi (suyu süzülmüş)', amount: 250, unit: 'g', group: 'Meyve Katmanı' },
      { id: 'dn-4', name: 'Saf vanilya özütü', amount: 10, unit: 'ml', group: 'Aroma' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Soğuk Kremanın Bulut Kıvamında Çırpılması',
        description: 'Buzdolabında iyice soğutulmuş 400 ml sıvı kremayı mikserle yumuşak tepecikler oluşana kadar 4 dakika çırpın.',
        durationMinutes: 5,
        image: '/images/recipes/step-whisking.jpg'
      },
      {
        stepNumber: 2,
        title: 'Yoğunlaştırılmış Süt ve Çilek Püresiyle Katlama',
        description: 'Yoğunlaştırılmış sütü ve vanilyayı spatula ile katlayın. Yarısını vanilyalı bırakıp diğer yarısına taze çilek püresi ekleyin ve dondurucuda 6 saat dinlendirin.',
        durationMinutes: 15,
        image: '/images/recipes/dondurma.jpg'
      }
    ],
    proTips: ['Yoğunlaştırılmış süt su oranı düşük olduğu için dondurmada buzlanmayı tamamen engeller.'],
    commonMistakes: ['Kremayı fazla çırpıp tereyağına dönüştürmek.'],
    substitutions: [{ original: 'Çilek Püresi (250 g)', alternative: 'Kavrulmuş Antep Fıstığı Ezmesi (120 g)', note: 'Fıstıklı dondurma alternatifi.' }],
    storageTips: 'Derin dondurucuda hava sızdırmaz kapta 1 ay saklanabilir.',
    servingSuggestions: ['Külah veya porselen kasede taze nane yaprağı ile servis edin.'],
    allergens: ['Süt ve Süt Ürünleri'],
    youtubeVideo: {
      title: 'Makinesiz Buzlanmayan Ev Yapımı Dondurma Tarifi',
      youtubeId: 'j9beGmzyvjw',
      embedUrl: 'https://www.youtube.com/embed/j9beGmzyvjw',
      watchUrl: 'https://www.youtube.com/results?search_query=ev+yapimi+dondurma+tarifi',
      duration: '03:40',
      thumbnail: '/images/recipes/dondurma.jpg'
    },
    sampleReviews: [
      { id: 'rev-dn-1', author: 'Emre Tekin', avatarBg: '#E6F2EA', rating: 5, date: '1 hafta önce', comment: 'Hiç buzlanma yapmadı, çocuklar bayıldı!', isSample: true }
    ]
  },
  {
    id: 'rec-14',
    slug: 'cikolatali-truffle',
    title: '15 Dakikada Belçika Çikolatalı & Fındıklı Truffle',
    shortDescription: 'Fırın gerektirmeyen, sadece 4 malzemeyle hazırlanan ipeksi ganaj dolgulu ve kakaolu/fındıklı lüks çikolata topları.',
    fullDescription:
      'Kahve yanına veya hediye kutularına çok yakışan, gerçek bitter çikolata ve sıcak kremanın buluşmasıyla hazırlanan Fransız usulü el yapımı çikolata trüfleri.',
    categorySlug: 'pratik-tatlilar',
    categoryName: 'Pratik Tatlılar',
    secondaryCategories: ['cikolatali-tatlilar'],
    image: '/images/recipes/truffle.jpg',
    prepTimeMinutes: 15,
    cookTimeMinutes: 2,
    totalTimeMinutes: 17,
    difficulty: 'Kolay',
    servings: 6,
    rating: 4.9,
    reviewCount: 95,
    likesCount: 620,
    isFeatured: false,
    createdAt: '2026-10-16',
    caloriesPerServing: 220,
    ingredients: [
      { id: 'tr-1', name: 'Bitter çikolata (%70 kakao, ince kıyılmış)', amount: 240, unit: 'g', group: 'Ganaj İçin' },
      { id: 'tr-2', name: 'Sıvı krema (%35 yağlı)', amount: 120, unit: 'ml', group: 'Ganaj İçin' },
      { id: 'tr-3', name: 'Tereyağı (oda sıcaklığında)', amount: 20, unit: 'g', group: 'Ganaj İçin' },
      { id: 'tr-4', name: 'Dış kaplama için kakao, fındık ve Antep fıstığı', amount: 80, unit: 'g', group: 'Kaplama İçin' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Ganajın Hazırlanması',
        description: '120 ml kremayı kaynama noktasına getirip ocaktan alın. 240 g ince kıyılmış çikolata ve 20 g tereyağını ekleyip 2 dakika bekletin, ardından pürüzsüz olana dek karıştırın.',
        durationMinutes: 7,
        image: '/images/recipes/step-chocolate.jpg'
      },
      {
        stepNumber: 2,
        title: 'Soğutma ve Yuvarlama',
        description: 'Buzdolabında 1 saat kıvam almasını bekleyin. Tatlı kaşığıyla parçalar alıp avuç içinde hızla yuvarlayın ve kakaoya veya fındığa bulayın.',
        durationMinutes: 10,
        image: '/images/recipes/truffle.jpg'
      }
    ],
    proTips: ['Yuvarlarken elinize pudra şekeri veya kakao sürerseniz çikolata avucunuzda erimez.'],
    commonMistakes: ['Kremayı çikolatanın üzerinde kaynatmak (yağını ayrıştırır).'],
    substitutions: [{ original: 'Sıvı Krema (120 ml)', alternative: 'Hindistan Cevizi Sütü Kreması (120 ml)', note: 'Vegan truffle alternatifi.' }],
    storageTips: 'Buzdolabında kapalı kutuda 2 hafta tazeliğini korur.',
    servingSuggestions: ['Türk kahvesi veya espresso yanında şık kağıt kapsüllerde sunun.'],
    allergens: ['Süt ve Süt Ürünleri', 'Sert Kabuklu Yemişler (Fındık, Antep Fıstığı)'],
    youtubeVideo: {
      title: 'Sadece 4 Malzemeyle Ev Yapımı Çikolata Truffle',
      youtubeId: 'PyJWjVkzps8',
      embedUrl: 'https://www.youtube.com/embed/PyJWjVkzps8',
      watchUrl: 'https://www.youtube.com/results?search_query=cikolatali+truffle+tarifi',
      duration: '03:15',
      thumbnail: '/images/recipes/truffle.jpg'
    },
    sampleReviews: [
      { id: 'rev-tr-1', author: 'Gizem Koç', avatarBg: '#F7EBF6', rating: 5, date: 'Dün', comment: '15 dakikada butik çikolatacı kalitesinde trüfler yaptım!', isSample: true }
    ]
  }
];

export const RECIPE_VIDEOS: RecipeVideo[] = [
  {
    id: 'vid-1',
    title: 'Sıcak Çikolatalı Lava Kek — Akışkan Çikolata Sırrı',
    youtubeId: 'A8RMgdVmhq4',
    embedUrl: 'https://www.youtube.com/embed/A8RMgdVmhq4',
    watchUrl: 'https://www.youtube.com/watch?v=A8RMgdVmhq4',
    duration: '03:45',
    thumbnail: '/images/video-lava-ref.png',
    recipeSlug: 'sicak-cikolatali-lava-kek',
    recipeName: 'Sıcak Çikolatalı Lava Kek',
    channelNote: 'Yemek.com • Adım Adım Uygulamalı'
  },
  {
    id: 'vid-2',
    title: 'Tam Kıvamında Yanık Yüzeyli San Sebastian Cheesecake',
    youtubeId: 'z0FD8er5ujQ',
    embedUrl: 'https://www.youtube.com/embed/z0FD8er5ujQ',
    watchUrl: 'https://www.youtube.com/watch?v=z0FD8er5ujQ',
    duration: '05:12',
    thumbnail: '/images/recipes/san-sebastian.jpg',
    recipeSlug: 'san-sebastian-cheesecake',
    recipeName: 'San Sebastian Cheesecake',
    channelNote: 'Nefis Yemek Tarifleri • 230°C Pişirme Rehberi'
  },
  {
    id: 'vid-3',
    title: 'Orijinal İtalyan Mascarpone Kremalı Tiramisu',
    youtubeId: '2myJJ4-MTWc',
    embedUrl: 'https://www.youtube.com/embed/2myJJ4-MTWc',
    watchUrl: 'https://www.youtube.com/watch?v=2myJJ4-MTWc',
    duration: '04:30',
    thumbnail: '/images/recipes/tiramisu.jpg',
    recipeSlug: 'tiramisu',
    recipeName: 'Orijinal İtalyan Tiramisu',
    channelNote: 'The Cook Palette • Pastörize Yumurta Tekniği'
  },
  {
    id: 'vid-4',
    title: 'Üstü Parlak Çatlak Kabuklu Gerçek Fudgy Brownie',
    youtubeId: 'Ry5UknvPPkE',
    embedUrl: 'https://www.youtube.com/embed/Ry5UknvPPkE',
    watchUrl: 'https://www.youtube.com/watch?v=Ry5UknvPPkE',
    duration: '04:45',
    thumbnail: '/images/recipes/brownie.jpg',
    recipeSlug: 'cikolatali-brownie',
    recipeName: 'Belçika Çikolatalı Brownie',
    channelNote: 'Yemek.com • Nemli Doku Sırrı'
  },
  {
    id: 'vid-5',
    title: 'Pastane Usulü İpeksi Kremalı Çilekli Magnolia',
    youtubeId: 'UkTpTlTH-Gg',
    embedUrl: 'https://www.youtube.com/embed/UkTpTlTH-Gg',
    watchUrl: 'https://www.youtube.com/watch?v=UkTpTlTH-Gg',
    duration: '03:55',
    thumbnail: '/images/recipes/cilekli-magnolia.jpg',
    recipeSlug: 'cilekli-magnolia',
    recipeName: 'Çilekli Magnolia',
    channelNote: 'Nefis Yemek Tarifleri • 15 Dakikada Hazır'
  },
  {
    id: 'vid-6',
    title: 'Kenarları Çökmeyen Fransız Usulü Taze Çilekli Tart',
    youtubeId: 'A7S0kPE4N48',
    embedUrl: 'https://www.youtube.com/embed/A7S0kPE4N48',
    watchUrl: 'https://www.youtube.com/watch?v=A7S0kPE4N48',
    duration: '05:30',
    thumbnail: '/images/recipes/cilekli-tart.jpg',
    recipeSlug: 'cilekli-tart',
    recipeName: 'Çilekli Tart',
    channelNote: "Refika'nın Mutfağı • Pâte Sablée Sırrı"
  }
];
