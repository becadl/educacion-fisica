// Mostrar u ocultar los videos por rutina
function mostrarVideos(id) {
  document.getElementById(id).classList.toggle("oculto");
}

// Generar código QR
new QRCode(document.getElementById("codigoQR"), {
  text: "https://tuusuario.github.io/educacion-fisica/", // Cambia por tu URL real
  width: 180,
  height: 180,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H
});
