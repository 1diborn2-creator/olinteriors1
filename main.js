const projects = [
  {
    key: "esplugues",
    title: 'Modern House "ESPLUGUES"',
    category: {
      en: "Architecture / House",
      ru: "Архитектура / Дом",
      es: "Arquitectura / Casa",
    },
    location: {
      en: "Spain",
      ru: "Испания",
      es: "España",
    },
    year: "2025",
    chips: {
      en: ["Modern", "Bright", "Architectural"],
      ru: ["Современно", "Светло", "Архитектурно"],
      es: ["Moderno", "Luminoso", "Arquitectónico"],
    },
    toneStart: "#d9c5b4",
    toneEnd: "#f4ebe3",
    wide: true,
    copy: {
      en: "Clean geometry, soft light, and quiet materiality for a contemporary home.",
      ru: "Чистая геометрия, мягкий свет и спокойная материальность для современного дома.",
      es: "Geometría limpia, luz suave y materialidad serena para una casa contemporánea.",
    },
  },
  {
    key: "bathroom",
    title: "Modern Bathroom",
    category: {
      en: "Bathroom / Interior",
      ru: "Ванная / Интерьер",
      es: "Baño / Interior",
    },
    location: {
      en: "Saudi Arabia",
      ru: "Саудовская Аравия",
      es: "Arabia Saudita",
    },
    year: "2024",
    chips: {
      en: ["Calm", "Minimal", "Warm"],
      ru: ["Спокойно", "Минималистично", "Тепло"],
      es: ["Sereno", "Minimal", "Cálido"],
    },
    toneStart: "#c5b0a0",
    toneEnd: "#efe4da",
    wide: false,
    copy: {
      en: "A restrained bathroom interior focused on light, surface, and balance.",
      ru: "Сдержанный интерьер ванной комнаты с акцентом на свет, поверхность и баланс.",
      es: "Un baño contenido con foco en la luz, la superficie y el equilibrio.",
    },
  },
  {
    key: "nude",
    title: "Nude Elegance Bedroom",
    category: {
      en: "Bedroom / Suite",
      ru: "Спальня / Сьют",
      es: "Dormitorio / Suite",
    },
    location: {
      en: "Warm residential",
      ru: "Тёплая резиденция",
      es: "Residencia cálida",
    },
    year: "2025",
    chips: {
      en: ["Soft", "Tactile", "Quiet"],
      ru: ["Мягко", "Фактурно", "Тихо"],
      es: ["Suave", "Táctil", "Silencioso"],
    },
    toneStart: "#d9bea1",
    toneEnd: "#f7eee4",
    wide: false,
    copy: {
      en: "A bedroom with a delicate palette, soft textiles, and a sense of privacy.",
      ru: "Спальня с деликатной палитрой, мягким текстилем и ощущением приватности.",
      es: "Un dormitorio con paleta delicada, textiles suaves y sensación de intimidad.",
    },
  },
  {
    key: "history",
    title: "Elegance of History",
    category: {
      en: "Apartment / Heritage",
      ru: "Апартаменты / Наследие",
      es: "Apartamento / Patrimonio",
    },
    location: {
      en: "La Casa Domènec Coll",
      ru: "La Casa Domènec Coll",
      es: "La Casa Domènec Coll",
    },
    year: "2025",
    chips: {
      en: ["Heritage", "Elegant", "Refined"],
      ru: ["Наследие", "Элегантно", "Выверенно"],
      es: ["Herencia", "Elegante", "Refinado"],
    },
    toneStart: "#c8b7a6",
    toneEnd: "#efe6dc",
    wide: true,
    copy: {
      en: "A contemporary reading of a historic space, shaped by proportion and context.",
      ru: "Современная подача исторического пространства, где важны пропорции и уважение к контексту.",
      es: "Una lectura contemporánea de un espacio histórico, con respeto por el contexto y las proporciones.",
    },
  },
  {
    key: "chocolate",
    title: "CHOCOLATE SUITE",
    category: {
      en: "Suite / Hospitality",
      ru: "Сьют / Гостеприимство",
      es: "Suite / Hospitalidad",
    },
    location: {
      en: "Warm luxury",
      ru: "Тёплая роскошь",
      es: "Lujo cálido",
    },
    year: "2025",
    chips: {
      en: ["Deep", "Luxurious", "Atmospheric"],
      ru: ["Глубоко", "Роскошно", "Атмосферно"],
      es: ["Oscuro", "Lujoso", "Atmosférico"],
    },
    toneStart: "#8f6a4d",
    toneEnd: "#ead9c8",
    wide: false,
    copy: {
      en: "A richer, more intimate story with deep tones and a soft glow.",
      ru: "Более насыщенная и камерная история с глубоким тоном и мягким свечением.",
      es: "Una historia más íntima y profunda, con tonos ricos y una luz suave.",
    },
  },
  {
    key: "japandi",
    title: "WARM JAPANDI",
    category: {
      en: "Japandi / Interior",
      ru: "Japandi / Интерьер",
      es: "Japandi / Interior",
    },
    location: {
      en: "Minimal residential",
      ru: "Минималистичная резиденция",
      es: "Residencia minimalista",
    },
    year: "2025",
    chips: {
      en: ["Natural", "Warm", "Minimal"],
      ru: ["Натурально", "Тепло", "Минимально"],
      es: ["Natural", "Cálido", "Minimal"],
    },
    toneStart: "#d5c4af",
    toneEnd: "#f4ece2",
    wide: false,
    copy: {
      en: "A quiet Japandi mood with natural materials and a very soft atmosphere.",
      ru: "Тихий Japandi-настрой с естественными материалами и очень мягкой атмосферой.",
      es: "Un enfoque Japandi sereno, con materiales naturales y una atmósfera muy suave.",
    },
  },
];

