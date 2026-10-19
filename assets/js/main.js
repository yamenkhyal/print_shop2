/* بيانات الخدمات: عدّل هنا فقط وستتحدث كل الصفحات */
const SERVICES = [
  { id:'cards', icon:'🪪', name:'كروت شخصية',
    short:'كروت أنيقة بقصّ دقيق وخامات فاخرة.',
    details:'نطبع الكروت على ورق مطفي أو لامع أو مقوّى، مع خيارات التغطية والزوايا الدائرية والطباعة على الوجهين.',
    specs:['المقاس القياسي 9×5 سم','ورق كوشيه 300 أو 350 جم','سيلوفان مطفي أو لامع','طباعة وجه أو وجهين'] },
  { id:'brochures', icon:'📄', name:'بروشورات وفلايرات',
    short:'مطويات وفلايرات بجودة ألوان عالية.',
    details:'مطويات بطيّة أو طيّتين، وفلايرات بمقاسات A4 وA5 وA6، مناسبة للحملات والمعارض والمطاعم.',
    specs:['مقاسات A4 / A5 / A6','ورق كوشيه 130–250 جم','طي يدوي أو آلي','كميات من 100 قطعة'] },
  { id:'flex', icon:'🏷️', name:'فليكس ولوحات',
    short:'لوحات فليكس للمحلات والفعاليات والمناسبات.',
    details:'طباعة فليكس بدقة عالية تتحمل الشمس والمطر، مع تفصيل المقاس وتركيب الحلقات أو الإطار.',
    specs:['أي مقاس حسب الطلب','فليكس داخلي وخارجي','حلقات تعليق أو حواف مقواة','طباعة بدقة عالية'] },
  { id:'gifts', icon:'🎁', name:'هدايا دعائية',
    short:'أكواب وأقلام وتيشيرتات بشعارك.',
    details:'نطبع شعار شركتك على أكواب وأقلام ومفكرات وحقائب وتيشيرتات، بكميات تناسب الحملات والمؤتمرات.',
    specs:['أكواب وأقلام ومفكرات','تيشيرتات وكاب','طباعة حرارية أو ليزر','تغليف هدايا اختياري'] },
  { id:'stands', icon:'🖼️', name:'ستاندات ورول أب',
    short:'ستاندات عرض ورول أب سهلة النقل.',
    details:'ستاندات رول أب وإكس بانر وستاند معارض بهيكل متين وحقيبة حمل، جاهزة للتركيب خلال دقائق.',
    specs:['رول أب 80×200 / 85×200 سم','إكس بانر','ستاند معارض','حقيبة حمل مرفقة'] },
];

const NAV = [
  ['index.html','الرئيسية'], ['services.html','خدماتنا'],
  ['order.html','اطلب خدمة'], ['contact.html','تواصل معنا'],
];

function renderLayout() {
  const page = location.pathname.split('/').pop() || 'index.html';
  const links = NAV.map(([href, label]) =>
    `<a href="${href}" class="px-3 py-2 rounded-md hover:bg-slate-100 ${page===href?'font-bold text-[#e6007e]':''}">${label}</a>`).join('');

  document.getElementById('site-header').innerHTML = `
  <header class="bg-white/90 backdrop-blur sticky top-0 z-30 border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <a href="index.html" class="font-display text-2xl font-bold">طباعة<span class="text-[#e6007e]">+</span>إعلان</a>
      <nav class="hidden md:flex items-center gap-1">${links}</nav>
      <a href="order.html" class="hidden md:inline-block bg-[#14213d] text-white px-5 py-2 rounded-lg font-bold hover:bg-[#e6007e] transition">اطلب الآن</a>
      <button id="menu-btn" class="md:hidden p-2 text-2xl" aria-label="القائمة" aria-expanded="false">☰</button>
    </div>
    <nav id="mobile-menu" class="hidden md:hidden flex-col px-4 pb-3 border-t">${links}</nav>
  </header>`;

  document.getElementById('site-footer').innerHTML = `
  <footer class="bg-[#14213d] text-slate-300 mt-20">
    <div class="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
      <div><p class="font-display text-2xl text-white mb-2">طباعة+إعلان</p>
        <p>نطبع أفكارك بجودة تُرى من بعيد: كروت، بروشورات، فليكس، هدايا وستاندات.</p></div>
      <div><p class="text-white font-bold mb-2">روابط</p>
        <div class="flex flex-col gap-1">${NAV.map(([h,l])=>`<a href="${h}" class="hover:text-white">${l}</a>`).join('')}</div></div>
      <div><p class="text-white font-bold mb-2">تواصل</p>
        <p dir="ltr" class="text-start">+000 000 000 000</p><p>السبت – الخميس: 9 ص – 9 م</p></div>
    </div>
    <p class="text-center text-sm py-4 border-t border-white/10">© ${new Date().getFullYear()} جميع الحقوق محفوظة</p>
  </footer>`;

  const btn = document.getElementById('menu-btn'), menu = document.getElementById('mobile-menu');
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('hidden') === false;
    menu.classList.toggle('flex', open);
    btn.setAttribute('aria-expanded', open);
  });
}

function serviceCard(s) {
  return `<a href="services.html#${s.id}" class="card-hover bg-white rounded-xl p-6 border border-slate-200 block">
    <div class="text-4xl mb-3">${s.icon}</div>
    <h3 class="text-xl font-bold mb-1">${s.name}</h3>
    <p class="text-slate-600">${s.short}</p></a>`;
}

document.addEventListener('DOMContentLoaded', renderLayout);
