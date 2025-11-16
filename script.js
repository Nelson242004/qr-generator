// ====== I18N (ES / EN) ======

const i18n = {
  es: {
    "app-title": "QR Pro",
    "app-subtitle": "Generador de códigos QR gratis y rápido",
    "panel-config-title": "Configurar contenido",
    "field-type-label": "¿Qué querés generar?",
    "type-option-url": "Enlace normal",
    "type-option-whatsapp": "WhatsApp",
    "type-option-instagram": "Instagram",
    "type-option-text": "Texto simple",
    "field-url-label": "Enlace (URL)",
    "field-url-placeholder": "https://ejemplo.com",
    "field-url-hint": "Asegúrate de que empiece con http:// o https://",
    "field-wpp-phone-label": "Número de WhatsApp",
    "field-wpp-phone-placeholder": "Ej: 595981234567",
    "field-wpp-message-label": "Mensaje",
    "field-wpp-message-placeholder": "Hola, vi tu QR y quiero más información.",
    "field-ig-user-label": "Usuario de Instagram",
    "field-ig-user-placeholder": "tu_usuario",
    "field-ig-user-hint": "No hace falta el @ ni el enlace completo.",
    "field-text-label": "Texto a codificar",
    "field-text-placeholder": "Escribe el texto que quieras guardar en el QR.",
    "panel-style-title": "Estilo del QR",
    "field-size-label": "Tamaño",
    "field-color-label": "Color del QR",
    "field-bgcolor-label": "Color de fondo",
    "field-logo-label": "Agregar logo simple en el centro",
    "btn-example": "Probar ejemplo",
    "btn-clear": "Limpiar",
    "btn-generate": "Generar QR",
    "btn-download": "Descargar PNG",
    "preview-title": "Tu código QR",
    "preview-subtitle": "Generá, probá con tu celular y descargá en PNG.",
    "history-title": "Historial",
    "history-hint": "Últimos QR generados en este dispositivo.",
    "footer-text": "Hecho con ❤️ por Gabriel · Proyecto hosteado en GitHub Pages",
    "error-empty": "Completá los datos antes de generar el QR.",
    "error-invalid-url": "La URL no es válida. Verifica que tenga http:// o https://",
    "error-invalid-phone": "Introduce un número de WhatsApp válido (solo dígitos).",
    "history-empty": "Todavía no generaste ningún QR.",
    "history-use": "Usar",
    "history-type-url": "URL",
    "history-type-whatsapp": "WhatsApp",
    "history-type-instagram": "Instagram",
    "history-type-text": "Texto",
  },
  en: {
    "app-title": "QR Pro",
    "app-subtitle": "Free and fast QR code generator",
    "panel-config-title": "Configure content",
    "field-type-label": "What do you want to generate?",
    "type-option-url": "Regular link",
    "type-option-whatsapp": "WhatsApp",
    "type-option-instagram": "Instagram",
    "type-option-text": "Plain text",
    "field-url-label": "Link (URL)",
    "field-url-placeholder": "https://example.com",
    "field-url-hint": "Make sure it starts with http:// or https://",
    "field-wpp-phone-label": "WhatsApp number",
    "field-wpp-phone-placeholder": "Ex: 595981234567",
    "field-wpp-message-label": "Message",
    "field-wpp-message-placeholder": "Hi, I scanned your QR and would like more info.",
    "field-ig-user-label": "Instagram username",
    "field-ig-user-placeholder": "your_user",
    "field-ig-user-hint": "You don't need @ or full link.",
    "field-text-label": "Text to encode",
    "field-text-placeholder": "Write the text you want to store in the QR.",
    "panel-style-title": "QR style",
    "field-size-label": "Size",
    "field-color-label": "QR color",
    "field-bgcolor-label": "Background color",
    "field-logo-label": "Add a simple logo in the center",
    "btn-example": "Try example",
    "btn-clear": "Clear",
    "btn-generate": "Generate QR",
    "btn-download": "Download PNG",
    "preview-title": "Your QR code",
    "preview-subtitle": "Generate, test with your phone and download as PNG.",
    "history-title": "History",
    "history-hint": "Last QR codes generated on this device.",
    "footer-text": "Made with ❤️ by Gabriel · Project hosted on GitHub Pages",
    "error-empty": "Fill the fields before generating the QR.",
    "error-invalid-url": "Invalid URL. Make sure it starts with http:// or https://",
    "error-invalid-phone": "Enter a valid WhatsApp number (digits only).",
    "history-empty": "You haven't generated any QR codes yet.",
    "history-use": "Use",
    "history-type-url": "URL",
    "history-type-whatsapp": "WhatsApp",
    "history-type-instagram": "Instagram",
    "history-type-text": "Text",
  },
};

let currentLang = "es";

function t(key) {
  return i18n[currentLang][key] || key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.placeholder = t(key);
  });
}

// ====== DOM ======

const typeSelect = document.getElementById("typeSelect");

