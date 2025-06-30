// Generar código QR con la URL de tu página
new QRCode(document.getElementById("codigoQR"), {
  text: "https://miweb.com", // ⚠️ Cambia esta dirección por la real si la subes
  width: 180,
  height: 180,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});