var projectDetails = window.behanceProjectDetails ?? {
  esplugues: {
    url: "https://www.behance.net/gallery/248756807/Modern-House-ESPLUGUES",
    summary: {
      en: "A modern home for a creative family, shaped by eclectic details, warm safety, and clear spatial zoning.",
      ru: "Современный дом для творческой семьи, построенный на эклектичных деталях, тепле и четком зонировании пространства.",
      es: "Una casa contemporánea para una familia creativa, con detalles eclécticos, calidez y una zonificación muy clara.",
    },
    highlights: {
      en: ["Shared living floor", "Private upper level", "Home office oasis", "Modern + eclectic"],
      ru: ["Общее пространство на первом этаже", "Приватный второй этаж", "Кабинет как тихий остров", "Современность + эклектика"],
      es: ["Zona social en la planta baja", "Nivel privado arriba", "Despacho como oasis de silencio", "Modernidad + eclecticismo"],
    },
    intro: {
      en: "The Esplugues project balances a family-friendly plan with character-rich decor pieces and bright, inviting rooms.",
      ru: "Проект Esplugues соединяет удобную семейную планировку с характерным декором и светлыми, гостеприимными помещениями.",
      es: "El proyecto Esplugues combina una planta familiar con piezas decorativas con carácter y espacios luminosos y acogedores.",
    },
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a039f4248756807.69f9060dc697a.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/f8c9c4248756807.69f9060dc7385.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/845a95248756807.69f9060dc8826.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/d255dc248756807.69f9060a3c19c.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/f39e35248756807.69f9060a3b9bd.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d5a6d5248756807.69f9060dc91f3.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/ced8cf248756807.69f9060ac877c.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/892278248756807.69f9060ac836b.jpg",
    ],
  },
  bathroom: {
    url: "https://www.behance.net/gallery/248996559/Modern-Bathroom",
    summary: {
      en: "A dark, intimate bathroom that feels like a personal spa through functional minimalism and rich textures.",
      ru: "Темная камерная ванная, которая ощущается как личный спа-пространство благодаря функциональному минимализму и богатым фактурам.",
      es: "Un baño oscuro e íntimo que se siente como un spa personal gracias al minimalismo funcional y las texturas ricas.",
    },
    highlights: {
      en: ["Spa feeling", "Dark textures", "Floating vanity", "Minimal details"],
      ru: ["Спа-ощущение", "Темные фактуры", "Парящая тумба", "Минимум деталей"],
      es: ["Sensación de spa", "Texturas oscuras", "Lavabo flotante", "Detalles mínimos"],
    },
    intro: {
      en: "This bathroom uses a deep palette, clear zoning, and soft greenery to keep the room balanced and calm.",
      ru: "Ванная держится на глубокой палитре, четком зонировании и мягких зеленых акцентах, чтобы пространство оставалось спокойным.",
      es: "Este baño usa una paleta profunda, zonificación clara y vegetación suave para mantener el equilibrio y la calma.",
    },
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/4215ba248996559.69fdc52233064.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/de1570248996559.69fdc52233527.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/d5b5b8248996559.69fdc5223391d.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/540fec248996559.69fdc52233c91.jpg",
    ],
  },
  nude: {
    url: "https://www.behance.net/gallery/249589713/Nude-Elegance-Bedroom",
    summary: {
      en: "A serene bedroom for a modern woman, designed around calm luxury, soft light, and layered tactility.",
      ru: "Спокойная спальня для современной женщины, выстроенная вокруг тихой роскоши, мягкого света и многослойной тактильности.",
      es: "Un dormitorio sereno para una mujer moderna, basado en el lujo tranquilo, la luz suave y la tactilidad en capas.",
    },
    highlights: {
      en: ["Calm luxury", "Soft lighting", "Tinted glass wardrobe", "Low-profile bed"],
      ru: ["Тихая роскошь", "Мягкий свет", "Шкаф с тонированным стеклом", "Низкая кровать"],
      es: ["Lujo silencioso", "Luz suave", "Armario con vidrio tintado", "Cama baja"],
    },
    intro: {
      en: "The palette stays sand, mocha, and powder beige so the room feels enveloping and restful.",
      ru: "Палитра держится на песочных, кофейных и пудровых бежевых оттенках, чтобы комната ощущалась обволакивающей и расслабляющей.",
      es: "La paleta se basa en tonos arena, moka y beige empolvado para que la estancia se sienta envolvente y reparadora.",
    },
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c75ca7249589713.6a0b43021e1ce.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5c3ad8249589713.6a0b430130b9e.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp_webp/f8fa50249589713.6a0b4301307b6.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/4b04eb249589713.6a0b43021e65b.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/fdeea3249589713.6a0b43021eab0.png",
    ],
  },
  history: {
    url: "https://www.behance.net/gallery/249659979/Elegance-of-History-Apartment-in-La-Casa-Domenec-Coll",
    summary: {
      en: "A contemporary apartment inside a historic Barcelona building, where soft minimalism respects the original soul of the architecture.",
      ru: "Современные апартаменты внутри исторического здания Барселоны, где мягкий минимализм уважает оригинальную архитектуру.",
      es: "Un apartamento contemporáneo dentro de un edificio histórico de Barcelona, donde el minimalismo suave respeta el alma original de la arquitectura.",
    },
    highlights: {
      en: ["Heritage context", "Warm monochrome", "Restored moldings", "Soft minimalism"],
      ru: ["Исторический контекст", "Теплый монохром", "Восстановленная лепнина", "Мягкий минимализм"],
      es: ["Contexto histórico", "Monocromo cálido", "Molduras restauradas", "Minimalismo suave"],
    },
    intro: {
      en: "The project preserves the volume and atmosphere of 1886 while updating it for contemporary living.",
      ru: "Проект сохраняет объем и атмосферу 1886 года, при этом адаптируя пространство к современной жизни.",
      es: "El proyecto preserva el volumen y la atmósfera de 1886 mientras lo adapta a la vida contemporánea.",
    },
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a78482249659979.6a0c9f029de39.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/da9f37249659979.6a0c9f029d947.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a2e6c8249659979.6a0c9f02f3554.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/6b16d2249659979.6a0c9f02f3181.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/91ff11249659979.6a0c9f05e6056.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/0e9a26249659979.6a0c9f0373933.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/00ec29249659979.6a0c9f0373fff.jpg",
    ],
  },
  chocolate: {
    url: "https://www.behance.net/gallery/249884153/CHOCOLATE-SUITE",
    summary: {
      en: "A luxurious suite in dark chocolate tones, designed to connect the bedroom and bathroom into one atmospheric retreat.",
      ru: "Роскошный сьют в темных шоколадных оттенках, где спальня и ванная соединены в единую атмосферную историю.",
      es: "Una suite de lujo en tonos chocolate oscuro, donde dormitorio y baño se unen en un retiro atmosférico.",
    },
    highlights: {
      en: ["Dark luxury", "Connected suite", "Organic bathtub", "Warm stone"],
      ru: ["Темная роскошь", "Единый сьют", "Органичная ванна", "Теплый камень"],
      es: ["Lujo oscuro", "Suite conectada", "Bañera orgánica", "Piedra cálida"],
    },
    intro: {
      en: "This suite leans into rich textures and sculptural bathroom elements to feel intimate and premium.",
      ru: "Сьют опирается на богатые фактуры и скульптурные элементы ванной, чтобы ощущаться камерно и премиально.",
      es: "La suite apuesta por texturas ricas y elementos esculturales en el baño para sentirse íntima y premium.",
    },
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/045765249884153.6a15a120a7147.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/3adc3e249884153.6a15a11fe8fc8.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/7237b0249884153.6a15a11fe8a02.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9a83cd249884153.6a1185b40dafc.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/a89a03249884153.6a15a12055005.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/0e1cd2249884153.6a1185b4c73a3.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/d9e95b249884153.6a1185b46a636.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9371eb249884153.6a1185b46aa8e.jpg",
    ],
  },
  japandi: {
    url: "https://www.behance.net/gallery/250051375/WARM-JAPANDI",
    summary: {
      en: "A bright Japandi renovation for a family hub that blurs the line between indoor living and the garden.",
      ru: "Светлая Japandi-реконструкция для семейного центра дома, стирающая грань между интерьером и садом.",
      es: "Una renovación Japandi luminosa para el corazón familiar de la casa, difuminando el límite entre interior y jardín.",
    },
    highlights: {
      en: ["Open kitchen-living", "Panoramic glazing", "Natural oak", "Quiet luxury"],
      ru: ["Открытая кухня-гостиная", "Панорамное остекление", "Натуральный дуб", "Тихая роскошь"],
      es: ["Cocina-salón abierta", "Cristalería panorámica", "Roble natural", "Lujo silencioso"],
    },
    intro: {
      en: "The materials stay tactile and durable, while the room flows directly into the surrounding landscape.",
      ru: "Материалы остаются тактильными и долговечными, а пространство плавно переходит в окружающий ландшафт.",
      es: "Los materiales se mantienen táctiles y duraderos, mientras el espacio fluye directamente hacia el paisaje circundante.",
    },
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/87b1b5250051375.6a15ca01d1abc.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/2d644e250051375.6a15ca007c080.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/cda14f250051375.6a15ca007c7e3.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/1d0925250051375.6a15ca00f089e.jpg",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/efa11c250051375.6a15ca00f0e9b.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/644452250051375.6a15ca016c564.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5481be250051375.6a15ca016c14a.jpg",
    ],
  },
};

