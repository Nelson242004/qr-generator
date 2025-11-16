const urlInput = document.getElementById("urlInput");
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const errorMsg = document.getElementById("errorMsg");
const qrContainer = document.getElementById("qrcode");
const downloadBtn = document.getElementById("downloadBtn");

let qrCode = null;

// Validar que sea una URL
function esURLValida(valor) {
  try {
    new URL(valor);
    return true;
  } catch (e) {
    return false;
  }
}

function generarQR() {
  const url = urlInput.value.trim();
  errorMsg.textContent = "";

  if (!url) {
    errorMsg.textContent = "Por favor, ingresa un enlace.";
    return;
  }

  if (!esURLValida(url)) {
    errorMsg.textContent = "La URL no es válida. Verifica que tenga http:// o https://";
    return;
  }

  // Limpiar QR anterior
  qrContainer.innerHTML = "";

  // Crear nuevo QR
  qrCode = new QRCode(qrContainer, {
    text: url,
    width: 256,
    height: 256,
    correctLevel: QRCode.CorrectLevel.H,
  });

  // Habilitar botón de descarga
  downloadBtn.disabled = false;
}

function limpiarTodo() {
  urlInput.value = "";
  qrContainer.innerHTML = "";
  errorMsg.textContent = "";
  downloadBtn.disabled = true;
}

// Descargar el QR como PNG
function descargarQR() {
  const canvas = qrContainer.querySelector("canvas");
  if (!canvas) return;

  const enlaceDescarga = document.createElement("a");
  enlaceDescarga.href = canvas.toDataURL("image/png");
  enlaceDescarga.download = "qr-" + Date.now() + ".png";
  enlaceDescarga.click();
}

// Eventos
generateBtn.addEventListener("click", generarQR);
clearBtn.addEventListener("click", limpiarTodo);
downloadBtn.addEventListener("click", descargarQR);

// Enter también genera
urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generarQR();
  }
});
