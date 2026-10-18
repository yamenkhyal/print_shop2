const BRAND = {
  name: "مكتبة غرناطة الإلكترونية",
  tagline: "طباعة تليق بأفكاركم",
  logo: "assets/media/brand/logo.jpg",
  navLogo: "assets/media/products/logo-mark-gold.png",
  email: "yamenkhyyal@gmail.com",
  phone: "+963 969 002 767",
  phoneIntl: "+352 681 508 166",
  whatsapp: "963969002767",
  whatsappIntl: "352681508166",
  whatsappUrl: "https://wa.me/963969002767",
  instagram: "https://www.instagram.com/granada_library11/",
  instagramHandle: "Granada_Library11",
  facebook: "https://www.facebook.com/share/1EcshP4HZh/",
  telegram: "https://t.me/Yamenkh24",
};

// خدمات وقدرات المكتبة، وليست بطاقات أعمال منجزة.
const SERVICES = [
  {
    id: "cards",
    name: "كروت فيزيت وبطاقات أعمال",
    short: "بطاقات بهوية مخصصة وتشطيبات أنيقة تناسب نشاطك.",
    details: "تصميم وطباعة كروت شخصية وتجارية على خامات متعددة، مع خيارات الطباعة على الوجهين والتغطية.",
    image: "assets/media/products/business cards.jpg",
  },
  {
    id: "brochures",
    name: "دفاتر دعائية وبروشورات ومطويات إعلانية",
    short: "دفاتر دعائية ومطبوعات تعريفية تناسب علامتك التجارية.",
    details: "تصميم وطباعة دفاتر دعائية وبروشورات ومطويات إعلانية بأحجام وتشطيبات تناسب نشاطك.",
    image: "assets/media/products/advertising brochures.jpg",
  },
  {
    id: "flex",
    name: "فليكس إعلاني ولوحات ويافطات",
    short: "لوحات وواجهات خارجية وداخلية بمقاسات مخصصة.",
    details: "طباعة فليكس للوحات المحلات والواجهات والفعاليات، مع تجهيز المقاس حسب احتياج الموقع.",
    image: encodeURI("assets/media/products/flex advertising printed.jpg"),
  },
  {
    id: "vinyl",
    name: "فينيل لاصق ومثقب (One-Way Vision)",
    short: "حلول تغطية للزجاج تشمل One-Way Vision.",
    details: "قص وطباعة ملصقات الفينيل والمواد المثقبة (One-Way Vision) لواجهات الزجاج وإعلانات المحلات.",
    image: encodeURI("assets/media/products/perforated adhesive vinyl printed.jpg"),
  },
  {
    id: "engraved-gifts",
    name: "هدايا وأقلام فاخرة محفورة",
    short: "هدايا مكتبية وشخصية مخصصة بالأسماء والشعارات.",
    details: "تخصيص الهدايا والأقلام بالنقش أو الطباعة وفق المنتج والهوية المطلوبة.",
    image: encodeURI("assets/media/products/premium wooden pens (4).jpg"),
  },
  {
    id: "agendas",
    name: "مفكرات وأجندات جلدية مخصصة",
    short: "مفكرات عملية تحمل اسماً أو شعاراً حسب الطلب.",
    details: "تخصيص مفكرات وأجندات جلدية للاستخدام الشخصي أو كهدايا تعريفية للشركات.",
    image: encodeURI("assets/media/products/commercial planners  printed.jpg"),
  },
  {
    id: "keychains",
    name: "ميداليات مفاتيح مخصصة",
    short: "ميداليات عملية بتصاميم وألوان تناسب هويتك.",
    details: "ميداليات مفاتيح مخصصة للأفراد والفعاليات والمنشآت، بتصاميم متعددة قابلة للتخصيص.",
    image: "assets/media/products/medal.jpg",
  },
  {
    id: "flags",
    name: "أعلام وستاندات (مكتبية وشراعية وأعلام مقام)",
    short: "أعلام مكتبية وشراعية وأعلام مقام للفعاليات والمنشآت.",
    details: "تصميم وطباعة وتجهيز أعلام مكتبية وشراعية وأعلام مقام وستاندات عرض للمناسبات ونقاط البيع.",
    image: "assets/media/products/sail flags.jpg",
  },
  {
    id: "passport-booking",
    name: "حجز مواعيد جواز السفر الإلكتروني",
    short: "تسهيل معاملاتكم وحجز مواعيدكم بدقة وسرعة فائقة وبأعلى درجات الموثوقية.",
    details: "خدمة حجز مواعيد جواز السفر عبر المنصة الإلكترونية. تواصل معنا لمعرفة التفاصيل والمتطلبات.",
    image: "assets/media/products/passport appointment booking.jpg",
  },
  {
    id: "web-design-development",
    name: "تصميم وتطوير مواقع الويب وتطبيقات الهواتف",
    short: "مواقع وتطبيقات عصرية سريعة ومتوافقة مع مختلف الشاشات.",
    details: "نصمم ونطور مواقع الويب وتطبيقات الهواتف بهوية بصرية متكاملة وتجربة استخدام واضحة، مع توافق للأجهزة وأحجام الشاشات المختلفة.",
    image: "",
  },
];