function getProjectDescription(detail, locale) {
  if (!detail) return "";
  if (typeof detail.description === "string" && detail.description) {
    return detail.description;
  }
  if (detail.summary && typeof detail.summary === "object") {
    return detail.summary[locale] || detail.summary.en || "";
  }
  if (detail.intro && typeof detail.intro === "object") {
    return detail.intro[locale] || detail.intro.en || "";
  }
  return "";
}

function getProjectGallery(detail) {
  if (!detail) return [];
  if (Array.isArray(detail.modules) && detail.modules.length) {
    return detail.modules.flatMap((module) => {
      if (module.type === "ImageModule" && module.image) {
        return [module.image];
      }
      if (module.type === "MediaCollectionModule" && Array.isArray(module.images)) {
        return module.images.filter(Boolean);
      }
      return [];
    });
  }
  return detail.gallery ?? [];
}

function sanitizeBehanceText(html) {
  if (!html) return "";
  const template = document.createElement("template");
  template.innerHTML = html;
  template.content.querySelectorAll("[style]").forEach((node) => node.removeAttribute("style"));
  template.content.querySelectorAll("[class]").forEach((node) => {
    const classes = node.className
      .split(/\s+/)
      .filter(Boolean)
      .filter((cls) => !cls.startsWith("texteditor-inline-"));

    if (classes.length) {
      node.className = classes.join(" ");
    } else {
      node.removeAttribute("class");
    }
  });
  return template.innerHTML;
}

