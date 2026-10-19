const form = document.getElementById("order-form");
const msg = document.getElementById("form-msg");
const sel = document.getElementById("service");

// تعبئة قائمة الخدمات من المصدر المشترك ودعم الروابط التي تحدد خدمة مسبقاً.
sel.innerHTML = '<option value="">اختر الخدمة</option>' +
  SERVICES.map((s) => `<option value="${s.id}">${s.name}</option>`).join("");
const pre = new URLSearchParams(location.search).get("service");
if (SERVICES.some((service) => service.id === pre)) sel.value = pre;

function showMsg(text, error) {
  msg.textContent = text;
  msg.className = "rounded-lg p-3 mt-4 " + (error ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;

  const serviceName = sel.selectedOptions[0].text;
  const size = form.elements.namedItem("size").value.trim() || "لم يحدد";
  const notes = form.elements.namedItem("notes").value.trim() || "لا توجد";
  const text = `طلب جديد من الموقع
الخدمة: ${serviceName}
الكمية: ${form.elements.namedItem("quantity").value}
المقاس: ${size}
الاسم الكامل: ${form.elements.namedItem("name").value.trim()}
ملاحظات وتفاصيل إضافية: ${notes}`;

  // فتح المحادثة مباشرة ضمن إجراء الإرسال حتى لا يمنعها المتصفح كنافذة منبثقة.
  const chat = window.open(waLink(text), "_blank");
  if (!chat) {
    showMsg("تعذر فتح واتساب. تحقق من السماح بالنوافذ المنبثقة وحاول مجدداً.", true);
    return;
  }
  chat.opener = null;
  showMsg("جهزنا طلبك في واتساب؛ أرسل الرسالة لتأكيد الطلب.");
});
