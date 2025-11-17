/* ========================================================================
   I18N: TEXTOS EN ESPAÑOL / INGLÉS
   ======================================================================== */

const i18n = {
  es: {
    "app-title": "QR Pro",
    "app-subtitle": "Generador de códigos QR gratis y rápido",

    "panel-config-title": "Configurar contenido",
    "field-type-label": "¿Qué querés generar?",
    "type-option-url": "Enlace normal",
    "type-option-whatsapp": "WhatsApp",
    "type-option-instagram": "Instagram",
    "type-option-wifi": "Wi-Fi",
    "type-option-text": "Texto simple",

    "field-url-label": "Enlace (URL)",
    "field-url-placeholder": "https://ejemplo.com",
    "field-url-hint": "Asegúrate de que empiece con http:// o https://",

    "field-wpp-phone-label": "Número de WhatsApp",
    "field-wpp-phone-placeholder": "Ej: 5950971113908",
    "field-wpp-message-label": "Mensaje",
    "field-wpp-message-placeholder":
      "Hola, vi tu QR y quiero más información.",

    "field-ig-user-label": "Usuario de Instagram",
    "field-ig-user-placeholder": "nelson_spy",
    "field-ig-user-hint": "No hace falta el @ ni el enlace completo.",

    "field-text-label": "Texto a codificar",
    "field-text-placeholder":
      "Escribe el texto que quieras guardar en el QR.",

    "field-wifi-ssid-label": "Nombre de la red (SSID)",
    "field-wifi-ssid-placeholder": "MiRedWiFi",
    "field-wifi-security-label": "Seguridad",
    "field-wifi-security-open": "Sin contraseña",
    "field-wifi-password-label": "Contraseña",
    "field-wifi-password-placeholder": "contraseña123",

    "panel-style-title": "Estilo del QR",
    "field-size-label": "Tamaño",
    "field-color-label": "Color del QR",
    "field-bgcolor-label": "Color de fondo",

    "field-logo-label": "Agregar logo en el centro",
    "field-logo-hint":
      "PNG/JPG cuadrado recomendado. Se centrará automáticamente.",

    "btn-example": "Probar ejemplo",
    "btn-clear": "Limpiar",
    "btn-generate": "Generar QR",
    "btn-download": "Descargar PNG",
    "btn-copy": "Copiar",

    "preview-title": "Tu código QR",
    "preview-subtitle": "Generá, probá con tu celular y descargá en PNG.",
    "preview-placeholder":
      "Todavía no generaste ningún QR. Completá el formulario y toca “Generar QR”.",

    "history-title": "Historial",
    "history-hint": "Últimos QR generados en este dispositivo.",
    "history-empty": "Todavía no generaste ningún QR.",
    "history-use": "Usar",
    "history-type-url": "URL",
    "history-type-whatsapp": "WhatsApp",
    "history-type-instagram": "Instagram",
    "history-type-wifi": "Wi-Fi",
    "history-type-text": "Texto",

    "footer-text":
      "Hecho con ❤️ por Gabriel · Proyecto hosteado en GitHub Pages",

    "error-empty": "Completá los datos antes de generar el QR.",
    "error-invalid-url":
      "La URL no es válida. Verifica que tenga http:// o https://",
    "error-invalid-phone":
      "Introduce un número de WhatsApp válido (solo dígitos).",
    "error-logo-missing":
      "Seleccioná un logo PNG/JPG o desmarca la opción de logo.",
    "error-wifi-missing":
      "Completá el nombre de la red y la contraseña (si aplica).",

    "copy-success": "Contenido copiado al portapapeles.",
    "copy-failed": "No se pudo copiar. Copia manualmente.",
  },

  en: {
    "app-title": "QR Pro",
    "app-subtitle": "Free and fast QR code generator",

    "panel-config-title": "Configure content",
    "field-type-label": "What do you want to generate?",
    "type-option-url": "Regular link",
    "type-option-whatsapp": "WhatsApp",
    "type-option-instagram": "Instagram",
    "type-option-wifi": "Wi-Fi",
    "type-option-text": "Plain text",

    "field-url-label": "Link (URL)",
    "field-url-placeholder": "https://example.com",
    "field-url-hint": "Make sure it starts with http:// or https://",

    "field-wpp-phone-label": "WhatsApp number",
    "field-wpp-phone-placeholder": "Ex: 5950971113908",
    "field-wpp-message-label": "Message",
    "field-wpp-message-placeholder":
      "Hi, I scanned your QR and would like more info.",

    "field-ig-user-label": "Instagram username",
    "field-ig-user-placeholder": "nelson_spy",
    "field-ig-user-hint": "You don't need @ or full link.",

    "field-text-label": "Text to encode",
    "field-text-placeholder":
      "Write the text you want to store in the QR code.",

    "field-wifi-ssid-label": "Network name (SSID)",
    "field-wifi-ssid-placeholder": "MyWiFiNetwork",
    "field-wifi-security-label": "Security",
    "field-wifi-security-open": "No password",
    "field-wifi-password-label": "Password",
    "field-wifi-password-placeholder": "mypassword123",

    "panel-style-title": "QR style",
    "field-size-label": "Size",
    "field-color-label": "QR color",
    "field-bgcolor-label": "Background color",

    "field-logo-label": "Add a logo in the center",
    "field-logo-hint":
      "Square PNG/JPG is recommended. It will be centered automatically.",

    "btn-example": "Try example",
    "btn-clear": "Clear",
    "btn-generate": "Generate QR",
    "btn-download": "Download PNG",
    "btn-copy": "Copy",

    "preview-title": "Your QR code",
    "preview-subtitle":
      "Generate, test with your phone and download as PNG.",
    "preview-placeholder":
      "You haven't generated any QR codes yet. Fill the form and click “Generate QR”.",

    "history-title": "History",
    "history-hint": "Latest QR codes generated on this device.",
    "history-empty": "No QR codes generated yet.",
    "history-use": "Use",
    "history-type-url": "URL",
    "history-type-whatsapp": "WhatsApp",
    "history-type-instagram": "Instagram",
    "history-type-wifi": "Wi-Fi",
    "history-type-text": "Text",

    "footer-text":
      "Made with ❤️ by Gabriel · Project hosted on GitHub Pages",

    "error-empty": "Fill the fields before generating the QR.",
    "error-invalid-url":
      "Invalid URL. Make sure it starts with http:// or https://",
    "error-invalid-phone":
      "Enter a valid WhatsApp number (digits only).",
    "error-logo-missing":
      "Select a PNG/JPG logo or uncheck the logo option.",
    "error-wifi-missing":
      "Fill the network name and password (if required).",

    "copy-success": "Content copied to clipboard.",
    "copy-failed": "Could not copy. Please copy manually.",
  },
};