const NAV = [
  ["index.html", "الرئيسية"],
  ["services.html", "خدماتنا"],
  ["gallery.html", "أعمالنا"],
  ["order.html", "اطلب خدمة"],
  ["contact.html", "تواصل معنا"],
];

function waLink(text, number) {
  const message = encodeURIComponent(text || `مرحباً، أود الاستفسار من ${BRAND.name}`);
  return `https://wa.me/${number || BRAND.whatsapp}?text=${message}`;
}

function renderLayout() {
  const headerRoot = document.getElementById("site-header");
  const footerRoot = document.getElementById("site-footer");
  if (!headerRoot || !footerRoot) return;

  const page = location.pathname.split("/").pop() || "index.html";
  const links = NAV.map(([href, label]) =>
    `<a href="${href}" class="nav-link" ${page === href ? 'aria-current="page"' : ""}>${label}</a>`
  ).join("");

  headerRoot.innerHTML = `
    <header class="site-header">
      <div class="section-wrap site-header-inner flex items-center justify-between gap-4">
        <a href="index.html" class="brand-link flex items-center gap-3" aria-label="${BRAND.name} - الرئيسية">
          <img src="${BRAND.navLogo}" alt="" class="brand-logo">
          <span class="brand-name font-display font-bold">${BRAND.name}</span>
        </a>
        <nav class="desktop-nav flex items-center" aria-label="التنقل الرئيسي">
          ${links}
          <a href="${waLink("مرحباً، أود طلب خدمة من مكتبة غرناطة")}" class="nav-link nav-order-link" target="_blank" rel="noopener noreferrer">اطلب عبر واتساب</a>
        </nav>
        <button id="menu-btn" class="menu-btn" type="button" aria-label="فتح القائمة" aria-expanded="false" aria-controls="mobile-menu">☰</button>
      </div>
      <nav id="mobile-menu" class="mobile-menu" aria-label="التنقل للشاشات الصغيرة" hidden>${links}</nav>
    </header>`;

  footerRoot.innerHTML = `
    <footer class="site-footer">
      <div class="section-wrap footer-main">
        <section>
          <img src="${BRAND.logo}" alt="" class="brand-logo footer-logo">
          <p class="footer-heading">${BRAND.name}</p>
          <p class="footer-description">${BRAND.tagline}. طباعة رقمية وهدايا وحلول إعلانية بهوية متقنة.</p>
          <div class="footer-socials" aria-label="منصات التواصل الاجتماعي">
            <a class="footer-social-link" href="${BRAND.instagram}" target="_blank" rel="noopener noreferrer" aria-label="إنستغرام ${BRAND.instagramHandle}"><span aria-hidden="true">◎</span></a>
            <a class="footer-social-link" href="${BRAND.facebook}" target="_blank" rel="noopener noreferrer" aria-label="فيسبوك مكتبة غرناطة"><span aria-hidden="true">f</span></a>
            <a class="footer-social-link" href="${BRAND.telegram}" target="_blank" rel="noopener noreferrer" aria-label="تيليجرام Yamenkh24"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 3-7.5 18-3.8-7.7L2 9.5 21 3Z"></path><path d="m9.7 13.3 4.8-4.8"></path></svg></a>
            <a class="footer-social-link whatsapp-social-link" href="${BRAND.whatsappUrl}" target="_blank" rel="noopener noreferrer" aria-label="واتساب مكتبة غرناطة"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L4 20l1.2-4.1a8.2 8.2 0 1 1 15-4.2Z"></path><path d="M9 8.2c.3 2.5 2.2 4.4 4.8 5.2"></path></svg></a>
          </div>
        </section>
        <section>
          <h2 class="footer-heading">روابط سريعة</h2>
          <nav class="footer-nav" aria-label="روابط التذييل">
            ${NAV.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
          </nav>
        </section>
        <section>
          <h2 class="footer-heading">بيانات التواصل</h2>
          <div class="footer-contact-list">
            <a href="https://wa.me/${BRAND.whatsapp}" target="_blank" rel="noopener noreferrer" dir="ltr"><span aria-hidden="true">◉</span>${BRAND.phone}</a>
            <a href="https://wa.me/${BRAND.whatsappIntl}" target="_blank" rel="noopener noreferrer" dir="ltr"><span aria-hidden="true">◉</span>${BRAND.phoneIntl}</a>
            <a href="mailto:${BRAND.email}"><span aria-hidden="true">✉</span>${BRAND.email}</a>
          </div>
        </section>
      </div>
      <div class="footer-bottom">© 2026 ${BRAND.name}. جميع الحقوق محفوظة.</div>
    </footer>
    <a class="floating-whatsapp" href="${waLink("مرحباً، أود الاستفسار عن خدمات مكتبة غرناطة")}" target="_blank" rel="noopener noreferrer" aria-label="راسلنا عبر واتساب">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L4 20l1.2-4.1a8.2 8.2 0 1 1 15-4.2Z"></path><path d="M9 8.2c.3 2.5 2.2 4.4 4.8 5.2"></path></svg>
      <span class="floating-whatsapp-label">واتساب</span>
    </a>
    <div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="عرض الصورة">
      <button type="button" class="lightbox-close" id="lightbox-close" aria-label="إغلاق">×</button>
      <div id="lightbox-body"></div>
    </div>`;

  const menuButton = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "فتح القائمة" : "إغلاق القائمة");
    mobileMenu.hidden = isOpen;
    mobileMenu.classList.toggle("is-open", !isOpen);
  });

  const lightbox = document.getElementById("lightbox");
  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}