function renderProjectModules(detail, project) {
  const modules = Array.isArray(detail.modules) ? detail.modules : [];
  if (!modules.length) {
    return getProjectGallery(detail)
      .map(
        (src, index) => `
          <button type="button" class="project-modal__figure project-modal__figure--inline" data-image-index="${index}">
            <img src="${src}" alt="${project.title} image ${index + 1}" loading="lazy" />
          </button>
        `
      )
      .join("");
  }

  let imageIndex = 0;
  return modules
    .map((module) => {
      if (module.type === "TextModule" && module.text) {
        return `
          <section class="project-modal__module project-modal__module--text">
            ${sanitizeBehanceText(module.text)}
          </section>
        `;
      }

      if (module.type === "ImageModule" && module.image) {
        const currentIndex = imageIndex;
        imageIndex += 1;
        return `
          <button type="button" class="project-modal__figure project-modal__figure--inline" data-image-index="${currentIndex}">
            <img src="${module.image}" alt="${project.title} image ${currentIndex + 1}" loading="lazy" />
          </button>
        `;
      }

      if (module.type === "MediaCollectionModule" && Array.isArray(module.images) && module.images.length) {
        const collection = module.images
          .filter(Boolean)
          .map((src) => {
            const currentIndex = imageIndex;
            imageIndex += 1;
            return `
              <button type="button" class="project-modal__figure project-modal__figure--inline" data-image-index="${currentIndex}">
                <img src="${src}" alt="${project.title} image ${currentIndex + 1}" loading="lazy" />
              </button>
            `;
          })
          .join("");

        return `
          <div class="project-modal__collection">
            ${collection}
          </div>
        `;
      }

      return "";
    })
    .join("");
}

