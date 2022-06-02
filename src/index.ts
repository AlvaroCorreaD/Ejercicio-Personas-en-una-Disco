let arregloAleatorio: number[];
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

arregloAleatorio = setearEdades();
for (let i = 0; i < 270; i++) {
  if (arregloAleatorio[i] < 21) {
    cantidadMenores = cantidadMenores + 1;
  } else if (arregloAleatorio[i] >= 21) {
    cantidadMayores = cantidadMayores + 1;
  }
}

console.log("La cantidad total de personas menores a 21 es:", cantidadMenores);
console.log(
  "La cantidad total de personas de 21 años en adelante es:",
  cantidadMayores
);
console.log(
  "La cantidad total de personas en el local es:",
  arregloAleatorio.length
);
