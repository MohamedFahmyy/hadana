export type AccentTone = "sky" | "sun" | "mint";

export interface NurseryConfig {
  isDemo: boolean;
  demoNotice: string;
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    city: string;
    copyrightYear: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    whatsappNumber: string; // بصيغة دولية بدون + أو مسافات (مثال: 201000000000)
    whatsappDefaultMessage: string;
    address: string;
    workingHours: string;
    workingDays: string;
    email: string;
  };
  map: {
    embedUrl: string;
    directionsUrl: string;
    note: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    imageUrl: string;
    imageAlt: string;
    highlights: string[];
    floatingCardTitle: string;
    floatingCardSubtitle: string;
  };
  about: {
    badge: string;
    title: string;
    description: string;
    missionTitle: string;
    missionText: string;
    values: {
      id: string;
      title: string;
      description: string;
      icon: "shield" | "heart" | "puzzle";
      tone: AccentTone;
    }[];
  };
  stages: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      name: string;
      ageRange: string;
      summary: string;
      highlights: string[];
      tone: AccentTone;
    }[];
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
      icon: "camera" | "teacher" | "apple" | "palette" | "trees" | "smile";
      tone: AccentTone;
    }[];
  };
  gallery: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      category: string;
      imageUrl: string;
      alt: string;
    }[];
  };
  scheduleAndPricing: {
    badge: string;
    title: string;
    subtitle: string;
    demoNote: string;
    schedules: {
      label: string;
      time: string;
      note: string;
    }[];
    plans: {
      id: string;
      name: string;
      hours: string;
      priceEgp: string;
      period: string;
      features: string[];
      popular?: boolean;
      tone: AccentTone;
    }[];
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    demoDisclaimer: string;
    items: {
      id: string;
      parentName: string;
      childStage: string;
      demoLabel: string;
      quote: string;
      rating: number;
      tone: AccentTone;
    }[];
  };
  registration: {
    badge: string;
    title: string;
    subtitle: string;
    ageOptions: string[];
    submitLabel: string;
    helperNote: string;
  };
  footer: {
    description: string;
    demoCredit: string;
  };
}

/**
 * ملف الإعدادات الموحد للحضانة
 * عدّل القيم هنا فقط لتخصيص الموقع بالكامل لأي حضانة جديدة خلال دقائق.
 */
