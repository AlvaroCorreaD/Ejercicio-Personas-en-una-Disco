let arregloAleatorio: number[] = new Array(270);
let cantidadMenores: number = 0;
let cantidadMayores: number = 0;

function setearEdades(edadMin: number = 18, edadMax: number = 40) {
  let arregloEdades: number[] = new Array(270);
  for (let i = 0; i < 270; i++) {
    arregloEdades[i] = Math.floor(
      Math.random() * (edadMax - edadMin) + edadMin
    );
  }
  return arregloEdades;
}

for (let i = 0; i < 270; i++) {
  let arregloAleatorio = setearEdades();
  if (arregloAleatorio[i] < 21) {
    cantidadMenores = cantidadMenores + 1;
  } else {
    cantidadMayores = cantidadMayores + 1;
  }
}

console.log("La cantidad total de personas menores a 21 es:", cantidadMenores);
console.log("La cantidad total de personas menores a 21 es:", cantidadMayores);
console.log(
  "La cantidad total de personas en el local es:",
  arregloAleatorio.length
);
