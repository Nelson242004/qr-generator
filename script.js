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
    "field-wpp-phone-placeholder": "Ej: 5950971113908",
    "field-wpp-message-label": "Mensaje",
    "field-wpp-message-placeholder": "Hola, vi tu QR y quiero más información.",
    "field-ig-user-label": "Usuario de Instagram",
    "field-ig-user-placeholder": "nelson_spy",
    "field-ig-user-hint": "No hace falta el @ ni el enlace completo.",
    "field-text-label": "Texto a codificar",
    "field-text-placeholder": "Escribe el texto que quieras guardar en el QR.",
    "panel-style-title": "Estilo del QR",
    "field-size-label": "Tamaño",
    "field-color-label": "Color del QR",
    "field-bgcolor-label": "Color de fondo",
    "field-logo-label": "Agregar logo en el centro",
    "field-logo-hint": "PNG/JPG cuadrado recomendado. Se centrará automáticamente.",
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
    "error-logo-missing": "Seleccioná un logo PNG/JPG o desmarca la opción de logo.",
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
    "field-wpp-phone-placeholder": "Ex: 5950971113908",
    "field-wpp-message-label": "Message",
    "field-wpp-message-placeholder": "Hi, I scanned your QR and would like more info.",
    "field-ig-user-label": "Instagram username",
    "field-ig-user-placeholder": "nelson_spy",
    "field-ig-user-hint": "You don't need @ or full link.",
    "field-text-label": "Text to encode",
    "field-text-placeholder": "Write the text you want to store in the QR.",
    "panel-style-title": "QR style",
    "field-size-label": "Size",
    "field-color-label": "QR color",
    "field-bgcolor-label": "Background color",
    "field-logo-label": "Add a logo in the center",
    "field-logo-hint": "Square PNG/JPG recommended. It will be centered automatically.",
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
    "error-logo-missing": "Select a PNG/JPG logo or uncheck the logo option.",
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
const logoFileInput = document.getElementById("logoFileInput");

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
let logoImageDataURL = null;

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

// ====== Logo desde archivo ======

function handleLogoFileChange(e) {
  const file = e.target.files[0];
  if (!file) {
    logoImageDataURL = null;
    return;
  }
  if (!file.type.startsWith("image/")) {
    logoImageDataURL = null;
    showError("error-logo-missing");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    logoImageDataURL = reader.result;
  };
  reader.readAsDataURL(file);
}

// helper path rect redondeado
function roundedRectPath(ctx, x, y, w, h, r) {
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
}

// Logo del usuario
function drawUserLogo(canvas, dataURL) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const size = canvas.width;
  const logoSize = size * 0.24;
  const x = (size - logoSize) / 2;
  const y = (size - logoSize) / 2;

  const img = new Image();
  img.onload = () => {
    ctx.save();

    // fondo blanco redondeado
    ctx.beginPath();
    const r = logoSize * 0.25;
    roundedRectPath(ctx, x, y, logoSize, logoSize, r);
    ctx.closePath();

    ctx.fillStyle = "rgba(255,255,255,0.96)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(15,23,42,0.22)";
    ctx.stroke();

    // recorte para la imagen
    ctx.save();
    ctx.beginPath();
    roundedRectPath(ctx, x, y, logoSize, logoSize, r * 0.8);
    ctx.closePath();
    ctx.clip();

    ctx.drawImage(img, x, y, logoSize, logoSize);
    ctx.restore();

    ctx.restore();
  };
  img.src = dataURL;
}

// ====== Generar QR ======

function renderQR(content) {
  clearError();
  qrContainer.innerHTML = "";
  qrContainer.classList.remove("visible");

  const size = parseInt(sizeSelect.value, 10) || 256;
  const colorDark = colorInput.value || "#000000";
  const colorLight = bgColorInput.value || "#ffffff";

  // Generar QR (la librería puede crear <canvas> o <img>)
  qrCode = new QRCode(qrContainer, {
    text: content,
    width: size,
    height: size,
    colorDark,
    colorLight,
    correctLevel: QRCode.CorrectLevel.H,
  });

  // Pequeño delay para que el DOM del QR aparezca
  setTimeout(() => {
    let canvas = qrContainer.querySelector("canvas");
    const img = qrContainer.querySelector("img");

    // Caso 1: la librería generó un <img>, lo convertimos a canvas
    if (!canvas && img) {
      const tmpCanvas = document.createElement("canvas");
      tmpCanvas.width = size;
      tmpCanvas.height = size;
      const ctx = tmpCanvas.getContext("2d");
      const qrImg = new Image();

      qrImg.onload = () => {
        ctx.drawImage(qrImg, 0, 0, size, size);

        // Dibujar logo en el centro si corresponde
        if (logoCheckbox.checked && logoImageDataURL) {
          drawUserLogo(tmpCanvas, logoImageDataURL);
        }

        // Reemplazamos el contenido por el canvas final
        qrContainer.innerHTML = "";
        qrContainer.appendChild(tmpCanvas);
        qrContainer.classList.add("visible");
      };

      qrImg.src = img.src;
      return;
    }

    // Caso 2: la librería generó directamente un <canvas>
    if (canvas) {
      if (logoCheckbox.checked && logoImageDataURL) {
        drawUserLogo(canvas, logoImageDataURL);
      }
      qrContainer.classList.add("visible");
    }
  }, 100);

  downloadBtn.disabled = false;
}

function generateFromForm() {
  const result = buildContentFromForm();
  if (!result) return;

  if (logoCheckbox.checked && !logoImageDataURL) {
    showError("error-logo-missing");
    return;
  }

  renderQR(result.content);
  saveToHistory(result.type, result.label, result.content);
  renderHistory();
}

// ====== Descargar ======

function downloadQR() {
  let canvas = qrContainer.querySelector("canvas");
  const img = qrContainer.querySelector("img");

  // Si no hay canvas pero sí hay imagen, la convertimos a canvas
  if (!canvas && img) {
    const size = parseInt(sizeSelect.value, 10) || img.naturalWidth || 256;
    const tmpCanvas = document.createElement("canvas");
    tmpCanvas.width = size;
    tmpCanvas.height = size;
    const ctx = tmpCanvas.getContext("2d");
    const qrImg = new Image();

    qrImg.onload = () => {
      ctx.drawImage(qrImg, 0, 0, size, size);

      if (logoCheckbox.checked && logoImageDataURL) {
        drawUserLogo(tmpCanvas, logoImageDataURL);
      }

      const link = document.createElement("a");
      link.href = tmpCanvas.toDataURL("image/png");
      link.download = `qr-${Date.now()}.png`;
      link.click();
    };

    qrImg.src = img.src;
    return;
  }

  // Caso normal: ya tenemos canvas
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
  logoCheckbox.checked = false;
  logoFileInput.value = "";
  logoImageDataURL = null;
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
    wppPhoneInput.value = "5950971113908";
    wppMsgInput.value =
      currentLang === "es"
        ? "Hola, vi tu QR y quiero más info 🙂"
        : "Hi, I scanned your QR and want more info 🙂";
  } else if (type === "instagram") {
    igUserInput.value = "nelson_spy";
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

  history.forEach((item) => {
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
      renderQR(item.content); // no reaplica logo antiguo (solo contenido)
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
  renderHistory(); // actualizar textos del historial
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

logoFileInput.addEventListener("change", handleLogoFileChange);

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
setLanguage("es");