let currentLang = "es";

function t(key) {
  return i18n[currentLang][key] || key;
}

/**
 * Aplica las traducciones al DOM usando los data-i18n y data-i18n-placeholder.
 */
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

/* ========================================================================
   DOM: REFERENCIAS A ELEMENTOS
   ======================================================================== */

const typeSelect = document.getElementById("typeSelect");

const groupUrl = document.getElementById("group-url");
const groupWhatsApp = document.getElementById("group-whatsapp");
const groupInstagram = document.getElementById("group-instagram");
const groupWifi = document.getElementById("group-wifi");
const groupText = document.getElementById("group-text");

const urlInput = document.getElementById("urlInput");
const wppPhoneInput = document.getElementById("wppPhoneInput");
const wppMsgInput = document.getElementById("wppMsgInput");
const igUserInput = document.getElementById("igUserInput");
const textInput = document.getElementById("textInput");

const wifiSsidInput = document.getElementById("wifiSsidInput");
const wifiSecuritySelect = document.getElementById("wifiSecuritySelect");
const wifiPasswordInput = document.getElementById("wifiPasswordInput");
const wifiPasswordGroup = document.getElementById("wifiPasswordGroup");

const sizeSelect = document.getElementById("sizeSelect");
const colorInput = document.getElementById("colorInput");
const bgColorInput = document.getElementById("bgColorInput");
const logoCheckbox = document.getElementById("logoCheckbox");
const logoFileInput = document.getElementById("logoFileInput");
const logoPreview = document.getElementById("logoPreview");

