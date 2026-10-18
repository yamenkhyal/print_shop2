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
    image: "assets/media/products/5911018096711896942.jpg",
  },
  {
    id: "brochures",
    name: "دفاتر دعائية وبروشورات ومطويات إعلانية",
    short: "دفاتر دعائية ومطبوعات تعريفية تناسب علامتك التجارية.",
    details: "تصميم وطباعة دفاتر دعائية وبروشورات ومطويات إعلانية بأحجام وتشطيبات تناسب نشاطك.",
    image: "assets/media/products/5911018096711896946.jpg",
  },
  {
    id: "flex",
    name: "فليكس إعلاني ولوحات ويافطات",
    short: "لوحات وواجهات خارجية وداخلية بمقاسات مخصصة.",
    details: "طباعة فليكس للوحات المحلات والواجهات والفعاليات، مع تجهيز المقاس حسب احتياج الموقع.",
    image: "assets/media/products/5911018096711896972.jpg",
  },
  {
    id: "vinyl",
    name: "فينيل لاصق ومثقب (One-Way Vision)",
    short: "حلول تغطية للزجاج تشمل One-Way Vision.",
    details: "قص وطباعة ملصقات الفينيل والمواد المثقبة (One-Way Vision) لواجهات الزجاج وإعلانات المحلات.",
    image: "assets/media/products/5911018096711896969.jpg",
  },
  {
    id: "engraved-gifts",
    name: "هدايا وأقلام فاخرة محفورة",
    short: "هدايا مكتبية وشخصية مخصصة بالأسماء والشعارات.",
    details: "تخصيص الهدايا والأقلام بالنقش أو الطباعة وفق المنتج والهوية المطلوبة.",
    image: "assets/media/products/5911018096711896951.jpg",
  },
  {
    id: "agendas",
    name: "مفكرات وأجندات جلدية مخصصة",
    short: "مفكرات عملية تحمل اسماً أو شعاراً حسب الطلب.",
    details: "تخصيص مفكرات وأجندات جلدية للاستخدام الشخصي أو كهدايا تعريفية للشركات.",
    image: "assets/media/products/5911018096711896936.jpg",
  },
  {
    id: "keychains",
    name: "ميداليات مفاتيح مخصصة",
    short: "ميداليات عملية بتصاميم وألوان تناسب هويتك.",
    details: "ميداليات مفاتيح مخصصة للأفراد والفعاليات والمنشآت، بتصاميم متعددة قابلة للتخصيص.",
    image: "assets/media/products/5911018096711896956.jpg",
  },
  {
    id: "flags",
    name: "أعلام وستاندات (مكتبية وشراعية وأعلام مقام)",
    short: "أعلام مكتبية وشراعية وأعلام مقام للفعاليات والمنشآت.",
    details: "تصميم وطباعة وتجهيز أعلام مكتبية وشراعية وأعلام مقام وستاندات عرض للمناسبات ونقاط البيع.",
    image: "assets/media/products/5911018096711896945.jpg",
  },
  {
    id: "passport-booking",
    name: "حجز مواعيد جواز السفر الإلكتروني",
    short: "تسهيل معاملاتكم وحجز مواعيدكم بدقة وسرعة فائقة وبأعلى درجات الموثوقية.",
    details: "خدمة حجز مواعيد جواز السفر عبر المنصة الإلكترونية. تواصل معنا لمعرفة التفاصيل والمتطلبات.",
    image: "",
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
        <span class="passport-feature-badge">✨ جديدنا | حجز مواعيد جواز السفر الإلكتروني</span>
        <p class="section-kicker">خدمة جديدة من غرناطة</p>
        <h2>${service.name}</h2>
        <p>${service.short}</p>
        <a class="button-primary passport-feature-cta" href="${waLink("مرحباً، أود حجز موعد جواز السفر الإلكتروني من مكتبة غرناطة")}" target="_blank" rel="noopener noreferrer">احجز موعدك الآن عبر واتساب <span aria-hidden="true">↗</span></a>
      </div>
      <div class="passport-feature-art">
        <div class="passport-thumbnail">
          <img src="assets/media/products/5911018096711896982.jpg" alt="غلاف جواز سفر من تصميم إعلان الخدمة" loading="lazy" decoding="async">
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

const MEDIA = [
  { src: "assets/media/products/5911018096711896972.jpg", cat: "signs", title: "واجهة فليكس لمول الخيرات" },
  { src: "assets/media/products/5911018096711896969.jpg", cat: "signs", title: "فينيل مثقب لواجهة محل تجاري" },
  { src: "assets/media/products/5911018096711896976.jpg", cat: "signs", title: "لوحة فليكس إعلانية لواجهة محل" },
  { src: "assets/media/products/5911018096711896961.jpg", cat: "gifts", title: "مفكرة جلدية فاخرة مخصصة" },
  { src: "assets/media/products/5911018096711896936.jpg", cat: "gifts", title: "مفكرة جلدية منقوشة باسم زبون" },
  { src: "assets/media/products/5911018096711896951.jpg", cat: "gifts", title: "طقم قلم خشبي مع علبة مخصصة" },
  { src: "assets/media/products/5911018096711896955.jpg", cat: "gifts", title: "قلم فاخر مع حفر ليزر" },
  { src: "assets/media/products/5911018096711896952.jpg", cat: "gifts", title: "قلم خشبي داخل علبة مخصصة" },
  { src: "assets/media/products/5911018096711896970.jpg", cat: "gifts", title: "قلم خشبي مخصص بحفر دقيق" },
  { src: "assets/media/products/5911018096711896971.jpg", cat: "gifts", title: "قلم خشبي أنيق بهوية مخصصة" },
  { src: "assets/media/products/5911018096711896960.jpg", cat: "print", title: "دفتر مكتبي مطبوع بهوية مخصصة" },
  { src: "assets/media/products/5911018096711896963.jpg", cat: "print", title: "دفاتر دعائية ومطبوعات تعريفية" },
  { src: "assets/media/products/5911018096711896966.jpg", cat: "print", title: "دفتر أعمال مطبوع حسب الطلب" },
  { src: "assets/media/products/5911018096711896945.jpg", cat: "flags", title: "أعلام مكتبية بتصميم مخصص" },
];

const FILTERS = [
  ["all", "الكل"],
  ["signs", "لوحات وواجهات"],
  ["gifts", "هدايا ومكتبية"],
  ["print", "مطبوعات ورقية"],
  ["flags", "أعلام وميداليات"],
];

function mediaCard(item) {
  const orderHref = `contact.html?product=${encodeURIComponent(item.title)}`;
  return `
    <article class="media-card">
      <button type="button" class="media-preview" data-full-src="${item.src}" aria-label="تكبير صورة: ${item.title}">
        <img src="${item.src}" alt="${item.title}" loading="lazy" decoding="async">
        <span class="media-zoom" aria-hidden="true">عرض الصورة</span>
      </button>
      <div class="media-card-body">
        <h2 class="media-card-title">${item.title}</h2>
        <a class="button-gold-outline media-order-link" href="${orderHref}">اطلب عملاً مشابهاً</a>
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