const i18n = {
  en: {
    navAbout: "About",
    navWorks: "Works",
    navApproach: "Approach",
    navExperiences: "Experiences",
    navContact: "Contact",
    aboutEyebrow: "Sobre nosotros",
    aboutTitle: "We create interiors that feel personal and timeless",
    aboutText1:
      "At olinteriors, we create thoughtful interiors that reflect the personality, lifestyle, and aspirations of the people who live in them.",
    aboutText2:
      "We believe that great design goes beyond aesthetics. Every project begins with understanding our clients - how they live, what inspires them, and what they need from their space.",
    aboutText3:
      "By combining creativity, functionality, and attention to detail, we transform homes into places that feel authentic, comfortable, and timeless.",
    aboutText4:
      "Based in Spain and working with clients from different backgrounds and cultures, we bring a personalized approach to every project, creating interiors that are elegant, practical, and deeply connected to those who inhabit them.",
    approachEyebrow: "Nuestro enfoque",
    approachTitle: "Every successful interior starts with listening",
    approachOneTitle: "We begin by listening",
    approachOneText: "Every successful interior starts with listening.",
    approachTwoTitle: "Purposeful decisions",
    approachTwoText:
      "We take the time to understand your vision, lifestyle, and goals before developing a design concept tailored specifically to you.",
    approachThreeTitle: "Guided collaboration",
    approachThreeText:
      "Our process is collaborative, transparent, and detail-oriented. We guide our clients through every stage of the project, ensuring a smooth experience.",
    approachFourTitle: "Beauty and long-term value",
    approachFourText:
      "The outcome is more than a well-designed interior - it is a space that feels natural, inspiring, and uniquely yours.",
    experiencesEyebrow: "Experiencias de clientes",
    experiencesTitle: "What clients say",
    testimonial1:
      '"Working with olinteriors was an exceptional experience. Every detail was carefully considered, and the final result exceeded our expectations."',
    testimonial2:
      '"Olga understood exactly how we wanted our home to feel. The design is beautiful, functional, and perfectly suited to our lifestyle."',
    testimonial3:
      '"Professional, creative, and incredibly attentive throughout the entire process. We felt supported from the first meeting to the final installation."',
    testimonial4:
      '"The project was delivered with outstanding attention to detail and a clear understanding of our vision. We couldn\'t be happier with the result."',
    heroEyebrow: "Interior design portfolio",
    heroTitle:
      "A minimalist portfolio of interior stories where light, texture, and silence work as one composition.",
    heroText:
      "The site is built around six selected Behance projects. I arranged them in a calm editorial presentation so the visuals read soft, clean, and confident.",
    heroCtaPrimary: "View projects",
    heroCtaSecondary: "Discuss the site",
    statProjectsLabel: "Projects",
    statStyleLabel: "Style",
    statStyleValue: "Minimalism + warm luxury",
    statLocationLabel: "Location",
    statLocationValue: "Barcelona",
    spotlightEyebrow: "Last project",
    spotlightTitle: "Featured project",
    spotlightCta: "See full project",
    heroVisualLabel: "Selected works",
    heroVisualCopy: "A quiet, warm, architectural aesthetic without extra noise.",
    heroMiniOneLabel: "Bathroom",
    heroMiniOneCopy: "Modern / clean / calm",
    heroMiniTwoLabel: "Bedroom",
    heroMiniTwoCopy: "Warm / soft / tactile",
    introText:
      "This layout is designed as a minimalist portfolio site: premium project presentation, calm typography, and a simple language switch.",
    worksEyebrow: "Behance selection",
    worksTitle: "Selected projects",
    approachEyebrow: "Visual direction",
    approachTitle: "Working styles",
    approachOneTitle: "Calm rhythm",
    approachOneText:
      "Lots of breathing room, generous spacing, card rhythm, and a very soft visual hierarchy.",
    approachTwoTitle: "Warm palette",
    approachTwoText:
      "Neutral tones, thin outlines, and bright texture to support the interior renders.",
    approachThreeTitle: "Three languages",
    approachThreeText:
      "The EN / RU / ES switch updates all key copy and persists after reopening the site.",
    contactEyebrow: "Contact",
    contactTitle: "olinteriors",
    contactText: "For projects, consultations, and new work.",
    contactInstagramLabel: "Instagram",
    contactWhatsAppLabel: "WhatsApp",
    contactEmailLabel: "Email",
  },
  ru: {
    navAbout: "О нас",
    navWorks: "Работы",
    navApproach: "Подход",
    navExperiences: "Отзывы",
    navContact: "Контакт",
    aboutEyebrow: "О нас",
    aboutTitle: "Мы создаём интерьеры, в которых хочется жить",
    aboutText1:
      "В olinteriors мы создаём вдумчивые интерьеры, которые отражают личность, образ жизни и стремления людей, которые в них живут.",
    aboutText2:
      "Мы считаем, что хороший дизайн не ограничивается эстетикой. Каждый проект начинается с понимания клиента - как он живет, что его вдохновляет и что ему нужно от пространства.",
    aboutText3:
      "Сочетая креативность, функциональность и внимание к деталям, мы превращаем дома в места, которые ощущаются аутентичными, комфортными и вне времени.",
    aboutText4:
      "Работая из Испании с клиентами из разных стран и культур, мы подходим к каждому проекту персонально и создаём интерьеры, которые одновременно элегантны, практичны и глубоко связаны с теми, кто в них живет.",
    approachEyebrow: "Наш подход",
    approachTitle: "Стили работы",
    approachOneTitle: "Сначала слушаем",
    approachOneText: "Every successful interior starts with listening.",
    approachTwoTitle: "Решения с целью",
    approachTwoText:
      "Мы уделяем время тому, чтобы понять ваше видение, образ жизни и цели, прежде чем разрабатывать концепцию, созданную именно для вас.",
    approachThreeTitle: "Совместная работа",
    approachThreeText:
      "Наш процесс - это сотрудничество, прозрачность и внимание к деталям. Мы сопровождаем клиента на каждом этапе проекта, обеспечивая спокойный и понятный путь.",
    approachFourTitle: "Красота и долгосрочная ценность",
    approachFourText:
      "Результат - это больше, чем просто хорошо спроектированный интерьер. Это пространство, которое ощущается естественным, вдохновляющим и по-настоящему вашим.",
    experiencesEyebrow: "Отзывы клиентов",
    experiencesTitle: "Что говорят клиенты",
    testimonial1:
      '"Работа с olinteriors была исключительным опытом. Каждая деталь была тщательно продумана, а итог превзошел наши ожидания."',
    testimonial2:
      '"Ольга точно поняла, каким мы хотели видеть наш дом. Дизайн получился красивым, функциональным и идеально соответствующим нашему образу жизни."',
    testimonial3:
      '"Профессионально, креативно и невероятно внимательно на протяжении всего процесса. Мы чувствовали поддержку от первой встречи до финальной установки."',
    testimonial4:
      '"Проект был выполнен с выдающимся вниманием к деталям и ясным пониманием нашего видения. Мы не могли бы быть счастливее с результатом."',
    heroEyebrow: "Портфолио интерьерного дизайна",
    heroTitle:
      "Минималистичный портфель интерьерных историй, где свет, фактура и тишина работают как единая композиция.",
    heroText:
      "Основа сайта — шесть отобранных проектов с Behance. Я собрал их в спокойную редакционную подачу, чтобы визуалы звучали мягко, чисто и уверенно.",
    heroCtaPrimary: "Смотреть проекты",
    heroCtaSecondary: "Обсудить сайт",
    statProjectsLabel: "Проекты",
    statStyleLabel: "Стиль",
    statStyleValue: "Минимализм + тёплая роскошь",
    statLocationLabel: "Локация",
    statLocationValue: "Barcelona",
    spotlightEyebrow: "Последний проект",
    spotlightTitle: "Главный проект",
    spotlightCta: "Смотреть проект",
    heroVisualLabel: "Избранные проекты",
    heroVisualCopy: "Тихая, теплая, архитектурная эстетика без лишнего шума.",
    heroMiniOneLabel: "Ванная",
    heroMiniOneCopy: "Современно / чисто / спокойно",
    heroMiniTwoLabel: "Спальня",
    heroMiniTwoCopy: "Тепло / мягко / тактильно",
    introText:
      "Этот макет сделан как минималистичный portfolio site: акцент на премиальной подаче проектов, спокойной типографике и удобном переключении языка.",
    worksEyebrow: "Выбор Behance",
    worksTitle: "Выбранные проекты",
    approachEyebrow: "Визуальное направление",
    approachTitle: "Стили работы",
    approachOneTitle: "Спокойный ритм",
    approachOneText:
      "Много воздуха, крупные поля, ритм карточек и очень мягкая визуальная иерархия.",
    approachTwoTitle: "Теплая палитра",
    approachTwoText:
      "Нейтральные оттенки, тонкие контуры и светлая фактура, чтобы подчеркнуть интерьерные рендеры.",
    approachThreeTitle: "Два языка",
    approachThreeText:
      "Переключение EN / RU / ES меняет все основные тексты и сохраняется при повторном открытии.",
    contactEyebrow: "Контакты",
    contactTitle: "olinteriors",
    contactText: "Связь для проектов, консультаций и новых задач.",
    contactInstagramLabel: "Instagram",
    contactWhatsAppLabel: "WhatsApp",
    contactEmailLabel: "Почта",
  },
  es: {
    navAbout: "Nosotros",
    navWorks: "Proyectos",
    navApproach: "Enfoque",
    navExperiences: "Opiniones",
    navContact: "Contacto",
    aboutEyebrow: "About Us",
    aboutTitle: "Creamos interiores que se sienten personales y atemporales",
    aboutText1:
      "En olinteriors creamos interiores reflexivos que reflejan la personalidad, el estilo de vida y las aspiraciones de las personas que los habitan.",
    aboutText2:
      "Creemos que un gran diseño va más allá de la estética. Cada proyecto comienza entendiendo a nuestros clientes - cómo viven, qué les inspira y qué necesitan de su espacio.",
    aboutText3:
      "Combinando creatividad, funcionalidad y atención al detalle, transformamos hogares en lugares auténticos, cómodos y atemporales.",
    aboutText4:
      "Con sede en España y trabajando con clientes de distintos orígenes y culturas, aportamos un enfoque personalizado a cada proyecto, creando interiores elegantes, prácticos y profundamente conectados con quienes los habitan.",
    approachEyebrow: "Our Approach",
    approachTitle: "Estilos de trabajo",
    approachOneTitle: "Empezamos escuchando",
    approachOneText: "Every successful interior starts with listening.",
    approachTwoTitle: "Decisiones con propósito",
    approachTwoText:
      "Nos tomamos el tiempo necesario para entender tu visión, estilo de vida y objetivos antes de desarrollar un concepto de diseño adaptado específicamente a ti.",
    approachThreeTitle: "Colaboración guiada",
    approachThreeText:
      "Nuestro proceso es colaborativo, transparente y muy atento al detalle. Acompañamos a nuestros clientes en cada etapa del proyecto, asegurando una experiencia fluida.",
    approachFourTitle: "Belleza y valor duradero",
    approachFourText:
      "El resultado es más que un interior bien diseñado: es un espacio que se siente natural, inspirador y completamente tuyo.",
    experiencesEyebrow: "Client Experiences",
    experiencesTitle: "Lo que dicen los clientes",
    testimonial1:
      '"Trabajar con olinteriors fue una experiencia excepcional. Cada detalle fue cuidadosamente considerado y el resultado final superó nuestras expectativas."',
    testimonial2:
      '"Olga entendió exactamente cómo queríamos que se sintiera nuestro hogar. El diseño es hermoso, funcional y perfectamente adaptado a nuestro estilo de vida."',
    testimonial3:
      '"Profesionales, creativos e increíblemente atentos durante todo el proceso. Nos sentimos acompañados desde la primera reunión hasta la instalación final."',
    testimonial4:
      '"El proyecto se entregó con una atención al detalle extraordinaria y una comprensión clara de nuestra visión. No podríamos estar más felices con el resultado."',
    heroEyebrow: "Portafolio de interiorismo",
    heroTitle:
      "Un portfolio minimalista de historias interiores, donde luz, textura y silencio funcionan como una sola composición.",
    heroText:
      "La base del sitio son seis proyectos seleccionados de Behance. Los organicé en una presentación editorial tranquila para que los visuales se lean suaves, limpios y seguros.",
    heroCtaPrimary: "Ver proyectos",
    heroCtaSecondary: "Hablar del sitio",
    statProjectsLabel: "Proyectos",
    statStyleLabel: "Estilo",
    statStyleValue: "Minimalismo + lujo cálido",
    statLocationLabel: "Ubicación",
    statLocationValue: "Barcelona",
    spotlightEyebrow: "Último proyecto",
    spotlightTitle: "Proyecto destacado",
    spotlightCta: "Ver proyecto",
    heroVisualLabel: "Trabajos seleccionados",
    heroVisualCopy: "Una estética arquitectónica, cálida y silenciosa, sin ruido extra.",
    heroMiniOneLabel: "Baño",
    heroMiniOneCopy: "Moderno / limpio / sereno",
    heroMiniTwoLabel: "Dormitorio",
    heroMiniTwoCopy: "Cálido / suave / táctil",
    introText:
      "Este diseño está pensado como un portfolio minimalista: foco en una presentación premium, tipografía serena y un cambio de idioma cómodo.",
    worksEyebrow: "Selección de Behance",
    worksTitle: "Proyectos elegidos",
    approachEyebrow: "Dirección visual",
    approachTitle: "Estilos de trabajo",
    approachOneTitle: "Ritmo tranquilo",
    approachOneText:
      "Mucho aire, márgenes amplios, ritmo de tarjetas y una jerarquía visual muy suave.",
    approachTwoTitle: "Paleta cálida",
    approachTwoText:
      "Tonos neutros, contornos finos y una textura luminosa para resaltar los renders de interior.",
    approachThreeTitle: "Dos idiomas",
    approachThreeText:
      "El cambio EN / RU / ES actualiza todos los textos principales y se conserva al volver a abrir el sitio.",
    contactEyebrow: "Contacto",
    contactTitle: "olinteriors",
    contactText: "Para proyectos, consultas y nuevos trabajos.",
    contactInstagramLabel: "Instagram",
    contactWhatsAppLabel: "WhatsApp",
    contactEmailLabel: "Correo",
  },
};

