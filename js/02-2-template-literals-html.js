let nombre1 = "Audrey";
let edad = 32;
let actual = new Date().getFullYear();
let imagen = "audrey.png";

// Forma 1 para formar un string
let resultado1 = "Mi nombre es " + nombre1 + " y mi edad es " + edad + " años";

// Forma 2 usando template literals
let resultado2 = `Mi nombre es ${nombre1} y mi edad es ${edad} años.
Mi año de nacimiento es ${calcularNacimiento(edad)}`;

document.querySelector("body").innerHTML = `<div class="container">
<div class="imagen">
<img src="img/${imagen}"
</div>
<h1>Mi nombre es
<span class="name">${nombre1}</span></h1>
</div>
`;

// Definiendo una función que calcula el año de nacimiento basado en la edad proporcionada
function calcularNacimiento(miEdad) {
  return actual - miEdad;
}