export const nurseryConfig: NurseryConfig = {
  isDemo: true,
  demoNotice:
    "نموذج عرض تجريبي (Demo) — جميع البيانات والأسعار والآراء قابلة للتعديل بسهولة من ملف واحد",
  brand: {
    name: "حضانة النجوم الصغيرة",
    shortName: "النجوم الصغيرة",
    tagline: "مكان دافئ وآمن ينمو فيه طفلك بالسعادة والمعرفة",
    city: "المعادي، القاهرة",
    copyrightYear: "2026",
  },
  seo: {
    title: "حضانة النجوم الصغيرة | رعاية وتعليم مبكر للأطفال (نموذج تجريبي)",
    description:
      "حضانة النجوم الصغيرة تقدم بيئة آمنة ومبهجة للأطفال من عمر سنة ونصف حتى 6 سنوات (حضانة، KG1، KG2) بنظام التعلم باللعب، وجبات صحية، ومعلمات مؤهلات.",
    keywords: [
      "حضانة أطفال",
      "حضانة في مصر",
      "KG1",
      "KG2",
      "التعلم باللعب",
      "حضانة النجوم الصغيرة",
    ],
  },
  contact: {
    phoneDisplay: "+20 111 219 4828",
    phoneHref: "tel:+201112194828",
    whatsappNumber: "201112194828",
    whatsappDefaultMessage:
      "السلام عليكم، أرغب في الاستفسار عن التقديم والمواعيد في حضانة النجوم الصغيرة.",
    address: "15 شارع 9 (عنوان تجريبي)، المعادي، القاهرة، مصر",
    workingHours: "من 7:30 صباحاً حتى 4:00 عصراً (مع فترة ممتدة حتى 5:30)",
    workingDays: "الأحد إلى الخميس",
    email: "hello@little-stars-demo.example",
  },
  map: {
    // خريطة Google Maps مضمنة (Placeholder تجريبي لمنطقة المعادي - القاهرة)
    embedUrl:
      "https://www.google.com/maps?q=Maadi,+Cairo,+Egypt&output=embed",
    directionsUrl: "https://maps.google.com/?q=Maadi,+Cairo,+Egypt",
    note: "موقع الخريطة أعلاه نموذج تجريبي (Placeholder) ويمكن استبداله بإحداثيات الحضانة الفعلية.",
  },
  hero: {
    badge: "نموذج موقع حضانة احترافي • Demo",
    headline: "بداية مشرقة وآمنة لخطوات طفلك الأولى",
    subheadline:
      "في حضانة النجوم الصغيرة نجمع بين الأمان التام، والرعاية الحانية، والتعلم باللعب لنبني شخصية واثقة وسعيدة.",
    primaryCta: "سجّل الآن عبر واتساب",
    secondaryCta: "اتصل بنا",
    imageUrl:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "أطفال يلعبون بالمكعبات الملونة في بيئة حضانة آمنة",
    highlights: ["أمان ومراقبة مستمرة", "وجبات صحية طازجة", "تأسيس عربي وإنجليزي"],
    floatingCardTitle: "فصول محدودة العدد",
    floatingCardSubtitle: "اهتمام فردي بكل طفل من عمر 1.5 إلى 6 سنوات",
  },
  about: {
    badge: "عن الحضانة",
    title: "رسالتنا: طفولة سعيدة وبيئة يشعر فيها كل طفل بالانتماء",
    description:
      "نؤمن بأن السنوات الأولى هي الأساس الحقيقي لبناء الفضول وحب الاستكشاف. لذلك صممنا مساحات تعليمية دافئة تجمع بين اللعب الهادف، التغذية السليمة، والتواصل اليومي الشفاف مع الأسرة.",
    missionTitle: "رؤيتنا التربوية",
    missionText:
      "إعداد طفل متوازن نفسياً واجتماعياً ومحب للتعلم، في بيئة مصرية دافئة تحترم فطرة الطفل وتشجع إبداعه.",
    values: [
      {
        id: "safety",
        title: "أمان شامل",
        description:
          "فصول مجهزة بأثاث بحواف دائرية، أرضيات آمنة، وبوابات دخول مراقبة لضمان راحة بالك طوال اليوم.",
        icon: "shield",
        tone: "sky",
      },
      {
        id: "care",
        title: "رعاية واهتمام",
        description:
          "مشرفات ومعلمات متخصصات يتابعن حالة كل طفل الغذائية والنفسية مع تقارير يومية لولي الأمر.",
        icon: "heart",
        tone: "sun",
      },
      {
        id: "play",
        title: "تعلم باللعب",
        description:
          "أنشطة حسية وحركية وقصص تفاعلية تنمي مهارات اللغة والتفكير والاعتماد على النفس دون ضغط.",
        icon: "puzzle",
        tone: "mint",
      },
    ],
  },
  stages: {
    badge: "المراحل العمرية",
    title: "برامج تعليمية مصممة لكل مرحلة عمرية",
    subtitle:
      "نقسّم الأطفال حسب الفئة العمرية لضمان أنشطة مناسبة لقدرات كل طفل واحتياجاته.",
    items: [
      {
        id: "nursery",
        name: "مرحلة الحضانة (Nursery)",
        ageRange: "من 1.5 إلى 3 سنوات",
        summary:
          "احتواء دافئ، تنمية المهارات الحركية والحسية، وبداية النطق والتفاعل الاجتماعي.",
        highlights: [
          "أنشطة حسية وألعاب فك وتركيب",
          "تنمية المهارات اللغوية المبكرة",
          "متابعة التغذية والنوم والنظافة",
        ],
        tone: "sky",
      },
      {
        id: "kg1",
        name: "تمهيدي أول (KG1)",
        ageRange: "من 3 إلى 4.5 سنوات",
        summary:
          "تأسيس ممتع للحروف والأرقام بالعربية والإنجليزية من خلال القصص والأغاني والرسم.",
        highlights: [
          "التعرف على الحروف والأرقام باللعب",
          "تنمية مهارات ما قبل الكتابة",
          "أنشطة جماعية لتعزيز الثقة بالنفس",
        ],
        tone: "sun",
      },
      {
        id: "kg2",
        name: "تمهيدي متقدم (KG2)",
        ageRange: "من 4.5 إلى 6 سنوات",
        summary:
          "تهيئة متكاملة للمدرسة في القراءة والحساب البسيط، التفكير المنطقي، والتجارب العلمية المرحة.",
        highlights: [
          "أساسيات القراءة والكتابة عربي وإنجليزي",
          "مهارات الحساب والمنطق والتجارب",
          "الاستعداد النفسي والأكاديمي للمدرسة",
        ],
        tone: "mint",
      },
    ],
  },
  features: {
    badge: "لماذا يختارنا الأهل؟",
    title: "كل ما يحتاجه طفلك ليوم مليء بالبهجة والأمان",
    subtitle:
      "تفاصيل مدروسة يومياً ليكون يوم طفلك متوازناً بين التعلم، اللعب، والتغذية السليمة.",
    items: [
      {
        id: "cameras",
        title: "كاميرات مراقبة آمنة",
        description:
          "تغطية كاملة للفصول والممرات ومنطقة الألعاب مع متابعة إدارية مستمرة لسلامة الأطفال.",
        icon: "camera",
        tone: "sky",
      },
      {
        id: "teachers",
        title: "معلمات مؤهلات",
        description:
          "فريق تربوي مدرب في رياض الأطفال والإسعافات الأولية، يجمع بين الخبرة واللطف.",
        icon: "teacher",
        tone: "sun",
      },
      {
        id: "meals",
        title: "وجبات صحية متوازنة",
        description:
          "فطار وغداء وسناك طازج معد يومياً بمكونات صحية خالية من المواد الحافظة.",
        icon: "apple",
        tone: "mint",
      },
      {
        id: "activities",
        title: "أنشطة إبداعية متنوعة",
        description:
          "رسم وتلوين، أشغال يدوية، موسيقى، سرد قصص، وأنشطة منتسوري لتنمية المواهب.",
        icon: "palette",
        tone: "sun",
      },
      {
        id: "garden",
        title: "حديقة وألعاب خارجية",
        description:
          "مساحة خضراء مشمسة وألعاب آمنة لتفريغ الطاقة والتعرف على الطبيعة يومياً.",
        icon: "trees",
        tone: "mint",
      },
      {
        id: "updates",
        title: "تواصل يومي مع الأهل",
        description:
          "متابعة مستمرة ليوم الطفل وصوره وأنشطته عبر الواتساب مع أولياء الأمور.",
        icon: "smile",
        tone: "sky",
      },
    ],
  },
  gallery: {
    badge: "معرض الصور",
    title: "لقطات من يوميات أطفالنا (صور تجريبية)",
    subtitle:
      "صور استرشادية من Unsplash يمكن استبدالها بسهولة بصور الحضانة الحقيقية من ملف الإعدادات.",
    items: [
      {
        id: "g1",
        title: "ركن المكعبات والتركيب",
        category: "التعلم باللعب",
        imageUrl:
          "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80",
        alt: "مكعبات ملونة وألعاب تعليمية للأطفال",
      },
      {
        id: "g2",
        title: "توجيه فردي واهتمام دافئ",
        category: "المعلمات",
        imageUrl:
          "https://images.unsplash.com/photo-1738051889746-ae7414e5ebb2?auto=format&fit=crop&w=900&q=80",
        alt: "معلمة تساعد طفلة في اللعب بالمكعبات الخشبية",
      },
      {
        id: "g3",
        title: "ورش الرسم والألوان",
        category: "الأنشطة",
        imageUrl:
          "https://images.unsplash.com/photo-1573020568125-d15af9c3e777?auto=format&fit=crop&w=900&q=80",
        alt: "طفل يستمتع بالتلوين والألوان المائية",
      },
      {
        id: "g4",
        title: "أنشطة جماعية ممتعة",
        category: "الفصول",
        imageUrl:
          "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=80",
        alt: "أطفال يشاركون في نشاط جماعي داخل الحضانة",
      },
      {
        id: "g5",
        title: "بيئة دافئة لمرحلة الحضانة",
        category: "الرعاية",
        imageUrl:
          "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
        alt: "طفل مبتسم يلعب في أجواء مبهجة",
      },
      {
        id: "g6",
        title: "ركن القراءة والاستكشاف",
        category: "KG1 & KG2",
        imageUrl:
          "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=900&q=80",
        alt: "أدوات تعليمية وكتب للأطفال في الفصل",
      },
    ],
  },
  scheduleAndPricing: {
    badge: "المواعيد والأسعار",
    title: "باقات مرنة تناسب جدول الأسرة",
    subtitle:
      "جدول واضح للفترات والأسعار التجريبية — يمكنك تعديل الأرقام والباقات بسهولة من ملف واحد.",
    demoNote:
      "ملاحظة: المواعيد والأسعار المعروضة أدناه قيم تجريبية (Demo) للتوضيح فقط.",
    schedules: [
      {
        label: "الفترة الصباحية الأساسية",
        time: "8:00 صباحاً – 2:00 ظهراً",
        note: "تشمل البرنامج التعليمي والأنشطة والحديقة",
      },
      {
        label: "الفترة الكاملة",
        time: "8:00 صباحاً – 4:00 عصراً",
        note: "تشمل وجبة الغداء وفترة الاسترخاء المسائية",
      },
      {
        label: "الاستضافة الممتدة (Extra)",
        time: "حتى 5:30 مساءً",
        note: "متاحة حسب رغبة ولي الأمر طوال أيام العمل",
      },
    ],
    plans: [
      {
        id: "half-day",
        name: "الباقة الصباحية",
        hours: "8:00 ص – 2:00 م",
        priceEgp: "2,200",
        period: "ج.م / شهرياً",
        features: [
          "البرنامج التعليمي الكامل حسب المرحلة",
          "وجبة فطار صحية + سناك فواكه",
          "أنشطة الرسم والحديقة اليومية",
          "تقرير يومي لولي الأمر",
        ],
        tone: "sky",
      },
      {
        id: "full-day",
        name: "الباقة الشاملة (الأكثر طلباً)",
        hours: "8:00 ص – 4:00 م",
        priceEgp: "2,900",
        period: "ج.م / شهرياً",
        popular: true,
        features: [
          "كل مميزات الباقة الصباحية",
          "وجبة غداء منزلية صحية يومياً",
          "فترة راحة ونشاط مسائي هادئ",
          "ورش منتسوري وتنمية مهارات إضافية",
        ],
        tone: "sun",
      },
      {
        id: "extended",
        name: "باقة اليوم الممتد",
        hours: "7:30 ص – 5:30 م",
        priceEgp: "3,400",
        period: "ج.م / شهرياً",
        features: [
          "كل مميزات الباقة الشاملة",
          "استقبال مبكر من 7:30 صباحاً",
          "رعاية ممتدة حتى 5:30 مساءً",
          "سناك مسائي خفيف قبل الانصراف",
        ],
        tone: "mint",
      },
    ],
  },
  testimonials: {
    badge: "آراء أولياء الأمور (نماذج تجريبية)",
    title: "كيف ستظهر آراء أولياء الأمور في موقع حضانتك",
    subtitle:
      "هذا القسم يوضح شكل عرض التقييمات للزوار، والنصوص التالية هي أمثلة تجريبية فقط.",
    demoDisclaimer:
      "تنبيه شفافية: الآراء الثلاثة التالية هي نماذج تجريبية (Demo Placeholders) وليست تقييمات حقيقية، ويمكن استبدالها بآراء أولياء الأمور الفعليين لحضانتك.",
    items: [
      {
        id: "t1",
        parentName: "أم سلمى (نموذج تجريبي)",
        childStage: "والدة طفلة في KG1 • مثال للعرض",
        demoLabel: "رأي تجريبي (Demo)",
        quote:
          "\"مثال لنص رأي ولي أمر: لاحظت تحسناً كبيراً في نطق ابنتي وحبها للذهاب إلى الحضانة كل صباح، والاهتمام بالوجبات والنظافة يطمئنني جداً.\"",
        rating: 5,
        tone: "sky",
      },
      {
        id: "t2",
        parentName: "والد عمر (نموذج تجريبي)",
        childStage: "والد طفل في مرحلة الحضانة • مثال للعرض",
        demoLabel: "رأي تجريبي (Demo)",
        quote:
          "\"مثال لنص رأي ولي أمر: التواصل اليومي عبر الواتساب والأنشطة المتنوعة في الحديقة جعلت عمر أكثر اجتماعية وثقة بنفسه.\"",
        rating: 5,
        tone: "sun",
      },
      {
        id: "t3",
        parentName: "أم ليلى (نموذج تجريبي)",
        childStage: "والدة طفلة في KG2 • مثال للعرض",
        demoLabel: "رأي تجريبي (Demo)",
        quote:
          "\"مثال لنص رأي ولي أمر: تأسيس ممتاز في القراءة والحساب بطريقة ممتعة بدون ضغط، والمعلمات في قمة اللطف والاحترافية.\"",
        rating: 5,
        tone: "mint",
      },
    ],
  },
  registration: {
    badge: "التسجيل السريع",
    title: "احجز زيارة أو استفسر عن التقديم الآن",
    subtitle:
      "املأ البيانات التالية وسنفتح لك محادثة واتساب برسالة جاهزة ومرتبة مباشرة مع إدارة الحضانة.",
    ageOptions: [
      "أقل من سنتين (مرحلة الحضانة)",
      "من سنتين إلى 3 سنوات (Nursery)",
      "من 3 إلى 4.5 سنوات (KG1)",
      "من 4.5 إلى 6 سنوات (KG2)",
    ],
    submitLabel: "إرسال الطلب عبر واتساب",
    helperNote:
      "عند الضغط على الزر سيتم فتح تطبيق واتساب مباشرة برسالة تحتوي على بياناتك دون الحاجة لانتظار.",
  },
  footer: {
    description:
      "موقع نموذجي مصمم خصيصاً لعرض تجربة رقمية عصرية للحضانات في مصر — سريع، متجاوب مع الموبايل، وسهل التخصيص.",
    demoCredit: "نموذج عرض تجريبي (Demo) — حضانة النجوم الصغيرة",
  },
};
