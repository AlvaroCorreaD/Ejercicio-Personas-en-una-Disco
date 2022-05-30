// let arreglo: number[] = new Array(270);
// let indice: number;
// let n: number;

// function arrayAleatorio(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// for (indice = 0; indice < n; indice++) {
//   n = arrayAleatorio(18,41)
//   console.log(
//     "La cantidad de personas menores de 21 años es:",
//     arrayAleatorio(18, 21)
//   );
let arreglo: number[] = new Array(270);
let indice: number;

function arrayAleatorio() {
  return Math.floor(Math.random() * (41 - 18)) + 18;
}

for (indice = 0; indice < 270; indice++) {
  arreglo[indice] = arrayAleatorio(18, 40);
  console.log(arreglo[indice]);
}

if (indice < 21) {
  console.log("La cantidad de personas menores a 21 años es:");
}