const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const exampleBtn = document.getElementById("exampleBtn");
const errorMsg = document.getElementById("errorMsg");
const qrContainer = document.getElementById("qrcode");
const qrPlaceholder = document.getElementById("qrPlaceholder");
const downloadBtn = document.getElementById("downloadBtn");
const copyContentBtn = document.getElementById("copyContentBtn");
const qrContentText = document.getElementById("qrContentText");

const historyList = document.getElementById("historyList");

const btnLangEs = document.getElementById("btnLangEs");
const btnLangEn = document.getElementById("btnLangEn");

const themeToggle = document.getElementById("themeToggle");

let qrCode = null;
let lastQrContent = ""; // texto contenido en el último QR generado

const HISTORY_KEY = "qr_history_v1";
const THEME_KEY = "qr_theme_v1";
const LANG_KEY = "qr_lang_v1";

let logoImageDataURL = null;

/* ========================================================================
   MANEJO DE TIPO DE CONTENIDO (URL/WHATSAPP/INSTAGRAM/WIFI/TEXTO)
   ======================================================================== */

/**
 * Muestra/oculta los grupos de inputs según el tipo de QR seleccionado.
 */
function updateContentGroups() {
  const type = typeSelect.value;

  groupUrl.classList.toggle("hidden", type !== "url");
  groupWhatsApp.classList.toggle("hidden", type !== "whatsapp");
  groupInstagram.classList.toggle("hidden", type !== "instagram");
  groupWifi.classList.toggle("hidden", type !== "wifi");
  groupText.classList.toggle("hidden", type !== "text");
}

/**
 * Para redes Wi-Fi abiertas ocultamos el campo de contraseña.
 */
wifiSecuritySelect.addEventListener("change", () => {
  const sec = wifiSecuritySelect.value;
  wifiPasswordGroup.classList.toggle("hidden", sec === "nopass");
});

/* ========================================================================
   HELPERS DE VALIDACIÓN Y ERRORES
   ======================================================================== */

function isValidURL(value) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

function normalizeDigits(num) {
  return num.replace(/[^\d]/g, "");
}

function showError(messageKey) {
  errorMsg.textContent = t(messageKey);
}

function clearError() {
  errorMsg.textContent = "";
}

/**
 * Construye el contenido final que se va a codificar en el QR
 * según el tipo seleccionado.
 * Devuelve un objeto { type, content, label } o null si hay error.
 */
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
    const phone = normalizeDigits(rawPhone);
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

  if (type === "wifi") {
    const ssid = wifiSsidInput.value.trim();
    const sec = wifiSecuritySelect.value;
    const pass = wifiPasswordInput.value.trim();

    if (!ssid || (sec !== "nopass" && !pass)) {
      showError("error-wifi-missing");
      return null;
    }

    // Formato estándar Wi-Fi QR
    // WIFI:T:WPA;S:MiRed;P:Clave123;;
    const encType = sec === "nopass" ? "nopass" : sec;
    const wifiString = `WIFI:T:${encType};S:${ssid};${
      sec === "nopass" ? "" : `P:${pass};`
    };`;

    const safeLabel =
      ssid.length > 40 ? ssid.slice(0, 40) + "…" : ssid;

    return {
      type,
      content: wifiString,
      label: `Wi-Fi: ${safeLabel}`,
    };
  }

  if (type === "text") {
    const txt = textInput.value.trim();
    if (!txt) {
      showError("error-empty");
      return null;
    }
    return {
      type,
      content: txt,
      label: txt.slice(0, 60) + (txt.length > 60 ? "…" : ""),
    };
  }

  return null;
}

/* ========================================================================
   LOGO SUBIDO POR EL USUARIO (PNG/JPG)
   ======================================================================== */

/**
 * Lee el archivo seleccionado por el usuario y lo guarda como DataURL.
 * Además muestra una mini preview.
 */