const grid = document.getElementById("projectsGrid");
const spotlightCard = document.getElementById("spotlightCard");
const langButtons = Array.from(document.querySelectorAll(".lang-btn"));
const textNodes = Array.from(document.querySelectorAll("[data-i18n]"));
const projectModal = document.getElementById("projectModal");
const projectModalContent = document.getElementById("projectModalContent");
const imageViewer = document.getElementById("imageViewer");
const imageViewerImage = document.getElementById("imageViewerImage");
const imageViewerCounter = document.getElementById("imageViewerCounter");
const closeProjectButtons = Array.from(document.querySelectorAll("[data-close-project]"));
const closeImageViewerButtons = Array.from(document.querySelectorAll("[data-close-image-viewer]"));
const prevImageButtons = Array.from(document.querySelectorAll("[data-image-prev]"));
const nextImageButtons = Array.from(document.querySelectorAll("[data-image-next]"));
const backToTopButton = document.querySelector(".back-to-top");
let activeProjectKey = null;
let activeGalleryIndex = 0;

function readStoredLanguage() {
  try {
    return localStorage.getItem("ol-interiors-lang");
  } catch {
    return null;
  }
}

function writeStoredLanguage(locale) {
  try {
    localStorage.setItem("ol-interiors-lang", locale);
  } catch {
    // Ignore storage failures in restrictive browser contexts.
  }
}