function openLightbox(src) {
  const box = document.getElementById("lightbox");
  const body = document.getElementById("lightbox-body");
  body.innerHTML = `<img src="${src}" alt="صورة العمل بحجمها الكامل" decoding="async">`;
  box.classList.add("open");
}

function closeLightbox() {
  const box = document.getElementById("lightbox");
  if (!box) return;
  box.classList.remove("open");
  document.getElementById("lightbox-body").innerHTML = "";
}

function serviceCard(service) {
  const visual = service.id === "web-design-development"
    ? `<div class="service-tech-visual" aria-hidden="true"><span class="tech-chip">&lt;/&gt;</span><span class="tech-chip">UI/UX</span><span class="tech-chip">Mobile App</span><div class="mini-browser"><i></i><i></i><i></i><div></div><b></b></div></div>`
    : `<img src="${service.image}" alt="${service.name}" class="service-card-image" loading="lazy" decoding="async">`;
  return `
    <article class="service-card${service.id === "web-design-development" ? " service-tech-card" : ""}">
      ${visual}
      <div class="service-card-body">
        <h2>${service.name}</h2>
        <p>${service.short}</p>
        <a href="order.html?service=${encodeURIComponent(service.id)}" class="button-navy">اطلب هذه الخدمة <span aria-hidden="true">←</span></a>
      </div>
    </article>`;
}