function handleLogoFileChange(e) {
  const file = e.target.files[0];
  if (!file) {
    logoImageDataURL = null;
    logoPreview.classList.add("hidden");
    logoPreview.innerHTML = "";
    return;
  }

  if (!file.type.startsWith("image/")) {
    logoImageDataURL = null;
    showError("error-logo-missing");
    logoPreview.classList.add("hidden");
    logoPreview.innerHTML = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    logoImageDataURL = reader.result;

    // Preview pequeña del logo
    const img = document.createElement("img");
    img.src = logoImageDataURL;
    logoPreview.innerHTML = "";
    logoPreview.appendChild(img);
    logoPreview.classList.remove("hidden");
  };
  reader.readAsDataURL(file);
}

logoFileInput.addEventListener("change", handleLogoFileChange);

/**
 * Dibuja un rectángulo redondeado (helper para el recorte del logo).
 */
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

/**
 * Dibuja el logo del usuario en el centro del canvas del QR.
 */
function drawUserLogo(canvas, dataURL) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const size = canvas.width;
  const logoSize = size * 0.24; // porcentaje del QR
  const x = (size - logoSize) / 2;
  const y = (size - logoSize) / 2;

  const img = new Image();
  img.onload = () => {
    ctx.save();

    // Fondo blanco redondeado
    ctx.beginPath();
    const r = logoSize * 0.25;
    roundedRectPath(ctx, x, y, logoSize, logoSize, r);
    ctx.closePath();

    ctx.fillStyle = "rgba(255,255,255,0.96)";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(15,23,42,0.22)";
    ctx.stroke();

    // Recorte y dibujo del logo
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

/* ========================================================================
   GENERACIÓN DEL QR + OVERLAY DEL LOGO
   ======================================================================== */

/**
 * Renderiza el QR en el contenedor usando la librería qrcodejs.
 * Maneja tanto <canvas> como <img> y agrega el logo si corresponde.
 */
function renderQR(content) {
  clearError();
  qrContainer.innerHTML = "";
  qrContainer.classList.remove("visible");
  qrPlaceholder.classList.add("hidden");

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

    // Caso 1: la librería generó un <img>, lo convertimos a canvas.
    if (!canvas && img) {
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

        qrContainer.innerHTML = "";
        qrContainer.appendChild(tmpCanvas);
        qrContainer.classList.add("visible");
      };

      qrImg.src = img.src;
      return;
    }

    // Caso 2: directamente <canvas>
    if (canvas) {
      if (logoCheckbox.checked && logoImageDataURL) {
        drawUserLogo(canvas, logoImageDataURL);
      }
      qrContainer.classList.add("visible");
    }
  }, 80);

  downloadBtn.disabled = false;
  copyContentBtn.disabled = false;
}

/**
 * Genera el QR a partir del formulario.
 */
function generateFromForm() {
  const result = buildContentFromForm();
  if (!result) return;

  if (logoCheckbox.checked && !logoImageDataURL) {
    showError("error-logo-missing");
    return;
  }

  lastQrContent = result.content;
  qrContentText.textContent = result.label;

  renderQR(result.content);
  saveToHistory(result.type, result.label, result.content);
  renderHistory();
}

/* ========================================================================
   DESCARGAR QR + COPIAR CONTENIDO
   ======================================================================== */

/**
 * Descarga el QR como PNG, usando el canvas. Si solo hay <img>, lo convierte.
 */
function downloadQR() {
  let canvas = qrContainer.querySelector("canvas");
  const img = qrContainer.querySelector("img");

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

  if (!canvas) return;

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = `qr-${Date.now()}.png`;
  link.click();
}

/**
 * Copia el contenido codificado en el QR al portapapeles.
 */
async function copyQrContent() {
  if (!lastQrContent) return;
  try {
    await navigator.clipboard.writeText(lastQrContent);
    showError("copy-success");
  } catch {
    showError("copy-failed");
  }
}

/* ========================================================================
   LIMPIAR FORMULARIO
   ======================================================================== */