function renderProjects(locale) {
  const markup = projects
    .map((project, index) => {
        const previewSrc = getProjectGallery(projectDetails[project.key])?.[0];
        return `
        <button type="button" class="project-card ${index === 0 ? "is-featured" : ""}" data-project-key="${project.key}" style="--tone-start:${project.toneStart}; --tone-end:${project.toneEnd};">
          <div class="project-media">
            ${previewSrc ? `<img class="project-media__image" src="${previewSrc}" alt="${project.title} preview" loading="lazy" />` : ""}
            <div class="project-media__overlay"></div>
            <div class="project-media__label">${project.year}</div>
          </div>
          <div class="project-content">
            <div class="project-content__meta">
              <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
              <span class="project-kicker">${project.category[locale]} · ${project.location[locale]}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.copy[locale]}</p>
            <div class="project-foot">
              ${project.chips[locale].map((chip) => `<span class="pill">${chip}</span>`).join("")}
            </div>
          </div>
        </button>
      `;
    })
    .join("");

  grid.innerHTML = markup;
}

function renderSpotlight(locale) {
  if (!spotlightCard) return;
  const project = projects[0];
  const detail = projectDetails[project.key];
  const gallery = getProjectGallery(detail).slice(0, 4);
  const description = getProjectDescription(detail, locale);

  spotlightCard.innerHTML = `
    <div class="spotlight-card__copy">
      <div class="spotlight-card__eyebrow">${project.category[locale]} · ${project.location[locale]}</div>
      <h3>${project.title}</h3>
      <p class="spotlight-card__lead">${description}</p>
      <p class="spotlight-card__body">${project.copy[locale]}</p>
      <div class="spotlight-card__chips">
        ${project.chips[locale].slice(0, 2).map((chip) => `<span class="pill">${chip}</span>`).join("")}
      </div>
      <button type="button" class="button button-secondary spotlight-card__cta" data-project-key="${project.key}">${i18n[locale].spotlightCta}</button>
    </div>

    <div class="spotlight-card__visuals">
      <figure class="spotlight-card__figure spotlight-card__figure--main" data-project-key="${project.key}">
        <img src="${gallery[0]}" alt="${project.title} preview 1" loading="lazy" />
      </figure>
      <div class="spotlight-card__stack">
        ${gallery.slice(1).map((src, index) => `
          <figure class="spotlight-card__figure spotlight-card__figure--small" data-project-key="${project.key}">
            <img src="${src}" alt="${project.title} preview ${index + 2}" loading="lazy" />
          </figure>
        `).join("")}
      </div>
    </div>
  `;
}