const groupUrl = document.getElementById("group-url");
const groupWhatsApp = document.getElementById("group-whatsapp");
const groupInstagram = document.getElementById("group-instagram");
const groupText = document.getElementById("group-text");

const urlInput = document.getElementById("urlInput");
const wppPhoneInput = document.getElementById("wppPhoneInput");
const wppMsgInput = document.getElementById("wppMsgInput");
const igUserInput = document.getElementById("igUserInput");
const textInput = document.getElementById("textInput");

const sizeSelect = document.getElementById("sizeSelect");
const colorInput = document.getElementById("colorInput");
const bgColorInput = document.getElementById("bgColorInput");
const logoCheckbox = document.getElementById("logoCheckbox");

const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const exampleBtn = document.getElementById("exampleBtn");
const errorMsg = document.getElementById("errorMsg");
const qrContainer = document.getElementById("qrcode");
const downloadBtn = document.getElementById("downloadBtn");

const historyList = document.getElementById("historyList");

const btnLangEs = document.getElementById("btnLangEs");
const btnLangEn = document.getElementById("btnLangEn");

let qrCode = null;
const HISTORY_KEY = "qr_history_v1";

// ====== Configuración de tipo de contenido ======

function updateContentGroups() {
  const type = typeSelect.value;
  groupUrl.classList.add("hidden");
  groupWhatsApp.classList.add("hidden");
  groupInstagram.classList.add("hidden");
  groupText.classList.add("hidden");

  if (type === "url") groupUrl.classList.remove("hidden");
  if (type === "whatsapp") groupWhatsApp.classList.remove("hidden");
  if (type === "instagram") groupInstagram.classList.remove("hidden");
  if (type === "text") groupText.classList.remove("hidden");
}

// ====== Helpers ======

function isValidURL(value) {
  try {
    new URL(value);
    return true;
  } catch (e) {
    return false;
  }
}

function normalizePhone(num) {
  return num.replace(/[^\d]/g, "");
}

function showError(messageKey) {
  errorMsg.textContent = t(messageKey);
}

function clearError() {
  errorMsg.textContent = "";
}

// Construir el texto final a codificar según el tipo
function buildContentFromForm() {
  const type = typeSelect.value;

  if (type === "url") {
    const url = urlInput.value.trim();
    if (!url) {
      showError("error-empty");
      return null;
    }
    if (!isValidURL(url)) {
      showError("error-invalid-url");
      return null;
    }
    return { type, content: url, label: url };
  }

  if (type === "whatsapp") {
    const rawPhone = wppPhoneInput.value.trim();
    const message = wppMsgInput.value.trim();
    if (!rawPhone || !message) {
      showError("error-empty");
      return null;
    }
    const phone = normalizePhone(rawPhone);
    if (!phone || phone.length < 6) {
      showError("error-invalid-phone");
      return null;
    }
    const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    return {
      type,
      content: link,
      label: `wa.me/${phone}`,
    };
  }

  if (type === "instagram") {
    const user = igUserInput.value.trim().replace(/^@/, "");
    if (!user) {
      showError("error-empty");
      return null;
    }
    const link = `https://instagram.com/${encodeURIComponent(user)}`;
    return {
      type,
      content: link,
      label: `instagram.com/${user}`,
    };
  }

  if (type === "text") {
    const txt = textInput.value.trim();
    if (!txt) {
      showError("error-empty");
      return null;
    }
    return { type, content: txt, label: txt.slice(0, 50) + (txt.length > 50 ? "…" : "") };
  }

  return null;
}

// ====== Generar QR ======

function renderQR(content) {
  clearError();
  qrContainer.innerHTML = "";
  qrContainer.classList.remove("visible");

  const size = parseInt(sizeSelect.value, 10) || 256;
  const colorDark = colorInput.value || "#000000";
  const colorLight = bgColorInput.value || "#ffffff";

  qrCode = new QRCode(qrContainer, {
    text: content,
    width: size,
    height: size,
    colorDark,
    colorLight,
    correctLevel: QRCode.CorrectLevel.H,
  });

  // Pequeño delay para que el canvas se inserte
  setTimeout(() => {
    const canvas = qrContainer.querySelector("canvas");
    if (canvas && logoCheckbox.checked) {
      drawCenterLogo(canvas);
    }
    qrContainer.classList.add("visible");
  }, 50);

  downloadBtn.disabled = false;
}

function generateFromForm() {
  const result = buildContentFromForm();
  if (!result) return;

  renderQR(result.content);
  saveToHistory(result.type, result.label, result.content);
  renderHistory();
}

