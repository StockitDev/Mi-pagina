const boton = document.getElementById('boton');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', () => {
  mensaje.textContent = '¡Hola, mundo!';
});
