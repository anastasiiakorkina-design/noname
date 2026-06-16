const translations = {
  en: {
    nav: { events: "Events", experience: "Experience", gallery: "Gallery", community: "Community", reserve: "Reserve" },
    hero: {
      eyebrow: "PRIVATE EVENTS · LONDON",
      title: "London&rsquo;s Most<br>Exclusive Social Events",
      sub: "Curated private parties, networking evenings, rooftop gatherings and unforgettable nights for ambitious, stylish people.",
      cta1: "Reserve Your Place",
      cta2: "Upcoming Events",
      stat1: "Community Members",
      stat2: "Guests Per Event",
      stat3num: "London",
      stat3: "Premium Social Scene"
    },
    timeline: {
      eyebrow: "THE EXPERIENCE",
      title: "A Night in London",
      t1: "8:00 PM", h1: "Champagne Reception", p1: "Arrive in style. First pour, first impressions.",
      t2: "9:30 PM", h2: "Meet New People", p2: "Curated guest lists. Conversations that matter.",
      t3: "11:00 PM", h3: "Live DJ Experience", p3: "The room shifts. The night begins.",
      t4: "1:00 AM", h4: "VIP Afterparty", p4: "Where the unforgettable nights are made."
    },
    events: {
      eyebrow: "UPCOMING",
      title: "This Season&rsquo;s Editorial",
      labelDate: "Date", labelLocation: "Location", labelAttendance: "Attendance", labelDress: "Dress Code",
      reserve: "Reserve",
      e1: { tag: "SUMMER SEASON", title: "The Aubrey Summer Party", date: "20 June", location: "The Aubrey, Knightsbridge", attendance: "200+ guests", dress: "Smart, Must Have ID 18+" },
      e2: { tag: "ROOFTOP", title: "Amano Rooftop Night", date: "13 June", location: "Drury House, Covent Garden", attendance: "200 guests", dress: "Stylish Summer, ID 18+" },
      e3: { tag: "SIGNATURE", title: "White Party London", date: "TBA", location: "Mayfair, Private Venue", attendance: "250+ guests", dress: "All White" },
      e4: { tag: "INVITE ONLY", title: "Secret Mayfair Gathering", date: "Revealed 48hrs prior", location: "Undisclosed, Mayfair", attendance: "Limited to 120", dress: "Black Tie Optional" }
    },
    experience: {
      h1: "Private Events", p1: "Closed-door gatherings designed for the discerning few, never the masses.",
      h2: "Premium Venues", p2: "London&rsquo;s most coveted addresses — rooftops, private members&rsquo; clubs, hidden lounges.",
      h3: "Curated Guest List", p3: "Every name considered. Every room balanced. Quality, never quantity.",
      h4: "Meaningful Connections", p4: "Friendships, partnerships, romances — built in rooms made for connection.",
      h5: "Exclusive Community", p5: "11,000+ members. One standard. London&rsquo;s most stylish social circle."
    },
    gallery: { eyebrow: "MEMORIES", title: "A Season in Review" },
    community: {
      eyebrow: "VOICES", title: "The Wall of Memories",
      c1: "\"Met my business partner here.\"",
      c2: "\"My favourite London community.\"",
      c3: "\"Every event feels different.\"",
      c4: "\"Best people, best atmosphere.\""
    },
    numbers: { l1: "Community Members", l2: "Guests Per Event", l3: "Exclusive Events", l4: "Experience Rating" },
    cta: {
      title: "Ready For Your Next<br>Unforgettable Night?",
      sub: "Join London&rsquo;s fastest-growing premium social community.",
      cta1: "Reserve Event", cta2: "Join Community"
    },
    footer: {
      desc: "Party and entertainment service. Closed private events in London.",
      connect: "Connect", instagram: "Instagram", telegram: "Telegram", whatsapp: "WhatsApp",
      newsletter: "Newsletter", email: "Your email", join: "Join",
      copy: "© 2026 NONAME LONDON. All rights reserved."
    }
  },
  ru: {
    nav: { events: "События", experience: "Опыт", gallery: "Галерея", community: "Сообщество", reserve: "Бронь" },
    hero: {
      eyebrow: "ЗАКРЫТЫЕ ВЕЧЕРИНКИ · ЛОНДОН",
      title: "Самые эксклюзивные<br>светские события Лондона",
      sub: "Закрытые вечеринки, нетворкинг-вечера, ужины на крышах и незабываемые ночи для амбициозных, стильных людей.",
      cta1: "Забронировать место",
      cta2: "Ближайшие события",
      stat1: "Участников сообщества",
      stat2: "Гостей на событии",
      stat3num: "Лондон",
      stat3: "Премиальная светская жизнь"
    },
    timeline: {
      eyebrow: "АТМОСФЕРА",
      title: "Ночь в Лондоне",
      t1: "20:00", h1: "Шампанское-прием", p1: "Прибытие в стиле. Первый бокал, первое впечатление.",
      t2: "21:30", h2: "Новые знакомства", p2: "Отобранный гостевой лист. Разговоры, которые имеют значение.",
      t3: "23:00", h3: "Живой DJ-сет", p3: "Атмосфера меняется. Ночь начинается.",
      t4: "01:00", h4: "VIP-афтепати", p4: "Здесь рождаются незабываемые ночи."
    },
    events: {
      eyebrow: "БЛИЖАЙШИЕ",
      title: "Редакция этого сезона",
      labelDate: "Дата", labelLocation: "Место", labelAttendance: "Гостей", labelDress: "Дресс-код",
      reserve: "Забронировать",
      e1: { tag: "ЛЕТНИЙ СЕЗОН", title: "Летняя вечеринка The Aubrey", date: "20 июня", location: "The Aubrey, Найтсбридж", attendance: "200+ гостей", dress: "Смарт, обязательно ID 18+" },
      e2: { tag: "РУФТОП", title: "Вечер на крыше Amano", date: "13 июня", location: "Drury House, Ковент-Гарден", attendance: "200 гостей", dress: "Стильный летний, ID 18+" },
      e3: { tag: "ФИРМЕННОЕ", title: "White Party London", date: "Скоро объявим", location: "Мэйфэр, закрытая локация", attendance: "250+ гостей", dress: "Всё белое" },
      e4: { tag: "ТОЛЬКО ПО ПРИГЛАШЕНИЮ", title: "Секретная встреча в Мэйфэре", date: "Сообщим за 48 часов", location: "Локация не раскрывается, Мэйфэр", attendance: "Не более 120 человек", dress: "Чёрный галстук (опционально)" }
    },
    experience: {
      h1: "Закрытые события", p1: "Встречи за закрытыми дверями — для избранных, никогда для масс.",
      h2: "Премиальные локации", p2: "Самые желанные адреса Лондона — крыши, частные клубы, скрытые лаунжи.",
      h3: "Отобранный гостевой лист", p3: "Каждое имя рассмотрено. Каждый зал сбалансирован. Качество, а не количество.",
      h4: "Значимые связи", p4: "Дружба, партнёрство, романтика — рождаются в залах, созданных для общения.",
      h5: "Эксклюзивное сообщество", p5: "11 000+ участников. Один стандарт. Самый стильный светский круг Лондона."
    },
    gallery: { eyebrow: "ВОСПОМИНАНИЯ", title: "Сезон в кадрах" },
    community: {
      eyebrow: "ОТЗЫВЫ", title: "Стена воспоминаний",
      c1: "«Встретила здесь бизнес-партнёра»",
      c2: "«Моё любимое сообщество Лондона»",
      c3: "«Каждое событие особенное»",
      c4: "«Лучшие люди, лучшая атмосфера»"
    },
    numbers: { l1: "Участников сообщества", l2: "Гостей на событии", l3: "Эксклюзивных событий", l4: "Рейтинг опыта" },
    cta: {
      title: "Готовы к новой<br>незабываемой ночи?",
      sub: "Присоединяйтесь к самому быстрорастущему премиальному сообществу Лондона.",
      cta1: "Забронировать", cta2: "Вступить в сообщество"
    },
    footer: {
      desc: "Организация вечеринок и развлечений. Закрытые частные события в Лондоне.",
      connect: "Связаться", instagram: "Instagram", telegram: "Telegram", whatsapp: "WhatsApp",
      newsletter: "Рассылка", email: "Ваш email", join: "Подписаться",
      copy: "© 2026 NONAME LONDON. Все права защищены."
    }
  }
};

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : null, obj);
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = getByPath(dict, el.getAttribute('data-i18n'));
    if (value !== null) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const value = getByPath(dict, el.getAttribute('data-i18n-html'));
    if (value !== null) el.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const value = getByPath(dict, el.getAttribute('data-i18n-placeholder'));
    if (value !== null) el.setAttribute('placeholder', value);
  });

  document.documentElement.lang = lang;
  localStorage.setItem('noname_lang', lang);

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('noname_lang');
  const browserLang = navigator.language && navigator.language.startsWith('ru') ? 'ru' : 'en';
  applyLanguage(saved || browserLang);

  const toggle = document.getElementById('langToggle');
  toggle.addEventListener('click', () => {
    const current = document.documentElement.lang === 'ru' ? 'ru' : 'en';
    applyLanguage(current === 'en' ? 'ru' : 'en');
  });
});