// Logo simple en el centro (canvas)
function drawCenterLogo(canvas) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const size = canvas.width;
  const logoSize = size * 0.22;
  const x = (size - logoSize) / 2;
  const y = (size - logoSize) / 2;
  const radius = logoSize * 0.25;

  ctx.save();

  // Fondo blanco redondeado
  ctx.beginPath();
  const r = radius;
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + logoSize - r, y);
  ctx.quadraticCurveTo(x + logoSize, y, x + logoSize, y + r);
  ctx.lineTo(x + logoSize, y + logoSize - r);
  ctx.quadraticCurveTo(x + logoSize, y + logoSize, x + logoSize - r, y + logoSize);
  ctx.lineTo(x + r, y + logoSize);
  ctx.quadraticCurveTo(x, y + logoSize, x, y + logoSize - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();

  ctx.fillStyle = "rgba(255,255,255,0.96)";
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgba(15,23,42,0.22)";
  ctx.stroke();

  // Texto "QR" (simple branding)
  ctx.fillStyle = "#111827";
  ctx.font = `${logoSize * 0.45}px system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("QR", x + logoSize / 2, y + logoSize / 2);

  ctx.restore();
}

// ====== Descargar ======

function downloadQR() {
  const canvas = qrContainer.querySelector("canvas");
  if (!canvas) return;

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = `qr-${Date.now()}.png`;
  link.click();
}

// ====== Limpiar ======

function clearAll() {
  urlInput.value = "";
  wppPhoneInput.value = "";
  wppMsgInput.value = "";
  igUserInput.value = "";
  textInput.value = "";
  clearError();
  qrContainer.innerHTML = "";
  qrContainer.classList.remove("visible");
  downloadBtn.disabled = true;
}

// ====== Ejemplo rápido ======

function fillExample() {
  const type = typeSelect.value;
  if (type === "url") {
    urlInput.value = "https://gabriel.dev";
  } else if (type === "whatsapp") {
    wppPhoneInput.value = "595981234567";
    wppMsgInput.value =
      currentLang === "es"
        ? "Hola, vi tu QR y quiero más info 🙂"
        : "Hi, I scanned your QR and want more info 🙂";
  } else if (type === "instagram") {
    igUserInput.value = "tu_usuario";
  } else if (type === "text") {
    textInput.value =
      currentLang === "es"
        ? "Este es un ejemplo de texto guardado en un código QR."
        : "This is an example text stored in a QR code.";
  }
}

// ====== Historial (localStorage) ======

function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function saveHistoryArray(arr) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(arr));
  } catch {
    // ignorar
  }
}

function saveToHistory(type, label, content) {
  const history = loadHistory();
  const now = new Date();
  const item = {
    type,
    label,
    content,
    date: now.toISOString(),
  };
  history.unshift(item);
  const limited = history.slice(0, 10);
  saveHistoryArray(limited);
}

function formatDateForDisplay(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month} · ${hours}:${minutes}`;
}

function getHistoryTypeLabel(type) {
  if (type === "url") return t("history-type-url");
  if (type === "whatsapp") return t("history-type-whatsapp");
  if (type === "instagram") return t("history-type-instagram");
  if (type === "text") return t("history-type-text");
  return type;
}

function renderHistory() {
  const history = loadHistory();
  historyList.innerHTML = "";

  if (!history.length) {
    const li = document.createElement("li");
    li.className = "history-item";
    const span = document.createElement("span");
    span.className = "history-text";
    span.textContent = t("history-empty");
    li.appendChild(span);
    historyList.appendChild(li);
    return;
  }

  history.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "history-item";

    const meta = document.createElement("div");
    meta.className = "history-meta";

    const typeEl = document.createElement("div");
    typeEl.className = "history-type";
    typeEl.textContent = getHistoryTypeLabel(item.type);

    const labelEl = document.createElement("div");
    labelEl.className = "history-text";
    labelEl.textContent = item.label;

    const dateEl = document.createElement("div");
    dateEl.className = "history-date";
    dateEl.textContent = formatDateForDisplay(item.date);

    meta.appendChild(typeEl);
    meta.appendChild(labelEl);
    meta.appendChild(dateEl);

    const btnUse = document.createElement("button");
    btnUse.className = "history-use-btn";
    btnUse.textContent = t("history-use");
    btnUse.addEventListener("click", () => {
      renderQR(item.content);
    });

    li.appendChild(meta);
    li.appendChild(btnUse);
    historyList.appendChild(li);
  });
}

// ====== Idioma ======

function setLanguage(lang) {
  if (lang !== "es" && lang !== "en") return;
  currentLang = lang;
  applyTranslations();
  renderHistory(); // para actualizar textos de tipos y "Usar"
  btnLangEs.classList.toggle("active", lang === "es");
  btnLangEn.classList.toggle("active", lang === "en");
}

// ====== Eventos ======

typeSelect.addEventListener("change", updateContentGroups);

generateBtn.addEventListener("click", generateFromForm);
clearBtn.addEventListener("click", clearAll);
downloadBtn.addEventListener("click", downloadQR);
exampleBtn.addEventListener("click", fillExample);

btnLangEs.addEventListener("click", () => setLanguage("es"));
btnLangEn.addEventListener("click", () => setLanguage("en"));

// Enter en inputs principales
[urlInput, wppPhoneInput, wppMsgInput, igUserInput, textInput].forEach((el) => {
  if (!el) return;
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateFromForm();
    }
  });
});

// ====== Init ======

updateContentGroups();
applyTranslations();
renderHistory();