function renderProjectModal(locale, key) {
  const project = projects.find((item) => item.key === key);
  const detail = projectDetails[key];
  if (!project || !detail) return;
  closeImageViewer();
  const description = getProjectDescription(detail, locale);
  const moduleHtml = renderProjectModules(detail, project);

  projectModalContent.innerHTML = `
    <div class="project-modal__intro">
      <div class="project-modal__hero">
        <div class="project-modal__eyebrow">${project.category[locale]} · ${project.location[locale]}</div>
        <h2 id="projectModalTitle">${project.title}</h2>
        <p class="project-modal__lead">${description}</p>

        <div class="project-modal__chips">
          ${project.chips[locale].map((chip) => `<span class="pill">${chip}</span>`).join("")}
        </div>

        <div class="project-modal__actions">
          <a class="button button-primary" href="${detail.url}" target="_blank" rel="noreferrer">${locale === "ru" ? "Открыть в Behance" : locale === "es" ? "Abrir en Behance" : "Open on Behance"}</a>
          <button class="button button-secondary" type="button" data-close-project>${locale === "ru" ? "Закрыть" : locale === "es" ? "Cerrar" : "Close"}</button>
        </div>
      </div>
    </div>

    <div class="project-modal__article">
      ${moduleHtml}
    </div>
  `;

  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  activeProjectKey = key;
  activeGalleryIndex = 0;
}

function closeProjectModal() {
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  projectModalContent.innerHTML = "";
  activeProjectKey = null;
  closeImageViewer();
}

function renderImageViewer(locale) {
  if (!activeProjectKey) return;
  const detail = projectDetails[activeProjectKey];
  const project = projects.find((item) => item.key === activeProjectKey);
  if (!detail || !project) return;

  const gallery = getProjectGallery(detail);
  const src = gallery[activeGalleryIndex];
  imageViewerImage.src = src;
  imageViewerImage.alt = `${project.title} image ${activeGalleryIndex + 1}`;
  imageViewerCounter.textContent = `${String(activeGalleryIndex + 1).padStart(2, "0")} / ${String(gallery.length).padStart(2, "0")}`;
  imageViewer.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeImageViewer() {
  imageViewer.setAttribute("aria-hidden", "true");
  imageViewerImage.removeAttribute("src");
  imageViewerImage.alt = "";
}

function stepImage(delta) {
  if (!activeProjectKey) return;
  const detail = projectDetails[activeProjectKey];
  if (!detail) return;
  const gallery = getProjectGallery(detail);
  if (!gallery.length) return;
  activeGalleryIndex = (activeGalleryIndex + delta + gallery.length) % gallery.length;
  renderImageViewer(document.documentElement.lang);
}

function updateBackToTopVisibility() {
  if (!backToTopButton) return;
  const shouldShow = window.scrollY > 420;
  backToTopButton.classList.toggle("is-visible", shouldShow);
  backToTopButton.setAttribute("aria-hidden", String(!shouldShow));
}

function setLanguage(locale) {
  const dict = i18n[locale] ?? i18n.en;

  document.documentElement.lang = locale;

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = dict[key];
    if (value) {
      node.textContent = value;
    }
  });

  langButtons.forEach((button) => {
    const active = button.dataset.lang === locale;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  writeStoredLanguage(locale);
  renderProjects(locale);
  renderSpotlight(locale);

  if (activeProjectKey) {
    renderProjectModal(locale, activeProjectKey);
  }
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const savedLanguage = readStoredLanguage();
const initialLanguage = ["en", "ru", "es"].includes(savedLanguage) ? savedLanguage : "ru";

setLanguage(initialLanguage);

grid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-project-key]");
  if (!card) return;
  renderProjectModal(document.documentElement.lang, card.dataset.projectKey);
});

if (spotlightCard) {
  spotlightCard.addEventListener("click", (event) => {
    const target = event.target.closest("[data-project-key]");
    if (!target) return;
    renderProjectModal(document.documentElement.lang, target.dataset.projectKey);
  });
}

projectModal.addEventListener("click", (event) => {
  const imageButton = event.target.closest("[data-image-index]");
  if (imageButton) {
    activeGalleryIndex = Number(imageButton.dataset.imageIndex || 0);
    renderImageViewer(document.documentElement.lang);
    return;
  }
  if (event.target.matches("[data-close-project]")) {
    closeProjectModal();
  }
});

closeProjectButtons.forEach((button) => {
  button.addEventListener("click", closeProjectModal);
});

closeImageViewerButtons.forEach((button) => {
  button.addEventListener("click", closeImageViewer);
});

prevImageButtons.forEach((button) => {
  button.addEventListener("click", () => stepImage(-1));
});

nextImageButtons.forEach((button) => {
  button.addEventListener("click", () => stepImage(1));
});

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
updateBackToTopVisibility();

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && imageViewer.getAttribute("aria-hidden") === "false") {
    stepImage(-1);
  }
  if (event.key === "ArrowRight" && imageViewer.getAttribute("aria-hidden") === "false") {
    stepImage(1);
  }
  if (event.key === "Escape" && imageViewer.getAttribute("aria-hidden") === "false") {
    closeImageViewer();
    return;
  }
  if (event.key === "Escape" && activeProjectKey) {
    closeProjectModal();
  }
});