function clearAll() {
  urlInput.value = "";
  wppPhoneInput.value = "";
  wppMsgInput.value = "";
  igUserInput.value = "";
  wifiSsidInput.value = "";
  wifiSecuritySelect.value = "WPA";
  wifiPasswordInput.value = "";
  textInput.value = "";
  logoCheckbox.checked = false;
  logoFileInput.value = "";
  logoImageDataURL = null;
  logoPreview.classList.add("hidden");
  logoPreview.innerHTML = "";

  clearError();
  qrContainer.innerHTML = "";
  qrContainer.classList.remove("visible");
  qrPlaceholder.classList.remove("hidden");
  downloadBtn.disabled = true;
  copyContentBtn.disabled = true;
  qrContentText.textContent = "";
  lastQrContent = "";
}

/* ========================================================================
   EJEMPLOS RÁPIDOS
   ======================================================================== */

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
  } else if (type === "wifi") {
    wifiSsidInput.value = "MiRedWiFi";
    wifiSecuritySelect.value = "WPA";
    wifiPasswordInput.value = "clave123456";
    wifiPasswordGroup.classList.remove("hidden");
  } else if (type === "text") {
    textInput.value =
      currentLang === "es"
        ? "Este es un ejemplo de texto guardado en un código QR."
        : "This is an example text stored in a QR code.";
  }
}

/* ========================================================================
   HISTORIAL (localStorage)
   ======================================================================== */

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
    // por si el navegador bloquea localStorage
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
  const limited = history.slice(0, 10); // máximo 10 elementos
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
  if (type === "wifi") return t("history-type-wifi");
  if (type === "text") return t("history-type-text");
  return type;
}

/**
 * Renderiza la lista de historial debajo del preview.
 */
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
      lastQrContent = item.content;
      qrContentText.textContent = item.label;
      renderQR(item.content); // reaplica estilo actual, no el histórico
    });

    li.appendChild(meta);
    li.appendChild(btnUse);
    historyList.appendChild(li);
  });
}

/* ========================================================================
   IDIOMA
   ======================================================================== */

function setLanguage(lang) {
  if (lang !== "es" && lang !== "en") return;
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);

  applyTranslations();
  renderHistory(); // para actualizar textos de historial

  btnLangEs.classList.toggle("active", lang === "es");
  btnLangEn.classList.toggle("active", lang === "en");
}

/* ========================================================================
   TEMA OSCURO/CLARO
   ======================================================================== */

/**
 * Aplica el tema en el atributo data-theme del body.
 */
function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);
}

/**
 * Alterna entre dark/light y guarda en localStorage.
 */
function toggleTheme() {
  const current = document.body.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
}

/* ========================================================================
   EVENTOS
   ======================================================================== */

typeSelect.addEventListener("change", updateContentGroups);

generateBtn.addEventListener("click", generateFromForm);
clearBtn.addEventListener("click", clearAll);
downloadBtn.addEventListener("click", downloadQR);
exampleBtn.addEventListener("click", fillExample);
copyContentBtn.addEventListener("click", copyQrContent);

btnLangEs.addEventListener("click", () => setLanguage("es"));
btnLangEn.addEventListener("click", () => setLanguage("en"));

themeToggle.addEventListener("click", toggleTheme);

// Enter en inputs principales: genera QR (excepto en textarea con Shift+Enter)
[
  urlInput,
  wppPhoneInput,
  wppMsgInput,
  igUserInput,
  textInput,
  wifiSsidInput,
  wifiPasswordInput,
].forEach((el) => {
  if (!el) return;
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateFromForm();
    }
  });
});

/* ========================================================================
   INIT: SE EJECUTA AL CARGAR LA PÁGINA
   ======================================================================== */

(function init() {
  // Idioma guardado o por defecto (ES)
  const savedLang = localStorage.getItem(LANG_KEY);
  if (savedLang === "en" || savedLang === "es") {
    currentLang = savedLang;
  } else {
    currentLang = "es";
  }

  // Tema guardado o basado en preferencia del sistema
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === "dark" || savedTheme === "light") {
    applyTheme(savedTheme);
  } else {
    const prefersDark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }

  applyTranslations();
  updateContentGroups();
  renderHistory();
})();