function passportFeatureCard() {
  const service = SERVICES.find((item) => item.id === "passport-booking");
  if (!service) return "";
  return `
    <article class="passport-feature-card">
      <div class="passport-feature-copy">
        <span class="digital-feature-badge passport-feature-badge">✨ جديدنا | حجز مواعيد جواز السفر الإلكتروني</span>
        <h2>${service.name}</h2>
        <p>${service.short}</p>
        <a class="button-primary passport-feature-cta" href="${waLink("مرحباً، أود حجز موعد جواز السفر الإلكتروني من مكتبة غرناطة")}" target="_blank" rel="noopener noreferrer">احجز موعدك الآن عبر واتساب <span aria-hidden="true">↗</span></a>
      </div>
      <div class="passport-feature-art">
        <div class="passport-thumbnail">
          <img src="assets/media/products/passport%20appointment%20booking.jpg" alt="تصميم خدمة حجز مواعيد جواز السفر الإلكتروني" loading="lazy" decoding="async">
        </div>
        <span>حجز إلكتروني بخطوات ميسّرة</span>
      </div>
    </article>`;
}

function digitalServiceFeature() {
  const service = SERVICES.find((item) => item.id === "web-design-development");
  if (!service) return "";
  return `
    <article class="digital-feature-card">
      <div class="digital-feature-copy">
        <span class="digital-feature-badge">✨ نأخذ علامتك التجارية إلى الفضاء الرقمي</span>
        <h2>نصمم ونطور <span>موقعك وتطبيقك</span> بأحدث التقنيات العصرية</h2>
        <span class="digital-engineer-badge">بإشراف مهندس معلوماتية مختص</span>
        <p>${service.short} من الفكرة إلى الإطلاق، نصنع تجربة رقمية تليق بعلامتك.</p>
        <a class="button-primary digital-feature-cta" href="order.html?service=${encodeURIComponent(service.id)}">اطلب استشارة وتصميم موقعك <span aria-hidden="true">↗</span></a>
      </div>
      <div class="digital-mockup" aria-label="تصميم تجريبي لشاشة حاسوب وهاتف ذكي">
        <span class="digital-float-code" aria-hidden="true">&lt;/&gt;</span>
        <span class="digital-float-ui" aria-hidden="true">UI/UX</span>
        <span class="digital-float-mobile" aria-hidden="true">Mobile App</span>
        <div class="mockup-desktop" aria-hidden="true">
          <div class="mockup-browser-bar"><i></i><i></i><i></i><span></span></div>
          <div class="mockup-screen">
            <div class="mockup-nav"></div>
            <div class="mockup-hero-lines"><i></i><i></i><i></i><b></b></div>
            <div class="mockup-cards"><i></i><i></i><i></i></div>
          </div>
        </div>
        <div class="mockup-phone" aria-hidden="true">
          <div class="phone-speaker"></div>
          <div class="phone-screen"><i></i><b></b><b></b><span></span><span></span><em></em></div>
        </div>
      </div>
    </article>`;
}

const MEDIA_FILES = [
  "a variety of luxury pens (2).jpg",
  "a variety of luxury pens.jpg",
  "advertising brochures (2).jpg",
  "advertising brochures (3).jpg",
  "advertising brochures (4).jpg",
  "advertising brochures.jpg",
  "business cards.jpg",
  "commercial planners  printed.jpg",
  "commercial planners printed (2).jpg",
  "desk flags (2).jpg",
  "desk flags.jpg",
  "flex advertising  printed(2).jpg",
  "flex advertising  printed(3).jpg",
  "flex advertising printed.jpg",
  "hero-wooden-pen-cutout.png",
  "logo-removebg-preview.png",
  "medal.jpg",
  "mobile stand pen (2).jpg",
  "mobile stand pen (3).jpg",
  "mobile stand pen.jpg",
  "notebook (2).jpg",
  "notebook (4).jpg",
  "notebook (5).jpg",
  "notebook (6).jpg",
  "notebook (7).jpg",
  "notebook.png",
  "notebook printed(3).jpg",
  "notebook printed.jpg",
  "passport appointment booking.jpg",
  "perforated adhesive vinyl printed(2).jpg",
  "perforated adhesive vinyl printed(3).jpg",
  "perforated adhesive vinyl printed(4).jpg",
  "perforated adhesive vinyl printed.jpg",
  "premium metal pens printed (2).jpg",
  "premium metal pens printed (3).jpg",
  "premium metal pens printed (4).jpg",
  "premium metal pens printed.jpg",
  "premium pens printed(2).jpg",
  "premium pens printed.jpg",
  "premium wooden pens  (6).jpg",
  "premium wooden pens  printed(2).jpg",
  "premium wooden pens (4).jpg",
  "premium wooden pens (5).jpg",
  "premium wooden pens (7).jpg",
  "premium wooden pens printed (3).jpg",
  "premium wooden pens printed.jpg",
  "premium_wooden_pens (4).png",
  "premium_wooden_pens___6_-removebg-preview.png",
  "promotional notebooks printed (2).jpg",
  "promotional notebooks printed.jpg",
  "sail flags.jpg",
  "semicircular medal.jpg",
];

