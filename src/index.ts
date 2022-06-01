let arregloAleatorio: number[] = new Array(270);

function setearEdades(edadMin: number = 18, edadMax: number = 40) {
  let arregloEdades: number[] = new Array(270);
  for (let i = 0; i < 270; i++) {
    arregloEdades[i] = Math.floor(
      Math.random() * (edadMax - edadMin) + edadMin
    );
  }
}

for (let i = 0; i < 270; i++) {
  let arregloAleatorio = setearEdades();
  if (i < 21) {
    setearEdades(18, 20);
    console.log(
      "La cantidad de personas menores a 21 años es:",
      arregloAleatorio
    );
  } else {
    setearEdades(21, 40);
    console.log(
      "La cantidad de personas de 21 años en adelante es:",
      arregloAleatorio
    );
  }
}

console.log(
  "La cantidad total de personas en el local es:",
  arregloAleatorio.length
);
