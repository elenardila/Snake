// Obtener el elemento del cuadrado
const cuadrado = document.querySelector('.cuadrado');

// Variables para la posición del cuadrado
let x = window.innerWidth / 2 - 25; // Ajusta según el tamaño del cuadrado
let y = window.innerHeight / 2 - 25; // Ajusta según el tamaño del cuadrado

// Función para mover el cuadrado
function moverCuadrado(event) {
  const step = 10; // Cantidad de píxeles que se moverá el cuadrado

  switch (event.key) {
    case 'ArrowUp':
      y -= step;
      break;
    case 'ArrowDown':
      y += step;
      break;
    case 'ArrowLeft':
      x -= step;
      break;
    case 'ArrowRight':
      x += step;
      break;
  }

  // Actualizar la posición del cuadrado
  cuadrado.style.left = `${x}px`;
  cuadrado.style.top = `${y}px`;
}

// Añadir el evento keydown al documento
document.addEventListener('keydown', moverCuadrado);