const MEDIA_LABELS = {
  "a variety of luxury pens": "تشكيلة أقلام فاخرة",
  "advertising brochures": "بروشورات إعلانية",
  "business cards": "بطاقات أعمال",
  "commercial planners": "أجندات تجارية",
  "desk flags": "أعلام مكتبية",
  "flex advertising": "إعلانات فلكس",
  "hero wooden pen cutout": "قلم خشبي فاخر",
  "medal": "ميدالية",
  "mobile stand pen": "قلم بحامل جوال",
  "notebook": "مفكرات",
  "perforated adhesive vinyl": "فينيل لاصق مثقب",
  "premium metal pens": "أقلام معدنية فاخرة",
  "premium pens": "أقلام فاخرة",
  "premium wooden pens": "قلم خشبي فاخر",
  "promotional notebooks": "مفكرات دعائية",
  "sail flags": "رايات شراعية",
  "semicircular medal": "ميدالية نصف دائرية",
};

const MEDIA_CATEGORIES = {
  "a variety of luxury pens": "gifts",
  "advertising brochures": "print",
  "business cards": "print",
  "commercial planners": "print",
  "desk flags": "flags",
  "flex advertising": "signs",
  "hero wooden pen cutout": "gifts",
  "medal": "gifts",
  "mobile stand pen": "gifts",
  "notebook": "print",
  "perforated adhesive vinyl": "signs",
  "premium metal pens": "gifts",
  "premium pens": "gifts",
  "premium wooden pens": "gifts",
  "promotional notebooks": "print",
  "sail flags": "flags",
  "semicircular medal": "gifts",
};

const UNMATCHED_MEDIA_FILES = [];
const MEDIA_DEDICATED_FILES = new Set([
  "logo-removebg-preview.png",
  "passport appointment booking.jpg",
]);

function classifyMediaPath(relativePath) {
  return /(^|[^a-z0-9])printed(?=$|[^a-z0-9])/i.test(relativePath) ? "work" : "service";
}

const MEDIA_ASSETS = MEDIA_FILES.map((filename) => {
  const relativePath = `assets/media/products/${filename}`;
  return {
    filename,
    relativePath,
    type: classifyMediaPath(relativePath),
  };
});

const MEDIA = MEDIA_ASSETS.flatMap((asset) => {
  const { filename, relativePath, type } = asset;
  if (MEDIA_DEDICATED_FILES.has(filename)) return [];

  const name = filename
    .replace(/\.[^.]+$/, "")
    .replace(/(?:[-_ ]+removebg[-_ ]+preview)$/i, "")
    .replace(/\s*\(\d+\)\s*/g, " ")
    .replace(/[_-]+/g, " ")
    .replace(/(^|[^a-z0-9])printed(?=$|[^a-z0-9])/gi, " ")
    .replace(/\s+\d+\s*$/, " ")
    .replace(/\s+/g, " ")
    .trim();
  const title = MEDIA_LABELS[name];
  const cat = MEDIA_CATEGORIES[name];
  if (!title || !cat) {
    UNMATCHED_MEDIA_FILES.push(filename);
    console.warn(`Product image is missing a name or category mapping: ${filename}`);
    return [];
  }

  return [{
    src: encodeURI(relativePath),
    cat,
    type,
    title,
    filename,
    relativePath,
  }];
});

