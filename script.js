const boton = document.getElementById('boton');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', () => {
  mensaje.textContent = '¡Listo! La página fue actualizada y está lista para publicarse con GitHub Pages.';
});
