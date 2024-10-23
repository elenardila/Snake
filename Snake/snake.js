// Obtener el elemento de la serpiente
let snake = document.getElementById("snake");
let contador = document.getElementById("contador");
let contenedor = document.getElementById("contenedor");

let contadorPuntos = 0;

let valorSuperior = 0;
let valorIzquierdo = 0;

let snakeWidth = 20;
let snakeHeight = 20;

// Función para generar una posición aleatoria
function posicionAleatoria() {
  const maxX = contenedor.clientWidth - 20; // la manzana es de 20x20 px
  const maxY = contenedor.clientHeight - 20;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  return { x, y };
}

// Función para mover la manzana
function moverManzana() {
  let manzana = document.getElementById("manzana");
  const { x, y } = posicionAleatoria();
  console.log(x, y);
  manzana.style.left = x + "px";
  manzana.style.top = y + "px";
  console.log(`Manzana movida a: x=${x}, y=${y}`);
}

// Función para verificar colisión
function verificarColision() {
  // 1. Obtener las dimensiones y posiciones de los elementos
  const snakeTamano = snake.getBoundingClientRect(); //método que devuelve información sobre el 
  //tamaño de un elemento y su posición
  const manzanaTamano = manzana.getBoundingClientRect();
  const contenedorTamano = contenedor.getBoundingClientRect();

  // 2. Se calculan las posiciones de la serpiente y la manzana relativas al contenedor.
  //Esto se hace restando la posición del borde izquierdo y superior del contenedor de las posiciones de
  // la serpiente y la manzana.
  const snakeIzq = snakeTamano.left - contenedorTamano.left;
  const snakeTop = snakeTamano.top - contenedorTamano.top;
  const manzanaIzq = manzanaTamano.left - contenedorTamano.left;
  const manzanaTop = manzanaTamano.top - contenedorTamano.top;

  // 3. Verificar la colisión
  let colision = false;
  const izquierdas = Math.abs (snakeIzq - manzanaIzq);
  const tops = Math.abs(snakeTop - manzanaTop);
  if(izquierdas < snake.clientWidth && tops < snake.clientHeight){
    colision = true;
  }
  return colision;
}

// Mover la manzana a una posición inicial aleatoria
moverManzana();

// Función para aumentar el tamaño de la serpiente
function aumentarTamanoSerpiente() {
  snakeWidth += 5;
  snake.style.width = snakeWidth + "px";

}

// Añadir el evento keydown al documento
document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      valorSuperior -= 20;
      snake.style.top = valorSuperior + "px";
      break;
    case "ArrowDown":
      valorSuperior += 20;
      snake.style.top = valorSuperior + "px";
      break;
    case "ArrowLeft":
      valorIzquierdo -= 20;
      snake.style.left = valorIzquierdo + "px";
      break;
    case "ArrowRight":
      valorIzquierdo += 20;
      snake.style.left = valorIzquierdo + "px";
      break;
  }
  if (verificarColision()) {
    console.log("¡Colisión detectada! Moviendo la manzana.");
    moverManzana();
    aumentarTamanoSerpiente();
    contadorPuntos += 10;
    contador.textContent = contadorPuntos;
  }
});