function getClassifiedMedia(type) {
  return MEDIA.filter((item) => item.type === type);
}

function renderProductCarousel(root, items, label) {
  root.innerHTML = `
    <div class="product-carousel" data-carousel role="region" aria-roledescription="عارض شرائح" aria-label="${label}">
      <div class="carousel-viewport">
        <div class="carousel-track">
          ${items.map((item, slideIndex) => `<div class="carousel-slide" role="group" aria-roledescription="شريحة" aria-label="${slideIndex + 1} من ${items.length}">${mediaCard(item)}</div>`).join("")}
        </div>
      </div>
      <div class="carousel-controls">
        <button type="button" class="carousel-control" data-carousel-previous aria-label="الصورة السابقة">السابق</button>
        <span class="carousel-status" aria-live="off"></span>
        <button type="button" class="carousel-control" data-carousel-next aria-label="الصورة التالية">التالي</button>
      </div>
    </div>`;

  const carousel = root.querySelector("[data-carousel]");
  const track = carousel.querySelector(".carousel-track");
  const slides = [...carousel.querySelectorAll(".carousel-slide")];
  const status = carousel.querySelector(".carousel-status");
  let index = 0;
  let timer;

  const showSlide = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach((slide, slideIndex) => {
      slide.setAttribute("aria-hidden", String(slideIndex !== index));
      slide.inert = slideIndex !== index;
    });
    status.textContent = `${index + 1} / ${slides.length}`;
  };
  const stop = () => window.clearInterval(timer);
  const start = () => {
    stop();
    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      && !document.hidden
      && !carousel.matches(":hover")
      && !carousel.contains(document.activeElement)
    ) {
      timer = window.setInterval(() => showSlide(index + 1), 3000);
    }
  };

  carousel.querySelector("[data-carousel-previous]").addEventListener("click", () => {
    showSlide(index - 1);
    start();
  });
  carousel.querySelector("[data-carousel-next]").addEventListener("click", () => {
    showSlide(index + 1);
    start();
  });
  carousel.addEventListener("mouseenter", stop);
  carousel.addEventListener("mouseleave", start);
  carousel.addEventListener("focusin", stop);
  carousel.addEventListener("focusout", (event) => {
    if (!carousel.contains(event.relatedTarget)) start();
  });
  carousel.addEventListener("touchstart", stop, { passive: true });
  carousel.addEventListener("touchend", start, { passive: true });
  carousel.addEventListener("touchcancel", start, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });

  showSlide(0);
  start();
}

const FILTERS = [
  ["all", "الكل"],
  ["signs", "لوحات وواجهات"],
  ["gifts", "هدايا ومكتبية"],
  ["print", "مطبوعات ورقية"],
  ["flags", "أعلام وميداليات"],
  ["services", "خدمات متنوعة"],
];

function mediaCard(item) {
  const orderHref = `contact.html?product=${encodeURIComponent(item.title)}`;
  const orderLabel = item.type === "work" ? "اطلب عملاً مشابهاً" : "اطلب هذه الخدمة";
  return `
    <article class="media-card">
      <button type="button" class="media-preview" data-full-src="${item.src}" aria-label="تكبير صورة: ${item.title}">
        <img src="${item.src}" alt="${item.title}" loading="lazy" decoding="async">
        <span class="media-zoom" aria-hidden="true">عرض الصورة</span>
      </button>
      <div class="media-card-body">
        <h2 class="media-card-title">${item.title}</h2>
        <a class="button-gold-outline media-order-link" href="${orderHref}">${orderLabel}</a>
      </div>
    </article>`;
}

function bindMediaGrid(root) {
  root.addEventListener("click", (event) => {
    const preview = event.target.closest(".media-preview");
    if (preview) openLightbox(preview.dataset.fullSrc);
  });
}

document.addEventListener("DOMContentLoaded", renderLayout);
